import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { React, useState } from "react";

const fields = {
  TEXT: "text",
  TEXTAREA: "textarea",
  SELECT: "select",
  DATE: "date",
  RADIO: "radio",
  CHECKBOX: "checkbox",
  RANGE: "range",
};

const getFieldValueMap = (fields) => {
  let fieldValueMap = {};
  for (const key in fields) {
    if (Object.hasOwnProperty.call(fields, key)) {
      const field = fields[key];
      fieldValueMap[key] = field.value;
    }
  }
  return fieldValueMap;
};

const TextField = (data) => {
  return <FormControl>
    <InputLabel htmlFor="my-input">{data.label}</InputLabel>
    <Input
      id="id_text_field_{data.id}"
      aria-describedby="id_text_field_helper_text_{data.id}"
      value={data.value}
      type={data.type}
    />
    <FormHelperText id="id_text_field_helper_text_{data.id}">
      {data.helpText}
    </FormHelperText>
  </FormControl>;
};

const generateField = (fields) => {
  /**
   * fields = [
   *     { name: "title", value:"", type: fields.TEXT },
   *     { name: "description", value:"", type: fields.TEXTAREA },
   *     { name: "proposer_date", value:"", type: fields.DATE },
   * ]
   *
   * */
};

const Form = (props) => {
  const defaultValues = getFieldValueMap(props.fields);
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">
          We'll never share your email.
        </FormHelperText>
      </FormControl>
    </form>
  );
};

export default Form;
