// import React from 'react';
// import '../styles/Footer.css'; // Nhập CSS từ thư mục styles

// const Footer = () => {
//   return (
//     <footer className="footer">
//       {/* Phần nội dung chính của footer */}
//       <div className="footer-content">
//         {/* Phần giới thiệu */}
//         <div className="footer-section">
//           <h3>Giới thiệu</h3>
//           <p>
//             Nền tảng dành riêng cho khí tài quân sự và tin tức. Được xây dựng bởi những người đam mê cho cộng đồng đam mê.
//           </p>
//         </div>
//         {/* Phần liên hệ */}
//         <div className="footer-section">
//           <h3>Liên hệ</h3>
//           <p>Email: info@militaryapp.com</p>
//           <p>Điện thoại: +123-456-7890</p>
//         </div>
//         {/* Phần mạng xã hội */}
//         <div className="footer-section">
//           <h3>Theo dõi chúng tôi</h3>
//           <div className="footer-social">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
//           </div>
//         </div>
//       </div>
//       {/* Phần dưới cùng của footer */}
//       <div className="footer-bottom">
//         <p>© {new Date().getFullYear()} Military App. Bản quyền thuộc về chúng tôi.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
// src/components/Footer.jsx
import React from 'react';
import { Box, Typography, Grid, Link, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 5, mt: 5 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Giới thiệu */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Giới thiệu
            </Typography>
            <Typography variant="body2">
              Nền tảng dành riêng cho khí tài quân sự và tin tức. Được xây dựng bởi những người đam mê cho cộng đồng đam mê.
            </Typography>
          </Grid>

          {/* Liên hệ */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Liên hệ
            </Typography>
            <Typography variant="body2">Email: info@militaryapp.com</Typography>
            <Typography variant="body2">Điện thoại: +123-456-7890</Typography>
          </Grid>

          {/* Mạng xã hội */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Theo dõi chúng tôi
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
                Facebook
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
                Twitter
              </Link>
            </Box>
          </Grid>
        </Grid>

        {/* Phần dưới cùng */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} Military App. Bản quyền thuộc về chúng tôi.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
