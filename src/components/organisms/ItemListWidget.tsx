import React, { useState } from "react";
import { WidgetHeader } from "../molecules/WidgetHeader";

const initialItems = [
  { id: 1, text: "Item 1", completed: false },
  { id: 2, text: "Item 2", completed: false },
  { id: 3, text: "Item 3", completed: false },
];

export const ItemListWidget: React.FC<{
  onEdit: () => void;
  onRemove: () => void;
}> = ({ onEdit, onRemove }) => {
  const [items, setItems] = useState(initialItems);

  const toggleComplete = (id: number) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="widget item-list-widget">
      <WidgetHeader title="Item List" onEdit={onEdit} onRemove={onRemove} />
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => toggleComplete(item.id)}
            style={{ textDecoration: item.completed ? "line-through" : "none" }}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
