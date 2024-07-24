import React, { useState } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import ExerciseBg from "../assets/images/exercise_bg.webp";

const ExercisesPage = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <Box
        sx={{
          py:6,
          backgroundImage: `url(${ExerciseBg})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          textAlign: "center"
        }}
      >
        <Container>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={10}>
              <Box sx={{ textAlign: 'center',alignItems:"center" }}>
                <Typography variant="h2" component="h2" sx={{
                  fontSize: { xs: "30px", lg: "34px" },
                  textTransform: "uppercase",
                  fontWeight: 800,
                  color: "#fff",
                  fontFamily: "serif",
                  letterSpacing: "1px",
                }}>
                  Don’t <span style={{color:"orangered"}}>think</span>, begin <span  style={{color:"orangered"}}>today</span>!
                </Typography>
                <Typography variant="h6" sx={{
                  color: "#fff",
                  margin: "15px 0px 25px 0px",
                }}>
                  ¨Physical fitness is not only one of the most 
                  important keys to a healthy body, it is the basis of dynamic and creative intellectual activity.¨ - John F. Kennedy
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart} />
      
    </Box>
  );
}

export default ExercisesPage;
