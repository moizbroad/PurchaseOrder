import React, { useState } from 'react';
import { Container, Box, TextField, Typography, IconButton, MenuItem, FormControl, Select } from '@mui/material';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const SupplierData = [
  {
    id: 1,
    label: 'Moiz',
  },
  {
    id: 2,
    label: 'Ali',
  },
  {
    id: 3,
    label: 'Usman',
  },
  {
    id: 4,
    label: 'Wahab sir',
  },
];

const OrderHeader = (props) => {
  const { handleButtonClick,
     selectedSupplier,
      setSelectedSupplier ,
      orderTitle,
      setOrderTitle
    } = props;

  const handleIconClick = () => {
    handleButtonClick('purchaseOrder');
  };

  const handleSupplierChange = (event) => {
    const selectedId = event.target.value;
    const selectedLabel = SupplierData.find((supplier) => supplier.id == selectedId)?.label || '';
    setSelectedSupplier({ id: selectedId, label: selectedLabel });
  };

   // stored custom text field data 
 

  return (
    <Container>
      <Box sx={{ width: '100%', color: '#003087', marginTop: 4, display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <div>
          <IconButton onClick={handleIconClick} style={{ color: '#003087' }}>
            <KeyboardBackspaceIcon />
          </IconButton>
        </div>
        <Typography variant="h4" gutterBottom sx={{ color: '#003087', paddingLeft: 2, fontWeight: 'bold' }}>
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
            margin: '0',
          },
          '& .MuiInputLabel-root': { color: '#003087' },
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          gap: '4px',
        }}
        noValidate
        autoComplete="off"
      >
        <TextField label="Order name" id="outlined-size-normal" defaultValue="Z# 12345" sx={{ flex: 1 }} />
        <TextField label="Order Title" id="outlined-size-normal"
          value={orderTitle}
          onChange={(e) => setOrderTitle(e.target.value)}
          sx={{ flex: 1 }} />

        <TextField
          id="outlined-select-currency"
          label="Supplier Data"
          select


          onChange={handleSupplierChange} // Call this function when the user selects a supplier
          value={selectedSupplier.id} // Use selectedSupplier.id as the selected value
          sx={{ flex: 1 }}
        >
          {SupplierData.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </Container>
  );
};

export default OrderHeader;
