import React from "react";
import { TextField as MUITextField, Box } from "@mui/material";

const TextField = ({
  props,
  props: { id, value, name, error, label, helperText, onChange },
}) => {
  return (
    <MUITextField
      id={id}
      value={value}
      name={name}
      error={error}
      label={label}
      helperText={helperText}
      onChange={onChange}
      {...props}
    />
  );
};

export default TextField;
