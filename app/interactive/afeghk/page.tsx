"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useDatabase, useDatabaseObjectData, useUser } from "reactfire";
import { ref, set } from "firebase/database";

const categories: Record<string, string> = {
  angular: "Angular",
  htmx: "HTMX",
  react: "React",
  svelte: "Svelte",
  jquery: "jQuery",
  vue: "Vue",
  rest: "REST",
  graphql: "GraphQL",
  nodejs: "Node.js",
  deno: "Deno",
  azure: "Azure",
  firebase: "Firebase",
  aws: "AWS",
  docker: "Docker",
  kubernetes: "Kubernetes",
  github: "GitHub",
  gitlab: "GitLab",
  bitbucket: "Bitbucket",
};

const FormSchema = z.object(
  Object.keys(categories).reduce((acc, key) => {
    acc[key] = z.enum(["a", "b", "c"], { required_error: "Chybí volba." });
    return acc;
  }, {} as Record<string, z.ZodEnum<["a", "b", "c"]>>)
);

export default function Interactive() {
  const database = useDatabase();
  const { status: userStatus, data: user } = useUser();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const userTechnologiesRef = ref(database, `users/${user?.uid}/technologies`);
  const { status: userTechnologiesStatus, data: userTechnologies } =
    useDatabaseObjectData<string>(userTechnologiesRef);

  if (
    userStatus === "loading" ||
    userTechnologiesStatus === "loading" ||
    user === null
  ) {
    return <div className="p-4">Načítání...</div>;
  }

  if (userTechnologies !== null) {
    return <div className="p-4">Prozatím sledujte přednášku.</div>;
  }

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await set(userTechnologiesRef, data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="m-2 pr-6 w-full space-y-3"
      >
        {Object.keys(categories).map((key) => (
          <FormField
            key={key}
            control={form.control}
            name={key}
            defaultValue={"a"}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{categories[field.name]}</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={"a"}
                    className="flex justify-between w-full"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={"a"} />
                      </FormControl>
                      <FormLabel className="font-normal">Neznám</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={"b"} />
                      </FormControl>
                      <FormLabel className="font-normal">Znám</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value={"c"} />
                      </FormControl>
                      <FormLabel className="font-normal">
                        Použil(a) jsem
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button type="submit">Potvrdit</Button>
      </form>
    </Form>
  );
}
