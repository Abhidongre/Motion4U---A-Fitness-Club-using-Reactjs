import { Container, Grid, Box, Typography } from '@mui/material';
import about1 from '../assets/images/about1.jpg'; // Use optimized WebP image

const About = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, lg: 6 },
        px: { xs: 2, lg: 0 },
        textAlign: { xs: 'center', lg: 'left' },
        backgroundColor: '#f9f9f9',
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item lg={6} xs={12} sx={{ order: { xs: 2, lg: 1 } }}>
            <Box
              sx={{
                backgroundImage: `url(${about1})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: { xs: '300px', lg: '400px' },
                border:"0.2px solid black",
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                '&:hover': {
                  boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)',
                },
              }}
            />
          </Grid>
          <Grid item lg={6} xs={12} sx={{ order: { xs: 1, lg: 2 } }}>
            <Box className="about-text">
              <Typography
                variant="h3"
                textTransform="uppercase"
                sx={{
                  mb: 2,
                  fontSize: { xs: '1.8rem', lg: '2.8rem' },
                  fontWeight: 'bold',
                  color: '#231651',
                }}
              >
                Story About Us
              </Typography>
              <Typography
                className="first-para"
                sx={{
                  mb: 2,
                  fontSize: { xs: '1rem', lg: '1.125rem' },
                  color: '#666',
                  lineHeight: { xs: 1.6, lg: 1.8 },
                }}
              >
                Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean pretium sollicitudin, nascetur auci elit
                consequat ipsutissem niuis sed odio sit amet nibh vulputate cursus a amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quas officiis itaque repudiandae nam! Molestiae quo repudiandae veniam! Error, enim?
              </Typography>
              <Typography
                className="second-para"
                sx={{
                  fontSize: { xs: '1rem', lg: '1.125rem' },
                  color: '#666',
                  lineHeight: { xs: 1.6, lg: 1.8 },
                }}
              >
                Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida quam semper libero sit amet.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
