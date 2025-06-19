
// import React, { useState } from 'react';
// import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Pagination } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { news } from '../data/news';
// import { styled } from '@mui/material/styles';

// // Custom styled components
// const MilitaryCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   backgroundColor: '#1A2421', // Màu xanh quân đội đậm
//   color: '#FFFFFF',
//   transition: 'transform 0.3s ease-in-out',
//   '&:hover': {
//     transform: 'translateY(-5px)',
//     boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
//   },
// }));

// const MilitaryButton = styled(Button)(({ theme }) => ({
//   backgroundColor: '#4A5E4D', // Màu xanh rêu quân sự
//   color: '#FFFFFF',
//   '&:hover': {
//     backgroundColor: '#5E7461',
//   },
//   fontWeight: 'bold',
//   textTransform: 'uppercase',
// }));

// const NewsPage = () => {
//   const navigate = useNavigate();
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 6;

//   const paginatedNews = news.slice((page - 1) * itemsPerPage, page * itemsPerPage);
//   const totalPages = Math.ceil(news.length / itemsPerPage);

//   const handleViewDetails = (id) => {
//     navigate(`/news/${id}`); // Điều hướng thực tế thay vì chỉ console.log
//   };

//   const handlePageChange = (event, value) => {
//     setPage(value);
//   };

//   return (
//     <Box sx={{ 
//       padding: 4, 
//       backgroundColor: '#0F1413', // Nền tối kiểu quân sự
//       minHeight: '100vh' 
//     }}>
//       {/* Tiêu đề */}
//       <Typography 
//         variant="h3" 
//         component="h1" 
//         align="center" 
//         gutterBottom
//         sx={{ 
//           color: '#C0C0C0', // Màu xám bạc quân sự
//           fontWeight: 'bold',
//           letterSpacing: 2,
//           textTransform: 'uppercase',
//           mb: 5,
//           textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
//         }}
//       >
//         Tin tức Quân sự
//       </Typography>

//       {/* Grid tin tức */}
//       <Grid container spacing={4}>
//         {paginatedNews.map((newsItem) => (
//           <Grid item xs={12} sm={6} md={4} key={newsItem.id}>
//             <MilitaryCard>
//               <CardMedia
//                 component="img"
//                 height="220"
//                 image={newsItem.image}
//                 alt={newsItem.title}
//                 sx={{ 
//                   objectFit: 'cover',
//                   filter: 'contrast(1.1)', // Tăng độ tương phản cho ảnh
//                 }}
//               />
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography 
//                   variant="h6" 
//                   component="div"
//                   sx={{ 
//                     fontWeight: 'bold',
//                     color: '#D3D3D3',
//                     lineHeight: 1.2,
//                   }}
//                 >
//                   {newsItem.title}
//                 </Typography>
//                 <Typography 
//                   variant="body2" 
//                   sx={{ 
//                     mt: 1.5, 
//                     color: '#A9A9A9',
//                     lineHeight: 1.6,
//                   }}
//                 >
//                   {newsItem.description}
//                 </Typography>
//                 <Typography 
//                   variant="caption" 
//                   sx={{ 
//                     mt: 2, 
//                     display: 'block',
//                     color: '#808080',
//                   }}
//                 >
//                   Ngày đăng: {newsItem.date}
//                 </Typography>
//               </CardContent>
//               <Box sx={{ p: 2 }}>
//                 <MilitaryButton
//                   variant="contained"
//                   onClick={() => handleViewDetails(newsItem.id)}
//                   sx={{ width: '100%' }}
//                 >
//                   Xem chi tiết
//                 </MilitaryButton>
//               </Box>
//             </MilitaryCard>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Phân trang */}
//       {totalPages > 1 && (
//         <Box sx={{ 
//           display: 'flex', 
//           justifyContent: 'center', 
//           mt: 6,
//           pb: 4 
//         }}>
//           <Pagination
//             count={totalPages}
//             page={page}
//             onChange={handlePageChange}
//             sx={{
//               '& .MuiPaginationItem-root': {
//                 color: '#C0C0C0',
//                 '&:hover': {
//                   backgroundColor: '#4A5E4D',
//                 },
//               },
//               '& .Mui-selected': {
//                 backgroundColor: '#4A5E4D !important',
//                 color: '#FFFFFF',
//               },
//             }}
//             showFirstButton
//             showLastButton
//           />
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default NewsPage;





import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Pagination, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { news } from '../data/news';
import { styled } from '@mui/material/styles';

// Custom styled components
const NewsCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#1B263B',
  color: '#FFFFFF',
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

const NewsPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const paginatedNews = news.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const totalPages = Math.ceil(news.length / itemsPerPage);

  const handleViewDetails = (id) => {
    navigate(`/news/${id}`);
  };

  const handleCardKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(`/news/${id}`);
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box sx={{ 
      padding: { xs: 2, md: 4 }, 
      backgroundColor: '#0D1B2A', 
      minHeight: '100vh' 
    }}>
      <Helmet>
        <title>Tin Tức Quân Sự - Công Nghệ UAV & Khí Tài</title>
        <meta
          name="description"
          content="Cập nhật tin tức mới nhất về máy bay không người lái (UAV) và khí tài quân sự hiện đại."
        />
        <meta property="og:title" content="Tin Tức Quân Sự - Công Nghệ UAV & Khí Tài" />
        <meta property="og:description" content="Khám phá tin tức về UAV và các công nghệ quân sự tiên tiến." />
      </Helmet>

      {/* Tiêu đề */}
      <SectionTitle 
        variant="h3" 
        component="h1" 
        align="center" 
        gutterBottom
        sx={{ 
          fontSize: { xs: '2rem', md: '3rem' },
          mb: 5,
          textShadow: '3px 3px 6px rgba(0,0,0,0.8)',
        }}
      >
        Tin Tức Quân Sự
      </SectionTitle>

      {/* Grid tin tức */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {paginatedNews.map((newsItem) => (
          <Grid item xs={12} sm={6} md={4} key={newsItem.id}>
            <Tooltip title={`Đọc thêm về ${newsItem.title}`} arrow>
              <NewsCard
                sx={{ cursor: 'pointer' }}
                onClick={() => handleViewDetails(newsItem.id)}
                onKeyDown={(e) => handleCardKeyDown(e, newsItem.id)}
                tabIndex={0}
                role="link"
                aria-label={`Đọc thêm về ${newsItem.title}`}
              >
                <CardMedia
                  component="img"
                  height="220"
                  image={newsItem.image}
                  alt={newsItem.title}
                  loading="lazy"
                  sx={{ 
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography 
                    variant="h6" 
                    component="div"
                    sx={{ 
                      fontWeight: 'bold',
                      color: '#FFFFFF',
                      lineHeight: 1.2,
                    }}
                  >
                    {newsItem.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mt: 1.5, 
                      color: '#B0BEC5',
                      lineHeight: 1.6,
                      display: '-webkit-box',
                      WebkitBoxOrient: 'vertical',
                      WebkitLineClamp: 3,
                      overflow: 'hidden',
                    }}
                  >
                    {newsItem.description}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      mt: 2, 
                      display: 'block',
                      color: '#B0BEC5',
                    }}
                  >
                    Ngày đăng: {newsItem.date}
                  </Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <MilitaryButton
                    variant="contained"
                    onClick={() => handleViewDetails(newsItem.id)}
                    sx={{ width: '100%' }}
                    aria-label={`Xem chi tiết về ${newsItem.title}`}
                  >
                    Xem chi tiết
                  </MilitaryButton>
                </Box>
              </NewsCard>
            </Tooltip>
          </Grid>
        ))}
      </Grid>

      {/* Phân trang */}
      {totalPages > 1 && (
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 6,
          pb: 4 
        }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handlePageChange}
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#B0BEC5',
                '&:hover': {
                  backgroundColor: '#2E7D32',
                },
              },
              '& .Mui-selected': {
                backgroundColor: '#4CAF50 !important',
                color: '#FFFFFF',
              },
            }}
            showFirstButton
            showLastButton
            aria-label="Phân trang tin tức"
          />
        </Box>
      )}

      {/* CSS Animation */}
      <style>{`
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

export default NewsPage;