import React, { useState } from 'react';
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const RansomwareSearch = () => {
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        if(inputValue !== "") {
            navigate(`/ransomware/${inputValue}`);
        }
        
    };
  
    return (
        <Container>
        <Typography variant="h4" gutterBottom >
          Ransomware Search
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh" // Adjust height of the centered container as needed
        >
          <Box width="50%">
            <TextField
              fullWidth
              label="Enter Ransomware Name"
              variant="outlined"
              value={inputValue}
              onChange={handleInputChange}
              sx={{ height: '100%' }} // Adjust height of TextField to match Button
            />
          </Box>
          <Box ml={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
              sx={{ height: '100%' }} // Adjust height of Button to match TextField
            >
              Fetch Data
            </Button>
          </Box>
        </Box>
      </Container>
    );
  };
  
export default RansomwareSearch;
