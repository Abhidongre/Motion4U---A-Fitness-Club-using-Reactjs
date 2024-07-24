import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return 'Loading...';

  return (
    <Box sx={{ mt: { lg: '40px', xs: '20px' } }} p="20px">
      <Typography variant="h4" mb="33px" textTransform="capitalize" textAlign="center" fontWeight="600">
        WATCH <span style={{ color: '#ff2625' }}>{name}</span> EXERCISE VIDEOS
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{ 
          flexDirection: 'row', 
          gap: { lg: '30px', xs: '10px' },
          '& > a': {
            flexBasis: { lg: '30%', xs: '45%' } 
          } 
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel="noopener noreferrer"
            style={{textDecoration:"none"}}>
            <Box>
              <img src={item.video.thumbnails[0].url} alt={item.video.title} height="60px" weight="100px" />
              
            </Box>
            <Typography color="initial">
              {item.video.title}
            </Typography>
            <Typography color="initial">
              {item.video.channelName}
            </Typography>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
