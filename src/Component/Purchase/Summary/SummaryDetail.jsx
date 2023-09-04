import React from 'react'
import { Container, Box, Typography, Divider, Select, InputLabel } from '@mui/material'
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
            <Box>
                <Typography varient='h2' marginTop={10}>
                    Order Summary
                </Typography>

                <Divider />

                <Box display="flex" alignItems="center" flexDirection="row" gap={1}>
                    <Box>
                        <SupportAgentIcon />
                    </Box>
                    <Box display="flex" gap={105}>
                        <p>Supplier</p>
                        <p >Dog Chew Nation</p>
                    </Box>
                </Box>
                <Divider />

                <Box display="flex" alignItems="center" flexDirection="row" gap={1}>
                    <Box>
                        <SupportAgentIcon />
                    </Box>
                    <Box display="flex" gap={105}>
                        <p>Shipping</p>
                        <p >XXX</p>
                    </Box>
                </Box>
                <Divider />

                <div>
                    <FormControl variant="standard" sx={{ m: 0.5, minWidth: 1150 }}>
                        <InputLabel id="demo-simple-select-standard-label">Notes</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={age}
                            onChange={handleChange}
                            label="Age"
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
                    <Typography varient='h2' marginTop={10}>
                        Order Items
                    </Typography>

                    <Divider />

                    <Box display="flex" alignItems="center" flexDirection="row" gap={1}>
                        <Box>
                            <Checkbox {...label} />
                        </Box>
                        <Box display="flex" gap={25}>
                            <p>Supplier</p>
                            <p >Dog Chew Nation</p>
                            <p >Dog Chew Nation</p>
                            <p >Dog Chew Nation</p>
                        </Box>


                    </Box>
                    <Divider />

                    <Box display="flex" alignItems="center" flexDirection="row" gap={1}>
                        <Box>
                            <Checkbox {...label} />
                        </Box>
                        <Box display="flex" gap={25}>
                            <p>Shipping</p>
                            <p >Dog Chew Nation</p>
                            <p >Dog Chew Nation</p>
                            <p >Dog Chew Nation</p>
                        </Box>
                    </Box>
                    <Divider />
                    <Box display="flex" alignItems="center" flexDirection="row" gap={1}>
                        <Box>
                            <Checkbox {...label} />
                        </Box>
                        <Box display="flex" gap={25}>
                            <p>Shipping</p>
                            <p >Dog Chew Nation</p>
                            <p >Dog Chew Nation</p>
                            <p >Dog Chew Nation</p>
                        </Box>
                    </Box>




                </Box>


                <Box>
                    <Typography varient='h2' marginTop={5}>
                        Cost
                    </Typography>


                </Box>
                <Divider />

                <Box display="flex" alignItems="center" flexDirection="row" gap={1}>

                    <Box display="flex" gap={113}>
                        <p>SubTotal</p>
                        <p >$$$$$$$$$   </p>

                    </Box>


                </Box>
                <Box display="flex" gap={113}>
                    <p>Shipping</p>
                    <p >$$$   </p>

                </Box>
                <Divider />
                <Divider />

                <Box display="flex" alignItems="center" flexDirection="row" gap={1}>

                    <Box display="flex" gap={119}>
                        <p>Total</p>
                        <p >$$$   </p>

                    </Box>
                </Box>
                <Divider/>

                <box> </box>

            </Box>
        </Container>
    )
}

export default SummaryDetail