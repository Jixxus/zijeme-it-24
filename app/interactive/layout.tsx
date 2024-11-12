"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useDatabase, useDatabaseObjectData, useUser } from "reactfire";
import { ref } from "firebase/database";
import { Card } from "@/components/ui/card";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const database = useDatabase();
  const pathname = usePathname();

  const activePageRef = ref(database, "activePage");
  const { status: activePageStatus, data: activePage } =
    useDatabaseObjectData<string>(activePageRef);
  const { status: userStatus, data: user } = useUser();

  useEffect(() => {
    if (userStatus !== "loading" && user === null) {
      router.replace("/login");
    }
  }, [router, user, userStatus]);

  useEffect(() => {
    if (activePageStatus === "success") {
      const lastPartPath = pathname.split("/").pop();

      if (lastPartPath !== activePage) {
        router.replace("/interactive/" + activePage);
      }
    }
  }, [pathname, router, activePage, activePageStatus]);

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="flex flex-col pt-5 pb-10 gap-4">
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
        {children}
      </Card>
    </div>
  );
}
