import React from "react";
import { Box, Typography, Button } from "@mui/material";
import MyDatePickerField from "./forms/MyDatePickerField";
import MyMultilineField from "./forms/MyMultilineField";
import MySelectField from "./forms/MySelectField";
import MyTextField from "./forms/MyTextField";
import { useForm } from "react-hook-form";
import AxiosInstance from "./Axios";
import Dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const Create = () => {
  const navigate = useNavigate();
  const defaultValues = {
    name: "",
    comment: "",
    status: "",
  };

  const schema = yup.object({
    name: yup.string().required("Name is a required field"),
    projectmanager: yup
      .string()
      .required("Project manager is a required field"),
    status: yup.string().required("Status is a required field"),
    comments: yup.string(),
    start_date: yup.date().required("Start date is a required field"),
    end_date: yup
      .date()
      .required("End date is a required field")
      .min(
        yup.ref("start_date"),
        "The end date can not be before the start date"
      ),
  });

  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = (data) => {
    const StartDate = Dayjs(data.start_date["$d"]).format("YYYY-MM-DD");
    const EndDate = Dayjs(data.end_date["$d"]).format("YYYY-MM-DD");
    AxiosInstance.post(`project/`, {
      name: data.name,
      start_date: StartDate,
      end_date: EndDate,
      comment: data.comment,
      status: data.status,
    }).then((res) => {
      navigate("/");
    });
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
            <Box sx={{ width: "30%" }}>
              <Button variant="contained" type="submit" sx={{ width: "100%" }}>
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </form>
    </div>
  );
};

export default Create;
