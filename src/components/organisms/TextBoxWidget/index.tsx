import React, { useState } from "react";
import { WidgetHeader } from "../../molecules/WidgetHeader";
import {
  WidgetContainer,
  StyledTextarea,
  EditModal,
  EditForm,
  EditInput,
  EditButton,
} from "./styles";

export const TextBoxWidget: React.FC<{
  onRemove: () => void;
}> = ({ onRemove }) => {
  const [text, setText] = useState("Editable Text");
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleEditSave = () => {
    setText(editedText);
    setIsEditing(false);
  };

  return (
    <WidgetContainer>
      <WidgetHeader
        title="Text Box"
        onEdit={() => setIsEditing(true)} // Internal handling
        onRemove={onRemove}
      />
      <StyledTextarea
        value={text}
        placeholder="Type something here..."
        readOnly // Non-editable until in edit mode
      />
      {isEditing && (
        <EditModal>
          <EditForm>
            <label>
              Edit Text:
              <EditInput
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                placeholder="Edit text here..."
              />
            </label>
            <EditButton onClick={handleEditSave}>Save</EditButton>
            <EditButton onClick={() => setIsEditing(false)}>Cancel</EditButton>
          </EditForm>
        </EditModal>
      )}
    </WidgetContainer>
  );
};
