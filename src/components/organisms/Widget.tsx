import WidgetHeader from "../molecules/WidgetHeader";
import EditableText from "../atoms/EditableText";
import { Widget } from "../../constants/types/WidgetTypes";

interface WidgetProps extends Widget {
  onRemove: (id: string) => void;
}

const WidgetComponent: React.FC<WidgetProps> = ({
  id,
  type,
  content,
  onRemove,
}) => (
  <div
    style={{ border: "1px solid #ddd", padding: "1rem", borderRadius: "4px" }}
  >
    <WidgetHeader title={`Widget ${id}`} onRemove={() => onRemove(id)} />
    {type === "text" && <EditableText initialText={content as string} />}
    {type === "chart" && <div>Chart Placeholder</div>}
    {type === "list" && (
      <ul>
        {(content as string[]).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

export default WidgetComponent;
