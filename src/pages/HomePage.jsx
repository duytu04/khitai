





import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Container,
  Tooltip,
  IconButton,
} from '@mui/material';
import { Circle, ArrowUpward } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Chart from 'chart.js/auto';

// Các thành phần styled
const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #0D1B2A 0%, #1B263B 100%)',
  padding: '60px 20px',
  color: '#FFFFFF',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '12px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
  animation: 'fadeIn 1.5s ease-in-out',
  height: { xs: '300px', md: '400px' },
}));

const HeroImage = styled(CardMedia)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'opacity 1s ease-in-out',
  zIndex: 0,
}));

const HeroContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
}));

const MilitaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#2E7D32',
  color: '#FFFFFF',
  padding: '12px 24px',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#4CAF50',
    transform: 'translateY(-2px) scale(1.03)',
    boxShadow: '0 6px 15px rgba(0,0,0,0.4)',
  },
}));

const CategoryCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1B263B',
  color: '#FFFFFF',
  height: '250px',
  borderRadius: '10px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
  animation: 'slideUp 0.8s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px) scale(1.02)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
    backgroundColor: '#2E7D32',
  },
  '&:focus': {
    outline: '2px solid #4CAF50',
    outlineOffset: 2,
  },
}));

const NewsCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#415A77',
  color: '#FFFFFF',
  borderRadius: '10px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  animation: 'slideUp 1s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: 2,
  animation: 'fadeIn 1s ease-in-out',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: '#4CAF50',
  },
}));

const ScrollTopButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#2E7D32',
  color: '#FFFFFF',
  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  transition: 'all 0.3s ease, opacity 0.3s ease',
  opacity: 0.8,
  '&:hover': {
    backgroundColor: '#4CAF50',
    opacity: 1,
    transform: 'translateY(-2px)',
  },
  '&:focus': {
    outline: '2px solid #4CAF50',
    outlineOffset: 2,
  },
}));

const HomePage = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  // Dữ liệu tin tức nổi bật
  const featuredNews = [
    {
      title: 'Trung Quốc ra mắt UAV tàng hình WJ-700',
      description: 'Ngày 15/03/2025, Trung Quốc công bố UAV tàng hình WJ-700 với khả năng tấn công chính xác.',
      image: 'https://image.viettimes.vn/460x306/Uploaded/2025/bpcivpwi/2019_12_03/tw328___2762405_3122019.jpg',
    },
    {
      title: 'UAV Bayraktar TB2 lập kỷ lục xuất khẩu',
      description: 'Ngày 01/04/2025, Thổ Nhĩ Kỳ thông báo Bayraktar TB2 được hơn 20 quốc gia đặt hàng.',
      image: 'https://image.viettimes.vn/460x306/Uploaded/2025/bpcivpwi/2019_12_03/tw328___2762405_3122019.jpg',
    },
    {
      title: 'Mỹ nâng cấp MQ-9 Reaper với AI',
      description: 'Ngày 10/05/2025, Không quân Mỹ tích hợp trí tuệ nhân tạo vào UAV MQ-9 Reaper.',
      image: 'https://image.viettimes.vn/460x306/Uploaded/2025/bpcivpwi/2019_12_03/tw328___2762405_3122019.jpg',
    },
  ];

  // Dữ liệu ảnh Hero
  const heroImages = [
    {
      src: 'https://image.tienphong.vn/w890/Uploaded/2025/fcivbpcg/2021_05_13/vukhitrungquoc-1567.jpeg.webp',
      alt: 'UAV MQ-9 Reaper của Mỹ trong sứ mệnh trinh sát',
    },
    {
      src: 'https://image.tienphong.vn/w890/Uploaded/2025/fcivbpcg/2021_05_13/vukhitrungquoc-1567.jpeg.webp',
      alt: 'UAV Bayraktar TB2 của Thổ Nhĩ Kỳ trong diễn tập',
    },
    {
      src: 'https://image.tienphong.vn/w890/Uploaded/2025/fcivbpcg/2021_05_13/vukhitrungquoc-1567.jpeg.webp',
      alt: 'UAV Wing Loong II của Trung Quốc tại triển lãm hàng không',
    },
    {
      src: 'https://image.tienphong.vn/w890/Uploaded/2025/fcivbpcg/2021_05_13/vukhitrungquoc-1567.jpeg.webp',
      alt: 'UAV Wing Loong II của Trung Quốc tại triển lãm hàng không',
    },
    {
      src: 'https://image.tienphong.vn/w890/Uploaded/2025/fcivbpcg/2021_05_13/vukhitrungquoc-1567.jpeg.webp',
      alt: 'UAV Wing Loong II của Trung Quốc tại triển lãm hàng không',
    },
  ];

  // Tự động chuyển ảnh Hero
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // Tự động chuyển tin tức
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % featuredNews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredNews.length]);

  // Theo dõi cuộn để hiển thị nút Scroll to Top
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Khởi tạo biểu đồ
  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (!ctx) return;

      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      chartInstanceRef.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            'MQ-9 Reaper',
            'Bayraktar TB2',
            'Wing Loong II',
            'Global Hawk',
            'CH-5 Rainbow',
            'Heron TP',
            'Akinci',
            'Predator C',
            'Hermes 900',
            'TB-001',
          ],
          datasets: [
            {
              label: 'Trinh sát',
              data: [90, 80, 75, 95, 70, 85, 80, 75, 80, 70],
              backgroundColor: '#4CAF50',
              borderColor: '#388E3C',
              borderWidth: 1,
            },
            {
              label: 'Tấn công',
              data: [85, 75, 70, 20, 65, 50, 80, 85, 40, 60],
              backgroundColor: '#F44336',
              borderColor: '#D32F2F',
              borderWidth: 1,
            },
            {
              label: 'Tàng hình',
              data: [50, 30, 40, 60, 35, 45, 55, 70, 50, 45],
              backgroundColor: '#2196F3',
              borderColor: '#1976D2',
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              stacked: true,
              title: { display: true, text: 'UAV' },
              ticks: { autoSkip: false, maxRotation: 45, minRotation: 45 },
            },
            y: {
              stacked: false,
              beginAtZero: true,
              title: { display: true, text: 'Điểm (0-100)' },
            },
          },
          plugins: {
            legend: { display: true, position: 'top' },
            tooltip: {
              callbacks: {
                label: (context) => `${context.dataset.label}: ${context.raw}`,
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  const categories = [
    {
      title: 'Máy Bay Không Người Lái UAV',
      description: 'Máy bay không người lái như MQ-9 Reaper (Mỹ), Bayraktar TB2 (Thổ Nhĩ Kỳ), Wing Loong II (Trung Quốc).',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/MQ-9_Reaper_UAV_%28cropped%29.jpg',
    },
    {
      title: 'Máy Bay Chiến Đấu',
      description: 'F-22 Raptor (Mỹ), Su-57 (Nga), Eurofighter Typhoon (EU).',
      image: 'https://photo2.tinhte.vn/data/attachment-files/2023/02/6322962_cover_f22raptor.jpg',
    },
    {
      title: 'Xe Tăng',
      description: 'M1 Abrams (Mỹ), T-90 (Nga), Leopard 2 (Đức).',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/73/M1A2_Abrams_Iraq_2005.jpg',
    },
    {
      title: 'Tàu Chiến',
      description: 'Tàu khu trục, tàu sân bay, tàu ngầm hiện đại.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/USS_Zumwalt_%28DDG-1000%29_steams_in_the_Atlantic_Ocean_on_18_December_2015_%28151218-N-ZZ999-120%29.JPG',
    },
    {
      title: 'Tên Lửa',
      description: 'Tên lửa đạn đạo, phòng không, vũ khí hạt nhân.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Tomahawk_Block_IV_cruise_missile_-crop.jpg',
    },
  ];

  // Xử lý điều hướng bàn phím cho tin tức
  const handleNewsKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      navigate('/news');
    }
  };

  // Xử lý cuộn lên đầu trang
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Xử lý điều hướng bàn phím cho nút Scroll to Top
  const handleScrollTopKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleScrollToTop();
    }
  };

  return (
    <Box sx={{ backgroundColor: '#0D1B2A', minHeight: '100vh', py: 4 }}>
      <Helmet>
        <title>Khám Phá Công Nghệ UAV & Sức Mạnh Quân Sự</title>
        <meta
          name="description"
          content="Tìm hiểu về các máy bay không người lái (UAV) tiên tiến như MQ-9 Reaper, Bayraktar TB2, cùng các khí tài quân sự khác. Cập nhật tin tức và so sánh công nghệ UAV."
        />
        <meta property="og:title" content="Khám Phá Công Nghệ UAV & Sức Mạnh Quân Sự" />
        <meta property="og:description" content="Tìm hiểu về UAV và khí tài quân sự hiện đại." />
      </Helmet>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box sx={{ mb: 6 }}>
          <HeroSection>
            {heroImages.map((image, index) => (
              <HeroImage
                key={index}
                component="img"
                image={image.src}
                alt={image.alt}
                sx={{ opacity: index === currentImageIndex ? 1 : 0 }}
                aria-hidden={index !== currentImageIndex}
              />
            ))}
            <HeroContent>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', md: '3.5rem' },
                  fontWeight: 'bold',
                  letterSpacing: 3,
                  textTransform: 'uppercase',
                  textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
                }}
              >
                Khám Phá Công Nghệ UAV Tối Tân
              </Typography>
              <Typography
                variant="h5"
                sx={{ mt: 2, maxWidth: '700px', mx: 'auto', color: '#B0BEC5', animation: 'fadeIn 2s ease-in-out' }}
              >
                Tìm hiểu về các máy bay không người lái tiên tiến như MQ-9 Reaper, Bayraktar TB2, cùng các khí tài quân sự hàng đầu thế giới.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <MilitaryButton
                  variant="contained"
                  onClick={() => navigate('/uav')}
                  aria-label="Xem danh sách các máy bay không người lái"
                >
                  Xem Các UAV
                </MilitaryButton>
              </Box>
            </HeroContent>
          </HeroSection>
        </Box>

        {/* Giới Thiệu Tổng Quan */}
        <Box sx={{ py: 6, textAlign: 'center', mb: 6 }}>
          <SectionTitle variant="h4">Giới Thiệu</SectionTitle>
          <Typography
            variant="body1"
            sx={{
              color: '#B0BEC5',
              maxWidth: '800px',
              mx: 'auto',
              mt: 2,
              animation: 'slideUp 1s ease-in-out',
            }}
          >
            Trang web này chuyên cung cấp thông tin về công nghệ máy bay không người lái (UAV) và các khí tài quân sự hiện đại. Từ MQ-9 Reaper đến Bayraktar TB2, chúng tôi giúp bạn khám phá vai trò của UAV trong chiến tranh hiện đại cùng các thiết bị chiến lược khác.
          </Typography>
        </Box>

        {/* Danh Mục Khí Tài Quân Sự */}
        <Box sx={{ py: 6, mb: 6 }}>
          <SectionTitle variant="h4" align="center">
            Danh Mục Khí Tài Quân Sự
          </SectionTitle>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {categories.map((category) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={category.title}>
                <Tooltip title={`Khám phá ${category.title}`} arrow>
                  <CategoryCard
                    sx={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/weapons/${category.title.toLowerCase().replace(/\s/g, '-')}`)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navigate(`/weapons/${category.title.toLowerCase().replace(/\s/g, '-')}`);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Khám phá ${category.title}`}
                  >
                    <CardMedia
                      component="img"
                      height="150"
                      image={category.image}
                      alt={category.title}
                      sx={{
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.05)' },
                      }}
                    />
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {category.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#B0BEC5', mt: 1 }}>
                        {category.description}
                      </Typography>
                    </CardContent>
                  </CategoryCard>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Tin Tức UAV & Quân Sự */}
        <Box sx={{ py: 4, mb: 4 }}>
          <SectionTitle variant="h4" align="center">
            Tin Tức UAV & Quân Sự
          </SectionTitle>
          <Box sx={{ mt: 2, position: 'relative', maxWidth: '1200px', mx: 'auto' }}>
            <Box sx={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
              <Box
                sx={{
                  display: 'flex',
                  transition: 'transform 0.5s ease-in-out',
                  transform: `translateX(-${currentNewsIndex * 100}%)`,
                }}
              >
                {featuredNews.map((news, index) => (
                  <Box key={index} sx={{ flex: '0 0 100%', px: 1 }}>
                    <Tooltip title="Đọc tin tức chi tiết" arrow>
                      <NewsCard
                        sx={{
                          height: '400px',
                          display: 'flex',
                          flexDirection: 'column',
                          cursor: 'pointer',
                          borderRadius: 3,
                          overflow: 'hidden',
                          boxShadow: 3,
                          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: 6,
                          },
                        }}
                        onClick={() => navigate('/news')}
                        onKeyDown={handleNewsKeyDown}
                        tabIndex={0}
                        role="link"
                        aria-label={`Đọc thêm về ${news.title}`}
                      >
                        <CardMedia
                          component="img"
                          height="300"
                          image={news.image}
                          alt={news.title}
                          sx={{
                            objectFit: 'cover',
                            transition: 'transform 0.3s ease',
                            '&:hover': { transform: 'scale(1.03)' },
                          }}
                        />
                        <CardContent sx={{ flexGrow: 1, p: 2 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontWeight: 'bold',
                              fontSize: '1rem',
                              lineHeight: 1.3,
                            }}
                          >
                            {news.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: '#90A4AE',
                              mt: 1,
                              fontSize: '0.875rem',
                              lineHeight: 1.4,
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: 3,
                              overflow: 'hidden',
                            }}
                          >
                            {news.description}
                          </Typography>
                        </CardContent>
                      </NewsCard>
                    </Tooltip>
                  </Box>
                ))}
              </Box>
            </Box>
            {/* Nút điều hướng */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              {featuredNews.map((_, index) => (
                <IconButton
                  key={index}
                  onClick={() => setCurrentNewsIndex(index)}
                  sx={{
                    p: 0.5,
                    color: index === currentNewsIndex ? '#4CAF50' : '#B0BEC5',
                    '&:hover': { color: '#4CAF50' },
                  }}
                  aria-label={`Chuyển đến tin tức ${index + 1}`}
                >
                  <Circle sx={{ fontSize: index === currentNewsIndex ? '12px' : '8px' }} />
                </IconButton>
              ))}
            </Box>
          </Box>
        </Box>

        {/* So Sánh & Phân Tích */}
        <Box sx={{ py: 6, textAlign: 'center', mb: 6 }}>
          <SectionTitle variant="h4">So Sánh & Phân Tích UAV</SectionTitle>
          <Typography
            variant="body1"
            sx={{
              color: '#B0BEC5',
              maxWidth: '800px',
              mx: 'auto',
              mb: 3,
              animation: 'slideUp 1s ease-in-out',
            }}
          >
            So sánh top 10 UAV hàng đầu trên thế giới về khả năng trinh sát, tấn công, và công nghệ tàng hình.
          </Typography>
          <Box sx={{ maxWidth: { xs: '100%', sm: '800px', md: '1000px' }, mx: 'auto', mb: 4, height: { xs: '300px', md: '350px' } }}>
            <canvas
              id="comparisonChart"
              ref={chartRef}
              aria-label="Biểu đồ so sánh top 10 UAV hàng đầu về trinh sát, tấn công và tàng hình"
            />
          </Box>
          <MilitaryButton
            variant="contained"
            onClick={() => navigate('/compare')}
            aria-label="So sánh các máy bay không người lái"
          >
            So Sánh Ngay
          </MilitaryButton>
        </Box>

        {/* Nút Scroll to Top */}
        {showScrollTop && (
          <Tooltip title="Quay về đầu trang" arrow>
            <ScrollTopButton
              onClick={handleScrollToTop}
              onKeyDown={handleScrollTopKeyDown}
              tabIndex={0}
              aria-label="Quay về đầu trang"
            >
              <ArrowUpward />
            </ScrollTopButton>
          </Tooltip>
        )}
      </Container>

      {/* CSS Animation */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.03); opacity: 0.3; }
          100% { transform: scale(1); opacity: 0.5; }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Box>
  );
};

export default HomePage;
