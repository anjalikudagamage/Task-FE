import React, { useState } from "react";
import GridLayout, { Layout } from "react-grid-layout";

import { LineChartWidget } from "../organisms/LineChartWidget";
import { TextBoxWidget } from "../organisms/TextBoxWidget";
import { ItemListWidget } from "../organisms/ItemListWidget";
import { Navbar } from "../organisms/Navbar";
import { DashboardContainer } from "./styles";

type WidgetType = "LineChartWidget" | "TextBoxWidget" | "ItemListWidget";

interface Widget {
  id: string;
  type: WidgetType;
}

const DashboardPage: React.FC = () => {
  const [widgets, setWidgets] = useState<Widget[]>([
    { id: "lineChart", type: "LineChartWidget" },
    { id: "textBox", type: "TextBoxWidget" },
    { id: "itemList", type: "ItemListWidget" },
  ]);

  const [layout, setLayout] = useState<Layout[]>([
    { i: "lineChart", x: 0, y: 0, w: 2, h: 2 },
    { i: "textBox", x: 2, y: 0, w: 2, h: 2 },
    { i: "itemList", x: 0, y: 2, w: 2, h: 2 },
  ]);

  const addWidget = (widgetType: WidgetType): void => {
    const newWidgetId = `widget_${widgets.length}`;
    setWidgets([...widgets, { id: newWidgetId, type: widgetType }]);
    setLayout([...layout, { i: newWidgetId, x: 0, y: Infinity, w: 2, h: 2 }]);
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
            onEdit={() => alert(`Editing ${widget.id}`)}
            onRemove={() => removeWidget(widget.id)}
          />
        );
      case "TextBoxWidget":
        return (
          <TextBoxWidget
            onEdit={() => alert(`Editing ${widget.id}`)}
            onRemove={() => removeWidget(widget.id)}
          />
        );
      case "ItemListWidget":
        return (
          <ItemListWidget
            onEdit={() => alert(`Editing ${widget.id}`)}
            onRemove={() => removeWidget(widget.id)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <DashboardContainer>
      <Navbar addWidget={addWidget} />
      <GridLayout
        className="layout"
        layout={layout}
        cols={4}
        rowHeight={30}
        width={1200}
        onLayoutChange={(newLayout) => setLayout(newLayout)}
        draggableHandle=".widget-header"
      >
        {widgets.map((widget) => (
          <div key={widget.id}>{renderWidget(widget)}</div>
        ))}
      </GridLayout>
    </DashboardContainer>
  );
};

export default DashboardPage;
