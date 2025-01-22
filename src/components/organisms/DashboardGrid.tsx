import GridLayout from "react-grid-layout";
import WidgetComponent from "./Widget";
import { Widget } from "../../constants/types/WidgetTypes";

interface DashboardGridProps {
  widgets: Widget[];
  onRemoveWidget: (id: string) => void;
}

const DashboardGrid: React.FC<DashboardGridProps> = ({
  widgets,
  onRemoveWidget,
}) => (
  <GridLayout className="layout" cols={12} rowHeight={30} width={1200}>
    {widgets.map((widget) => (
      <div key={widget.id} data-grid={widget.layout}>
        <WidgetComponent {...widget} onRemove={onRemoveWidget} />
      </div>
    ))}
  </GridLayout>
);

export default DashboardGrid;
