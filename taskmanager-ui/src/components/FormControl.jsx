import { Box, TextField } from "@mui/material";
import React from "react";

const FormControl = ({id, label, defaultValue, helperText, type}) => {
  return (
    <Box>
      <TextField
        error
        id={id}
        label={label}
        defaultValue={defaultValue}
        helperText={helperText}
      />
    </Box>
  );
};

export default FormControl;
