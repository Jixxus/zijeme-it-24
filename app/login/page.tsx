"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInAnonymously } from "firebase/auth";
import { ref, set } from "firebase/database";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth, useDatabase, useUser } from "reactfire";
import Image from "next/image";
import { z } from "zod";
import { getParser } from "bowser";

const loginSchema = z.object({
  name: z
    .string()
    .min(3, "Přezdívka musí být alespoň 3 znaky dlouhé.")
    .max(20, "Přezdívka musí mít maximálně 20 znaků."),
});

export default function Login() {
  const router = useRouter();
  const database = useDatabase();
  const user = useUser();
  const auth = useAuth();
  const [signingIn, setSigningIn] = useState(false);

  const loginForm = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setSigningIn(true);
    const signedUser = await signInAnonymously(auth);
    const userNameRef = ref(database, "users/" + signedUser.user.uid + "/name");

    await set(userNameRef, values.name);
    const parser = getParser(window.navigator.userAgent);
    const userBrowserRef = ref(
      database,
      "users/" + signedUser.user.uid + "/browser"
    );
    await set(userBrowserRef, parser.getBrowser().name);
    const userSystemRef = ref(
      database,
      "users/" + signedUser.user.uid + "/system"
    );
    await set(userSystemRef, parser.getOS().name);
    setSigningIn(false);
  }

  useEffect(() => {
    if (
      user.status === "success" &&
      user.data !== null &&
      signingIn === false
    ) {
      router.replace("/interactive");
    }
  }, [router, user, signingIn]);

  if (user.status === "loading") {
    return <div className="mb-[92px]">Loading...</div>;
  }

  return (
    <div className="w-full h-full flex flex-col items-center ">
      <div className="flex flex-col pt-20 pb-10 gap-4">
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
        <Form {...loginForm}>
          <form autoComplete="off" onSubmit={loginForm.handleSubmit(onSubmit)}>
            <CardContent className="pt-6">
              <FormField
                control={loginForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zvolte si přezdívku:</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>
                      Přezdívku můžou vidět ostatní!
                    </FormDescription>
                  </FormItem>
                )}
              ></FormField>
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit">
                Potvrdit
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
