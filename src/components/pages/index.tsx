import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { LineChartWidget } from "../organisms/LineChartWidget";
import { TextBoxWidget } from "../organisms/TextBoxWidget";
import { ItemListWidget } from "../organisms/ItemListWidget";
import { Navbar } from "../organisms/Navbar";
import { DashboardContainer, DashboardHeaderArea, ImageArea } from "./styles";

type WidgetType = "LineChartWidget" | "TextBoxWidget" | "ItemListWidget";

const DashboardPage: React.FC = () => {
  const [widgets, setWidgets] = useState<
    { id: string; type: WidgetType; area: string }[]
  >([
    { id: "lineChart", type: "LineChartWidget", area: "widgets" },
    { id: "textBox", type: "TextBoxWidget", area: "widgets" },
    { id: "itemList", type: "ItemListWidget", area: "widgets" },
  ]);

  const addWidget = (widgetType: WidgetType): void => {
    const newWidgetId = `widget_${Date.now()}`;
    const newWidget = { id: newWidgetId, type: widgetType, area: "widgets" };
    setWidgets([...widgets, newWidget]);
  };

  const removeWidget = (id: string): void => {
    setWidgets(widgets.filter((widget) => widget.id !== id));
  };

  const renderWidget = (widget: {
    id: string;
    type: WidgetType;
  }): JSX.Element | null => {
    switch (widget.type) {
      case "LineChartWidget":
        return (
          <div className="widget">
            <LineChartWidget
              onEdit={() => alert(`Editing ${widget.id}`)}
              onRemove={() => removeWidget(widget.id)}
            />
          </div>
        );
      case "TextBoxWidget":
        return (
          <div className="widget">
            <TextBoxWidget
              onEdit={() => alert(`Editing ${widget.id}`)}
              onRemove={() => removeWidget(widget.id)}
            />
          </div>
        );
      case "ItemListWidget":
        return (
          <div className="widget">
            <ItemListWidget
              onEdit={() => alert(`Editing ${widget.id}`)}
              onRemove={() => removeWidget(widget.id)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <DashboardContainer>
      <Navbar addWidget={addWidget} />
      <Grid container spacing={2}>
        {/* Left Side - Dashboard name and image */}
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
          {/* Line Chart Widget */}
          <Grid item xs={12}>
            <Paper elevation={3}>
              {renderWidget({ id: "lineChart", type: "LineChartWidget" })}
            </Paper>
          </Grid>
        </Grid>

        {/* Right Side - Widgets */}
        <Grid container item xs={6} spacing={2}>
          {/* Text Box Widget */}
          <Grid item xs={12}>
            <Paper elevation={3}>
              {renderWidget({ id: "textBox", type: "TextBoxWidget" })}
            </Paper>
          </Grid>
          {/* Item List Widget */}
          <Grid item xs={12}>
            <Paper elevation={3}>
              {renderWidget({ id: "itemList", type: "ItemListWidget" })}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </DashboardContainer>
  );
};

export default DashboardPage;
