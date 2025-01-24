import React, { useState } from "react";
import GridLayout from "react-grid-layout";
import { LineChartWidget } from "../organisms/LineChartWidget";
import { TextBoxWidget } from "../organisms/TextBoxWidget";
import { ItemListWidget } from "../organisms/ItemListWidget";
import { Navbar } from "../organisms/Navbar";
import { DashboardContainer, WidgetArea } from "./styles";

const DashboardPage: React.FC = () => {
  const [widgets, setWidgets] = useState<
    { id: string; type: string; area: string }[]
  >([
    { id: "lineChart", type: "LineChartWidget", area: "charts" },
    { id: "textBox", type: "TextBoxWidget", area: "text" },
    { id: "itemList", type: "ItemListWidget", area: "lists" },
  ]);

  type LayoutItem = { i: string; x: number; y: number; w: number; h: number };
  const [layouts, setLayouts] = useState<{ [key: string]: LayoutItem[] }>({
    charts: [{ i: "lineChart", x: 0, y: 0, w: 4, h: 3 }],
    text: [{ i: "textBox", x: 0, y: 0, w: 4, h: 2 }],
    lists: [{ i: "itemList", x: 0, y: 0, w: 4, h: 2 }],
  });

  const addWidget = (widgetType: string, area: string): void => {
    const newWidgetId = `widget_${Date.now()}`;
    const newWidget = { id: newWidgetId, type: widgetType, area };
    setWidgets([...widgets, newWidget]);

    setLayouts({
      ...layouts,
      [area]: [
        ...(layouts[area] || []),
        { i: newWidgetId, x: 0, y: Infinity, w: 4, h: 2 },
      ],
    });
  };

  const removeWidget = (id: string, area: string): void => {
    setWidgets(widgets.filter((widget) => widget.id !== id));
    setLayouts({
      ...layouts,
      [area]: layouts[area].filter((layout) => layout.i !== id),
    });
  };

  const renderWidget = (widget: {
    id: string;
    type: string;
    area: string;
  }): JSX.Element | null => {
    switch (widget.type) {
      case "LineChartWidget":
        return (
          <div className="widget">
            <LineChartWidget
              onEdit={() => alert(`Editing ${widget.id}`)}
              onRemove={() => removeWidget(widget.id, widget.area)}
            />
          </div>
        );
      case "TextBoxWidget":
        return (
          <div className="widget">
            <TextBoxWidget
              onEdit={() => alert(`Editing ${widget.id}`)}
              onRemove={() => removeWidget(widget.id, widget.area)}
            />
          </div>
        );
      case "ItemListWidget":
        return (
          <div className="widget">
            <ItemListWidget
              onEdit={() => alert(`Editing ${widget.id}`)}
              onRemove={() => removeWidget(widget.id, widget.area)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <DashboardContainer>
      <Navbar
        addWidget={(widgetType: string) => {
          const area = widgetType.includes("Chart")
            ? "charts"
            : widgetType.includes("Text")
            ? "text"
            : "lists";
          addWidget(widgetType, area);
        }}
      />
      {Object.keys(layouts).map((area) => (
        <WidgetArea key={area}>
          <h2>{area.charAt(0).toUpperCase() + area.slice(1)}</h2>
          <GridLayout
            className="layout"
            layout={layouts[area]}
            cols={12}
            rowHeight={30}
            width={800}
            onLayoutChange={(newLayout) =>
              setLayouts((prev) => ({ ...prev, [area]: newLayout }))
            }
          >
            {widgets
              .filter((widget) => widget.area === area)
              .map((widget) => (
                <div
                  key={widget.id}
                  data-grid={layouts[area].find((l) => l.i === widget.id)}
                >
                  {renderWidget(widget)}
                </div>
              ))}
          </GridLayout>
        </WidgetArea>
      ))}
    </DashboardContainer>
  );
};

export default DashboardPage;
