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
  onRemove: () => void;
}

export const ItemListWidget: React.FC<ItemListWidgetProps> = ({ onRemove }) => {
  const [items, setItems] = useState(initialItems);
  const [isEditing, setIsEditing] = useState(false);
  const [editedItems, setEditedItems] = useState([...initialItems]);

  const toggleComplete = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleHeaderEdit = () => {
    setEditedItems([...items]); // Clone current items for editing
    setIsEditing(true);
  };

  const handleEditSave = () => {
    setItems(editedItems); // Update items with edited data
    setIsEditing(false);
  };

  const handleInputChange = (id: number, value: string) => {
    setEditedItems(
      editedItems.map((item) =>
        item.id === id ? { ...item, text: value } : item
      )
    );
  };

  return (
    <WidgetContainer>
      <WidgetHeader
        title="Item List"
        onEdit={handleHeaderEdit} // Internal handler
        onRemove={onRemove}
      />
      <ItemList>
        {items.map((item) => (
          <ListItem key={item.id} onClick={() => toggleComplete(item.id)}>
            <ItemText completed={item.completed}>{item.text}</ItemText>
          </ListItem>
        ))}
      </ItemList>
      {isEditing && (
        <EditModal>
          {editedItems.map((item) => (
            <div key={item.id}>
              <EditInput
                value={item.text}
                onChange={(e) => handleInputChange(item.id, e.target.value)}
              />
            </div>
          ))}
          <EditButton onClick={handleEditSave}>Save</EditButton>
          <EditButton onClick={() => setIsEditing(false)}>Cancel</EditButton>
        </EditModal>
      )}
    </WidgetContainer>
  );
};
