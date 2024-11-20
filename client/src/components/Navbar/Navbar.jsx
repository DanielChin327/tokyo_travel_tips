import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom'; // Use for React Router navigation
import { styled } from '@mui/material/styles';

function Navbar({ isLoggedIn, handleLogout }) {
  // Styled MUI Button for navigation links
  const NavButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    margin: '0 10px',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  return (
    <AppBar position="fixed" sx={{ backgroundColor: '#26292c' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Site Title */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Travel Site
        </Typography>

        {/* Navigation Links */}
        <div>
          <NavButton component={RouterLink} to="/">
            Home
          </NavButton>
          <NavButton component={RouterLink} to="/tokyo">
            Why Tokyo?
          </NavButton>
          <NavButton component={RouterLink} to="/itineraries">
            Itineraries
          </NavButton>
          {isLoggedIn ? (
            <NavButton onClick={handleLogout}>Logout</NavButton>
          ) : (
            <>
              <NavButton component={RouterLink} to="/login">
                Login
              </NavButton>
              <NavButton component={RouterLink} to="/register">
                Register
              </NavButton>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
