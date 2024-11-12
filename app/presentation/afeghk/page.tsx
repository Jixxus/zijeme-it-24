"use client";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ref } from "firebase/database";
import { useDatabase, useDatabaseObjectData } from "reactfire";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

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
    <div className="p-10">
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart
          accessibilityLayer
          data={technologies}
          layout="vertical"
          margin={{
            left: 0,
          }}
        >
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
          ></Bar>
          <Bar
            dataKey="b"
            stackId="a"
            radius={10}
            maxBarSize={50}
            fill="#7a82e4"
          ></Bar>
          <Bar
            dataKey="c"
            stackId="a"
            radius={10}
            maxBarSize={50}
            fill="#409d44"
          ></Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}
