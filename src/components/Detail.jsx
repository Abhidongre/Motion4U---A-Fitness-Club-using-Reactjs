import { Typography, Stack, Box , Button, capitalize} from "@mui/material";
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import exerciseImage from '../assets/icons/muscle.png'; 


const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment, instructions } = exerciseDetail || {};
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack
      direction={{ xs: 'column', lg: 'row' }}
      gap="40px"
      sx={{
        alignItems: "center",
        p: '20px 40px 0 0px',
        backgroundColor: '#F7F7FF',
      }}
    >
      {gifUrl && (
        <Box
          component="img"
          src={exerciseImage}
          alt={name}
          loading="lazy"
          className="detail-image"
          sx={{
            width:{lg:"500px"},
            height:"400px",
            borderRadius: 2,
            transition: 'transform 0.3s',
            '&:hover': {
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            },
          }}
        />
      )}
      <Stack spacing={2} alignItems="start" justifyContent="center" flex="1" sx={{pl:{xs:"60px"}}}>
        <Typography variant="h4" gutterBottom sx={{ color: '#2E282A', fontWeight: "bold",textTransform:"capitalize"}}>
          {name}
        </Typography>
        {instructions && instructions.map((line, index) => (
          <Typography
            key={index}
            sx={{
              textAlign: 'justify',
              mt: index === 0 ? 0 : 1,
              fontSize: "18px"
            }}
          >
            • {line}
          </Typography>
        ))}
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          {extraDetail.map((item, index) => (
            <Button
              key={index}
              sx={{
                backgroundColor: "#fff2db",
                borderRadius: '50%',
                padding: '10px', 
                display: 'flex', 
                alignItems: 'center',
              }}
            >
              <img src={item.icon} alt={item.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </Button>
          ))}
        </div>
      </Stack>
    </Stack>
  );
};

export default Detail;
