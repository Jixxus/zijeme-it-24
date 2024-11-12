"use client";

import { ref } from "firebase/database";
import { useDatabase, useDatabaseObjectData } from "reactfire";
import IdleState from "./idleState";

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
  );
}
