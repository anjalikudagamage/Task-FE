import styled from "styled-components";

export const DashboardContainer = styled.div`
  background-color: #f5f5f5;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

export const WidgetArea = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;

  h2 {
    font-size: 20px;
    margin-bottom: 16px;
    text-align: center;
    color: #444;
  }

  .layout {
    display: flex;
    flex-wrap: wrap;
    background: #fafafa;
    border-radius: 8px;
    gap: 8px;
  }

  .widget {
    background: #fefefe;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const DashboardHeaderArea = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  // color: #333;
  padding: 16px;
  // background-color: #f5f5f5;
  // border-radius: 8px;
`;

export const ImageArea = styled.div`
  img {
    height: auto;
    margin: 0;
  }
`;

export const WidgetWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
`;
