import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box } from '@mui/material';
import 'react-horizontal-scrolling-menu/dist/styles.css'; 
import '../App.css'

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';

const HorizontalScrollbar = ({ data, setBodyPart, bodyPart, isBodyParts }) => {
  const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);

    return (
      <div onClick={() => scrollPrev()} className="arrow left-arrow">
        <img src={LeftArrowIcon} alt="left-arrow" />
      </div>
    );
  };

  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);

    return (
      <div onClick={() => scrollNext()} className="arrow right-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </div>
    );
  };

  return (
    <Box className="horizontal-scrollbar-container">
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} wrapperClassName="scroll-menu">
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
