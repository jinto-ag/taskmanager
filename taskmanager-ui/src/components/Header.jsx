import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box
      component={"header"}
      sx={{
        display: "flex",
        justifyContent: {
          xs: "center",
          md: "space-between",
        },
        alignItems: "center",
        width: "100%",
        px: theme.spacing(2),
      }}
    >
      {/* Title */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "start",
        }}
      >
        <Typography variant="h4">{title || "Main Title"}</Typography>
        <Typography
          variant="p"
          sx={{
            fontStyle: "italic",
            color: theme.palette.grey[500],
          }}
        >
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
