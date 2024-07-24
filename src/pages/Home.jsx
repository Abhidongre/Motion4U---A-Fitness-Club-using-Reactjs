import { Box } from "@mui/material";
import MyCarousel from "../components/MyCarousel";
import About from "../components/About";


const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <p style={{textAlign:"center",backgroundColor:"#E5E4E2",}}>
        Image By:Freepik
      </p>
      <About />
    </Box>
  )
}

export default Home