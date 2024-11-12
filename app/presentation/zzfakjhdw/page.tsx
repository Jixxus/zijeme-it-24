import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  LinkedinIcon,
  GlobeIcon,
  InstagramIcon,
  FacebookIcon,
  GithubIcon,
} from "lucide-react";
import Link from "next/link";

export default function Presentation() {
  return (
    <div className="p-4 flex flex-col w-full h-full items-center justify-center">
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
      </div>
    </div>
  );
}
