import React, { useState } from "react";
import { WidgetHeader } from "../molecules/WidgetHeader";

export const TextBoxWidget: React.FC<{
  onEdit: () => void;
  onRemove: () => void;
}> = ({ onEdit, onRemove }) => {
  const [text, setText] = useState("Editable Text");

  return (
    <div className="widget text-box-widget">
      <WidgetHeader title="Text Box" onEdit={onEdit} onRemove={onRemove} />
      <textarea value={text} onChange={(e) => setText(e.target.value)} />
    </div>
  );
};
