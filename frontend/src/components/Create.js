import React from "react";
import { Box, Typography } from "@mui/material";
import MyDatePickerField from "./forms/MyDatePickerField";
import MyMultilineField from "./forms/MyMultilineField";
import MySelectField from "./forms/MySelectField";
import MyTextField from "./forms/MyTextField";
import { useForm } from "react-hook-form";

const Create = () => {
  const { handleSubmit, control, reset, setValue } = useForm();
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          backgroundColor: "#00003f",
          marginBottom: "10px",
        }}
      >
        <Typography sx={{ marginLeft: "20px", color: "#fff" }}>
          Create Record
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          boxShadow: 3,
          padding: 4,
          flexDirection: "column",
        }}
      >
        <Box>
          <MyTextField
            name="name"
            label="Name"
            placeholder="Please Enter Name"
            control={control}
          />
        </Box>
        <Box>Three Forms</Box>
      </Box>
    </div>
  );
};

export default Create;
