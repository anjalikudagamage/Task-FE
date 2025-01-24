import React, { useState } from "react";
import { WidgetHeader } from "../../molecules/WidgetHeader";
import {
  WidgetContainer,
  ItemList,
  ListItem,
  ItemText,
  EditModal,
  EditInput,
  EditButton,
} from "./styles";

const initialItems = [
  { id: 1, text: "Item 1", completed: false },
  { id: 2, text: "Item 2", completed: false },
  { id: 3, text: "Item 3", completed: false },
];

interface ItemListWidgetProps {
  onEdit: () => void;
  onRemove: () => void;
}

export const ItemListWidget: React.FC<ItemListWidgetProps> = ({
  onEdit,
  onRemove,
}) => {
  const [items, setItems] = useState(initialItems);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState<{
    id: number;
    text: string;
  } | null>(null);

  const toggleComplete = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleEditClick = (item: { id: number; text: string }) => {
    setCurrentItem(item);
    setIsEditing(true);
  };

  const handleEditSave = () => {
    if (currentItem) {
      setItems(
        items.map((item) =>
          item.id === currentItem.id
            ? { ...item, text: currentItem.text }
            : item
        )
      );
      setIsEditing(false);
      setCurrentItem(null);
    }
  };

  return (
    <WidgetContainer>
      <WidgetHeader title="Item List" onEdit={onEdit} onRemove={onRemove} />
      <ItemList>
        {items.map((item) => (
          <ListItem key={item.id} onClick={() => toggleComplete(item.id)}>
            <ItemText completed={item.completed}>{item.text}</ItemText>
            <EditButton
              onClick={(e) => {
                e.stopPropagation();
                handleEditClick(item);
              }}
            >
              Edit
            </EditButton>
          </ListItem>
        ))}
      </ItemList>
      {isEditing && currentItem && (
        <EditModal>
          <EditInput
            value={currentItem.text}
            onChange={(e) =>
              setCurrentItem({ ...currentItem, text: e.target.value })
            }
          />
          <EditButton onClick={handleEditSave}>Save</EditButton>
          <EditButton onClick={() => setIsEditing(false)}>Cancel</EditButton>
        </EditModal>
      )}
    </WidgetContainer>
  );
};
