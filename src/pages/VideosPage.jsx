import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { fetchData, youtubeOptions } from '../utils/fetchData';
import SearchExercises from '../components/SearchExercises';

const VideoPage = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  const fetchVideos = async (query) => {
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${query} exercise`, youtubeOptions);
    return exerciseVideosData.contents;
  };

  useEffect(() => {
    const fetchInitialVideos = async () => {
      const initialVideos = await fetchVideos('exercise');
      setVideos(initialVideos);
      setFilteredVideos(initialVideos);
      console.log(initialVideos);
      console.log(initialVideos);
    };

    fetchInitialVideos();
  }, []);

  const filterFunction = (search) => (video) =>
    video.video.title.toLowerCase().includes(search) ||
    video.video.description.toLowerCase().includes(search);

  return (
    <Box width="100%" m="auto" p={2}>
      <SearchExercises
        setItems={setFilteredVideos}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        title="Search Videos"
        searchPlaceholder="Search Videos"
        fetchUrl={fetchVideos}
        filterFunction={filterFunction}
      />
      <Grid container spacing={2}>
        {filteredVideos.map((video, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box>
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${video.video.videoId}`}
                title={video.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <Typography variant="h6" textAlign="center">
                {video.video.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default VideoPage;
