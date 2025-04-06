

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
//   Container,
//   Tooltip,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';

// // Custom styled components với hiệu ứng hover và animation
// const HeroSection = styled(Box)(({ theme }) => ({
//   background: 'linear-gradient(135deg, #0D1B2A 0%, #1B263B 100%)',
//   padding: '80px 20px',
//   color: '#FFFFFF',
//   textAlign: 'center',
//   position: 'relative',
//   overflow: 'hidden',
//   borderRadius: '12px',
//   boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
//   animation: 'fadeIn 1.5s ease-in-out',
//   '&:before': {
//     content: '""',
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.5) 70%)',
//     animation: 'pulse 5s infinite',
//   },
// }));

// const MilitaryButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#2E7D32', // Xanh quân đội
//   color: '#FFFFFF',
//   padding: '12px 24px',
//   fontWeight: 'bold',
//   textTransform: 'uppercase',
//   borderRadius: '8px',
//   boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
//   transition: 'all 0.3s ease',
//   '&:hover': {
//     backgroundColor: '#4CAF50',
//     transform: 'translateY(-3px) scale(1.05)',
//     boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
//   },
// }));

// const CategoryCard = styled(Card)(({ theme }) => ({
//   backgroundColor: '#1B263B',
//   color: '#FFFFFF',
//   height: '100%',
//   borderRadius: '10px',
//   overflow: 'hidden',
//   transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
//   animation: 'slideUp 0.8s ease-in-out',
//   '&:hover': {
//     transform: 'translateY(-8px) scale(1.03)',
//     boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
//     backgroundColor: '#2E7D32', // Đổi màu khi hover
//   },
// }));

// const NewsCard = styled(Card)(({ theme }) => ({
//   backgroundColor: '#415A77',
//   color: '#FFFFFF',
//   height: '100%',
//   borderRadius: '10px',
//   overflow: 'hidden',
//   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   animation: 'slideUp 1s ease-in-out',
//   '&:hover': {
//     transform: 'scale(1.05)',
//     boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
//   },
// }));

// const SectionTitle = styled(Typography)(({ theme }) => ({
//   color: '#FFFFFF',
//   fontWeight: 'bold',
//   textTransform: 'uppercase',
//   letterSpacing: 2,
//   animation: 'fadeIn 1s ease-in-out',
//   transition: 'color 0.3s ease',
//   '&:hover': {
//     color: '#4CAF50', // Đổi màu khi hover
//   },
// }));

// const HomePage = () => {
//   const navigate = useNavigate();

//   const categories = [
//     {
//       title: 'Máy Bay Chiến Đấu',
//       description: 'F-22 Raptor (Mỹ), Su-57 (Nga), Eurofighter Typhoon (EU).',
//       image: 'https://via.placeholder.com/300x200?text=F-22+Raptor',
//     },
//     {
//       title: 'Xe Tăng',
//       description: 'M1 Abrams (Mỹ), T-90 (Nga), Leopard 2 (Đức).',
//       image: 'https://via.placeholder.com/300x200?text=M1+Abrams',
//     },
//     {
//       title: 'Tàu Chiến',
//       description: 'Tàu khu trục, tàu sân bay, tàu ngầm hiện đại.',
//       image: 'https://via.placeholder.com/300x200?text=Warship',
//     },
//     {
//       title: 'Vũ Khí & Tên Lửa',
//       description: 'Tên lửa đạn đạo, phòng không, vũ khí hạt nhân.',
//       image: 'https://via.placeholder.com/300x200?text=Missile',
//     },
//     {
//       title: 'Robot & UAV',
//       description: 'Máy bay không người lái và robot hỗ trợ chiến đấu.',
//       image: 'https://via.placeholder.com/300x200?text=Drone',
//     },
//   ];

//   const featuredNews = {
//     title: 'Tàu sân bay mới của Mỹ thử nghiệm thành công',
//     description: 'Ngày 05/04/2025, Hải quân Mỹ công bố thử nghiệm tàu sân bay mới với công nghệ tàng hình.',
//     image: 'https://via.placeholder.com/400x200?text=Carrier',
//   };

//   return (
//     <Box sx={{ backgroundColor: '#0D1B2A', minHeight: '100vh', pb: 6 }}>
//       <Container maxWidth="lg">
//         {/* Hero Section */}
//         <HeroSection>
//           <Typography
//             variant="h1"
//             sx={{
//               fontSize: { xs: '2.5rem', md: '4rem' },
//               fontWeight: 'bold',
//               letterSpacing: 3,
//               textTransform: 'uppercase',
//               textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
//             }}
//           >
//             Khám Phá Sức Mạnh Quân Sự Toàn Cầu
//           </Typography>
//           <Typography
//             variant="h5"
//             sx={{ mt: 2, maxWidth: '700px', mx: 'auto', color: '#B0BEC5', animation: 'fadeIn 2s ease-in-out' }}
//           >
//             Khám phá các loại khí tài quân sự hàng đầu thế giới, từ máy bay chiến đấu đến tàu chiến, xe tăng và vũ khí tối tân.
//           </Typography>
//           <Box sx={{ mt: 4 }}>
//             <MilitaryButton variant="contained" onClick={() => navigate('/weapons')}>
//               Xem Các Khí Tài
//             </MilitaryButton>
//           </Box>
//         </HeroSection>

//         {/* Giới Thiệu Tổng Quan */}
//         <Box sx={{ py: 6, textAlign: 'center' }}>
//           <SectionTitle variant="h4">Giới Thiệu</SectionTitle>
//           <Typography
//             variant="body1"
//             sx={{
//               color: '#B0BEC5',
//               maxWidth: '800px',
//               mx: 'auto',
//               mt: 2,
//               animation: 'slideUp 1s ease-in-out',
//             }}
//           >
//             Trang web này cung cấp thông tin chi tiết về các loại khí tài quân sự hiện đại trên toàn cầu, từ máy bay chiến đấu, xe tăng, tàu chiến đến tên lửa và robot quân sự. Mục đích của chúng tôi là giúp bạn hiểu rõ hơn về những thiết bị chiến lược quan trọng và sức mạnh quân sự của các quốc gia.
//           </Typography>
//         </Box>

//         {/* Danh Mục Khí Tài Quân Sự */}
//         <Box sx={{ py: 6 }}>
//           <SectionTitle variant="h4" align="center">
//             Danh Mục Khí Tài Quân Sự
//           </SectionTitle>
//           <Grid container spacing={3} sx={{ mt: 2 }}>
//             {categories.map((category) => (
//               <Grid item xs={12} sm={6} md={4} lg={2.4} key={category.title}>
//                 <Tooltip title={`Khám phá ${category.title}`} arrow>
//                   <CategoryCard>
//                     <CardMedia
//                       component="img"
//                       height="150"
//                       image={category.image}
//                       alt={category.title}
//                       sx={{
//                         objectFit: 'cover',
//                         transition: 'transform 0.3s ease',
//                         '&:hover': { transform: 'scale(1.1)' },
//                       }}
//                     />
//                     <CardContent>
//                       <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                         {category.title}
//                       </Typography>
//                       <Typography variant="body2" sx={{ color: '#B0BEC5', mt: 1 }}>
//                         {category.description}
//                       </Typography>
//                     </CardContent>
//                   </CategoryCard>
//                 </Tooltip>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* Tin Tức Nổi Bật */}
//         <Box sx={{ py: 6 }}>
//           <SectionTitle variant="h4" align="center">
//             Tin Tức Quân Sự
//           </SectionTitle>
//           <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
//             <Grid item xs={12} sm={8} md={6}>
//               <Tooltip title="Đọc tin tức chi tiết" arrow>
//                 <NewsCard>
//                   <CardMedia
//                     component="img"
//                     height="200"
//                     image={featuredNews.image}
//                     alt={featuredNews.title}
//                     sx={{
//                       objectFit: 'cover',
//                       transition: 'transform 0.3s ease',
//                       '&:hover': { transform: 'scale(1.05)' },
//                     }}
//                   />
//                   <CardContent>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                       {featuredNews.title}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#B0BEC5', mt: 1 }}>
//                       {featuredNews.description}
//                     </Typography>
//                     <MilitaryButton
//                       variant="contained"
//                       size="small"
//                       sx={{ mt: 2 }}
//                       onClick={() => navigate('/news')}
//                     >
//                       Đọc Thêm
//                     </MilitaryButton>
//                   </CardContent>
//                 </NewsCard>
//               </Tooltip>
//             </Grid>
//           </Grid>
//         </Box>

//         {/* Tính Năng So Sánh & Phân Tích */}
//         <Box sx={{ py: 6, textAlign: 'center' }}>
//           <SectionTitle variant="h4">So Sánh & Phân Tích</SectionTitle>
//           <Typography
//             variant="body1"
//             sx={{
//               color: '#B0BEC5',
//               maxWidth: '800px',
//               mx: 'auto',
//               mb: 3,
//               animation: 'slideUp 1s ease-in-out',
//             }}
//           >
//             So sánh các khí tài quân sự hàng đầu như F-22 Raptor vs Su-57, hoặc khám phá chiến lược ứng dụng máy bay tàng hình trong chiến tranh hiện đại.
//           </Typography>
//           <MilitaryButton variant="contained" onClick={() => navigate('/compare')}>
//             So Sánh Ngay
//           </MilitaryButton>
//         </Box>
//       </Container>

//       {/* CSS Animation */}
//       <style>{`
//         @keyframes pulse {
//           0% { transform: scale(1); opacity: 0.5; }
//           50% { transform: scale(1.05); opacity: 0.3; }
//           100% { transform: scale(1); opacity: 0.5; }
//         }
//         @keyframes fadeIn {
//           0% { opacity: 0; transform: translateY(20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes slideUp {
//           0% { opacity: 0; transform: translateY(30px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>
//     </Box>
//   );
// };

// export default HomePage;


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled components
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
  height: '400px', // Chiều cao cố định cho carousel
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
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
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
    transform: 'translateY(-8px) scale(1.03)',
    boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
    backgroundColor: '#2E7D32',
  },
}));

const NewsCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#415A77',
  color: '#FFFFFF',
  height: '350px',
  borderRadius: '10px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  animation: 'slideUp 1s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
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

const HomePage = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Danh sách ảnh giới thiệu trong Hero Section
  const heroImages = [
    {
      src: 'https://photo2.tinhte.vn/data/attachment-files/2023/02/6322962_cover_f22raptor.jpg',
      alt: 'Máy bay F-22 Raptor',
    },
    {
      src: 'https://file3.qdnd.vn/data/images/0/2021/01/02/nguyenthao/us%20navy.jpg',
      alt: 'Tàu sân bay hiện đại',
    },
    {
      src: 'https://media.vov.vn/sites/default/files/styles/large/public/2022-08/tt90m3-10135934.jpg',
      alt: 'Xe tăng T-90',
    },
  ];

  // Tự động chuyển ảnh mỗi 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Chuyển ảnh sau 5 giây
    return () => clearInterval(interval); // Cleanup khi component unmount
  }, [heroImages.length]);

  const categories = [
    {
      title: 'Máy Bay Chiến Đấu',
      description: 'F-22 Raptor (Mỹ), Su-57 (Nga), Eurofighter Typhoon (EU).',
      image: 'https://photo2.tinhte.vn/data/attachment-files/2023/02/6322962_cover_f22raptor.jpg',
    },
    {
      title: 'Xe Tăng',
      description: 'M1 Abrams (Mỹ), T-90 (Nga), Leopard 2 (Đức).',
      image: 'https://via.placeholder.com/300x200?text=M1+Abrams',
    },
    {
      title: 'Tàu Chiến',
      description: 'Tàu khu trục, tàu sân bay, tàu ngầm hiện đại.',
      image: 'https://via.placeholder.com/300x200?text=Warship',
    },
    {
      title: 'Vũ Khí & Tên Lửa',
      description: 'Tên lửa đạn đạo, phòng không, vũ khí hạt nhân.',
      image: 'https://via.placeholder.com/300x200?text=Missile',
    },
    {
      title: 'Robot & UAV',
      description: 'Máy bay không người lái và robot hỗ trợ chiến đấu.',
      image: 'https://via.placeholder.com/300x200?text=Drone',
    },
  ];

  const featuredNews = {
    title: 'Tàu sân bay mới của Mỹ thử nghiệm thành công',
    description: 'Ngày 05/04/2025, Hải quân Mỹ công bố thử nghiệm tàu sân bay mới với công nghệ tàng hình.',
    image: 'https://via.placeholder.com/400x200?text=Carrier',
  };

  return (
    <Box sx={{ backgroundColor: '#0D1B2A', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Hero Section với hiệu ứng chuyển ảnh */}
        <Box sx={{ mb: 6 }}>
          <HeroSection>
            {heroImages.map((image, index) => (
              <HeroImage
                key={index}
                component="img"
                image={image.src}
                alt={image.alt}
                sx={{
                  opacity: index === currentImageIndex ? 1 : 0, // Chỉ hiển thị ảnh hiện tại
                }}
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
                Khám Phá Sức Mạnh Quân Sự Toàn Cầu
              </Typography>
              <Typography
                variant="h5"
                sx={{ mt: 2, maxWidth: '700px', mx: 'auto', color: '#B0BEC5', animation: 'fadeIn 2s ease-in-out' }}
              >
                Khám phá các loại khí tài quân sự hàng đầu thế giới, từ máy bay chiến đấu đến tàu chiến, xe tăng và vũ khí tối tân.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <MilitaryButton variant="contained" onClick={() => navigate('/weapons')}>
                  Xem Các Khí Tài
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
            Trang web này cung cấp thông tin chi tiết về các loại khí tài quân sự hiện đại trên toàn cầu, từ máy bay chiến đấu, xe tăng, tàu chiến đến tên lửa và robot quân sự. Mục đích của chúng tôi là giúp bạn hiểu rõ hơn về những thiết bị chiến lược quan trọng và sức mạnh quân sự của các quốc gia.
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
                  <CategoryCard>
                    <CardMedia
                      component="img"
                      height="150"
                      image={category.image}
                      alt={category.title}
                      sx={{
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'scale(1.1)' },
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

        {/* Tin Tức Nổi Bật */}
        <Box sx={{ py: 6, mb: 6 }}>
          <SectionTitle variant="h4" align="center">
            Tin Tức Quân Sự
          </SectionTitle>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 2 }}>
            <Grid item xs={12} sm={8} md={6}>
              <Tooltip title="Đọc tin tức chi tiết" arrow>
                <NewsCard>
                  <CardMedia
                    component="img"
                    height="200"
                    image={featuredNews.image}
                    alt={featuredNews.title}
                    sx={{
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease',
                      '&:hover': { transform: 'scale(1.05)' },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                      {featuredNews.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#B0BEC5', mt: 1 }}>
                      {featuredNews.description}
                    </Typography>
                    <MilitaryButton
                      variant="contained"
                      size="small"
                      sx={{ mt: 2 }}
                      onClick={() => navigate('/news')}
                    >
                      Đọc Thêm
                    </MilitaryButton>
                  </CardContent>
                </NewsCard>
              </Tooltip>
            </Grid>
          </Grid>
        </Box>

        {/* Tính Năng So Sánh & Phân Tích */}
        <Box sx={{ py: 6, textAlign: 'center', mb: 6 }}>
          <SectionTitle variant="h4">So Sánh & Phân Tích</SectionTitle>
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
            So sánh các khí tài quân sự hàng đầu như F-22 Raptor vs Su-57, hoặc khám phá chiến lược ứng dụng máy bay tàng hình trong chiến tranh hiện đại.
          </Typography>
          <MilitaryButton variant="contained" onClick={() => navigate('/compare')}>
            So Sánh Ngay
          </MilitaryButton>
        </Box>
      </Container>

      {/* CSS Animation */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.3; }
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