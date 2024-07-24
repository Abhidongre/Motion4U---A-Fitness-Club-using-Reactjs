import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import not_found from '../assets/images/not_found.webp'
import '../App.css';

const PageNotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      textAlign="center"
    >
      <Typography variant="h1" className="nav">404 Not Found</Typography>
      <Box className="display">
        <Box className="display__img">
          <img src={not_found} alt="404 Scarecrow" />
        </Box>
        <Box className="display__content">
          <Typography variant="h2" className="display__content--info">I have bad news for you</Typography>
          <Typography variant="body1" className="display__content--text" py={4}>
            The page you are looking for might be removed or is temporarily unavailable.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className="btn"
            component={Link}
            to="/"
          >
            Back to homepage
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PageNotFound;
