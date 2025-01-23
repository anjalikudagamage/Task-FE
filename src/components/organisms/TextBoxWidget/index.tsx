import React, { useState } from "react";
import { WidgetHeader } from "../../molecules/WidgetHeader";
import { WidgetContainer, StyledTextarea } from "./styles";

export const TextBoxWidget: React.FC<{
  onEdit: () => void;
  onRemove: () => void;
}> = ({ onEdit, onRemove }) => {
  const [text, setText] = useState("Editable Text");

  return (
    <WidgetContainer>
      <WidgetHeader title="Text Box" onEdit={onEdit} onRemove={onRemove} />
      <StyledTextarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something here..."
      />
    </WidgetContainer>
  );
};
