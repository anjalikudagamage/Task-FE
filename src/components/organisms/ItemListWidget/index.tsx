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

// Initial state of items in the list
const initialItems = [
  { id: 1, text: "Item 1", completed: false },
  { id: 2, text: "Item 2", completed: false },
  { id: 3, text: "Item 3", completed: false },
];

// Props type for ItemListWidget component
interface ItemListWidgetProps {
  onRemove: () => void;
}

export const ItemListWidget: React.FC<ItemListWidgetProps> = ({ onRemove }) => {
  // State variables
  const [items, setItems] = useState(initialItems);
  const [isEditing, setIsEditing] = useState(false);
  const [editedItems, setEditedItems] = useState([...initialItems]);

  // Toggle completion status of an item
  const toggleComplete = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Open edit modal and clone items for editing
  const handleHeaderEdit = () => {
    setEditedItems([...items]);
    setIsEditing(true);
  };

  // Save edited items and close the edit modal
  const handleEditSave = () => {
    setItems(editedItems);
    setIsEditing(false);
  };

  // Handle input change for edited items
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
        onEdit={handleHeaderEdit}
        onRemove={onRemove}
      />

      {/* Display list of items */}
      <ItemList>
        {items.map((item) => (
          <ListItem key={item.id} onClick={() => toggleComplete(item.id)}>
            <ItemText completed={item.completed}>{item.text}</ItemText>
          </ListItem>
        ))}
      </ItemList>

      {/* Modal for editing items, only shown when isEditing is true */}
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
          <EditButton onClick={handleEditSave}>Save</EditButton>{" "}
          <EditButton onClick={() => setIsEditing(false)}>Cancel</EditButton>{" "}
        </EditModal>
      )}
    </WidgetContainer>
  );
};
