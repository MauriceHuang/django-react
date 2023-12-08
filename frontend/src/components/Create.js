import React from "react";
import { Box, Typography, Button } from "@mui/material";
import MyDatePickerField from "./forms/MyDatePickerField";
import MyMultilineField from "./forms/MyMultilineField";
import MySelectField from "./forms/MySelectField";
import MyTextField from "./forms/MyTextField";
import { useForm } from "react-hook-form";

const Create = () => {
  const { handleSubmit, control, reset, setValue } = useForm();
  const handleFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "40px",
            }}
          >
            <MyTextField
              name="name"
              label="Name"
              placeholder="Please Enter Name"
              control={control}
              width="30%"
            />
            <MyDatePickerField
              name="start_date"
              label="Start Date"
              control={control}
              width="30%"
            />
            <MyDatePickerField
              name="end_date"
              label="End Date"
              control={control}
              width="30%"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-around" }}>
            <MyMultilineField
              name="comment"
              label="Comment"
              placeholder="Please Provide Comment"
              control={control}
              width="30%"
            />
            <MySelectField
              name="status"
              label="Status"
              control={control}
              width="30%"
            />
            <Box sx={{ width: "30%" }}></Box>
            <Button variant="contained" type="submit" sx={{ width: "100%" }}>
              Submit
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default Create;
