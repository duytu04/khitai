import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Container
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MilitaryButton from '../components/common/MilitaryButton';
import './AboutPage.css';

// Hero Section
const HeroBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #0D1B2A 0%, #1B263B 100%)',
  color: '#fff',
  padding: theme.spacing(8, 2),
  textAlign: 'center'
}));

// Styled Card
const AboutCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1B263B',
  color: '#FFFFFF',
  borderRadius: '12px',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 6px 15px rgba(0,0,0,0.5)'
  }
}));

const AboutPage = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#0D1B2A', color: '#FFFFFF', py: 6 }}>
      {/* Hero */}
      <Fade in timeout={1000}>
        <HeroBox>
          <Container maxWidth="lg">
            <img
              src="/assets/images/logo.png"
              alt="Military Info Logo"
              style={{ width: 96, height: 96, marginBottom: 24 }}
            />
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: 2,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
              gutterBottom
            >
              Về Military Info
            </Typography>
            <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto', color: '#B0BEC5' }}>
              Military Info là nền tảng hàng đầu cung cấp thông tin chuyên sâu về khí tài quân sự,
              tin tức quốc phòng, và phân tích chiến lược...
            </Typography>
          </Container>
        </HeroBox>
      </Fade>

      {/* About Section */}
      <Fade in timeout={1200}>
        <Box sx={{ py: 8 }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }}
            >
              Chúng Tôi Là Ai?
            </Typography>
            <Box sx={{ maxWidth: 900, mx: 'auto', textAlign: 'left', color: '#CFD8DC' }}>
              <Typography variant="body1" sx={{ mb: 3 }}>
                Military Info được thành lập với mục tiêu trở thành nguồn thông tin đáng tin cậy...
              </Typography>
              <ul style={{ paddingLeft: '1.5rem', marginBottom: '2rem' }}>
                {[
                  {
                    label: 'Danh sách khí tài toàn diện',
                    desc: 'Thông tin chi tiết về xe tăng, máy bay, tàu chiến...'
                  },
                  {
                    label: 'Tin tức quốc phòng',
                    desc: 'Các bài viết về chính sách quốc phòng, công nghệ mới.'
                  },
                  {
                    label: 'Phân tích chuyên sâu',
                    desc: 'Báo cáo từ chuyên gia về chiến lược và hiệu suất khí tài.'
                  },
                  {
                    label: 'Trải nghiệm người dùng tối ưu',
                    desc: 'Responsive, trực quan, dễ sử dụng.'
                  },
                  {
                    label: 'Cộng đồng đam mê',
                    desc: 'Kết nối người yêu quân sự để chia sẻ kiến thức.'
                  }
                ].map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.75rem' }}>
                    <Typography variant="body1">
                      <strong>{item.label}:</strong> {item.desc}
                    </Typography>
                  </li>
                ))}
              </ul>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Đội ngũ chúng tôi gồm chuyên gia quân sự, nhà báo, kỹ sư công nghệ...
              </Typography>
              <Typography variant="body1">
                Military Info là nơi lý tưởng cho mọi đối tượng quan tâm đến quốc phòng.
              </Typography>
            </Box>
          </Container>
        </Box>
      </Fade>

      {/* Sứ mệnh */}
      <Fade in timeout={1400}>
        <Box sx={{ py: 8, bgcolor: '#1B263B' }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }}
            >
              Sứ Mệnh & Giá Trị
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  icon: '/assets/icons/search.svg',
                  title: 'Thông Tin Chính Xác',
                  desc: 'Dữ liệu được kiểm chứng từ nguồn uy tín.'
                },
                {
                  icon: '/assets/icons/menu.svg',
                  title: 'Trải Nghiệm Mượt Mà',
                  desc: 'Tối ưu responsive, tương thích đa nền tảng.'
                },
                {
                  icon: '/assets/images/weapons/tank.jpg',
                  title: 'Cập Nhật Liên Tục',
                  desc: 'Nội dung mới mỗi ngày.'
                }
              ].map((item, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <AboutCard>
                    <CardMedia
                      component="img"
                      image={item.icon}
                      alt={item.title}
                      sx={{
                        width: 56,
                        height: 56,
                        mx: 'auto',
                        my: 2,
                        borderRadius: item.icon.includes('.jpg') ? '50%' : '0'
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ fontWeight: 'medium' }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#B0BEC5' }}>
                        {item.desc}
                      </Typography>
                    </CardContent>
                  </AboutCard>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Fade>

      {/* CTA */}
      <Fade in timeout={1800}>
        <Box sx={{ py: 8, bgcolor: '#263238', textAlign: 'center' }}>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: 1,
                color: '#FFFFFF',
                mb: 2
              }}
            >
              Khám Phá Thế Giới Quân Sự
            </Typography>
            <Typography variant="body1" sx={{ color: '#B0BEC5', maxWidth: 600, mx: 'auto', mb: 4 }}>
              Tìm hiểu thêm về khí tài quân sự, tin tức quốc phòng và phân tích chuyên sâu...
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <MilitaryButton onClick={() => (window.location.href = '/weapons')}>
                Danh Sách Khí Tài
              </MilitaryButton>
              <MilitaryButton onClick={() => (window.location.href = '/news')}>
                Đọc Tin Tức
              </MilitaryButton>
            </Box>
          </Container>
        </Box>
      </Fade>
    </Box>
  );
};

export default AboutPage;
