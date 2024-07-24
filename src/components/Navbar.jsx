import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box, IconButton, Stack, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../App.css';
import Logo from '../assets/images/Logo.svg';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="sticky" className="black-appbar scrolled"
      sx={{
        height: { xs: '50px', sm: '60px', md: '60px', lg: '70px' },
      }}
    >
      <Toolbar>
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={Logo} alt="Logo" className="navbar-logo" />
            <Typography
              sx={{
                fontSize: { lg: '30px', md: '24px', sm: '18px', xs: '16px' },
                fontFamily: 'Montserrat',
                fontWeight: 700,
                marginLeft: '10px',
              }}
              component={Link}
              to="/"
              className="navbar-title"
            >
              Motion4U
            </Typography>
          </Box>
          <Stack direction="row" spacing={4} alignItems="center" sx={{ flex:1, justifyContent: 'center', display: { xs: 'none', md: 'flex', sm: "flex" } }}>
            <Typography fontSize="18px"fontWeight="600" >
              <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
              >
                Home
              </NavLink>
            </Typography>
            <Typography fontSize="18px" fontWeight="600">
              <NavLink
                to="/exercise"
                className={({ isActive }) => (isActive ? "navbar-link active" : "navbar-link")}
              >
                Exercises
              </NavLink>
            </Typography>
            <Typography fontSize="18px" fontWeight="600">
              <NavLink 
                to="/bmi-calculator" 
                className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
              >
                BMI Calculator
              </NavLink>
            </Typography>
            
          </Stack>
        </Box>
        <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: "flex-end" }}>
          <IconButton edge="end"aria-label="menu" onClick={handleDrawerOpen}sx={{backgroundColor:"black",color:"white"}}>
            <MenuIcon />
          </IconButton>
        </Box>
      </Toolbar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerClose}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={handleDrawerClose}
          onKeyDown={handleDrawerClose}
        >
          <List>
            <ListItem component={NavLink} to="/" end>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem component={NavLink} to="/exercise">
              <ListItemText primary="Exercises" />
            </ListItem>
            <ListItem component={NavLink} to="/bmi-calculator">
              <ListItemText primary="BMI Calculator" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
