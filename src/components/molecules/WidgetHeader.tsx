import React from "react";
import { Button } from "../atoms/Button/Button";

type WidgetHeaderProps = {
  title: string;
  onEdit: () => void;
  onRemove: () => void;
};

export const WidgetHeader: React.FC<WidgetHeaderProps> = ({
  title,
  onEdit,
  onRemove,
}) => (
  <div className="widget-header">
    <h3>{title}</h3>
    <div>
      <Button label="Edit" onClick={onEdit} />
      <Button label="Remove" onClick={onRemove} />
    </div>
  </div>
);
