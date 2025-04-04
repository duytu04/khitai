// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Nhập useNavigate để điều hướng
// import useFetchData from '../hooks/useFetchData'; // Hook lấy dữ liệu
// import {
//   Box,
//   Typography,
//   Grid,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
//   CircularProgress,
// } from '@mui/material'; // Các thành phần MUI

// const HomePage = () => {
//   const { data: weapons, loading, error } = useFetchData();
//   const navigate = useNavigate(); // Hook để điều hướng

//   // Hàm xử lý khi nhấn nút "Xem thêm"
//   const handleViewMore = () => {
//     console.log('Xem thêm được nhấn!');
//     navigate('/weapons'); // Điều hướng tới trang danh sách khí tài
//   };

//   // Nếu đang tải dữ liệu, hiển thị CircularProgress
//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   // Nếu có lỗi, hiển thị thông báo lỗi
//   if (error) {
//     return (
//       <Box sx={{ textAlign: 'center', py: 4 }}>
//         <Typography variant="body1" color="error">
//           Lỗi: {error}
//         </Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ padding: 3 }}>
    
//       <Grid container spacing={2} justifyContent="center">
//   {(weapons || []).slice(0, 4).map((weapon) => (
//     <Grid item xs={12} sm={6} md={3} key={weapon.id}>
//       <Card sx={{ height: '100%' }}>
//         {weapon.image && (
//           <CardMedia
//             component="img"
//             height="140"
//             image={weapon.image}
//             alt={weapon.name}
//           />
//         )}
//         <CardContent>
//           <Typography variant="h6">{weapon.name}</Typography>
//           <Typography variant="body2" color="text.secondary">{weapon.category}</Typography>
//           {weapon.technicalDetails && (
//             <Box sx={{ mt: 1 }}>
//               {weapon.technicalDetails.weight && (
//                 <Typography variant="body2">Trọng lượng: {weapon.technicalDetails.weight}</Typography>
//               )}
//               {weapon.technicalDetails.speed && (
//                 <Typography variant="body2">Tốc độ: {weapon.technicalDetails.speed}</Typography>
//               )}
//               {weapon.technicalDetails.range && (
//                 <Typography variant="body2">Tầm bắn: {weapon.technicalDetails.range}</Typography>
//               )}
//             </Box>
//           )}
//         </CardContent>
//       </Card>
//     </Grid>
//   ))}
// </Grid>


//       {/* Nút "Xem thêm" */}
//       <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
//         <Button variant="contained" color="primary" onClick={handleViewMore}>
//           Xem thêm
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default HomePage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Custom styled components cho giao diện quân sự
const MilitaryCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#1A2421',
  color: '#FFFFFF',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
  },
}));

const MilitaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#4A5E4D',
  color: '#FFFFFF',
  '&:hover': {
    backgroundColor: '#5E7461',
  },
  fontWeight: 'bold',
  textTransform: 'uppercase',
}));

const HomePage = () => {
  const { data: weapons, loading, error } = useFetchData();
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/weapons');
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#0F1413' }}>
        <CircularProgress sx={{ color: '#4A5E4D' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', py: 4, backgroundColor: '#0F1413' }}>
        <Typography variant="body1" color="error" sx={{ color: '#FF6B6B' }}>
          Lỗi: {error}
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 4, backgroundColor: '#0F1413', minHeight: '100vh' }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          color: '#C0C0C0',
          fontWeight: 'bold',
          letterSpacing: 2,
          textTransform: 'uppercase',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          mb: 5,
        }}
      >
        Khí tài Quân sự Nổi bật
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {(weapons || []).slice(0, 4).map((weapon) => (
          <Grid item xs={12} sm={6} md={3} key={weapon.id}>
            <MilitaryCard>
              {weapon.image && (
                <CardMedia
                  component="img"
                  height="180"
                  image={weapon.image}
                  alt={weapon.name}
                  sx={{ objectFit: 'cover', filter: 'contrast(1.1)' }}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#D3D3D3' }}>
                  {weapon.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#A9A9A9', mt: 1 }}>
                  {weapon.category}
                </Typography>
                {weapon.technicalDetails && (
                  <Box sx={{ mt: 2 }}>
                    {weapon.technicalDetails.weight && (
                      <Typography variant="body2" sx={{ color: '#A9A9A9' }}>
                        Trọng lượng: {weapon.technicalDetails.weight}
                      </Typography>
                    )}
                    {weapon.technicalDetails.speed && (
                      <Typography variant="body2" sx={{ color: '#A9A9A9' }}>
                        Tốc độ: {weapon.technicalDetails.speed}
                      </Typography>
                    )}
                    {weapon.technicalDetails.range && (
                      <Typography variant="body2" sx={{ color: '#A9A9A9' }}>
                        Tầm bắn: {weapon.technicalDetails.range}
                      </Typography>
                    )}
                  </Box>
                )}
              </CardContent>
            </MilitaryCard>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
        <MilitaryButton variant="contained" onClick={handleViewMore}>
          Xem thêm khí tài
        </MilitaryButton>
      </Box>
    </Box>
  );
};

export default HomePage;