import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import { Controller } from "react-hook-form";
export default function MySelectField(props) {
  const { width, label, name, control } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <FormControl variant="standard" sx={{ width: { width } }}>
          <InputLabel id="demo-simple-select-filled-label">{label}</InputLabel>

          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={value}
            onChange={onChange}
            error={!!error}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"open"}>Open</MenuItem>
            <MenuItem value={"in-progress"}>In Progress</MenuItem>
            <MenuItem value={"completed"}>Completed</MenuItem>
          </Select>
          <FormHelperText sx={{ color: "#d32f2f" }}>
            {error?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
}
