"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ref } from "firebase/database";
import { DotIcon } from "lucide-react";
import { useDatabase, useDatabaseObjectData } from "reactfire";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

export default function Presentation() {
  const database = useDatabase();
  const usersRef = ref(database, `users`);
  const { status: usersStatus, data: users } = useDatabaseObjectData<
    Record<string, { technologies: Record<string, "a" | "b" | "c"> }>
  >(usersRef, { idField: "id" });

  if (usersStatus !== "success" || users === null) {
    return <></>;
  }

  const technologies = Object.entries(users)
    .filter(
      ([key, value]) => key !== "id" && typeof value.technologies === "object"
    )
    .reduce<{ technology: string; a: number; b: number; c: number }[]>(
      (acc, curr) => {
        Object.entries(curr[1].technologies).forEach(([key, value]) => {
          const item = acc.find((item) => item.technology === key);

          if (item) {
            item[value]++;
          } else {
            acc.push({
              technology: key,
              a: value === "a" ? 1 : 0,
              b: value === "b" ? 1 : 0,
              c: value === "c" ? 1 : 0,
            });
          }
        });

        return acc;
      },
      []
    );

  const chartConfig = {
    a: {
      label: "Neznám",
    },
    b: {
      label: "Znám",
    },
    c: {
      label: "Použil(a) jsem",
    },
    angular: { label: "Angular" },
    htmx: { label: "HTMX" },
    react: { label: "React" },
    svelte: { label: "Svelte" },
    jquery: { label: "jQuery" },
    vue: { label: "Vue" },
    rest: { label: "REST" },
    graphql: { label: "GraphQL" },
    nodejs: { label: "Node.js" },
    deno: { label: "Deno" },
    azure: { label: "Azure" },
    firebase: { label: "Firebase" },
    aws: { label: "AWS" },
    docker: { label: "Docker" },
    kubernetes: { label: "Kubernetes" },
    github: { label: "GitHub" },
    gitlab: { label: "GitLab" },
    bitbucket: { label: "Bitbucket" },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col w-full h-full">
      <CardHeader>
        <CardTitle>Znalost technologií</CardTitle>
        <CardDescription>
          <div className="flex gap-4">
            <div className="flex items-center">
              <DotIcon className="text-[#e26352]" size={40}></DotIcon> Neznám
            </div>
            <div className="flex items-center">
              <DotIcon className="text-[#7a82e4]" size={40}></DotIcon> Znám
            </div>
            <div className="flex items-center">
              <DotIcon className="text-[#409d44]" size={40}></DotIcon> Použil
              jsem
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex w-full h-full">
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={technologies} layout="vertical">
            <XAxis hide type="number" />
            <YAxis
              dataKey="technology"
              type="category"
              tickLine={false}
              tickMargin={20}
              fontSize={20}
              width={200}
              axisLine={false}
              tickFormatter={(value) =>
                chartConfig[value as keyof typeof chartConfig]?.label
              }
            />
            <Bar
              dataKey="a"
              stackId="a"
              radius={10}
              maxBarSize={50}
              fill="#e26352"
            >
              <LabelList
                dataKey={"a"}
                position="middle"
                className="fill-[#fff]"
                stroke="none"
                offset={0}
                fontSize={25}
                formatter={(value: number) => (value === 0 ? "" : value)}
              />
            </Bar>
            <Bar
              dataKey="b"
              stackId="a"
              radius={10}
              maxBarSize={50}
              fill="#7a82e4"
            >
              <LabelList
                dataKey={"b"}
                position="middle"
                className="fill-[#fff]"
                stroke="none"
                offset={0}
                fontSize={25}
                formatter={(value: number) => (value === 0 ? "" : value)}
              />
            </Bar>
            <Bar
              dataKey="c"
              stackId="a"
              radius={10}
              maxBarSize={50}
              fill="#409d44"
            >
              <LabelList
                dataKey={"c"}
                position="middle"
                className="fill-[#fff]"
                stroke="none"
                offset={0}
                fontSize={25}
                formatter={(value: number) => (value === 0 ? "" : value)}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
