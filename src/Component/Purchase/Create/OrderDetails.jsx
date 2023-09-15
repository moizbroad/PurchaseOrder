import React, { useState } from 'react';
import { Container, Box, TextField, Typography, Button, Switch } from '@mui/material';
import SummaryDetail from '../Summary/SummaryDetail';

const OrderDetails = (props) => {
    const { handleButtonClick } = props
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
                <Typography variant="h5" gutterBottom sx={{ color: '#003087' , fontWeight:'bold'}}>
                    Create Details
                </Typography>
            </Box>

            {showSummary ? (
                <SummaryDetail handleButtonClick={handleButtonClick} />
            ) : (
                <>
                    <div style={{ display: 'flex' , borderRadius: '10px'}}>
                        <div>
                            <TextField
                            
            
                            
                                id="outlined-multiline-static"
                                label="Add Notes"
                                multiline
                                rows={7}
                                defaultValue="Default Value"
                                sx={{
                                    width: '600px',
                                    borderRadius: '10px',
                                }}
                               
                                variant="outlined"
                               
                               
                            />
                        </div>

                        <div style={{
                            display: 'column', paddingLeft: 22,
                            width: 500,
                        }}>

                            <div style={{
                                marginLeft:3 , display: 'flex',

                                alignItems: 'center'
                             }}>
                                <Typography variant="body" gutterBottom style={{}}>
                                    Add Default Shipping Address
                                </Typography>

                                <div style={{ marginLeft: 180 }}>
                                    <Switch
                                        checked={checked}
                                        onChange={handleChange}
                                        color="primary"
                                    />

                                </div>
                             </div>

                             <div style={{ display: 'coloum', marginTop: 2 }}>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Add Notes"
                                    multiline
                                    rows={3}
                                    defaultValue="Default Value"
                                    style={{ width: '550px' }}
                                    variant="outlined"
                                />
                            </div>

                            <div style={{ display: 'flex',  marginTop: 12, width: '100%' , marginBottom:45}}>
                                <div style={{ flex: 1, margin: '0 4px' }}>

                                    <Button variant="outlined" fullWidth  sx={{borderRadius: '10px'}}>
                                        Save Draft
                                    </Button>
                                </div>
                                <div style={{ flex: 1, margin: '0 4px' }}>
                                    
                                    <Button variant="contained" onClick={() => handleButtonClick('orderSummary')} fullWidth  sx={{borderRadius: '10px'}}>
                                        Proceed to Summary
                                    </Button>
                                </div>
                            </div>


                        </div>


                    </div>





                </>
            )}
        </Container>
    );
}

export default OrderDetails;
