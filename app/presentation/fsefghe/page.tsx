"use client";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { ref } from "firebase/database";
import { useDatabase, useDatabaseObjectData } from "reactfire";
import { LabelList, Pie, PieChart } from "recharts";
import { QRCodeCanvas } from "qrcode.react";

export default function Presentation() {
  const database = useDatabase();
  const usersRef = ref(database, `users`);
  const { status: usersStatus, data: users } = useDatabaseObjectData<
    Record<string, { browser: string; system: string }>
  >(usersRef, { idField: "id" });

  if (usersStatus !== "success" || users === null) {
    return (
      <div className="flex w-full h-full justify-center items-center">
        <QRCodeCanvas
          value="https://zijeme-it-24.web.app"
          size={500}
          className="w-full"
        />
      </div>
    );
  }

  const browsers = Object.entries(
    Object.entries(users)
      .filter(
        ([key, value]) => key !== "id" && typeof value.browser === "string"
      )
      .reduce<Record<string, number>>((acc, [, value]) => {
        return {
          ...acc,
          [value.browser]: (acc[value.browser] || 0) + 1,
        };
      }, {})
  ).map(([name, value], index) => ({
    browser: name,
    value,
    fill: `var(--chart-${index + 1})`,
  }));

  const systems = Object.entries(
    Object.entries(users)
      .filter(
        ([key, value]) => key !== "id" && typeof value.system === "string"
      )
      .reduce<Record<string, number>>((acc, [, value]) => {
        return {
          ...acc,
          [value.system]: (acc[value.system] || 0) + 1,
        };
      }, {})
  ).map(([name, value], index) => ({
    system: name,
    value,
    fill: `var(--chart-${index + 1})`,
  }));

  const chartConfig = {} satisfies ChartConfig;
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }: {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x + 25}
        y={y + 40}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={25}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="flex w-full h-full">
      <div className="flex w-1/2 h-full justify-center items-center">
        <QRCodeCanvas
          value="https://zijeme-it-24.web.app/"
          size={500}
          className="w-full"
        />
      </div>
      <div className="flex flex-col w-1/2 p-10">
        <ChartContainer config={chartConfig} className="w-full h-1/2">
          <PieChart>
            <Pie
              data={browsers}
              dataKey="value"
              nameKey="browser"
              innerRadius={0}
              strokeWidth={5}
              labelLine={false}
              label={renderCustomizedLabel}
            >
              <LabelList
                dataKey={"browser"}
                position="middle"
                className="fill-[#fff]"
                stroke="none"
                offset={0}
                fontSize={25}
                formatter={(value: keyof typeof chartConfig) => value}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
        <ChartContainer config={chartConfig} className="w-full h-1/2">
          <PieChart>
            <Pie
              data={systems}
              dataKey="value"
              nameKey="system"
              innerRadius={0}
              strokeWidth={5}
              labelLine={false}
              label={renderCustomizedLabel}
            >
              <LabelList
                dataKey={"system"}
                position="middle"
                className="fill-[#fff]"
                stroke="none"
                offset={0}
                fontSize={25}
                formatter={(value: keyof typeof chartConfig) => value}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
}
