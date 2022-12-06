import { DateRange } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  Switch,
  TextField,
  useTheme,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { object } from "yup";
import { tokens } from "../theme";
import { BasicDatePicker, BasicDateTimePicker } from "./DateTimePicker";

const BasicSelect = ({ name, label, value, helperText, error }) => {
  const [inputValue, setInputValue] = React.useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  console.log(error, helperText);

  return (
    <FormControl fullWidth error={error}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        name={name}
        value={inputValue}
        label={label}
        onChange={handleChange}
      >
        {value.map((data, index) => (
          <MenuItem key={index} value={data.value}>
            {data.name}
          </MenuItem>
        ))}
      </Select>
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : undefined}
    </FormControl>
  );
};

const components = {
  text: TextField,
  textarea: (props) => <TextField {...props} multiline rows={3} />,
  date: BasicDatePicker,
  datetime: BasicDateTimePicker,
  dateRange: DateRange,
  select: (props) => <BasicSelect {...props} />,
  checkbox: Checkbox,
  radio: Radio,
  switch: Switch,
  button: Button,
};

const getValidationSchema = (fields) => {
  let validationSchemas = {};
  fields.forEach(({ name, validationSchema }) =>
    name ? (validationSchemas[name] = validationSchema) : undefined
  );
  let yupObject = object({ ...validationSchemas });
  return yupObject;
};

const getInitialValues = (fields) => {
  let initialValues = {};
  fields.forEach(({ name, initialValue }) =>
    name ? (initialValues[name] = initialValue) : undefined
  );
  return initialValues;
};

const Form = ({ fields, onSubmit }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const formik = useFormik({
    initialValues: getInitialValues(fields),
    validationSchema: getValidationSchema(fields),
    onSubmit: onSubmit,
  });
  return (
    <Box component={"form"} onSubmit={formik.handleSubmit}>
      <Box
        display={"flex"}
        gap={2}
        flexDirection="column"
        p={2}
        sx={{
          backgroundColor: colors.neutral[95],
          borderRadius: 1,
        }}
      >
        {fields.map((field, index) =>
          field.type !== "button" ? (
            <Box
              component={components[field.type]}
              key={index}
              id={field.id + `-${index}`}
              type={field.type}
              name={field.name}
              label={field.label}
              error={
                formik.touched[field.name] && Boolean(formik.errors[field.name])
              }
              helperText={
                formik.touched[field.name] && formik.errors[field.name]
              }
              value={formik.values[field.name]}
              onChange={formik.handleChange}
            />
          ) : (
            <Box key={index}>
              <Button
                variant="contained"
                color="primary"
                id={field.id + `-${index}`}
                type="submit"
              >
                {field.label}
              </Button>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
};

export default Form;
