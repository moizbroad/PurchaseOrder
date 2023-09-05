import React from 'react'
import { Container, Box, TextField, Typography, Button, Stack } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const OrderDetails = () => {
    return (
        <Container>


            <Box sx={{ width: '100%', maxWidth: 500, color: '#003087', marginLeft: 0, marginTop: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#003087' }}>
                    Create Details
                </Typography>
            </Box>


            <Box>

                <Box

                    display="flex"

                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '35ch' },
                        '& .MuiInputLabel-root': { color: 'blue' },
                    }}
                    noValidate
                    autoComplete="off"
                >

                    <TextField
                        id="outlined-multiline-static"
                        label="Add Notes"
                        multiline
                        rows={5}
                        defaultValue="Default Value"
                    />



                    <div>
                        <Typography variant="body" gutterBottom marginLeft={1}  >
                            Add Default Shipping Address      </Typography>


                        <FormGroup>



                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                                label="iOS style"
                            />

                        </FormGroup>
                    </div>



                </Box>
            </Box>

        </Container>
    )
}

export default OrderDetails