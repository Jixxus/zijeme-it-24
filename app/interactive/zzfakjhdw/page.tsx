"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { GoogleAuthProvider, linkWithPopup } from "firebase/auth";
import {
  CheckIcon,
  FacebookIcon,
  GithubIcon,
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "reactfire";

export default function Interactive() {
  const auth = useAuth();

  async function connectWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/userinfo.email");

    if (auth.currentUser) {
      await linkWithPopup(auth.currentUser, provider);
    }
  }

  return (
    <div className="p-4 flex flex-col w-full items-center justify-center gap-4">
      <div className="flex gap-4">
        <Link href="https://github.com/Jixxus/zijeme-it-24" target="_blank">
          <Button variant="outline">
            <GithubIcon></GithubIcon>
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/in/jiří-zvěřina-bb0180110"
          target="_blank"
        >
          <Button variant="outline">
            <LinkedinIcon></LinkedinIcon>
          </Button>
        </Link>
      </div>
      <div className="text-xl">Jiří Zvěřina | Full-Stack Developer</div>
      <Separator></Separator>
      <div className="flex gap-4">
        <Link href="https://www.sewio.net/" target="_blank">
          <Button variant="outline">
            <GlobeIcon></GlobeIcon>
          </Button>
        </Link>
        <Link
          href="https://www.linkedin.com/company/sewio-networks-s-r-o-/"
          target="_blank"
        >
          <Button variant="outline">
            <LinkedinIcon></LinkedinIcon>
          </Button>
        </Link>
        <Link href="https://www.instagram.com/sewiolife/" target="_blank">
          <Button variant="outline">
            <InstagramIcon></InstagramIcon>
          </Button>
        </Link>
        <Link href="https://www.facebook.com/SewioNetworks" target="_blank">
          <Button variant="outline">
            <FacebookIcon></FacebookIcon>
          </Button>
        </Link>
      </div>
      <div className="text-xl">Sewio Networks s.r.o.</div>
      <Separator></Separator>
      <Button
        onClick={connectWithGoogle}
        disabled={auth.currentUser?.email != null}
      >
        {auth.currentUser?.email != null ? (
          <CheckIcon></CheckIcon>
        ) : (
          <>Připojit Google Účet</>
        )}
      </Button>
    </div>
  );
}
