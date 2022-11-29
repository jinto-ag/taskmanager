import { Box } from "@mui/material";
import React from "react";

const Sidebar = (props) => {
  return (
    <Box
      color={"darkgrey"}
      bgcolor={"darkgoldenrod"}
      sx={{ ...props.sx, display: { xs: "none", sm: "block" } }}
      flex={props.flex}
      p={2}
    >
      <div>Sidebar</div>
    </Box>
  );
};

export default Sidebar;
