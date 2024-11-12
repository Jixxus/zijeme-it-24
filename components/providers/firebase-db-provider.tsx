"use client";

import { connectDatabaseEmulator, getDatabase } from "firebase/database";
import { DatabaseProvider, useFirebaseApp } from "reactfire";

export default function FirebaseDbProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const app = useFirebaseApp();
  const database = getDatabase(app);

  if (process.env.NODE_ENV !== "production") {
    try {
      connectDatabaseEmulator(database, "192.168.0.160", 9000);
    } catch (error) {
      console.log(error);
    }
  }

  return <DatabaseProvider sdk={database}>{children}</DatabaseProvider>;
}
