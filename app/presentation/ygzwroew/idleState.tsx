import {
  CircleXIcon,
  HeartCrackIcon,
  LoaderCircleIcon,
  LockIcon,
  LockOpenIcon,
  PowerIcon,
  PowerOffIcon,
  ShieldXIcon,
} from "lucide-react";

export default function IdleState({
  state,
  locked,
}: {
  state: string | boolean;
  locked?: string;
}) {
  if (state === false) {
    return (
      <>
        <LoaderCircleIcon className="text-slate-600"></LoaderCircleIcon>
      </>
    );
  }

  if (state === "not_supported") {
    return (
      <>
        <HeartCrackIcon className="text-slate-600" size={28}></HeartCrackIcon>
      </>
    );
  }

  if (state === "error") {
    return (
      <>
        <CircleXIcon className="text-red-800" size={28}></CircleXIcon>
      </>
    );
  }

  if (state === "not_granted") {
    return (
      <>
        <ShieldXIcon className="text-red-800" size={28}></ShieldXIcon>
      </>
    );
  }

  return (
    <>
      {state === "active" ? (
        <PowerIcon className="text-green-800" size={28}></PowerIcon>
      ) : (
        <PowerOffIcon className="text-red-800" size={28}></PowerOffIcon>
      )}{" "}
      {locked === "locked" ? (
        <LockIcon className="text-red-800" size={28}></LockIcon>
      ) : (
        <LockOpenIcon className="text-green-800" size={28}></LockOpenIcon>
      )}
    </>
  );
}
