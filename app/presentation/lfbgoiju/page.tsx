"use client";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ref } from "firebase/database";
import { useDatabase, useDatabaseObjectData } from "reactfire";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

export default function Presentation() {
  const database = useDatabase();
  const usersRef = ref(database, `users`);
  const { status: usersStatus, data: users } = useDatabaseObjectData<
    Record<string, { year: string }>
  >(usersRef, { idField: "id" });

  if (usersStatus !== "success" || users === null) {
    return <></>;
  }

  const years = Object.entries(
    Object.entries(users)
      .filter(([key, value]) => key !== "id" && typeof value.year === "string")
      .reduce<Record<string, number>>((acc, [, value]) => {
        return {
          ...acc,
          [value.year]: (acc[value.year] || 0) + 1,
        };
      }, {})
  ).map(([name, value], index) => ({
    year: name,
    value,
    fill: `var(--chart-${index + 1})`,
  }));

  const chartConfig = {
    bc_1: {
      label: "Prvák (Bc.)",
      color: "#000000",
    },
    bc_2: {
      label: "Druhák (Bc.)",
    },
    bc_3: {
      label: "Třeťák (Bc.)",
    },
    mgr_1: {
      label: "Prvák (Mgr. / Ing.)",
    },
    mgr_2: {
      label: "Druhák (Mgr. / Ing.)",
    },
    other_1: {
      label: "Nestuduji",
    },
    other_2: {
      label: "Absolvent (Bc.)",
    },
    other_3: {
      label: "Absolvent (Mgr. / Ing.)",
    },
  } satisfies ChartConfig;

  return (
    <div className="p-10">
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart
          accessibilityLayer
          data={years}
          layout="vertical"
          margin={{
            left: 0,
          }}
        >
          <YAxis
            dataKey="year"
            type="category"
            tickLine={false}
            tickMargin={20}
            fontSize={20}
            width={250}
            axisLine={false}
            tickFormatter={(value) =>
              chartConfig[value as keyof typeof chartConfig]?.label
            }
          />
          <XAxis dataKey="value" type="number" hide />
          <Bar dataKey="value" layout="horizontal" radius={10} maxBarSize={50}>
            <LabelList
              position="center"
              className="fill-[#fff]"
              offset={12}
              fontSize={20}
            />
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}
