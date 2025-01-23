import React, { useState } from "react";
import { WidgetHeader } from "../../molecules/WidgetHeader";
import { WidgetContainer, ItemList, ListItem, ItemText } from "./styles";

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

  const toggleComplete = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <WidgetContainer>
      <WidgetHeader title="Item List" onEdit={onEdit} onRemove={onRemove} />
      <ItemList>
        {items.map((item) => (
          <ListItem key={item.id} onClick={() => toggleComplete(item.id)}>
            <ItemText completed={item.completed}>{item.text}</ItemText>
          </ListItem>
        ))}
      </ItemList>
    </WidgetContainer>
  );
};
