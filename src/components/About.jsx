import React from 'react';
import { Stack, Grid, Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import about1 from '../assets/images/about1.webp';
import Background from '../assets/images/bg2.webp';
import step1 from '../assets/images/step1.webp';
import step2 from '../assets/images/step2.webp';
import calc from '../assets/images/calc.webp';

const About = () => {
  return (
    <>
      <Box
        sx={{
          py: { xs: 4, lg: 6 },
          px: { xs: 2, lg: 6 },
          textAlign: { xs: 'center', lg: 'left' },
          backgroundColor: 'white',
        }}
      >
        <Grid container spacing={4} alignItems="center" pb={6}>
          <Grid item lg={6} xs={12}>
            <Box
              sx={{
                backgroundImage: `url(${about1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                height: { xs: 300, lg: 500 },
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                  boxShadow: '0 6px 25px rgba(0, 0, 0, 0.1)',
                  border: '0.5rem solid rgba(0, 0, 0, 0.2)',
                },
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <Box px={4}>
              <Typography variant='h3'
                textTransform="uppercase"
                sx={{
                  mb: 2,
                  fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
                  fontWeight: '600',
                  color: '#231651',
                  textAlign: 'center',
                  fontFamily: 'sans-serif',
                }}
              >
                Story About Us
              </Typography>
              <Typography
                sx={{
                  mb: 2,
                  fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                  color: 'rgb(0,0,0)',
                  textAlign: 'justify',
                }}
              >
                Welcome to Motion4u, your ultimate destination for all things fitness. At Motion4u, we believe in empowering individuals to achieve their health goals by providing comprehensive access to a wide variety of exercises.
              </Typography>
              <Typography
                sx={{
                  fontSize: 'clamp(1rem, 2vw, 1.4rem)',
                  color: 'rgb(0,0,0)',
                  textAlign: 'justify',
                }}
              >
                Our mission is to help everyone, regardless of their fitness level, explore and engage in diverse exercises, fostering a healthier and more active lifestyle. Join us on this journey to better health and discover the perfect workout tailored to your needs with Motion4u.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{
        background: `url(${Background}) no-repeat center center/cover`,
        width: '100%',
        height: { xs: 200, md: 300 },
      }}>
        <Stack
          sx={{
            backgroundColor: "rgba(0,0,0, 0.8)",
            minHeight: { xs: 200, md: 300 },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: '#fff',
              fontSize: 'clamp(1rem, 4vw, 2rem)',
              textAlign: 'center',
              px: { xs: 2, lg: 6 },
            }}
          >
            "You will never know what <br />your body can do,
            unless you are willing to <br />push yourself to the limits."
          </Typography>
          <Button
            className="explore-button"
            href="/exercise"
            sx={{
              textDecoration: 'none',
              color: 'white',
              mt: 2,
              height: 'clamp(30px, 4vw, 50px)',
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
      </Box>
      <Box
        sx={{
          py: { xs: 4, lg: 6 },
          px: { xs: 2, lg: 6 },
          textAlign: 'center',
          backgroundColor: '#f4f4f4',
        }}
      >
        <Typography variant="h3"
          textTransform="uppercase"
          sx={{
            mb: 4,
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 'bold',
            color: '#231651',
            py: 4,
          }}
        >
          How It Works ?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                },
              }}
            >
              <CardMedia
                component="img"
                alt="Step 1"
                image={step1}
                loading="lazy"
                sx={{
                  height: 400,
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 2, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', color:"#231651", fontWeight:"600" }}>
                  Tailored Workouts
                </Typography>
                <Typography variant="body1" color="text.secondary" textAlign='justify' sx={{ fontSize: 'clamp(0.8rem, 1.5vw, 1rem)', px: 2 }}>
                  Users can easily find exercises that match their specific needs by filtering based on body part, equipment, or muscle group, ensuring a personalized and effective workout experience.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                },
              }}
            >
              <CardMedia
                component="img"
                alt="Step 2"
                image={step2}
                loading="lazy"
                sx={{
                  height: 400,
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 2, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', color:"#231651", fontWeight:"600" }}>
                  Comprehensive Guidance
                </Typography>
                <Typography variant="body1" color="text.secondary" textAlign='justify' sx={{ fontSize: 'clamp(0.8rem, 1.5vw, 1rem)', px: 2 }}>
                  Detailed exercise descriptions, instructional videos, and tips help users perform exercises correctly and safely, maximizing their workout results while minimizing the risk of injury.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card
              sx={{
                height: '100%',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'translateY(-10px)',
                },
              }}
            >
              <CardMedia
                component="img"
                alt="Step 3"
                image={calc}
                loading="lazy"
                sx={{
                  height: 400,
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography variant="h5" component="div" sx={{ mb: 2, fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', color:"#231651", fontWeight:"600" }}>
                  Progress Tracking
                </Typography>
                <Typography variant="body1" color="text.secondary" textAlign='justify' sx={{ fontSize: 'clamp(0.8rem, 1.5vw, 1rem)', px: 2 }}>
                  Tools like BMI calculators and progress trackers allow users to monitor their fitness journey, set goals, and stay motivated as they see tangible improvements over time.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default About;
