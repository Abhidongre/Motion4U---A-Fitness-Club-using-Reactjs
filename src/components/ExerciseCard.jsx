import React from 'react';
import { Link } from 'react-router-dom';
import exerciseImage from '../assets/icons/muscle.png'; 
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  console.log(exercise)
  return (
    <Card
      sx={{
        border: '1px solid #e0e0e0',
        textDecoration: 'none',
        maxHeight: "500px",
        display: 'block',
        '&:hover': { 
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', 
        },
        overflow: 'hidden',
        m: 1,
        position: 'relative',
      }}
    >
      <CardActionArea
        component={Link}
        to={`/exercise/${exercise.id}`} // Direct Link on whole area
        sx={{
          '&:hover .MuiCardActionArea-focusHighlight': {
            opacity: 0,
          },
        }}
      >
        <CardMedia
          component="img"
          image={exerciseImage} // Fixed image path
          alt={exercise.name}
          sx={{
            padding:'10px',
            width:'100%',
            height:'140px',
            objectFit: 'contain',
            alignContent:"center"
            
          }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center', 
            p: {
              xs: 1,
              sm: 2, 
            },
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              textTransform: 'capitalize',
            }}
          >
            {exercise.name}
          </Typography>
          <Box sx={{ mt: '0.3rem', textAlign: 'center' }}>
            <Typography
              variant="button"
              sx={{
                backgroundImage: 'linear-gradient(to right, #f44336, #ff5722)',
                color: '#fff',
                borderRadius: '4px',
                px: 2,
                py: 1,
                textTransform: 'none',
                display: 'inline-block',
                '&:hover':{
                  backgroundImage: 'linear-gradient(to right, #d32f2f, #c62828)', // Added hover effect for button
                  transition: 'background-image 0.3s ease',
                }
              }}
            >
              View More
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ExerciseCard;
