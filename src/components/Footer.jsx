import {Box,Stack,Typography} from '@mui/material'
import Logo from '../assets/images/Logo.svg'
const Footer = () => {
  return (
    <Box sx={{background: "#1B1B1B",color:"white"}}>
      <Stack gap="5px" alignItems="center" pt="15px" direction="row" justifyContent="center">
        <img src={Logo} alt="logo"  width="50px" height="40px" />
        <Typography variant='h5' fontWeight="bold">
          Motion4U
        </Typography>
      </Stack>
      <Typography variant='h6' pb="20px" textAlign="center">
        Made By Abhishek Dongre
      </Typography>
    </Box>
  )
}

export default Footer