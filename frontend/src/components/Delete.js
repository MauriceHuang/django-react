import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import AxiosInstance from "./Axios";
import { useNavigate, useParams } from "react-router-dom";
const Delete = () => {
  const MyParam = useParams();
  const MyId = MyParam.id;
  const navigate = useNavigate();
  const [myData, setMyData] = useState();
  const [loading, setLoading] = useState(true);
  const getData = () => {
    AxiosInstance.get(`project/${MyId}`).then((res) => {
      setMyData(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  const handleFormSubmit = (data) => {
    AxiosInstance.delete(`project/${MyId}/`).then((res) => {
      navigate("/");
    });
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
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
              Delete Record :{myData?.name}
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
              Are you sure you want to delete this record? {myData?.name}
            </Box>
            <Box sx={{ width: "30%" }}></Box>
            <Button
              sx={{ width: "100%" }}
              variant="contained"
              onClick={handleFormSubmit}
            >
              Delete
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
};

export default Delete;
