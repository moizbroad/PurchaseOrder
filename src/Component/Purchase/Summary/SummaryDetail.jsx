import React from 'react'
import { Container, Box, Typography, Divider, Select, InputLabel, Button, IconButton } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {

    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from '@mui/material';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SummaryDetail = (props) => {
    const { handleButtonClick,
        selectedRows,
        selectedSupplier,
        field,
        setField,
        field2,
        setField2


    } = props
    //const {selectedRowsData} = props



    const handleIconClick = () => {
        handleButtonClick('createOrder'); // Change the component name as needed
    };

    //const [age, setAge] = React.useState('');


    return (
        <Container>
            <Box sx={{ width: "100%", }}>


                <Box sx={{ width: '100%', color: '#003087', marginTop: 4, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} >
                    <div>
                        <IconButton onClick={handleIconClick}>
                            <KeyboardBackspaceIcon />
                        </IconButton>
                    </div>
                    <Typography variant="h4" gutterBottom sx={{ color: '#003087', paddingLeft: 0, fontWeight: 'bold' }}>
                        Summary Details
                    </Typography>
                </Box>

                <Divider />

                <Box display="flex" flexGrow={1} marginRight="4">
                    <p style={{ width: '50%', margin: 0 }}>Supplier:</p>
                    <p style={{ width: '50%', margin: 0 }}>
                        {selectedSupplier ? selectedSupplier.label : 'No supplier selected'}
                    </p>
                </Box>

                <Divider />



                <Box display="flex" alignItems="center" flexDirection="row">
                    <Box gap={1}>
                        <SupportAgentIcon />
                    </Box>
                    <Box display="flex" flexGrow={1}> {/* Use flexGrow to take up available width */}
                        <p style={{ width: '50%', margin: 0 }}>Shipping</p> {/* Adjust width as needed */}
                        <p style={{ width: '50%', margin: 0 }}>{props.field2}</p> {/* Adjust width as needed */}
                    </Box>
                </Box>

                <Divider />

                <div>
                    <FormControl variant="standard" sx={{ m: 0.5, width: '100%' }}>
                        <InputLabel id="demo-simple-select-standard-label">Notes</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"



                            sx={{ width: '100%' }}
                        >

                            <MenuItem>
                                {props.field}
                            </MenuItem>



                        </Select>
                    </FormControl>
                </div>


                <Box sx={{}}>
                    <Typography variant="h5" gutterBottom marginBottom={3} marginTop={3}
                        sx={{ color: '#003087', fontWeight: 'bold' }}>
                        Order Item
                    </Typography>



                    <div style={{ backgroundColor: '#F8FBFF' }}>

                        <TableContainer component={Paper} >
                            <Table style={{ backgroundColor: '#F8FBFF', fontWeight: 'bold' }}>
                                <TableBody>
                                    {selectedRows.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell><input type="checkbox" checked /></TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.category}</TableCell>
                                            <TableCell>{row.newValue}</TableCell>
                                            {/* Add more table cells as needed */}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                    <Divider />







                </Box>
                <Divider />

                <Box>
                    <Typography variant="h5" gutterBottom marginBottom={3} marginTop={3} sx={{ color: '#003087', fontWeight: 'bold' }}>
                        Cost
                    </Typography>


                </Box>
                <Divider />

                <Box display="block" alignItems="center" flexDirection="row" gap={0} marginTop={1}>

                    <Box display="flex" gap={60}>
                        <p>SubTotal</p>
                        <p >$$$$$$$$$   </p>

                    </Box>



                    <Box display="flex" gap={60}   >
                        <p>Shipping</p>
                        <p >$$$   </p>

                    </Box>
                </Box >
                <Divider />
                <Divider />

                <Box display="flex" alignItems="center" flexDirection="row" gap={0}>

                    <Box display="flex" gap={64}>
                        <p>Total</p>
                        <p >$$$   </p>

                    </Box>
                </Box>
                <Divider />

                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 4, marginRight: 4 }}>
                    <Button variant="outlined" style={{ width: '180px', marginRight: '14px' }}>Revised Order</Button>
                    <Button variant="contained" style={{ width: '180px' }}>Share & Save</Button>
                </Box>



            </Box>
        </Container>
    )
}

export default SummaryDetail