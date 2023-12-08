import * as React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export default function MyTextField(props) {
  const { label, width, name, placeholder, control } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          sx={{ width: { width } }}
          id="standard-basic"
          placeholder={placeholder}
          label={label}
          onChange={onChange}
          value={value}
          variant="standard"
        />
      )}
    />
  );
}
