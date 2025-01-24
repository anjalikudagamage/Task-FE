import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { ResizableBox } from "react-resizable";
import { LineChartWidget } from "../organisms/LineChartWidget";
import { TextBoxWidget } from "../organisms/TextBoxWidget";
import { ItemListWidget } from "../organisms/ItemListWidget";
import { Navbar } from "../organisms/Navbar";
import { DashboardContainer, DashboardHeaderArea, ImageArea } from "./styles";
import "react-resizable/css/styles.css";

type WidgetType = "LineChartWidget" | "TextBoxWidget" | "ItemListWidget";

const DashboardPage: React.FC = () => {
  const [widgets, setWidgets] = useState<
    { id: string; type: WidgetType; area: string }[]
  >([
    { id: "lineChart1", type: "LineChartWidget", area: "left" },
    { id: "textBox1", type: "TextBoxWidget", area: "right" },
    { id: "itemList1", type: "ItemListWidget", area: "right" },
  ]);

  const addWidget = (widgetType: WidgetType): void => {
    const newWidgetId = `widget_${Date.now()}`;
    const newWidget = {
      id: newWidgetId,
      type: widgetType,
      area: widgetType === "LineChartWidget" ? "left" : "right",
    };
    setWidgets([...widgets, newWidget]);
  };

  const removeWidget = (id: string): void => {
    setWidgets(widgets.filter((widget) => widget.id !== id));
  };

  const renderWidget = (widget: { id: string; type: WidgetType }) => {
    let content: JSX.Element | null = null;

    switch (widget.type) {
      case "LineChartWidget":
        content = (
          <LineChartWidget
            onEdit={() => alert(`Editing ${widget.id}`)}
            onRemove={() => removeWidget(widget.id)}
          />
        );
        break;
      case "TextBoxWidget":
        content = (
          <TextBoxWidget
            onEdit={() => alert(`Editing ${widget.id}`)}
            onRemove={() => removeWidget(widget.id)}
          />
        );
        break;
      case "ItemListWidget":
        content = (
          <ItemListWidget
            onEdit={() => alert(`Editing ${widget.id}`)}
            onRemove={() => removeWidget(widget.id)}
          />
        );
        break;
      default:
        content = null;
    }

    return (
      <ResizableBox
        width={350}
        height={250}
        minConstraints={[200, 150]}
        maxConstraints={[600, 500]}
        resizeHandles={["se"]}
        className="resizable-widget"
      >
        <div style={{ height: "100%", width: "100%", position: "relative" }}>
          {content}
          <div className="resize-hint">Drag to resize</div>
        </div>
      </ResizableBox>
    );
  };

  return (
    <DashboardContainer>
      <Navbar addWidget={addWidget} />
      <Grid container spacing={2}>
        {/* Left Side */}
        <Grid item xs={6} spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={3}>
              <DashboardHeaderArea>
                <Typography variant="h4">Dashboard Name</Typography>
              </DashboardHeaderArea>
              <ImageArea>
                <img
                  src="path-to-image.jpg"
                  alt="Dashboard Image"
                  style={{ width: "100%", height: "auto" }}
                />
              </ImageArea>
            </Paper>
          </Grid>
          {widgets.map((widget) =>
            widget.area === "left" ? (
              <Grid item xs={12} key={widget.id}>
                <Paper elevation={3}>{renderWidget(widget)}</Paper>
              </Grid>
            ) : null
          )}
        </Grid>
        {/* Right Side */}
        <Grid container item xs={6} spacing={2}>
          {widgets.map((widget) =>
            widget.area === "right" ? (
              <Grid item xs={12} key={widget.id}>
                <Paper elevation={3}>{renderWidget(widget)}</Paper>
              </Grid>
            ) : null
          )}
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

export default DashboardPage;
