import React from "react";
import Box from '@mui/material/Box';

export default function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      className="tab-panel"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <label>{children}</label>
        </Box>
      )}
    </div>
  );
}
