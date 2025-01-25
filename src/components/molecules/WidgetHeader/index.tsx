import React from "react";
import { Button } from "../../atoms/Button";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Wrapper, HeaderTitle, ButtonContainer } from "./styles";

// Props type for the WidgetHeader component
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
  <Wrapper>
    <HeaderTitle>{title}</HeaderTitle>
    <ButtonContainer>
      <Button
        label="Edit"
        icon={<FaEdit />} // Edit icon
        onClick={onEdit}
        tooltip="Edit this widget" // Tooltip for edit action
      />
      <Button
        label="Remove"
        icon={<FaTrash />} // Trash icon
        onClick={onRemove}
        tooltip="Remove this widget" // Tooltip for remove action
      />
    </ButtonContainer>
  </Wrapper>
);
