import React from "react";
import GridLayout, { Layout } from "react-grid-layout";
import WidgetComponent from "../molecules/Widget";
import { Widget } from "../../constants/types/WidgetTypes";

interface DashboardGridProps {
  widgets: Widget[];
  onRemoveWidget: (id: string) => void;
  onLayoutChange: (layout: Layout[]) => void;
}

const DashboardGrid: React.FC<DashboardGridProps> = ({
  widgets,
  onRemoveWidget,
  onLayoutChange,
}) => (
  <GridLayout
    className="layout"
    cols={12}
    rowHeight={30}
    width={1200}
    onLayoutChange={(layout) => onLayoutChange(layout)}
  >
    {widgets.map((widget) => (
      <div key={widget.id} data-grid={widget.layout}>
        <WidgetComponent {...widget} onRemove={onRemoveWidget} />
      </div>
    ))}
  </GridLayout>
);

export default DashboardGrid;
