import React from "react";
import { Button, Toolbar, AppBar, Box, Typography } from "@mui/material";
import { useNavbarStyles } from "./styles";

type WidgetType = "LineChartWidget" | "TextBoxWidget" | "ItemListWidget";

// Navbar component accepts an 'addWidget' function as a prop to add different widgets
export const Navbar: React.FC<{ addWidget: (type: WidgetType) => void }> = ({
  addWidget,
}) => {
  // Getting styles from the useNavbarStyles hook
  const styles = useNavbarStyles();

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        {/* Box for the left section, containing the Dashboard title */}
        <Box sx={styles.titleContainer}>
          <Typography variant="h6" sx={styles.title}>
            Dashboard
          </Typography>
        </Box>

        {/* Box for the right section, containing the action buttons */}
        <Box sx={styles.buttonContainer}>
          <Button
            sx={styles.button}
            onClick={() => addWidget("LineChartWidget")}
          >
            Add Line Chart
          </Button>
          <Button sx={styles.button} onClick={() => addWidget("TextBoxWidget")}>
            Add Text Box
          </Button>
          <Button
            sx={styles.button}
            onClick={() => addWidget("ItemListWidget")}
          >
            Add Item List
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
