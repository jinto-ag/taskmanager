import { Box } from "@mui/material";
import { React } from "react";
import Form from "../Form/Form";

const fields = {
  TEXT: "text",
  TEXTAREA: "textarea",
  SELECT: "select",
  DATE: "date",
  RADIO: "radio",
  CHECKBOX: "checkbox",
  RANGE: "range",
};

const Main = (props) => {
  console.log(fields);
  return (
    <Box flex={props.flex} bgcolor={"darkgray"} p={2}>
      <Box>
        <Form></Form>
      </Box>
    </Box>
  );
};

export default Main;
