"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ref, set } from "firebase/database";
import { usePathname, useRouter } from "next/navigation";
import { useDatabase, useDatabaseObjectData } from "reactfire";

export default function Layout({ children }: { children: React.ReactNode }) {
  const PAGE_ORDER = [
    "fsefghe",
    "lfbgoiju",
    "afeghk",
    "ygzwroew",
    "zkjdfvs",
    "zzfakjhdw",
  ];
  const router = useRouter();
  const database = useDatabase();
  const pathname = usePathname();
  const activePageRef = ref(database, "activePage");
  const { status: activePageStatus, data: activePage } =
    useDatabaseObjectData<string>(activePageRef);

  useEffect(() => {
    if (activePageStatus !== "loading") {
      const lastPartPath = pathname.split("/").pop();

      if (lastPartPath !== activePage) {
        router.replace("/presentation/" + activePage);
      }
    }
  }, [pathname, router, activePage, activePageStatus]);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex w-full justify-between items-center p-4 pr-10">
        <Image
          src="https://backend.sewio.net/storage/app/media/brand/Logotypes/sewio-hid-logo-color-safe-zone-rgb.svg"
          width={200}
          height={200}
          alt="Sewio Logo"
        ></Image>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            disabled={PAGE_ORDER.findIndex((page) => page === activePage) === 0}
            onClick={async () => {
              const index = PAGE_ORDER.findIndex((page) => page === activePage);
              await set(activePageRef, PAGE_ORDER[index - 1]);
            }}
          >
            <ChevronLeft></ChevronLeft>
          </Button>
          <Button
            variant="outline"
            size="icon"
            disabled={
              PAGE_ORDER.findIndex((page) => page === activePage) ===
              PAGE_ORDER.length - 1
            }
            onClick={async () => {
              const index = PAGE_ORDER.findIndex((page) => page === activePage);
              await set(activePageRef, PAGE_ORDER[index + 1]);
            }}
          >
            <ChevronRight></ChevronRight>
          </Button>
        </div>
        <Image
          src="https://www.zijemeit.cz/images/zijemeit.svg"
          width={200}
          height={200}
          alt="ŽijemeIT Logo"
        ></Image>
      </div>
      <div className="flex h-full w-full p-4">{children}</div>
    </div>
  );
}
