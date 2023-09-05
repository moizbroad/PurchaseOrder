import React from 'react'
import { Container, Box, Typography, Divider, Select, InputLabel, Button } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';



const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SummaryDetail = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <Container>
            <Box sx={{ width: 800, height: 600 }}>
                <Typography variant="h5" gutterBottom marginBottom={5}>
                    Summary Details
                </Typography>

                <Divider />

                <Box display="flex" alignItems="center" flexDirection="row">
                    <Box gap={1}>
                        <SupportAgentIcon />
                    </Box>
                    <Box display="flex" flexGrow={1}> {/* Use flexGrow to take up available width */}
                        <p style={{ width: '50%', margin: 0 }}>Shipping</p> {/* Adjust width as needed */}
                        <p style={{ width: '50%', margin: 0 }}>XXX</p> {/* Adjust width as needed */}
                    </Box>
                </Box>
                <Divider />

                <Box display="flex" alignItems="center" flexDirection="row">
                    <Box gap={1}>
                        <SupportAgentIcon />
                    </Box>
                    <Box display="flex" flexGrow={1}> {/* Use flexGrow to take up available width */}
                        <p style={{ width: '50%', margin: 0 }}>Shipping</p> {/* Adjust width as needed */}
                        <p style={{ width: '50%', margin: 0 }}>XXX</p> {/* Adjust width as needed */}
                    </Box>
                </Box>

                <Divider />

                <div>
                    <FormControl variant="standard" sx={{ m: 0.5, width: '100%' }}>
                        <InputLabel id="demo-simple-select-standard-label">Notes</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Age"
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>


                <Box>
                    <Typography variant="h5" gutterBottom marginBottom={3} marginTop={3}>
                        Order Item
                    </Typography>

                    <Divider />

                    <Box display="flex" alignItems="center" flexDirection="row" gap={0}>
                        <Box>
                            <Checkbox {...label} />
                        </Box>
                        <Box sx={{ display: 'flex', gap: '100px', }}>
                            <p style={{ width: '100%', margin: 0 }}>Supplier</p> {/* Adjust width as needed */}
                            <p style={{ width: '100%', margin: 0 }}>Dog Chew Nation</p> {/* Adjust width as needed */}
                            <p style={{ width: '100%', margin: 0 }}>Dog Chew Nation</p> {/* Adjust width as needed */}
                        </Box>
                    </Box>
                    <Divider />



                    <Box display="flex" alignItems="center" flexDirection="row" gap={0}>
                        <Box>
                            <Checkbox {...label} />
                        </Box>
                        <Box sx={{ display: 'flex', gap: '100px', }}>
                            <p style={{ width: '100%', margin: 0 }}>Supplier</p> {/* Adjust width as needed */}
                            <p style={{ width: '100%', margin: 0 }}>Dog Chew Nation</p> {/* Adjust width as needed */}
                            <p style={{ width: '100%', margin: 0 }}>Dog Chew Nation</p> {/* Adjust width as needed */}
                        </Box>
                    </Box>
                    <Divider />

                    <Box display="flex" alignItems="center" flexDirection="row" gap={0}>
                        <Box>
                            <Checkbox {...label} />
                        </Box>
                        <Box sx={{ display: 'flex', gap: '100px', }}>
                            <p style={{ width: '100%', margin: 0 }}>Supplier</p> {/* Adjust width as needed */}
                            <p style={{ width: '100%', margin: 0 }}>Dog Chew Nation</p> {/* Adjust width as needed */}
                            <p style={{ width: '100%', margin: 0 }}>Dog Chew Nation</p> {/* Adjust width as needed */}
                        </Box>
                    </Box>





                </Box>
                <Divider />

                <Box>
                    <Typography variant="h5" gutterBottom marginBottom={3} marginTop={3}>
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
                    <Button variant="outlined" style={{ marginRight: '14px' }}>Revised Order</Button>
                    <Button variant="contained">Share & Save</Button>
                </Box>


            </Box>
        </Container>
    )
}

export default SummaryDetail