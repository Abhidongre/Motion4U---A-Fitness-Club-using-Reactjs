import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import ExerciseDetail from './pages/ExerciseDetail.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer.jsx';
import Navbar from "./components/Navbar";
import ExercisesPage from './pages/ExercisesPage.jsx';
import Bmi from './pages/Bmi.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

function App() {
  return (
    <Box width="100%" m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/exercise" element={<ExercisesPage />} />
        <Route path="/bmi-calculator" element={<Bmi />} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
