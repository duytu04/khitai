
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import logo from '../assets/images/Logo_QĐNDVN.png';

const Navbar = () => {
  return (
    <Box>
      <AppBar position="sticky" sx={{ bgcolor: '#1a2b49' }}>
        <Toolbar>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: '50px',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'scale(1.1)' },
              }}
            />
          </Box>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Navigation Links */}
          <List sx={{ display: 'flex', flexDirection: 'row' }}>
            {['Home', 'Weapons', 'News', 'About'].map((text) => (
              <ListItem key={text} sx={{ width: 'auto', p: 0 }}>
                <NavLink
                  to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                  style={({ isActive }) => ({
                    textDecoration: 'none',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    backgroundColor: isActive ? '#ff9900' : 'transparent',
                    transition: 'background-color 0.3s ease',
                  })}
                >
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: '1.1rem',
                      textAlign: 'center',
                    }}
                  />
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;