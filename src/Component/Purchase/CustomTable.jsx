import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TablePagination, Paper, Typography, Box } from '@mui/material';



const CustomTable = (props) => {
  const { search, setSearch } = props


  const data = [
    {
      id: 1,
      Title: 'P0 #1',
      supplier: 'John',
      OrderDate: '5/12/2001',
      Status: 'Arrived',
      value: '178.35'
    },
    {
      id: 2,
      Title: 'P0 #2',
      supplier: 'smith',
      OrderDate: '5/12/2001',
      Status: 'Shipped',
      value: '233.35'
    },
    {
      id: 3,
      Title: 'P0 #3',
      supplier: 'John',
      OrderDate: '7/12/2001',
      Status: 'Delivered',
      value: '768.35'
    },
    {
      id: 4,
      Title: 'P0 #4',
      supplier: 'David Wood',
      OrderDate: '5/12/2001',
      Status: 'Arrived',
      value: '178.35'
    },
    {
      id: 5,
      Title: 'P0 #5',
      supplier: 'Ali',
      OrderDate: '9/12/2001',
      Status: 'Shipped ',
      value: '788.35'
    },

  ];
      
  const [datas, setDatas] = useState("")


  // Step 1: Define the number of rows per page options
  const rowsPerPageOptions = [5, 10, 25];


  // Step 2: Initialize state for page and rowsPerPage
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);


  // Step 3: Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  // Step 4: Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset page when changing rows per page
  };


  // Step 5: Calculate the number of empty rows for styling
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);


  return (

    <Box sx={{ padding: '30px 230px 87px 172px' }}  >
      <TableContainer component={Paper} sx={{ backgroundColor: '#F8FBFF', paddingTop: 4 }}  >

        <Typography variant="h5" gutterBottom sx={{ paddingLeft: 4, color: '#003087', paddingBottom: 6, fontWeight: 'bold' }} >
          All Purchase Order
        </Typography>
        <Table aria-label="simple table" >
          {/* Table header */}
          <TableHead   >
            <TableRow style={{ paddingTop: '80' }}>
              <TableCell  >PO #</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Supplier</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Order Date</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Status</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Value</TableCell>
            </TableRow>
          </TableHead>

          {/* Table body */}
          <TableBody>
            {
              (rowsPerPage > 0
                ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : data
              )
                .map((row) => {
                  return (
                    <>
                      {
                        search == row.supplier 
                          ?
                          < TableRow key={row.id} >
                            <TableCell>{row.Title}</TableCell>
                            <TableCell>{row.supplier}</TableCell>
                            <TableCell>{row.OrderDate}</TableCell>
                            <TableCell>{row.Status}</TableCell>
                            <TableCell>${row.value}</TableCell>
                          </TableRow>
                          :
                          console.log(search)
                        


                      }
                    </>
                  )
                })
            }

            {/* Empty rows for consistent styling */}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={3} />
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Step 6: Add TablePagination component */}
        <TablePagination
          rowsPerPageOptions={rowsPerPageOptions}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box >
  );
};

export default CustomTable;
