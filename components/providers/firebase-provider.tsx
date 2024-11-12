"use client";

import { FirebaseAppProvider } from "reactfire";
import FirebaseDbProvider from "./firebase-db-provider";
import FirebaseAuthProvider from "./firebase-auth-provider";

export default function FirebaseProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const firebaseConfig = {
    apiKey: "AIzaSyArB6BKVvpX3D6qCqoHsb7ruTr5yExld_M",
    authDomain: "zijeme-it-24.firebaseapp.com",
    databaseURL:
      "https://zijeme-it-24-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "zijeme-it-24",
    storageBucket: "zijeme-it-24.firebasestorage.app",
    messagingSenderId: "128575904735",
    appId: "1:128575904735:web:0c573f26aae3d2486e426a",
    measurementId: "G-2CBWSRVJVH",
  };

  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirebaseDbProvider>
        <FirebaseAuthProvider>{children}</FirebaseAuthProvider>
      </FirebaseDbProvider>
    </FirebaseAppProvider>
  );
}
