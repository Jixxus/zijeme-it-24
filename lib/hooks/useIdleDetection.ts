import { useEffect, useState } from "react";

const useIdleDetection = (): [
  "error" | "not_initialized" | "not_granted" | "not_supported" | string,
  () => void
] => {
  const [idleState, setIdleState] = useState<
    "error" | "not_initialized" | "not_granted" | "not_supported" | string
  >("not_initialized");

  useEffect(() => {
    if (!("IdleDetector" in window)) {
      setIdleState("not_supported");
    }
  }, []);

  const requestPermission = async () => {
    if ((await IdleDetector.requestPermission()) !== "granted") {
      setIdleState("not_granted");
      return;
    }

    try {
      const idleDetector = new IdleDetector();

      idleDetector.addEventListener("change", () => {
        const userState = idleDetector.userState;
        const screenState = idleDetector.screenState;
        setIdleState(userState + "," + screenState);
      });

      idleDetector.start({
        threhsold: 10000,
      });
    } catch (error) {
      console.error(error);
      setIdleState("error");
      return;
    }
  };

  return [idleState, requestPermission];
};

export default useIdleDetection;
