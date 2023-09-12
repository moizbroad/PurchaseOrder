import React, { useState } from 'react'
import { Container, Box, TextField, Typography, IconButton, } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Navigator } from 'react-router-dom';
import PurchaseOrder from '../../../Pages/PurchaseOrder';




const OrderHeader = (props) => {
  const { handleButtonClick } = props
  const handleIconClick = () => {
    handleButtonClick('purchaseOrder'); // Change the component name as needed
  };
  
  return (
    <Container>

      <Box sx={{ width: '100%', color: '#003087', marginTop: 4, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} >
        <div>
          <IconButton onClick={handleIconClick}>
            <KeyboardBackspaceIcon />
          </IconButton>
        </div>
        <Typography variant="h4" gutterBottom sx={{ color: '#003087', paddingLeft: 2 }}>
          Create Order
        </Typography>
      </Box>


      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': {
            '& fieldset': {
              borderColor: '#003087',
              borderRadius: '12px',
            },
            margin: '0', // Remove the default margin
          },
          '& .MuiInputLabel-root': { color: '#003087' },
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%', // Set the form to 100% width
          gap: '4px', // Add a small space between text fields
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Order name" id="outlined-size-normal" defaultValue="Z# 12345" sx={{ flexGrow: 1 }} />
        <TextField label="Order Title" id="outlined-size-normal" defaultValue="Title" sx={{ flexGrow: 1 }} />
        <TextField label="Select Supplier" id="outlined-size-normal" defaultValue="Dog Chew Nation" sx={{ flexGrow: 1 }} />
      </Box>








    </Container>
  )
}

export default OrderHeader