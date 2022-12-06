import {
  Box,
  FormControl,
  FormControlLabel,
  Switch,
  TextField,
  useTheme,
} from "@mui/material";
import React from "react";
import { Button } from "../../components/Button";
import { BasicDateTimePicker } from "../../components/DateTimePicker";
import Header from "../../components/Header";
import Select from "../../components/Select";
import { tokens } from "../../theme";

const TaskForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      alignItems={"center"}
      flexDirection="column"
      height="100%"
      width="100%"
      py={theme.spacing(2)}
      gap={1}
      sx={{
        display: "flex",
      }}
    >
      <Header title="Create Task" subtitle="" />
      <Box width="100%">
        <Box
          component={"form"}
          gap={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: colors.neutral[95],
          }}
          p={3}
          mx={2}
          borderRadius={1}
        >
          <FormControl>
            <TextField
              required
              id="outlined-required"
              label="Title"
              defaultValue=""
            />
          </FormControl>
          <FormControl>
            <TextField
              multiline
              rows={5}
              id="outlined-required"
              label="Description"
              defaultValue=""
            />
          </FormControl>
          <FormControl>
            <BasicDateTimePicker label={"Proposed Date"} />
          </FormControl>

          <Select data={["Jinto", "Sidhi", "Jinitha"]} label="Assign To" />
          <Select data={["Jinto", "Sidhi", "Jinitha"]} label="Related Tasks" />
          <FormControl
            sx={{
              flexDirection: "row",
            }}
          >
            <FormControlLabel
              value="start"
              control={<Switch color="primary" />}
              label="Set Reminder"
              labelPlacement="start"
            />
          </FormControl>
          <Box>
            <Button variant="contained" color="primary" pill>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TaskForm;
