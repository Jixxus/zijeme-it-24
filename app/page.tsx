"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useUser } from "reactfire";

export default function Home() {
  const router = useRouter();
  const { status: userStatus, data: user } = useUser();

  useEffect(() => {
    if (userStatus !== "loading" && user === null) {
      router.replace("/login");
    }

    if (userStatus === "success" && user !== null) {
      router.replace("/interactive");
    }
  }, [router, user, userStatus]);

  return <div>Načítání...</div>;
}
