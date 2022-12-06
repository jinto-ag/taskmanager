import { Box, useTheme } from "@mui/material";
import React from "react";
import { date, string, array, number } from "yup";
import Form from "../../components/Form";
import { tokens } from "../../theme";

const fields = [
  {
    id: "idTaskTitle",
    label: "Title",
    name: "task_title",
    type: "text",
    initialValue: "",
    validationSchema: string("Enter task title here.").required(
      "Title is required"
    ),
  },
  {
    id: "idTaskDescription",
    label: "Description",
    name: "task_description",
    type: "textarea",
    initialValue: "",
    validationSchema: string("Enter task description here."),
  },
  {
    id: "idProposedDate",
    label: "Proposed Date",
    name: "task_proposed_date",
    type: "date",
    initialValue: "",
    validationSchema: date("Enter proposed date here.").required(
      "Proposed date is required"
    ),
  },
  {
    id: "idAssignTo",
    label: "Assign To",
    name: "assign_to",
    type: "select",
    initialValue: [{ value: 0, name: "Jinto" }],
    validationSchema: array().of(number().min(2)),
  },
  {
    id: "idRelatedTasks",
    label: "Related Tasks",
    name: "related_tasks",
    type: "select",
    initialValue: [{ value: 0, name: "Create task man" }],
    validationSchema: array().of(number().min(2)),
  },
  {
    id: "idTaskAddButton",
    label: "Add Task",
    name: undefined,
    type: "button",
    initialValue: "",
    validationSchema: undefined,
  },
];

const TaskForm = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const onSubmit = (values) => {
    console.log(JSON.stringify(values), "clicked");
  };

  return (
    <Box
      alignItems={"center"}
      flexDirection="column"
      height="100%"
      width="100%"
      py={2}
      gap={1}
      sx={{
        display: "flex",
      }}
    >
      <Box width="100%" p={2}>
        <Form fields={fields} onSubmit={onSubmit} />
      </Box>
    </Box>
  );
};

export default TaskForm;
