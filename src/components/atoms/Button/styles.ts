import styled from "styled-components";

export const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  gap: 8px;
  font-size: 14px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  .icon {
    font-size: 16px;
  }
`;
