import React from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {useEffect} from 'react'
import jquery from 'jquery';
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

function getData(){
  let rows=[];let colums=[];
  let mytable = jquery("#my_table");
  let tablerow="";
  let tbody = jquery("#tbody");
   const requestOptions = {
     method: "GET",
     headers: { "Content-Type": "application/json" },
   };
   fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
     .then((response) => response.json())
     .then((data) => {
      for(let i=0;i<data.length;i++){
          rows.push(data[i]);
            mytable.append(`<tr>
                <td>${data[i].userId}</td>
                 <td align="right">${data[i].id}</td>
                 <td align="right">${data[i].title}</td>
             <td align="right">${data[i].body}</td>
              </tr>`);
     }
     DataTable(rows);


      //  jquery.each(data, function (index, value) {
      //      mytable.append(`<tr>
      //           <td>${value.userId}</td>
      //           <td align="right">${value.id}</td>
      //           <td align="right">${value.title}</td>
      //           <td align="right">${value.body}</td>
      //         </tr>`);
      //     console.log(value.userId);
       // });


     });
}

const columns = [
  { field: 'userid', headerName: 'UserID', width: 70 },
  { field: 'id', headerName: 'ID', width: 130 },
  { field: 'title', headerName: 'Title', width: 130 },
  {field: 'body',headerName: 'Body',width: 90, }
];


function DataTable(rows) {

    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10,15,20,25,30,35,40,4,50,55,60,65,70,75,80,85,90,95,100]}
        checkboxSelection
      />
    </div>
  
}


function MyTable (){



    return (
      <div className="mb-3 w-50 mx-auto" onLoad={getData()}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 350 }} aria-label="simple table" id="my_table">
            <TableHead>
              <TableRow>
                <TableCell>UserId</TableCell>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody id="tbody">

            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
   
}

export default MyTable;