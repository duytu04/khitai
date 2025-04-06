
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Fade,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/images/Logo_QĐNDVN.png';


// Styled components cho hiệu ứng
const StyledNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: 'none',
  color: 'white',
  padding: '0.5rem 1.2rem',
  borderRadius: '6px',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: 'rgba(255, 153, 0, 0.2)',
    transform: 'translateY(-2px)',
  },
  '&.active': {
    backgroundColor: '#ff9900',
    boxShadow: '0 4px 12px rgba(255, 153, 0, 0.3)',
  },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null); // Menu user
  const [mobileOpen, setMobileOpen] = useState(false); // Menu mobile
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  // Xử lý mở/đóng menu user
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Xử lý mở/đóng menu mobile
  const handleMobileMenuOpen = (event) => {
    setMobileOpen(true);
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileOpen(false);
    setAnchorEl(null);
  };

  // Xử lý điều hướng
  const handleProfileClick = () => {
    handleMenuClose();
    navigate('/user');
  };

  const handleSettingsClick = () => {
    handleMenuClose();
    navigate('/settings');
  };

  const handleLogoutClick = () => {
    handleMenuClose();
    // Logic đăng xuất: Xóa token khỏi localStorage
    localStorage.removeItem('authToken');
    // Điều hướng tới trang login
    navigate('/login');
  };

  return (
    <Box sx={{ mb: 2 }}>
      <AppBar
        position="sticky"
        elevation={4}
        sx={{
          bgcolor: '#1a2b49',
          background: 'linear-gradient(90deg, #1a2b49 0%, #2c3e66 100%)',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <Toolbar sx={{ minHeight: '70px !important' }}>
          {/* Logo */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': { opacity: 0.9 },
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: '55px',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))',
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'rotate(10deg) scale(1.1)' },
              }}
            />
            <Typography
              variant="h6"
              sx={{ ml: 1, color: 'white', fontWeight: 600, display: { xs: 'none', sm: 'block' } }}
            >
              QĐNDVN
            </Typography>
          </Box>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Navigation Links (Desktop) */}
          <List sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'row', gap: 1 }}>
            {['Home', 'Weapons', 'News', 'About'].map((text) => (
              <ListItem key={text} sx={{ width: 'auto', p: 0 }}>
                <StyledNavLink
                  to={text === 'Home' ? '/' : `/${text.toLowerCase()}`}
                  end={text === 'Home'}
                >
                  <ListItemText
                    primary={text}
                    primaryTypographyProps={{
                      fontWeight: 500,
                      fontSize: '1.1rem',
                      textAlign: 'center',
                    }}
                  />
                </StyledNavLink>
              </ListItem>
            ))}
          </List>

          {/* Hamburger Menu (Mobile) */}
          <IconButton
            sx={{ display: { xs: 'block', md: 'none' }, mr: 1 }}
            color="inherit"
            onClick={handleMobileMenuOpen}
          >
            <MenuIcon />
          </IconButton>

          {/* User Profile */}
          <Box sx={{ ml: { xs: 0, md: 2 } }}>
            <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
              <StyledAvatar
                alt="User Name"
                src="/path-to-user-avatar.jpg"
                sx={{ width: 40, height: 40 }}
              />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              TransitionComponent={Fade}
              PaperProps={{
                elevation: 3,
                sx: {
                  mt: 1.5,
                  minWidth: '200px',
                  bgcolor: '#ffffff',
                  borderRadius: '8px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                },
              }}
            >
              <MenuItem
                onClick={handleProfileClick}
                sx={{
                  py: 1.5,
                  '&:hover': { bgcolor: '#f5f5f5', color: '#ff9900' },
                }}
              >
                Profile
              </MenuItem>
              <MenuItem
                onClick={handleSettingsClick}
                sx={{
                  py: 1.5,
                  '&:hover': { bgcolor: '#f5f5f5', color: '#ff9900' },
                }}
              >
                Settings
              </MenuItem>
              <MenuItem
                onClick={handleLogoutClick}
                sx={{
                  py: 1.5,
                  color: '#d32f2f',
                  '&:hover': { bgcolor: '#ffebee', color: '#d32f2f' },
                }}
              >
                Logout
              </MenuItem>
            </Menu>
          </Box>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={mobileOpen}
            onClose={handleMobileMenuClose}
            TransitionComponent={Fade}
            PaperProps={{
              sx: {
                width: '200px',
                bgcolor: '#1a2b49',
                color: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
              },
            }}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            {['Home', 'Weapons', 'News', 'About'].map((text) => (
              <MenuItem
                key={text}
                onClick={() => {
                  navigate(text === 'Home' ? '/' : `/${text.toLowerCase()}`);
                  handleMobileMenuClose();
                }}
                sx={{
                  py: 1.5,
                  '&:hover': { bgcolor: '#2c3e66' },
                }}
              >
                {text}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;