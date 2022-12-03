import {
  Box,
  FormControl,
  FormControlLabel,
  InputBase,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";


const TaskForm = () => {
  return (
    <Box
      component={"form"}
      gap={2}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      p={2}
    >
      <FormControl>
        <TextField
          size="small"
          required
          id="outlined-required"
          label="Title"
          defaultValue=""
        />
      </FormControl>
      <FormControl>
        <TextField
          size="small"
          multiline
          id="outlined-required"
          label="Description"
          defaultValue=""
        />
      </FormControl>
      <FormControl>
        <TextField
          size="small"
          required
          id="outlined-required"
          label="Proposed Date"
          defaultValue=""
          type={"date"}
        />
      </FormControl>
    </Box>
  );
};

export default TaskForm;
