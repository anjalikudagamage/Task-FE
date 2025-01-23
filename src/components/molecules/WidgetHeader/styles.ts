import styled from "styled-components";

// Wrapper for the whole header
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
`;

// Title styling
export const HeaderTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin: 0;
`;

// Container for the action buttons
export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

// Optional: Add hover effect for the buttons if needed
