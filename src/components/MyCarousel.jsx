import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { Typography, Box, Stack, Button } from '@mui/material';
import '../App.css';
import image2 from '../assets/images/image2.webp';
import image5 from '../assets/images/image5.webp'; 
import image6 from '../assets/images/image6.webp'; 
import image4 from '../assets/images/image4.webp'; 

const MyCarousel = () => {
  return (
    <Box className="carousel-container">
      <Carousel
        infiniteLoop={false}
        useKeyboardArrows
        showThumbs={false}
        transitionTime={1500}
        showStatus={false}
        stopOnHover
        swipeable
        autoPlay
        emulateTouch
        lazyLoad="anticipated"
      >
        <div
          className="slide"
          style={{
            backgroundImage: `url(${image4})`,
            backgroundSize: 'cover',
          }}
          alt="Fitness Background 1"
        ></div>
        <div
          className="slide"
          style={{
            backgroundImage: `url(${image2})`,
            backgroundSize: 'contain',
          }}
          alt="Fitness Background 2"
        ></div>
        <div
          className="slide"
          style={{
            backgroundImage: `url(${image5})`,
            backgroundSize: 'contain',
          }}
          alt="Fitness Background 3"
        ></div>
        <div
          className="slide"
          style={{
            backgroundImage: `url(${image6})`,
            backgroundSize: 'cover',
          }}
          alt="Fitness Background 4"
        ></div>
      </Carousel>
      <Box className="carousel-legend">
        <Stack
          spacing={2}
          sx={{
            ml: { sm: '60px' },
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            pl: '10px',
          }}
        >
          <Typography
            sx={{
              color: '#FF2625',
              fontWeight: 600,
              fontSize: 'clamp(1rem, 2vw, 2rem)',
            }}
          >
            Fitness Club
          </Typography>
          <Typography
            fontWeight={800}
            sx={{
              fontSize: 'clamp(1.3rem, 2vw + 1rem, 2.6rem)',
              my: '5px',
            }}
          >
            Your Trust,<br /> Our Expertise
          </Typography>
          <Typography
            sx={{
              fontSize: 'clamp(1rem, 1.6vw, 2rem)',
              fontFamily: 'Alegreya',
            }}
          >
            Check out the most effective exercises personalized to you
          </Typography>
          <Stack sx={{ justifyContent: 'center', alignItems: 'flex-start' }}>
            <Button
              className="explore-button"
              href="/exercise"
              sx={{
                textDecoration: 'none',
                color: 'white',
                mt: 2,
                height: 'clamp(30px, 4vw, 60px)',
                width: 'clamp(100px, 10vw, 250px)',
                fontSize: 'clamp(0.6rem, 1.5vw, 1.2rem)',
                textTransform: 'none',
                py: 3,
                lineHeight: "1.2",
              }}
            >
              Explore Exercises
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default MyCarousel;
