import React from "react";
import { WidgetHeader } from "../molecules/WidgetHeader";

export const ImageWidget: React.FC<{
  onEdit: () => void;
  onRemove: () => void;
}> = ({ onEdit, onRemove }) => (
  <div className="widget image-widget">
    <WidgetHeader
      title="Image Placeholder"
      onEdit={onEdit}
      onRemove={onRemove}
    />
    <img src="https://via.placeholder.com/300" alt="Placeholder" />
  </div>
);
