import React from "react";
import { Button } from "../../atoms/Button";
import { FaEdit, FaTrash } from "react-icons/fa"; // Using icons for Edit and Remove actions
import { Wrapper, HeaderTitle, ButtonContainer } from "./styles"; // Styled components

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
        icon={<FaEdit />}
        onClick={onEdit}
        tooltip="Edit this widget"
      />
      <Button
        label="Remove"
        icon={<FaTrash />}
        onClick={onRemove}
        tooltip="Remove this widget"
      />
    </ButtonContainer>
  </Wrapper>
);
