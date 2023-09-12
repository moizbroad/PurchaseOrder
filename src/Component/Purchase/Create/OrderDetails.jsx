import React, { useState } from 'react';
import { Container, Box, TextField, Typography, Button, Switch } from '@mui/material';
import SummaryDetail from '../Summary/SummaryDetail';

const OrderDetails = (props) => {
      const {handleButtonClick} = props
    const [checked, setChecked] = useState(false);
    const [showSummary, setShowSummary] = useState(false);

    const handleChange = () => {
        setChecked((prevChecked) => !prevChecked);
    };

    const handleProceedClick = () => {
        setShowSummary(true);
    };

    return (
        <Container>
            <Box sx={{ width: '100%', maxWidth: 500, color: '#003087', marginLeft: 0, marginTop: 2 }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#003087'}}>
                    Create Details
                </Typography>
            </Box>

            {showSummary ? (
                <SummaryDetail />
            ) : (
                <>
                    <div style={{ display: 'flex' }}>
                        <div>
                            <TextField
                                id="outlined-multiline-static"
                                label="Add Notes"
                                multiline
                                rows={5}
                                defaultValue="Default Value"
                                style={{ width: '600px' }}
                                variant="outlined"
                            />
                        </div>
                        <div style={{ display: 'flex', paddingLeft: '20' }}>
                            <div style={{ marginRight: '200px' }}>
                                <Typography variant="body" gutterBottom paddingLeft={3}>
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

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant="outlined">Save Draft</Button>
                        <div style={{ marginLeft: '8px' }}>
                            <Button variant="contained" onClick={()=>handleButtonClick('orderSummary')}>
                                Proceed to Summary
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </Container>
    );
}

export default OrderDetails;
