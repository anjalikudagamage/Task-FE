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
  // State to manage the text content
  const [text, setText] = useState("Editable Text");

  // State to manage if the widget is in editing mode
  const [isEditing, setIsEditing] = useState(false);

  // State to manage the edited text during the editing process
  const [editedText, setEditedText] = useState(text);

  // Function to save the edited text and exit the editing mode
  const handleEditSave = () => {
    setText(editedText);
    setIsEditing(false);
  };

  return (
    <WidgetContainer>
      <WidgetHeader
        title="Text Box"
        onEdit={() => setIsEditing(true)}
        onRemove={onRemove}
      />

      {/* Textarea to display the current text; read-only until in edit mode */}
      <StyledTextarea
        value={text}
        placeholder="Type something here..."
        readOnly
      />

      {/* Modal for editing the text appears only when isEditing is true */}
      {isEditing && (
        <EditModal>
          <EditForm>
            <label>
              Edit Text:
              {/* Input field for editing the text */}
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
