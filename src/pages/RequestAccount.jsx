import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Fade,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components cho giao diện
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  width: '100%',
  margin: '0 auto',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  padding: '10px 20px',
  backgroundColor: '#ff9900',
  '&:hover': {
    backgroundColor: '#e68a00',
  },
}));

const RequestAccount = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Xử lý gửi yêu cầu
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic giả lập gửi yêu cầu (thay bằng API thực tế)
    if (email && name) {
      setError('');
      setSuccess('Yêu cầu của bạn đã được gửi tới admin. Vui lòng chờ xác nhận!');
      setEmail('');
      setName('');
      setMessage('');
      // Có thể thêm timeout để quay lại trang login
      setTimeout(() => navigate('/login'), 3000);
    } else {
      setError('Vui lòng nhập đầy đủ thông tin!');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <Fade in={true} timeout={500}>
        <StyledPaper elevation={3}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, color: '#1a2b49', mb: 1 }}
            >
              Yêu Cầu Tạo Tài Khoản
            </Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>
              Điền thông tin để gửi yêu cầu tới admin.
            </Typography>
          </Box>

          <form onSubmit={handleSubmit}>
            {/* Tên */}
            <TextField
              fullWidth
              label="Họ và Tên"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ mb: 2 }}
              required
              InputProps={{
                sx: { borderRadius: '8px' },
              }}
            />

            {/* Email */}
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
              required
              type="email"
              InputProps={{
                sx: { borderRadius: '8px' },
              }}
            />

            {/* Tin nhắn (tùy chọn) */}
            <TextField
              fullWidth
              label="Tin nhắn (tùy chọn)"
              variant="outlined"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              sx={{ mb: 3 }}
              multiline
              rows={3}
              InputProps={{
                sx: { borderRadius: '8px' },
              }}
            />

            {/* Hiển thị thông báo */}
            {error && (
              <Typography
                variant="body2"
                sx={{ color: '#d32f2f', mb: 2, textAlign: 'center' }}
              >
                {error}
              </Typography>
            )}
            {success && (
              <Typography
                variant="body2"
                sx={{ color: '#388e3c', mb: 2, textAlign: 'center' }}
              >
                {success}
              </Typography>
            )}

            {/* Nút Gửi yêu cầu */}
            <StyledButton
              fullWidth
              variant="contained"
              type="submit"
              sx={{ mb: 2 }}
            >
              Gửi Yêu Cầu
            </StyledButton>
          </form>
        </StyledPaper>
      </Fade>
    </Box>
  );
};

export default RequestAccount;