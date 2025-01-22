import Button from "../atoms/Button";

interface WidgetHeaderProps {
  title: string;
  onRemove: () => void;
}

const WidgetHeader: React.FC<WidgetHeaderProps> = ({ title, onRemove }) => (
  <div style={{ display: "flex", justifyContent: "space-between" }}>
    <h4>{title}</h4>
    <Button onClick={onRemove}>Remove</Button>
  </div>
);

export default WidgetHeader;
