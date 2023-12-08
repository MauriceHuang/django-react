import * as React from "react";
import TextField from "@mui/material/TextField";
import { Controller } from "react-hook-form";
export default function MyMultilineField(props) {
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
          id="standard-multiline-basic"
          multiline
          rows={4}
          defaultValue="Default Value"
          label={label}
          variant="standard"
          placeholder={placeholder}
        />
      )}
    />
  );
}
