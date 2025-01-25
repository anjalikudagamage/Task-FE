import styled from "styled-components";

export const DashboardContainer = styled.div`
  background-color: #f5f5f5;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

export const ImageArea = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
    height: auto;
  }
`;

export const WidgetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  height: 100%;
  position: relative;
  padding: 12px;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
