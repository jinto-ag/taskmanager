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
        <Form
          fields={{
            title: { value: "", type: fields.TEXT },
            description: { value: "", type: fields.TEXTAREA },
            proposed_date: { value: "2022-10-11", type: fields.DATE },
            related_tasks: { value: [], type: fields.SELECT },
            assign_to: { value: [], type: fields.SELECT },
          }}
        ></Form>
      </Box>
    </Box>
  );
};

export default Main;
