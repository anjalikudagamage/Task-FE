import styled from "styled-components";

export const WidgetContainer = styled.div`
  padding: 16px;
  max-width: 400px;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 8px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  font-size: 14px;
  color: #333333;
  resize: none;
  outline: none;
  box-shadow: inset 0px 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #8884d8;
  }
`;

export const EditModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;

export const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EditInput = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #d0d0d0;
  border-radius: 4px;
  font-size: 14px;
  color: #333333;
  outline: none;

  &:focus {
    border-color: #8884d8;
  }
`;

export const EditButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  & + & {
    margin-left: 10px;
  }
`;
