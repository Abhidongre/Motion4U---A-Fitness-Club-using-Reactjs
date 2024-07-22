import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: { lg: '60px', xs: '20px' }, px: { xs: '20px', lg: '40px' },paddingBottom:"60px"}}>
      <Typography 
        variant="h4" 
        mb="20px" 
        sx={{ 
          fontWeight:"600",
          color: '#231651', 
          textAlign: 'center' 
        }}
      >
        SAME <span style={{color:"red"}}>MUSCLE</span> GROUP EXERCISES
      </Typography>
      <Stack sx={{ mb: '40px' }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography 
        variant="h4" 
        mb="20px" 
        sx={{ 
          fontWeight:"600",
          color: '#231651', 
          textAlign: 'center' 
        }}
      >
        SAME <span style={{color:"red"}}>EQUIPMENT</span> EXERCISES
      </Typography>
      <Stack>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
