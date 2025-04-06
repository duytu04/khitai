import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Divider,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  maxWidth: 600,
  margin: '20px auto',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const User = () => {
  // Giả lập dữ liệu user (có thể thay bằng dữ liệu thực từ API)
  const user = {
    name: 'Nguyen Van A',
    email: 'nguyenvana@example.com',
    avatar: '/path-to-user-avatar.jpg',
    bio: 'Người dùng nhiệt tình của QĐNDVN.',
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', pt: 4 }}>
      <StyledPaper elevation={3}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar
            src={user.avatar}
            alt={user.name}
            sx={{
              width: 120,
              height: 120,
              mb: 2,
              border: '4px solid #ff9900',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          />
          <Typography variant="h4" sx={{ fontWeight: 600, color: '#1a2b49' }}>
            {user.name}
          </Typography>
          <Typography variant="body1" sx={{ color: '#666', mb: 2 }}>
            {user.email}
          </Typography>
          <Divider sx={{ width: '80%', mb: 2 }} />
          <Typography variant="body2" sx={{ textAlign: 'center', color: '#333', mb: 3 }}>
            {user.bio}
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#ff9900',
              '&:hover': { bgcolor: '#e68a00' },
              borderRadius: '20px',
              px: 4,
            }}
          >
            Edit Profile
          </Button>
        </Box>
      </StyledPaper>
    </Box>
  );
};

export default User;