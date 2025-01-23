import React from "react";
import { Button, Toolbar, AppBar } from "@mui/material";
import { useNavbarStyles } from "./styles";

type WidgetType =
  | "LineChartWidget"
  | "TextBoxWidget"
  | "ItemListWidget"
  | "ImageWidget";

export const Navbar: React.FC<{ addWidget: (type: WidgetType) => void }> = ({
  addWidget,
}) => {
  const styles = useNavbarStyles();

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Button sx={styles.button} onClick={() => addWidget("LineChartWidget")}>
          Add Line Chart
        </Button>
        <Button sx={styles.button} onClick={() => addWidget("TextBoxWidget")}>
          Add Text Box
        </Button>
        <Button sx={styles.button} onClick={() => addWidget("ItemListWidget")}>
          Add Item List
        </Button>
        <Button sx={styles.button} onClick={() => addWidget("ImageWidget")}>
          Add Image
        </Button>
      </Toolbar>
    </AppBar>
  );
};
