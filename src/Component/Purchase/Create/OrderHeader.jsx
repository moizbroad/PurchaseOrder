import React from 'react'
import { Container, Box, TextField, Typography, } from '@mui/material'



const OrderHeader = () => {
    const blueText = {
        color: 'blue',
    };
    return (
        <Container>

            <Box sx={{ width: '100%', maxWidth: 500 , color:'#003087',marginLeft:0, marginTop:2 }}>
                <Typography variant="h4" gutterBottom sx={{ color: '#003087' }}>
                    Create Order
                </Typography>
            </Box>


            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          '& fieldset': {
            borderColor: '#003087', // Set the border color to blue
            borderRadius: '12px',
             // Set the border radius to round
          },
        },
        '& .MuiInputLabel-root': { color: '#003087' }, // Set label text color to blue
        display: 'flex',
        justifyContent: 'space-between', // Add space between the three divs
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField label="Order name" id="outlined-size-normal" defaultValue="Z# 12345" />
      </div>

      <div>
        <TextField label="Order Title" id="outlined-size-normal" defaultValue="Title" />
      </div>

      <div>
        <TextField label="Select Supplier" id="outlined-size-normal" defaultValue="Dog Chew Nation" />
      </div>
    </Box>



            




        </Container>
    )
}

export default OrderHeader