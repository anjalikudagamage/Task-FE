import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { WidgetHeader } from "../molecules/WidgetHeader";

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
  <div className="widget line-chart-widget">
    <WidgetHeader title="Line Chart" onEdit={onEdit} onRemove={onRemove} />
    <LineChart width={300} height={200} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  </div>
);
