"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth, useUser } from "reactfire";
import Image from "next/image";

export default function Login() {
  const router = useRouter();
  const user = useUser();
  const auth = useAuth();

  async function signIn() {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/userinfo.email");

    signInWithPopup(auth, provider);
  }

  useEffect(() => {
    if (user.status === "success" && user.data !== null) {
      router.replace("/presentation");
    }
  }, [router, user]);

  if (user.status === "loading") {
    return <div className="mb-[92px]">Loading...</div>;
  }

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="flex flex-col pt-20 pb-10 gap-4">
        <Image
          src="https://backend.sewio.net/storage/app/media/brand/Logotypes/sewio-hid-logo-color-safe-zone-rgb.svg"
          width={200}
          height={200}
          alt="Sewio Logo"
        ></Image>
        <Image
          src="https://www.zijemeit.cz/images/zijemeit.svg"
          width={200}
          height={200}
          alt="ŽijemeIT Logo"
        ></Image>
      </div>
      <Card
        className="mb-[92px] p-2 !bg-center !bg-cover max-w-[400px] w-[90%]"
        style={{ background: "var(--gradient)" }}
      >
        <Button className="w-full" onClick={signIn}>
          Přihlásit se
        </Button>
      </Card>
    </div>
  );
}
