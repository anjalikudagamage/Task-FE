import React, { useState } from "react";
import GridLayout from "react-grid-layout";

import { LineChartWidget } from "../organisms/LineChartWidget";
import { TextBoxWidget } from "../organisms/TextBoxWidget";

const DashboardGrid = () => {
  // Initial state with layout configuration
  const [widgets, setWidgets] = useState([
    { id: "lineChart", type: "lineChart", x: 0, y: 0, w: 2, h: 2 },
    { id: "textBox", type: "textBox", x: 2, y: 0, w: 2, h: 2 },
  ]);

  // Add a new widget
  const addWidget = (type: string) => {
    const newWidget = {
      id: `${type}-${Date.now()}`,
      type,
      x: 0,
      y: 0,
      w: 2,
      h: 2,
    };
    setWidgets([...widgets, newWidget]);
  };

  // Remove a widget
  const removeWidget = (id: string) => {
    setWidgets((prevWidgets) =>
      prevWidgets.filter((widget) => widget.id !== id)
    );
  };

  return (
    <div>
      <button onClick={() => addWidget("lineChart")}>Add Line Chart</button>
      <button onClick={() => addWidget("textBox")}>Add Text Box</button>

      <GridLayout
        className="layout"
        layout={widgets.map((widget) => ({
          i: widget.id,
          x: widget.x,
          y: widget.y,
          w: widget.w,
          h: widget.h,
        }))}
        cols={4}
        rowHeight={30}
        width={1200}
        key={widgets.length} // Force re-render when the widgets array changes
      >
        {widgets.map((widget) => (
          <div key={widget.id}>
            {widget.type === "lineChart" && (
              <LineChartWidget
                onEdit={() => {}}
                onRemove={() => removeWidget(widget.id)}
              />
            )}
            {widget.type === "textBox" && (
              <TextBoxWidget
                onEdit={() => {}}
                onRemove={() => removeWidget(widget.id)}
              />
            )}
          </div>
        ))}
      </GridLayout>
    </div>
  );
};

export default DashboardGrid;
