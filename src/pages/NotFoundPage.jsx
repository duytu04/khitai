import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Nhập useNavigate để quay lại trang chủ

const NotFoundPage = () => {
  const navigate = useNavigate(); // Hook để điều hướng

  // Hàm xử lý khi nhấn nút quay lại trang chủ
  const handleGoHome = () => {
    navigate('/'); // Điều hướng về trang chủ
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Chiếm toàn bộ chiều cao viewport
        bgcolor: '#f5f5f5', // Nền nhẹ
        padding: 3,
        textAlign: 'center',
      }}
    >
      {/* Tiêu đề 404 */}
      <Typography
        variant="h1"
        component="h1"
        color="error" // Màu đỏ để nổi bật
        sx={{ fontSize: { xs: '3rem', md: '6rem' }, fontWeight: 'bold' }}
      >
        404
      </Typography>

      {/* Thông báo không tìm thấy */}
      <Typography variant="h5" component="h2" sx={{ mt: 2, mb: 3 }}>
        Trang bạn tìm kiếm không tồn tại
      </Typography>

      {/* Mô tả phụ */}
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Có vẻ như bạn đã đi lạc. Hãy quay lại trang chủ để tiếp tục khám phá!
      </Typography>

      {/* Nút quay lại trang chủ */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoHome}
        sx={{ textTransform: 'none', padding: '0.75rem 2rem' }}
      >
        Quay lại Trang chủ
      </Button>
    </Box>
  );
};

export default NotFoundPage;