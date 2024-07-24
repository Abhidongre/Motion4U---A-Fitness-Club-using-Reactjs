import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => {
  return (
    <Card
      sx={{
        border: '1px solid #e0e0e0',
        textDecoration: 'none',
        maxHeight:"500px",
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
        sx={{
          '&:hover .MuiCardActionArea-focusHighlight': {
            opacity: 0,
          },
        }}
      >
        <CardMedia
          component="img"
          image={exercise.gifUrl}
          alt={exercise.name}
          sx={{
            width: '100%',
            height: {
              xs: '200px', 
              sm: '250px', 
              md: '280px', 
            },
            objectFit: 'cover',
            '&:hover': {
              transform: 'scale(1.1)', 
              transition: 'transform 0.2s ease-in-out',
            }
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
          <Box sx={{ mt: '0.3rem', textAlign: 'center' }}
          component={Link}
          to={`/exercise/${exercise.id}`}>
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
