import React from 'react';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { Box } from '@mui/material';
import 'react-horizontal-scrolling-menu/dist/styles.css'; 
import '../App.css';

import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, isBodyParts }) => {
  return (
    <Box className="horizontal-scrollbar-container">
      <ScrollMenu wrapperClassName="scroll-menu">
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m="0 20px" 
            style={{ minWidth: '300px' }}
          >
            {isBodyParts ? (
              <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            ) : (
              <ExerciseCard exercise={item} />
            )}
          </Box>
        ))}
      </ScrollMenu>
    </Box>
  );
};

export default HorizontalScrollbar;
