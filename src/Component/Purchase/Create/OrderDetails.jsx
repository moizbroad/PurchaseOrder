import React from 'react'
import { Container, Box, TextField, Typography, Button, Stack } from '@mui/material'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { useState } from 'react';
import {


    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
} from '@mui/material';

import SummaryDetail from '../Summary/SummaryDetail';

const OrderDetails = () => {

    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked((prevChecked) => !prevChecked);
    };


    const [isChecked, setIsChecked] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleProceedClick = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);

    };


    return (
        <Container>


            <Box sx={{ width: '100%', maxWidth: 500, color: '#003087', marginLeft: 0, marginTop: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#003087' }}>
                    Create Details
                </Typography>
            </Box>




            <div style={{ display: 'flex' }}>

                <div>
                    <TextField
                        id="outlined-multiline-static"
                        label="Add Notes"
                        multiline
                        rows={5}
                        defaultValue="Default Value"
                        style={{ width: '600px' }} // Set the desired width using inline CSS
                        variant="outlined"
                    />
                </div>


                <div style={{ display: 'flex' , paddingLeft:'20'}}>
                    <div style={{ marginRight: '200px' }}> {/* Add margin to create space */}
                        <Typography variant="body" gutterBottom  paddingLeft={3}>
                            Add Default Shipping Address
                        </Typography>
                    </div>

                    <div>
                        <Switch
                            checked={checked}
                            onChange={handleChange}
                            color="primary"
                        />
                    </div>
                </div>


            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end'}}>
                <Button variant="outlined">Save Draft</Button>
                <div style={{ marginLeft: '8px' }}>
                    {/* Add margin to create space between buttons */}
                    <Button variant="contained" onClick={handleProceedClick}>
                        Proceed to Summary
                    </Button>
                </div>
            </div>




            {/* Dialog Box */}
            <Dialog open={isDialogOpen} onClose={handleCloseDialog} maxWidth="lg">
                <DialogTitle></DialogTitle>
                <DialogContent>
                    {/* Render the SummaryDetail component when the dialog is open */}
                    {isDialogOpen && <SummaryDetail />}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} variant="outlined">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>









        </Container>
    )
}

export default OrderDetails