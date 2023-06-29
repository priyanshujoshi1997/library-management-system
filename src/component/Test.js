

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useState,useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
// function IconLabelButtons() {
  
//     <Stack direction="row" spacing={2}>
//       <Button variant="outlined" startIcon={<DeleteIcon />}>
//         Delete
//       </Button>
//       <Button variant="contained" endIcon={<SendIcon />}>
//         Send
//       </Button>
//     </Stack>
// }



export default function DataTable() {
  const [data, setData] = useState([]);

  useEffect (() => {
   fetchData();
 
  }, []);

 const fetchData = async () => {
   try {
     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
     setData(response.data);
   } catch (error) {
     console.error('Error fetching data:', error);
   }
  };
 
 function handleDelete(params){
  console.log(params);
 }

 function handleEdit(params){
  console.log(params);
 }


  const columns = [
    { field: "userId", headerName: "userID", width: 100 },
    { field: "id", headerName: "ID", width: 100 },
    { field: "title", headerName: "Title", width: 200 },
    { field: "body", headerName: "Body" },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        // you will find row info in params
        return (
          <>
            <Button
              variant="contained"
              color="warning"
              onClick={handleDelete(params)}
            >
              Delete
            </Button>{" "}
            |
            <Button
              variant="contained"
              color="primary"
              onClick={handleEdit(params)}
            >
              Edit
            </Button>
          </>
        );
       
      },
    },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        columns={columns}
      />
    </div>
  );
}