import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Checkbox,
    TablePagination,

} from '@mui/material';

import {
    Container,
    Box,
    TextField,
    Typography,
    MenuItem,
    FormControl,
    Select,
    InputAdornment,
    Button,
    Stack,

} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AirportShuttleRoundedIcon from '@mui/icons-material/AirportShuttleRounded';
//import { blue } from '@mui/material/colors';





function ProductTable(props) {
    const { selectedRows, setSelectedRows } = props;
    // keep track selected data 
    //  const [selectedData, setSelectedData] = useState([]);



    // Initialize state to track selected rows
    // const [selectedRows, setSelectedRows] = useState([]);
    // const [selectedRowsData, setSelectedRowsData] = useState([]);

    // ensure checkbox is selected
    const [selectAll, setSelectAll] = useState(true); // Initialize to true


    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [age, setAge] = React.useState('');
    const [rows, setRows] = useState([
        {
            id: '1',
            col1: false,
            image: '',
            name: 'prod 1',
            category: 'cate1',
            stock: 120,

        },
        {
            id: '2',
            col1: false,
            image: '',
            name: 'prod 2',
            category: 'cate2',
            stock: 87,

        },
        {
            id: '3',
            col1: false,
            image: '',
            name: 'prod 3',
            category: 'cate3',
            stock: 40,

        },
        {
            id: '4',
            col1: false,
            image: '',
            name: 'prod 3',
            category: 'cate3',
            stock: 30,

        },

    ]);


    // Event handler to toggle row selection







    //const [selectAll, setSelectAll] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    const handleInputChange = (id, newValue) => {
        const updatedRows = rows.map((row) =>
            row.id === id
                ? {
                    ...row,
                    newValue
                }
                : row
        );
        setRows(updatedRows);
    };

    const handleSelectAllClick = () => {
        const updatedRows = rows.map((row) => ({
            ...row,
            col1: !selectAll, // Toggle the checkbox state
        }));
        setRows(updatedRows);
        setSelectAll(!selectAll); // Toggle the selectAll state
    };


    // now pick button data 
    // Handle checkbox click
    const handleCheckboxClick = (id,) => {
        const updatedRows = rows.map((row,) =>
            row.id === id
                ? {
                    ...row,
                    col1: !row.col1,

                }
                : row
        );

        setRows(updatedRows);

        // Filter the selected rows and update selectedRows
        const selectedData = updatedRows.filter((row) => row.col1);
        setSelectedRows(selectedData.map((row) => ({
            ...row,
            stock: parseInt(row.placeholder), // Update with the current button value (placeholder)
        })));
    };






    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    // blur event check value must be write in stock 
    const handleInputBlur = (id) => {
        const updatedRows = rows.map((row) =>
            row.id === id ? { ...row, placeholder: ensureWithinStock(row.stock, row.placeholder) } : row
        );
        setRows(updatedRows);
    };

    const ensureWithinStock = (stock, value) => {
        const intValue = parseInt(value);
        if (isNaN(intValue) || intValue < 1) {
            return '1'; // If the input is not a number or less than 1, set it to 1
        } else if (intValue > stock) {
            return stock.toString(); // If the input is greater than stock, set it to stock
        }
        return value; // Otherwise, keep the input value as it is
    };




    return (

        <Container>

            <Box sx={{ width: '100%', maxWidth: 500, color: '#003087', marginLeft: 0, marginTop: 3 }}>
                <Typography variant="h4" gutterBottom style={{ fontWeight: '150' }}>
                    Select Products to Order
                </Typography>
            </Box>

            <Box display={'flex'} alignItems={'center'} justifyContent={'flex-start'}>
                <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: '#F8FBFF' }}>
                    <Select
                        value={age}
                        onChange={handleChange}
                        displayEmpty
                        inputProps={{ 'aria-label': ' ' }}
                        sx={{ borderRadius: '10px' }}
                    >
                        <MenuItem value="" >
                            <span> Filter (All) </span>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <div style={{ marginLeft: 758 }}>
                    <TextField
                        variant="outlined"
                        placeholder="Search"
                        size="small"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            sx: { borderRadius: '10px', color: 'blue', backgroundColor: '#F8FBFF', border: '1px solid #F8FBFF' }
                        }}
                        sx={{ borderRadius: '50px' }} // Apply the border radius directly here
                    />
                </div>
            </Box>

            <div>
                <TableContainer component={Paper} style={{ marginTop: '16px', backgroundColor: '#F8FBFF' }}>
                    <Table aria-label='customized table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Checkbox
                                        checked={selectAll} // Use selectAll to determine the checked state
                                        onChange={handleSelectAllClick}
                                        inputProps={{ 'aria-label': 'select all rows' }}
                                    />

                                </TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Total in Stock</TableCell>
                                <TableCell>Qty</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>
                                            <Checkbox
                                                checked={row.col1}
                                                onChange={() => handleCheckboxClick(row.id)}
                                            />
                                        </TableCell>
                                        <TableCell>{<AirportShuttleRoundedIcon />}</TableCell>
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell>{row.category}</TableCell>
                                        <TableCell>{row.stock}</TableCell>
                                        <TableCell>{
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                                                <button

                                                    style={{
                                                        borderRadius: '50px',
                                                        color: 'White',
                                                        backgroundColor: '#003087',
                                                    }}
                                                    disabled={parseInt(row.placeholder) >= row.stock}
                                                // Disable the button when placeholder is greater than or equal to stock
                                                >
                                                    +
                                                </button>
                                                <input
                                                    type='number'
                                                    style={{
                                                        width: '50px',
                                                        fontSize: '14px',
                                                        borderRadius: '50px',
                                                    }}
                                                    onChange={(e) => handleInputChange(row.id, e.target.value)}
                                                    onBlur={() => handleInputBlur(row.id)}
                                                />

                                                <button

                                                    style={{
                                                        borderRadius: '50px',
                                                        color: 'White',
                                                        backgroundColor: '#003087',
                                                    }}
                                                    disabled={row.placeholder === '0'} // Disable the button when placeholder is '0'
                                                >
                                                    -
                                                </button>


                                            </div>

                                        }</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component='div'
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    style={{ margin: '20px' }}
                />
            </div>

        </Container>
    );
}

export default ProductTable;
