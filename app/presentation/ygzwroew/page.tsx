"use client";

import { ref } from "firebase/database";
import { useDatabase, useDatabaseObjectData } from "reactfire";
import IdleState from "./idleState";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  CircleXIcon,
  DotIcon,
  HeartCrackIcon,
  LoaderCircleIcon,
  LockIcon,
  LockOpenIcon,
  PowerIcon,
  PowerOffIcon,
  ShieldXIcon,
} from "lucide-react";

export default function Presentation() {
  const database = useDatabase();
  const usersRef = ref(database, `users`);
  const { status: usersStatus, data: users } = useDatabaseObjectData<
    Record<string, { name: string; idle: string | boolean }>
  >(usersRef, { idField: "id" });

  if (usersStatus !== "success" || users === null) {
    return <></>;
  }

  const usersWithIdle = Object.entries(users)
    .filter(([key, value]) => key !== "id" && value.idle != null)
    .map((user) => {
      const name = user[1].name;

      if (typeof user[1].idle === "string") {
        const [state, locked] = user[1].idle.split(",");

        return {
          name,
          state,
          locked,
        };
      }

      return {
        name,
        state: false,
      };
    });

  return (
    <Card className="flex flex-col w-full h-full">
      <CardHeader>
        <CardTitle>Stav zařízení</CardTitle>
        <CardDescription>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <LoaderCircleIcon
                className="text-slate-600"
                size={20}
              ></LoaderCircleIcon>{" "}
              Čeká na aktivaci
            </div>
            <div className="flex items-center gap-2">
              <HeartCrackIcon
                className="text-slate-600"
                size={20}
              ></HeartCrackIcon>{" "}
              Není podporováno
            </div>
            <div className="flex items-center gap-2">
              <CircleXIcon className="text-red-800" size={20}></CircleXIcon>{" "}
              Chyba
            </div>
            <div className="flex items-center gap-2">
              <ShieldXIcon className="text-red-800" size={20}></ShieldXIcon>{" "}
              Chybí oprávnění
            </div>
            <div className="flex items-center gap-2">
              <PowerIcon className="text-green-800" size={20}></PowerIcon>{" "}
              Aktivní
            </div>
            <div className="flex items-center gap-2">
              <PowerOffIcon className="text-red-800" size={20}></PowerOffIcon>{" "}
              Neaktivní
            </div>
            <div className="flex items-center gap-2">
              <LockOpenIcon className="text-green-800" size={20}></LockOpenIcon>{" "}
              Odemčeno
            </div>
            <div className="flex items-center gap-2">
              <LockIcon className="text-red-800" size={20}></LockIcon> Zamčeno
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex w-full h-full">
        <div className="w-full h-full flex flex-wrap flex-col justify-center items-center gap-4 text-3xl">
          {usersWithIdle.map((user, index) => (
            <div key={index} className="flex items-center gap-2">
              {user.name + " - "}
              <IdleState
                key={index}
                state={user.state}
                locked={user.locked}
              ></IdleState>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
