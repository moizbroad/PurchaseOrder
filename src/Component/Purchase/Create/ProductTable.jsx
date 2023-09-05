import React, { useState } from 'react';
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
    Stack
} from '@mui/material';
import AirportShuttleRoundedIcon from '@mui/icons-material/AirportShuttleRounded';
import SearchIcon from '@mui/icons-material/Search';
import {
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Checkbox,
    TablePagination,

} from '@mui/material';

const headings = ['Image', 'Product Name', 'Category', 'Total in Stock', 'Qty',];

const rows = [
    {
        id: 1, col1: true, col2: <AirportShuttleRoundedIcon />, col3: 'Dog Towel', col4: 'Catagory #1', col5: '150',

        col6: <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <button style={{ borderRadius: '50px' }}>+</button>
            <input placeholder='0' style={{ width: '50px', fontSize: '14px', borderRadius: '50px' }}></input >

            <button style={{ borderRadius: '50px' }}>-</button></div>
    },




    {
        id: 2, col1: true, col2: <AirportShuttleRoundedIcon />, col3: 'Dog Robbery', col4: 'Catagory #2', col5: '250',
        col6: <div style={{ display: 'flex', alignItems: 'center', gap: '5px', }}><button
            variant="contained"
            style={{ borderRadius: '50px', color: 'blue' }} >+</button>


            <input placeholder='0' style={{ width: '50px', fontSize: '14px', borderRadius: '50px' }}></input>

            <button style={{ borderRadius: '50px' }}>-</button> </div>
    },





    {
        id: 3, col1: true, col2: <AirportShuttleRoundedIcon />, col3: 'Dog Food ', col4: 'Catagory #3', col5: '200',
        col6: <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><button style={{ borderRadius: '50px' }}>+</button>

            <input placeholder='0' style={{ width: '50px', fontSize: '14px', borderRadius: '50px' }}></input>

            <button style={{ borderRadius: '50px' }}>-</button> </div>
    },

    // Add more rows as needed
];

const ProductTable = () => {
    const [age, setAge] = React.useState('');
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    // for styling 


    return (
        <Container >

            <Box >
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
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                </Box>


                <Box>
                    <div >
                        <Table sx={{ backgroundColor: '#F8FBFF' }}>
                            <TableHead >
                                <TableRow>
                                    <TableCell></TableCell> {/* Empty cell for checkboxes */}
                                    {headings.map((heading) => (
                                        <TableCell key={heading} sx={{ fontWeight: 'bold', color: '#003087' }}>{heading}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>
                                            <Checkbox checked={row.col1} />
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
                        <TablePagination sx={{ backgroundColor: '#F8FBFF' }}
                            rowsPerPageOptions={[5, 10, 25]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </div>
                </Box>

                






            </Box>

        </Container>
    );
};

export default ProductTable;
