import styled from "styled-components";

// Wrapper for the whole header
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e3f2fd; // Lighter background color for a cleaner look
  padding: 8px 12px; // Reduced padding to save space
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px; // Reduced margin to save space
  overflow: hidden; // Prevents overflow if title is too long
`;

// Title styling
export const HeaderTitle = styled.h3`
  font-size: 16px;
  font-weight: 600; // Slightly lighter font-weight for a cleaner appearance
  color: #333;
  margin: 0;
  white-space: nowrap; // Prevent title from wrapping
  overflow: hidden; // Prevent overflow
  text-overflow: ellipsis; // Adds "..." if the title overflows
  max-width: calc(100% - 120px); // Ensures title doesn't overlap with buttons
`;

// Container for the action buttons
export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px; // Reduced gap between buttons
  justify-content: flex-end; // Align buttons to the right
`;
