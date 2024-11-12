"use client";

import useOrientation from "@/lib/hooks/useOrientation";
import { useDatabase, useUser } from "reactfire";
import { useEffect } from "react";
import { ref, set } from "firebase/database";

export default function Interactive() {
  const database = useDatabase();
  const { data: user } = useUser();
  const orientation = useOrientation();
  const userOrientationRef = ref(database, `users/${user?.uid}/orientation`);

  useEffect(() => {
    if (user !== null && orientation !== null) {
      set(userOrientationRef, orientation);
    }
  }, [user, orientation]);

  if (orientation === null) {
    return <div className="p-4">API není dostupné.</div>;
  }

  return <div className="p-4">Sledujte orientaci telefonu na prezentaci.</div>;

  return <div className="w-full h-full"></div>;
}
