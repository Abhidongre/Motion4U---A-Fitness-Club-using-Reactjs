import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "../components/HorizontalScrollbar.jsx";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData]);
    };
    
    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?offset=0', exerciseOptions);
      const searchExercises = exerciseData.filter(
        (exercise) => exercise.name.toLowerCase().includes(search)
          || exercise.target.toLowerCase().includes(search)
          || exercise.equipment.toLowerCase().includes(search)
          || exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchExercises);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center">
      <Typography
        variant="h3"
        sx={{
          color: '#231651',
          position: 'relative',
          fontWeight:700,
          textTransform: 'uppercase',
          my: '40px',
          textAlign:"center"
        }}
      >
        Awesome Exercises
      </Typography>

      <Box position="relative" mb="30px" mt="30px">
        <TextField
          sx={{
            input: { fontWeight: "700",borderRadius:"50px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
          }}
          height="76px"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value.toLowerCase());
          }}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            background: "linear-gradient(90deg, hsla(333, 100%, 53%, 1) 0%, hsla(33, 94%, 57%, 1) 100%);",
            color: "white",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
            boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
            "&:hover": {
              bgcolor: "#D0101F",
            },
            transition: "all 0.3s ease-in-out",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      
      <Box sx={{ position: "relative", width: '100%',py:6,px:4}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
