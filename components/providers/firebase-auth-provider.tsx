"use client";

import { connectAuthEmulator, getAuth } from "firebase/auth";
import { AuthProvider, useFirebaseApp } from "reactfire";

export default function FirebaseAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  if (process.env.NODE_ENV !== "production") {
    try {
      connectAuthEmulator(auth, "http://192.168.0.160:9099");
    } catch (error) {
      console.log(error);
    }
  }

  return <AuthProvider sdk={auth}>{children}</AuthProvider>;
}
