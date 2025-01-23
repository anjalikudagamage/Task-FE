import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { WidgetHeader } from "../../molecules/WidgetHeader";
import { ChartContainer } from "./styles";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 1398, amt: 2210 },
];

type LineChartWidgetProps = {
  onEdit: () => void;
  onRemove: () => void;
};

export const LineChartWidget: React.FC<LineChartWidgetProps> = ({
  onEdit,
  onRemove,
}) => (
  <ChartContainer>
    <WidgetHeader title="Line Chart" onEdit={onEdit} onRemove={onRemove} />
    <LineChart width={350} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis dataKey="name" tick={{ fill: "#6b6b6b" }} />
      <YAxis tick={{ fill: "#6b6b6b" }} />
      <Tooltip
        contentStyle={{
          backgroundColor: "#ffffff",
          border: "1px solid #e0e0e0",
        }}
        itemStyle={{ color: "#333" }}
      />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" strokeWidth={2} />
    </LineChart>
  </ChartContainer>
);
