import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Đường dẫn tới Navbar của bạn
import CategorySlider from './CategorySlider'; // Đường dẫn tới CategorySlider
import { Box } from '@mui/material'; // Thêm import Box

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navbar */}
      <Navbar />
      
      {/* CategorySlider */}
      <CategorySlider />
      
      {/* Nội dung của các trang */}
      <Box component="main" sx={{ flexGrow: 1 }}>
    
        <Outlet /> {/* Đây là nơi các trang con sẽ được render */}
      </Box>
    </Box>
  );
};

export default Layout;
