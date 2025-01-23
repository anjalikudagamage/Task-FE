import styled from "styled-components";

export const DashboardContainer = styled.div`
  background-color: #f9f9f9;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 100vh;
  font-family: Arial, sans-serif;

  .layout {
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 8px;
  }

  .widget {
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .widget-header {
    background: #f0f0f0;
    border-bottom: 1px solid #dcdcdc;
    padding: 8px;
    cursor: grab;
    font-weight: bold;
    text-align: center;
  }

  .widget:hover {
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.15);
  }

  .widget textarea {
    border: none;
    border-top: 1px solid #dcdcdc;
    padding: 8px;
    resize: none;
    outline: none;
    font-size: 14px;
    font-family: inherit;
    color: #333333;
  }
`;
