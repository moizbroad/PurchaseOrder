import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Button, Grid } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from "react-router-dom";




const Header = (props) => {
    const { handleButtonClick } = props

    // main navigation 
    const navigate = useNavigate();
    function handleClick() {
        navigate("/CreateOrder");
    }


    const [age, setAge] = React.useState('');






    const handleChange = (event) => {
        setAge(event.target.value);
    };
    // paddingLeft={12}  paddingRight={12}

    return (

        <Container>

            <Box  >
                <Grid container alignItems="center">
                    <Grid item xs={12} sm={6} mt={5}>
                        <Typography variant="h4" gutterBottom sx={{ color: '#003087', fontWeight: 'bold' }} paddingLeft={0}>
                            Purchase Order
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} >

                        <Box display="flex" justifyContent="flex-end" gap={1} marginRight={7}>

                            <Button variant="contained"
                                onClick={() => handleButtonClick('createOrder')}
                                sx={{ backgroundColor: '#003087', color: 'white', borderRadius: '10px' }}>
                                Create New Order
                            </Button>

                            <Button variant="outlined" className="custom-button" sx={{
      borderRadius: '10px', // Adjust the border radius as needed
    }}>

                                Manage Supplies

                            </Button>
                        </Box>
                    </Grid>
                </Grid>


                <Box display={'flex'} justifyContent={'flex-start'} alignItems=

                    {'center'} paddingLeft={0} gap={1}  >

                    <FormControl sx={{ mt: 1, backgroundColor: '#F8FBFF', }}>
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" sx={{ backgroundColor: '#F8FBFF' }}>
                                <span>Filter (All)</span>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>

                    </FormControl>



                    <div style={{ marginLeft: 720 }}>
                        <TextField

                            variant="outlined"
                            placeholder="Search"
                            size="small"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                                sx: { borderRadius: '10px', color: 'blue', backgroundColor: '#F8FBFF', border: '1px solid #F8FBFF' }
                            }}

                        />
                    </div>



                </Box>


            </Box>


        </Container>

    )
}

export default Header