import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { WidgetHeader } from "../../molecules/WidgetHeader";
import {
  ChartContainer,
  EditModal,
  EditForm,
  EditInput,
  EditButton,
} from "./styles";

type DataItem = {
  name: string;
  uv: number;
  pv: number;
  amt: number;
};

const initialData: DataItem[] = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 1398, amt: 2210 },
];

type LineChartWidgetProps = {
  onRemove: () => void;
};

export const LineChartWidget: React.FC<LineChartWidgetProps> = ({
  onRemove,
}) => {
  const [data, setData] = useState<DataItem[]>(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState<DataItem[]>([...initialData]);

  const handleEditSave = () => {
    setData(editedData);
    setIsEditing(false);
  };

  const handleInputChange = (
    index: number,
    field: keyof DataItem,
    value: string
  ) => {
    const updatedData = [...editedData];
    if (field === "name") {
      updatedData[index][field] = value; // For 'name', assign a string
    } else {
      updatedData[index][field] = parseInt(value, 10); // For 'uv', 'pv', 'amt', assign a number
    }
    setEditedData(updatedData);
  };

  return (
    <ChartContainer>
      <WidgetHeader
        title="Line Chart"
        onEdit={() => setIsEditing(true)}
        onRemove={onRemove}
      />
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
      {isEditing && (
        <EditModal>
          <EditForm>
            {editedData.map((entry, index) => (
              <div key={index}>
                <label>
                  Name:
                  <EditInput
                    value={entry.name}
                    onChange={(e) =>
                      handleInputChange(index, "name", e.target.value)
                    }
                  />
                </label>
                <label>
                  UV:
                  <EditInput
                    type="number"
                    value={entry.uv}
                    onChange={(e) =>
                      handleInputChange(index, "uv", e.target.value)
                    }
                  />
                </label>
              </div>
            ))}
            <EditButton onClick={handleEditSave}>Save</EditButton>
            <EditButton onClick={() => setIsEditing(false)}>Cancel</EditButton>
          </EditForm>
        </EditModal>
      )}
    </ChartContainer>
  );
};
