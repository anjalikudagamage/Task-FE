import styled from "styled-components";

export const ChartContainer = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden; /* Prevents overflow */
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
  margin-left: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const EditButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;
