import * as React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";

export default function MyTextField(props) {
  const { label, name, placeholder, control } = props;
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
          id="standard-basic"
          placeholder={placeholder}
          label={label}
          variant="standard"
        />
      )}
    />
  );
}
