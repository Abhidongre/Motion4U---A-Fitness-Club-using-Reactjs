import { useEffect, useState } from "react";
import { Stack, Typography, Pagination, Grid } from "@mui/material";
import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from "./ExerciseCard";


const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 9;

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }
      
      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  return (
    <>
    <Stack id="exercises" sx={{ mt: { xs: '50px', lg: '50px' } }}>
      <Typography
        variant="h3"
        sx={{
          color: '#231651',
          position: 'relative',
          textAlign: "center",
          fontWeight: 700,
          textTransform: 'uppercase',
          mb: '60px',
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
        }}
      >
        Showing Results
      </Typography>
      
      {/* Exercises List */}
      <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} justifyContent="center" sx={{ backgroundColor: "#F7F7FF", padding: "10px 60px 0 60px" }}>
        {currentExercises.map((exercise, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ExerciseCard exercise={exercise} />
          </Grid>
        ))}
      </Grid>
      <Stack sx={{ alignItems: 'center', pb: '20px', backgroundColor: "#F7F7FF" }}>
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="primary"
            variant="outlined"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            sx={{ bgcolor: "white" }}
          />
        )}
      </Stack>
    </Stack>
    </>
  );
};

export default Exercises;
