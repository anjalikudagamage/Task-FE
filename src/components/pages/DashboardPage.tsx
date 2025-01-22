import React, { useState, useEffect } from "react";
import DashboardGrid from "../organisms/DashboardGrid";
import Button from "../atoms/Button";
import { Widget } from "../../constants/types/WidgetTypes";
import { Layout } from "react-grid-layout";

const DashboardPage: React.FC = () => {
  const [widgets, setWidgets] = useState<Widget[]>(() => {
    const savedWidgets = localStorage.getItem("dashboard-widgets");
    return savedWidgets ? JSON.parse(savedWidgets) : [];
  });

  useEffect(() => {
    localStorage.setItem("dashboard-widgets", JSON.stringify(widgets));
  }, [widgets]);

  const addWidget = (type: "text" | "chart" | "list") => {
    const newWidget: Widget = {
      id: Date.now().toString(),
      type,
      content:
        type === "text"
          ? "New Widget"
          : type === "list"
          ? ["Item 1", "Item 2"]
          : "",
      layout: { i: Date.now().toString(), x: 0, y: 0, w: 3, h: 2 },
    };
    setWidgets([...widgets, newWidget]);
  };

  const removeWidget = (id: string) => {
    setWidgets(widgets.filter((widget) => widget.id !== id));
  };

  const handleLayoutChange = (layout: Layout[]) => {
    const updatedWidgets = widgets.map((widget) => {
      const updatedLayout = layout.find((l) => l.i === widget.id);
      if (updatedLayout) {
        return { ...widget, layout: updatedLayout };
      }
      return widget;
    });
    setWidgets(updatedWidgets);
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Dynamic Dashboard</h1>
      <div style={{ marginBottom: "1rem" }}>
        <Button onClick={() => addWidget("text")}>Add Text Widget</Button>
        <Button onClick={() => addWidget("chart")}>Add Chart Widget</Button>
        <Button onClick={() => addWidget("list")}>Add List Widget</Button>
      </div>
      <DashboardGrid
        widgets={widgets}
        onRemoveWidget={removeWidget}
        onLayoutChange={handleLayoutChange}
      />
    </div>
  );
};

export default DashboardPage;
