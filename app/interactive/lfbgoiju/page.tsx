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

const categories = [
  {
    id: "bc",
    name: "Bakalářské studium",
    options: [
      {
        id: "1",
        name: "Prvák",
      },
      {
        id: "2",
        name: "Druhák",
      },
      {
        id: "3",
        name: "Třeťák",
      },
    ],
  },
  {
    id: "mgr",
    name: "Magisterské studium",
    options: [
      {
        id: "1",
        name: "Prvák",
      },
      {
        id: "2",
        name: "Druhák",
      },
    ],
  },
  {
    id: "other",
    name: "Ostatní",
    options: [
      {
        id: "1",
        name: "Nestuduji",
      },
      { id: "2", name: "Absolvent (Bc.)" },
      { id: "3", name: "Absolvent (Ing. / Mgr. / jiné)" },
    ],
  },
];

const options = categories.flatMap((category) =>
  category.options.map((option) => `${category.id}_${option.id}`)
);

const FormSchema = z.object({
  type: z.enum(options as [string, ...string[]], {
    required_error: "Musíte něco zvolit.",
  }),
});

export default function Interactive() {
  const database = useDatabase();
  const { status: userStatus, data: user } = useUser();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const userYearRef = ref(database, `users/${user?.uid}/year`);
  const { status: userYearStatus, data: userYear } =
    useDatabaseObjectData<string>(userYearRef);

  if (
    userStatus === "loading" ||
    userYearStatus === "loading" ||
    user === null
  ) {
    return <div className="p-4">Načítání...</div>;
  }

  if (userYear !== null) {
    return <div className="p-4">Prozatím sledujte přednášku.</div>;
  }

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await set(userYearRef, data.type);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="m-2 w-2/3 space-y-6"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ve kterém jste ročníku?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  {categories.map((category) => (
                    <>
                      <div className="text-xs">{category.name}</div>
                      {category.options.map((option) => (
                        <FormItem
                          key={`${category.id}_${option.id}`}
                          className="flex items-center space-x-3 space-y-0"
                        >
                          <FormControl>
                            <RadioGroupItem
                              value={`${category.id}_${option.id}`}
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            {option.name}
                          </FormLabel>
                        </FormItem>
                      ))}
                    </>
                  ))}
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Potvrdit</Button>
      </form>
    </Form>
  );
}
