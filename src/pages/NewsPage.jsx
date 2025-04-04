// import React, { useState } from 'react';
// import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Pagination } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// import { news } from '../data/news'; // Nhập dữ liệu tin tức từ news.js

// const NewsPage = () => {
//   const navigate = useNavigate();
//   const [page, setPage] = useState(1);
//   const itemsPerPage = 6;

//   // Tính toán dữ liệu cho trang hiện tại
//   const paginatedNews = news.slice((page - 1) * itemsPerPage, page * itemsPerPage);
//   const totalPages = Math.ceil(news.length / itemsPerPage);

//   // Hàm xử lý khi nhấn nút xem chi tiết
//   const handleViewDetails = (id) => {
//     console.log(`Xem chi tiết tin tức ID: ${id}`);
//     // Có thể điều hướng: navigate(`/news/${id}`);
//   };

//   // Hàm xử lý thay đổi trang
//   const handlePageChange = (event, value) => {
//     setPage(value);
//   };

//   return (
//     <Box sx={{ padding: 3 }}>
//       {/* Tiêu đề trang */}
//       <Typography variant="h4" component="h1" align="center" gutterBottom>
//         Tin tức Quân sự
//       </Typography>

//       {/* Danh sách tin tức */}
//       <Grid container spacing={3}>
//         {paginatedNews.map((newsItem) => (
//           <Grid item xs={12} sm={6} md={4} key={newsItem.id}>
//             <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
//               <CardMedia
//                 component="img"
//                 height="200"
//                 image={newsItem.image}
//                 alt={newsItem.title}
//                 sx={{ objectFit: 'cover' }}
//               />
//               <CardContent sx={{ flexGrow: 1 }}>
//                 <Typography variant="h6" component="div">
//                   {newsItem.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//                   {newsItem.description}
//                 </Typography>
//                 <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
//                   Ngày đăng: {newsItem.date}
//                 </Typography>
//               </CardContent>
//               <Box sx={{ p: 2 }}>
//                 <Button
//                   variant="outlined"
//                   color="primary"
//                   onClick={() => handleViewDetails(newsItem.id)}
//                   sx={{ width: '100%' }}
//                 >
//                   Xem chi tiết
//                 </Button>
//               </Box>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Phân trang */}
//       {totalPages > 1 && (
//         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
//           <Pagination
//             count={totalPages}
//             page={page}
//             onChange={handlePageChange}
//             color="primary"
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
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { news } from '../data/news';
import { styled } from '@mui/material/styles';

// Custom styled components
const MilitaryCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#1A2421', // Màu xanh quân đội đậm
  color: '#FFFFFF',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
  },
}));

const MilitaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4A5E4D', // Màu xanh rêu quân sự
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#5E7461',
  },
  fontWeight: 'bold',
  textTransform: 'uppercase',
}));

const NewsPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  const paginatedNews = news.slice((page - 1) * itemsPerPage, page * itemsPerPage);
  const totalPages = Math.ceil(news.length / itemsPerPage);

  const handleViewDetails = (id) => {
    navigate(`/news/${id}`); // Điều hướng thực tế thay vì chỉ console.log
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box sx={{ 
      padding: 4, 
      backgroundColor: '#0F1413', // Nền tối kiểu quân sự
      minHeight: '100vh' 
    }}>
      {/* Tiêu đề */}
      <Typography 
        variant="h3" 
        component="h1" 
        align="center" 
        gutterBottom
        sx={{ 
          color: '#C0C0C0', // Màu xám bạc quân sự
          fontWeight: 'bold',
          letterSpacing: 2,
          textTransform: 'uppercase',
          mb: 5,
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        }}
      >
        Tin tức Quân sự
      </Typography>

      {/* Grid tin tức */}
      <Grid container spacing={4}>
        {paginatedNews.map((newsItem) => (
          <Grid item xs={12} sm={6} md={4} key={newsItem.id}>
            <MilitaryCard>
              <CardMedia
                component="img"
                height="220"
                image={newsItem.image}
                alt={newsItem.title}
                sx={{ 
                  objectFit: 'cover',
                  filter: 'contrast(1.1)', // Tăng độ tương phản cho ảnh
                }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography 
                  variant="h6" 
                  component="div"
                  sx={{ 
                    fontWeight: 'bold',
                    color: '#D3D3D3',
                    lineHeight: 1.2,
                  }}
                >
                  {newsItem.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    mt: 1.5, 
                    color: '#A9A9A9',
                    lineHeight: 1.6,
                  }}
                >
                  {newsItem.description}
                </Typography>
                <Typography 
                  variant="caption" 
                  sx={{ 
                    mt: 2, 
                    display: 'block',
                    color: '#808080',
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
                >
                  Xem chi tiết
                </MilitaryButton>
              </Box>
            </MilitaryCard>
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
                color: '#C0C0C0',
                '&:hover': {
                  backgroundColor: '#4A5E4D',
                },
              },
              '& .Mui-selected': {
                backgroundColor: '#4A5E4D !important',
                color: '#FFFFFF',
              },
            }}
            showFirstButton
            showLastButton
          />
        </Box>
      )}
    </Box>
  );
};

export default NewsPage;