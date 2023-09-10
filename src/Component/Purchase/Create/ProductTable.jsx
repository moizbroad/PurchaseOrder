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
import { useParams } from 'react-router-dom';
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
import { blue } from '@mui/material/colors';

function ProductTable() {

    const {id}=useParams();
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [age, setAge] = React.useState('');
    const [rows, setRows] = useState([
        {
            id: 1,
            col1: false, // Checkbox state
            col2: <div style={{width: 2, height: 2, borderRadius:30, color:blue}}><AirportShuttleRoundedIcon /> </div>,
            col3: 'Dog Towel',
            col4: 'Catagory #1',
            col5: '150',
            col6: (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <button style={{ borderRadius: '50px' }}>+</button>
                    <input
                        placeholder='0'
                        style={{
                            width: '50px',
                            fontSize: '14px',
                            borderRadius: '50px',
                        }}
                    ></input>
                    <button style={{ borderRadius: '50px' }}>-</button>
                </div>
            ),
        },
        // Add more rows as needed
        {
            id: 2,
            col1: false, // Checkbox state
            col2: <AirportShuttleRoundedIcon />,
            col3: 'Dog Towel',
            col4: 'Catagory #1',
            col5: '150',
            col6: (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <button style={{ borderRadius: '50px' }}>+</button>
                    <input
                        placeholder='0'
                        style={{
                            width: '50px',
                            fontSize: '14px',
                            borderRadius: '50px',
                        }}
                    ></input>
                    <button style={{ borderRadius: '50px' }}>-</button>
                </div>
            ),
        },

        {
            id: 3,
            col1: false, // Checkbox state
            col2: <AirportShuttleRoundedIcon />,
            col3: 'Dog Towel',
            col4: 'Catagory #1',
            col5: '150',
            col6: (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <button style={{ borderRadius: '50px' }}>+</button>
                    <input
                        placeholder='0'
                        style={{
                            width: '50px',
                            fontSize: '14px',
                            borderRadius: '50px',
                        }}
                    ></input>
                    <button style={{ borderRadius: '50px' }}>-</button>
                </div>
            ),
        },

        {
            id: 4,
            col1: false, // Checkbox state
            col2: <AirportShuttleRoundedIcon />,
            col3: 'Dog Towel',
            col4: 'Catagory #1',
            col5: '150',
            col6: (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <button style={{ borderRadius: '50px' }}>+</button>
                    <input
                        placeholder='0'
                        style={{
                            width: '50px',
                            fontSize: '14px',
                            borderRadius: '50px',
                        }}
                    ></input>
                    <button style={{ borderRadius: '50px' }}>-</button>
                </div>
            ),
        },

        {
            id: 5,
            col1: false, // Checkbox state
            col2: <AirportShuttleRoundedIcon />,
            col3: 'Dog Towel',
            col4: 'Catagory #1',
            col5: '150',
            col6: (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <button style={{ borderRadius: '50px' }}>+</button>
                    <input
                        placeholder='0'
                        style={{
                            width: '50px',
                            fontSize: '14px',
                            borderRadius: '50px',
                        }}
                    ></input>
                    <button style={{ borderRadius: '50px' }}>-</button>
                </div>
            ),
        },

        {
            id: 6,
            col1: false, // Checkbox state
            col2: <AirportShuttleRoundedIcon />,
            col3: 'Dog Towel',
            col4: 'Catagory #1',
            col5: '150',
            col6: (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <button style={{ borderRadius: '50px' }}>+</button>
                    <input
                        placeholder='0'
                        style={{
                            width: '50px',
                            fontSize: '14px',
                            borderRadius: '50px',
                        }}
                    ></input>
                    <button style={{ borderRadius: '50px' }}>-</button>
                </div>
            ),
        },
    ]);


    
    const [selectAll, setSelectAll] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleSelectAllClick = () => {
        const updatedRows = rows.map((row) => ({
            ...row,
            col1: !selectAll, // Update the checkbox state
        }));
        setRows(updatedRows);
        setSelectAll(!selectAll);
    };

    const handleCheckboxClick = (id) => {
        const updatedRows = rows.map((row) =>
            row.id === id
                ? {
                    ...row,
                    col1: !row.col1, // Toggle the checkbox state
                }
                : row
        );
        setRows(updatedRows);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (

            <Container>
        
            <Box sx={{ width: '100%', maxWidth: 500, color: '#003087', marginLeft: 0, marginTop: 3 }}>
                <Typography variant="h4" gutterBottom>
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
                    >
                        <MenuItem value="" >
                            <span> Filter ALL </span>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <div style={{ marginLeft: 700 }}>
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
                        }}
                        sx={{ borderRadius: '50px' }} // Apply the border radius directly here
                    />
                </div>
            </Box>

            <div>
                <TableContainer component={Paper} style={{ margin: '20px' }}>
                    <Table aria-label='customized table'>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Checkbox
                                        checked={selectAll}
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
                                        <TableCell>{row.col2}</TableCell>
                                        <TableCell>{row.col3}</TableCell>
                                        <TableCell>{row.col4}</TableCell>
                                        <TableCell>{row.col5}</TableCell>
                                        <TableCell>{row.col6}</TableCell>
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
