import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TablePagination, Paper, Typography, Box } from '@mui/material';



const CustomTable = () => {
  const data = [
    { id: 1, name: 'John', value: '$123' },
    { id: 2, name: 'Jane', value: '$123' },
    { id: 3, name: 'Doe', value: '$123' },
    { id: 4, name: 'Doe', value: '$123' },
    { id: 5, name: ' Doe', value: '$123' },
    { id: 6, name: ' Doe', value: '$123' },
    { id: 7, name: ' Doe', value: '$123' },
    { id: 8, name: ' Doe', value: '$123' },
    { id: 9, name: ' Doe', value: '$123' },
    { id: 10, name: ' Doe', value: '$123' },
    { id: 11, name: ' Doe', value: '$123' },
    // ... more data ...
  ];

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
    <Box sx={{ padding: '30px 150px 87px 105px' }}  >
      <TableContainer component={Paper} sx={{ backgroundColor: '#F8FBFF', paddingTop: 8 }}   >

        <Typography varient='h3' gutterBottom sx={{ paddingLeft: 4, color: '#003087', paddingBottom: 6, fontWeight: 'bold'  }} >
          All Purchase Order
        </Typography>
        <Table aria-label="simple table" >
          {/* Table header */}
          <TableHead   >
            <TableRow style={{paddingTop:'80'}}>
              <TableCell style={{ fontWeight: 'bold', color: '#003087', }}>PO #</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: '#003087' }}>Supplier</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: '#003087' }}>Order Date</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: '#003087' }}>Status</TableCell>
              <TableCell style={{ fontWeight: 'bold', color: '#003087' }}>Value</TableCell>
            </TableRow>
          </TableHead>

          {/* Table body */}
          <TableBody>
            {(rowsPerPage > 0
              ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : data
            ).map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.value}</TableCell>

              </TableRow>
            ))}

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
    </Box>
  );
};

export default CustomTable;
