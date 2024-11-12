"use client";

import { Button } from "@/components/ui/button";
import useIdleDetection from "@/lib/hooks/useIdleDetection";
import { ref, set } from "firebase/database";
import { useEffect } from "react";
import { useDatabase, useUser } from "reactfire";

export default function Interactive() {
  const database = useDatabase();
  const { data: user } = useUser();
  const [idleState, requestPermission] = useIdleDetection();
  const userIdleRef = ref(database, `users/${user?.uid}/idle`);

  useEffect(() => {
    if (user !== null) {
      set(userIdleRef, idleState);
    }
  }, [user, userIdleRef, idleState]);

  if (idleState === "not_initialized") {
    return (
      <div className="p-4 flex justify-center">
        <Button onClick={requestPermission}>Spustit</Button>
      </div>
    );
  }

  if (idleState === "not_supported") {
    return <div>API není podporováno.</div>;
  }

  return <div className="p-4 flex justify-center">{idleState}</div>;
}
