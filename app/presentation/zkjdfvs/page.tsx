"use client";

import { Canvas } from "@react-three/fiber";
import { CameraControls, Grid, PerspectiveCamera } from "@react-three/drei";
import { useDatabase, useDatabaseObjectData } from "reactfire";
import { ref } from "firebase/database";
import Phone from "./phone";

export default function Presentation() {
  const database = useDatabase();
  const usersRef = ref(database, `users`);
  const { status: usersStatus, data: users } = useDatabaseObjectData<
    Record<string, { name: string; orientation: number[] | undefined }>
  >(usersRef, { idField: "id" });

  if (usersStatus !== "success" || users === null) {
    return <></>;
  }

  const usersWithOrientation = Object.entries(users)
    .filter(
      (user): user is [string, { name: string; orientation: number[] }] =>
        user[0] !== "id" && user[1].orientation != null
    )
    .map((user) => {
      const name = user[1].name;
      const orientation = user[1].orientation;

      return {
        name,
        orientation,
      };
    });

  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 20, 0]}></PerspectiveCamera>
      <Grid infiniteGrid={true} sectionColor="#059b39" />
      <CameraControls />
      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 5, 0]} />
      {usersWithOrientation.map((user, index) => (
        <Phone
          key={index}
          name={user.name}
          orientation={user.orientation}
          position={[index * 6, 0, 0]}
        ></Phone>
      ))}
    </Canvas>
  );
}
