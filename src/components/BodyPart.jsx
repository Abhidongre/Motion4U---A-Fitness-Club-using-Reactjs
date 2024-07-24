import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      component="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({top:800,behavior:"smooth"})
      }
      }
      sx={{
        borderTop: bodyPart === item ? '5px solid #FF2625' : '',
        background: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '282px',
        cursor: 'pointer',
        gap: '47px',
        padding: '20px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        mt:"20px",
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease', 
        "&:hover": {
          transform:'translateY(-5px)',
          boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)', 
          zIndex: 1,
    
        }
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
      <Typography fontSize="1.2rem" fontWeight="bold" color="#3A1212" textTransform="capitalize">
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
