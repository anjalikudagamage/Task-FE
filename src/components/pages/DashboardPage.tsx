import React, { useState } from "react";
import GridLayout, { Layout } from "react-grid-layout";

import { LineChartWidget } from "../organisms/LineChartWidget";
import { TextBoxWidget } from "../organisms/TextBoxWidget";
import { ItemListWidget } from "../organisms/ItemListWidget";
import { ImageWidget } from "../organisms/ImageWidget";
import { Navbar } from "../organisms/Navbar";

type WidgetType =
  | "LineChartWidget"
  | "TextBoxWidget"
  | "ItemListWidget"
  | "ImageWidget";

interface Widget {
  id: string;
  type: WidgetType;
}

const DashboardPage: React.FC = () => {
  const [widgets, setWidgets] = useState<Widget[]>([
    { id: "lineChart", type: "LineChartWidget" },
    { id: "textBox", type: "TextBoxWidget" },
    { id: "itemList", type: "ItemListWidget" },
    { id: "image", type: "ImageWidget" },
  ]);

  const [layout, setLayout] = useState<Layout[]>([
    { i: "lineChart", x: 0, y: 0, w: 2, h: 2 },
    { i: "textBox", x: 2, y: 0, w: 2, h: 2 },
    { i: "itemList", x: 0, y: 2, w: 2, h: 2 },
    { i: "image", x: 2, y: 2, w: 2, h: 2 },
  ]);

  const addWidget = (widgetType: WidgetType): void => {
    const newWidgetId = `widget_${widgets.length}`;
    setWidgets([...widgets, { id: newWidgetId, type: widgetType }]);
    setLayout([
      ...layout,
      { i: newWidgetId, x: 0, y: Infinity, w: 2, h: 2 }, // Add at the next available space
    ]);
  };

  const removeWidget = (id: string): void => {
    setWidgets(widgets.filter((widget) => widget.id !== id));
    setLayout(layout.filter((l) => l.i !== id));
  };

  const renderWidget = (widget: Widget): JSX.Element | null => {
    switch (widget.type) {
      case "LineChartWidget":
        return (
          <LineChartWidget
            onEdit={() => {}}
            onRemove={() => removeWidget(widget.id)}
          />
        );
      case "TextBoxWidget":
        return (
          <TextBoxWidget
            onEdit={() => {}}
            onRemove={() => removeWidget(widget.id)}
          />
        );
      case "ItemListWidget":
        return (
          <ItemListWidget
            onEdit={() => {}}
            onRemove={() => removeWidget(widget.id)}
          />
        );
      case "ImageWidget":
        return (
          <ImageWidget
            onEdit={() => {}}
            onRemove={() => removeWidget(widget.id)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar addWidget={addWidget} />{" "}
      {/* Pass the actual `addWidget` function here */}
      <GridLayout
        className="layout"
        layout={layout}
        cols={4}
        rowHeight={30}
        width={1200}
        onLayoutChange={(newLayout) => setLayout(newLayout)}
      >
        {widgets.map((widget) => (
          <div key={widget.id}>{renderWidget(widget)}</div>
        ))}
      </GridLayout>
    </div>
  );
};

export default DashboardPage;
