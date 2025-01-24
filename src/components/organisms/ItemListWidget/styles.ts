import styled from "styled-components";

export const WidgetContainer = styled.div`
  // background-color: #ffffff;
  // border: 1px solid #e0e0e0;
  // border-radius: 8px;
  padding: 16px;
  max-width: 400px;
  // box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ItemList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 12px 16px;
  margin-bottom: 8px;
  border: 1px solid #f0f0f0;
  border-radius: 4px;
  cursor: pointer;
  background-color: #f9f9f9;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const ItemText = styled.span<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "#a0a0a0" : "#000000")};
  font-size: 16px;
`;
