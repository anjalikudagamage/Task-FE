import React, { useState } from "react";
import { Grid, Paper, IconButton, Tooltip } from "@mui/material";
import { ArrowForward, ArrowBack, Delete } from "@mui/icons-material";
import { ResizableBox } from "react-resizable";
import { LineChartWidget } from "../organisms/LineChartWidget";
import { TextBoxWidget } from "../organisms/TextBoxWidget";
import { ItemListWidget } from "../organisms/ItemListWidget";
import { Navbar } from "../organisms/Navbar";
import { DashboardContainer, ImageArea, WidgetWrapper } from "./styles";
import image from "../../assets/Images/image1.jpg";
import "react-resizable/css/styles.css";

// Define the type for widget types
type WidgetType = "LineChartWidget" | "TextBoxWidget" | "ItemListWidget";

const DashboardPage: React.FC = () => {
  const [widgets, setWidgets] = useState<
    { id: string; type: WidgetType; area: string }[]
  >([
    { id: "lineChart1", type: "LineChartWidget", area: "left" },
    { id: "textBox1", type: "TextBoxWidget", area: "right" },
    { id: "itemList1", type: "ItemListWidget", area: "right" },
  ]);

  // Function to add a new widget
  const addWidget = (widgetType: WidgetType): void => {
    const newWidgetId = `widget_${Date.now()}`;
    const newWidget = {
      id: newWidgetId,
      type: widgetType,
      area: widgetType === "LineChartWidget" ? "left" : "right",
    };
    setWidgets([...widgets, newWidget]);
  };

  // Function to remove a widget by its id
  const removeWidget = (id: string): void => {
    setWidgets(widgets.filter((widget) => widget.id !== id));
  };

  // Function to move a widget to a new area (left or right)
  const moveWidget = (id: string, newArea: string): void => {
    setWidgets((prevWidgets) =>
      prevWidgets.map((widget) =>
        widget.id === id ? { ...widget, area: newArea } : widget
      )
    );
  };

  // Function to render the widget based on its type
  const renderWidget = (widget: { id: string; type: WidgetType }) => {
    let content: JSX.Element | null = null;

    // Switch statement to render the appropriate widget
    switch (widget.type) {
      case "LineChartWidget":
        content = <LineChartWidget onRemove={() => removeWidget(widget.id)} />;
        break;
      case "TextBoxWidget":
        content = <TextBoxWidget onRemove={() => removeWidget(widget.id)} />;
        break;
      case "ItemListWidget":
        content = <ItemListWidget onRemove={() => removeWidget(widget.id)} />;
        break;
      default:
        content = null;
    }

    return (
      // ResizableBox component for resizing the widget
      <ResizableBox
        width={300}
        height={200}
        minConstraints={[200, 150]}
        maxConstraints={[600, 500]}
        resizeHandles={["se"]}
        className="resizable-widget"
      >
        <WidgetWrapper>
          {content}
          <div className="action-buttons">
            {/* Move to Left button */}
            <Tooltip title="Move to Left" arrow>
              <IconButton
                onClick={() => moveWidget(widget.id, "left")}
                style={{ backgroundColor: "#e3f2fd" }}
              >
                <ArrowBack />
              </IconButton>
            </Tooltip>

            {/* Move to Right button */}
            <Tooltip title="Move to Right" arrow>
              <IconButton
                onClick={() => moveWidget(widget.id, "right")}
                style={{ backgroundColor: "#e3f2fd" }}
              >
                <ArrowForward />
              </IconButton>
            </Tooltip>

            {/* Delete Widget button */}
            <Tooltip title="Delete" arrow>
              <IconButton
                onClick={() => removeWidget(widget.id)}
                style={{ backgroundColor: "#e57373" }}
              >
                <Delete />
              </IconButton>
            </Tooltip>
          </div>
        </WidgetWrapper>
      </ResizableBox>
    );
  };

  return (
    <DashboardContainer>
      <Navbar addWidget={addWidget} />
      <Grid container spacing={2}>
        {/* Left Side of the Dashboard */}
        <Grid item xs={6} style={{ paddingRight: "8px" }}>
          <Grid item xs={12} style={{ marginBottom: "20px" }}>
            {/* Image section on the left side */}
            <ImageArea>
              <img
                src={image}
                alt="Dashboard Image"
                style={{ width: "100%", height: "auto" }}
              />
            </ImageArea>
          </Grid>
          {/* Render widgets on the left side */}
          {widgets.map(
            (widget) =>
              widget.area === "left" && (
                <Grid
                  item
                  xs={12}
                  key={widget.id}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <Paper elevation={3} style={{ width: "100%" }}>
                    {renderWidget(widget)}
                  </Paper>
                </Grid>
              )
          )}
        </Grid>

        {/* Right Side of the Dashboard */}
        <Grid container item xs={6} spacing={2}>
          {/* Render widgets on the right side */}
          {widgets.map(
            (widget) =>
              widget.area === "right" && (
                <Grid
                  item
                  xs={12}
                  key={widget.id}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Paper elevation={3} style={{ width: "100%" }}>
                    {renderWidget(widget)}
                  </Paper>
                </Grid>
              )
          )}
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

export default DashboardPage;
