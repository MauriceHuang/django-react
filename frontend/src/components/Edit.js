import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import MyDatePickerField from "./forms/MyDatePickerField";
import MyMultilineField from "./forms/MyMultilineField";
import MySelectField from "./forms/MySelectField";
import MyTextField from "./forms/MyTextField";
import { useForm } from "react-hook-form";
import AxiosInstance from "./Axios";
import Dayjs from "dayjs";
import { useNavigate, useParams } from "react-router-dom";
const Edit = () => {
  const navigate = useNavigate();
  const MyParam = useParams();
  const MyId = MyParam.id;
  const getData = () => {
    AxiosInstance.get(`project/${MyId}`).then((res) => {
      console.log(res.data);
      setValue("name", res.data.name);
      setValue("start_date", Dayjs(res.data.start_date));
      setValue("end_date", Dayjs(res.data.end_date));
      setValue("comment", res.data.comment);
      setValue("status", res.data.status);
    });
  };
  useEffect(() => {
    getData();
  });
  const defaultValues = {
    name: "",
    start_date: null,
    end_date: null,
    comment: "",
    status: "",
  };
  const { handleSubmit, setValue, control } = useForm({ defaultValues });
  const handleFormSubmit = (data) => {
    const StartDate = Dayjs(data.start_date["$d"]).format("YYYY-MM-DD");
    const EndDate = Dayjs(data.end_date["$d"]).format("YYYY-MM-DD");
    AxiosInstance.put(`project/${MyId}/`, {
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
            Edit Record
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

export default Edit;
