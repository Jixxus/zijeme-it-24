import { useEffect, useState } from "react";

const useOrientation = (): number[] | null => {
  const [orientation, setOrientation] = useState<number[] | null>(null);

  useEffect(() => {
    try {
      const orientation = new AbsoluteOrientationSensor({
        frequency: 1,
      });

      orientation.addEventListener("reading", () => {
        setOrientation(orientation.quaternion);
      });

      orientation.start();
    } catch (error) {
      console.error(error);
    }
  }, []);

  return orientation;
};

export default useOrientation;
