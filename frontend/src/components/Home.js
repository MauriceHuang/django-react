import React, { useEffect, useMemo, useState } from "react";
import AxiosInstance from "./Axios";
import { MaterialReactTable } from "material-react-table";
import { Box, IconButton } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import Dayjs from "dayjs";
const Home = () => {
  const [myData, setMyData] = useState();
  const [loading, setLoading] = useState(true);
  const getData = () => {
    AxiosInstance.get(`project/`).then((res) => {
      setMyData(res.data);
      setLoading(false);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //access nested data with dot notation
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "status",
        header: "Status",
        size: 150,
      },
      {
        accessorKey: "comment", //normal accessorKey
        header: "Comment",
        size: 200,
      },
      {
        accessorFn: (row) => Dayjs(row.start_date).format("DD/MM/YYYY"),
        header: "Start Date",
        size: 150,
      },
      {
        accessorFn: (row) => Dayjs(row.end_date).format("DD/MM/YYYY"),
        header: "End Date",
        size: 150,
      },
    ],
    []
  );
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MaterialReactTable
          columns={columns}
          data={myData}
          enableRowActions
          renderRowActions={({ row }) => (
            <Box sx={{ display: "flex", flexWrap: "nowrap", gap: "8px" }}>
              <IconButton
                color="secondary"
                component={Link}
                to={`edit/${row.original.id}`}
              >
                <EditIcon />
              </IconButton>
              <IconButton color="error">
                <DeleteIcon />
              </IconButton>
            </Box>
          )}
        />
      )}
    </div>
  );
};

export default Home;
