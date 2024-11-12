import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Object3D, Quaternion, Vector3 } from "three";
import { useSpring } from "react-spring";

export default function Phone({
  name,
  orientation,
  position,
}: {
  name: string;
  orientation: number[];
  position: [number, number, number];
}) {
  const mesh = useRef<Object3D>();
  const step = useSpring({
    from: { t: 0 },
    to: { t: 1 },
    reset: true,
    config: {
      duration: 1000,
    },
  });
  const [destQuaternion, setDest] = useState(new Quaternion(0, 0, 0, 1));

  useEffect(() => {
    if (mesh != null && mesh.current != null) {
      setDest(new Quaternion().fromArray(orientation).invert());
    }
  }, [mesh, orientation]);

  useFrame(() => {
    if (mesh != null && mesh.current != null) {
      mesh.current.quaternion.slerp(destQuaternion, step.t.get());
    }
  });

  return (
    <group
      rotation={[Math.PI / 2, 0, 0]}
      position={new Vector3(position[0], position[1], position[2])}
    >
      <Html as="div" position={[0, 0, 2]}>
        <h1 className="-translate-x-1/2 bg-slate-500 py-2 px-4 rounded-xl text-white">
          {name}
        </h1>
      </Html>
      <mesh ref={mesh}>
        <boxGeometry args={[1.6, 3.8, 0.1]} />
        <meshStandardMaterial color="#666666" />
      </mesh>
    </group>
  );
}
