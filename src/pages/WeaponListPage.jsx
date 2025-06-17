


// import React from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { weapons } from '../data/weapons';
// import usePagination from '../hooks/usePagination';
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   Pagination,
//   Tooltip,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';

// // Thành phần styled
// const WeaponCard = styled(Card)(({ theme }) => ({
//   backgroundColor: '#1B263B',
//   color: '#FFFFFF',
//   height: '300px',
//   borderRadius: '10px',
//   overflow: 'hidden',
//   transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
//   animation: 'slideUp 0.8s ease-in-out',
//   '&:hover': {
//     transform: 'translateY(-5px) scale(1.02)',
//     boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
//     backgroundColor: '#2E7D32',
//   },
//   '&:focus': {
//     outline: '2px solid #4CAF50',
//     outlineOffset: 2,
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
//     color: '#4CAF50',
//   },
// }));

// const WeaponListPage = () => {
//   const { category } = useParams();
//   const navigate = useNavigate();
//   const filteredWeapons = category
//     ? weapons.filter((weapon) => weapon.category.toLowerCase() === category)
//     : weapons;

//   const { currentItems, currentPage, totalPages, goToPage } = usePagination(filteredWeapons, 4);

//   const handlePageChange = (event, newPage) => {
//     goToPage(newPage);
//   };

//   // Xử lý điều hướng bàn phím
//   const handleCardKeyDown = (e, id) => {
//     if (e.key === 'Enter' || e.key === ' ') {
//       e.preventDefault();
//       navigate(`/weapons/${id}`);
//     }
//   };

//   return (
//     <Box sx={{ backgroundColor: '#0D1B2A', minHeight: '100vh', padding: 4 }}>
//       {/* Tiêu đề trang */}
//       <SectionTitle variant="h4" align="center" gutterBottom>
//         {category ? `Danh sách ${category.toUpperCase()}` : 'Danh sách khí tài'}
//       </SectionTitle>

//       {/* Danh sách khí tài */}
//       <Grid container spacing={3} sx={{ mt: 2 }}>
//         {currentItems.length > 0 ? (
//           currentItems.map((weapon) => (
//             <Grid item xs={12} sm={6} md={4} lg={3} key={weapon.id}>
//               <Tooltip title={`Xem chi tiết ${weapon.name}`} arrow>
//                 <WeaponCard
//                   sx={{ cursor: 'pointer' }}
//                   onClick={() => navigate(`/weapons/${weapon.id}`)}
//                   onKeyDown={(e) => handleCardKeyDown(e, weapon.id)}
//                   tabIndex={0}
//                   role="button"
//                   aria-label={`Xem chi tiết ${weapon.name}`}
//                 >
//                   {weapon.image && (
//                     <CardMedia
//                       component="img"
//                       height="150"
//                       image={weapon.image}
//                       alt={weapon.name}
//                       sx={{
//                         objectFit: 'cover',
//                         transition: 'transform 0.3s ease',
//                         '&:hover': { transform: 'scale(1.05)' },
//                       }}
//                     />
//                   )}
//                   <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//                     <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//                       {weapon.name}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: '#B0BEC5', mt: 1 }}>
//                       {weapon.category}
//                     </Typography>
//                     {weapon.technicalDetails && (
//                       <Box sx={{ mt: 1 }}>
//                         {weapon.technicalDetails.weight && (
//                           <Typography variant="body2" sx={{ color: '#B0BEC5' }}>
//                             Trọng lượng: {weapon.technicalDetails.weight}
//                           </Typography>
//                         )}
//                         {weapon.technicalDetails.speed && (
//                           <Typography variant="body2" sx={{ color: '#B0BEC5' }}>
//                             Tốc độ: {weapon.technicalDetails.speed}
//                           </Typography>
//                         )}
//                         {weapon.technicalDetails.range && (
//                           <Typography variant="body2" sx={{ color: '#B0BEC5' }}>
//                             Tầm bắn: {weapon.technicalDetails.range}
//                           </Typography>
//                         )}
//                       </Box>
//                     )}
//                   </CardContent>
//                 </WeaponCard>
//               </Tooltip>
//             </Grid>
//           ))
//         ) : (
//           <Grid item xs={12}>
//             <Typography align="center" sx={{ color: '#B0BEC5' }}>
//               Không tìm thấy khí tài nào.
//             </Typography>
//           </Grid>
//         )}
//       </Grid>

//       {/* Phân trang */}
//       {totalPages > 1 && (
//         <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, pb: 4 }}>
//           <Pagination
//             count={totalPages}
//             page={currentPage}
//             onChange={handlePageChange}
//             sx={{
//               '& .MuiPaginationItem-root': {
//                 color: '#B0BEC5',
//                 '&:hover': {
//                   backgroundColor: '#2E7D32',
//                   color: '#FFFFFF',
//                 },
//               },
//               '& .Mui-selected': {
//                 backgroundColor: '#4CAF50 !important',
//                 color: '#FFFFFF',
//               },
//             }}
//             showFirstButton
//             showLastButton
//             aria-label="Điều hướng phân trang"
//           />
//         </Box>
//       )}

//       {/* CSS Animation */}
//       <style>{`
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

// export default WeaponListPage;



import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { weapons } from '../data/weapons';
import usePagination from '../hooks/usePagination';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
  Tooltip,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Skeleton,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Thành phần styled
const WeaponCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1B263B',
  color: '#FFFFFF',
  height: '300px',
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

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: 2,
  animation: 'fadeIn 1s ease-in-out',
  transition: 'color 0.3s ease',
  '&:hover': { color: '#4CAF50' },
}));

const WeaponListPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const filteredWeapons = category
    ? weapons
        .filter((weapon) => weapon.category.toLowerCase() === category)
        .filter((weapon) => weapon.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter((weapon) => filterType === 'all' || weapon.category === filterType)
    : weapons.filter((weapon) => weapon.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const { currentItems, currentPage, totalPages, goToPage } = usePagination(filteredWeapons, 4);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Giả lập tải dữ liệu
  }, []);

  const handlePageChange = (event, newPage) => {
    goToPage(newPage);
  };

  const handleCardKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(`/weapons/${id}`);
    }
  };

  return (
    <Box sx={{ backgroundColor: '#0D1B2A', minHeight: '100vh', padding: 4 }}>
      <Helmet>
        <title>{category ? `Khí tài ${category.toUpperCase()}` : 'Danh sách khí tài'}</title>
        <meta
          name="description"
          content={`Khám phá danh sách khí tài ${category || 'quân sự'} như UAV, xe tăng, tàu chiến.`}
        />
      </Helmet>

      <SectionTitle variant="h4" align="center" gutterBottom>
        {category ? `Danh sách ${category.toUpperCase()}` : 'Danh sách khí tài'}
      </SectionTitle>

      {/* Bộ lọc và tìm kiếm */}
      <Box sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: 'center' }}>
        <TextField
          label="Tìm kiếm khí tài"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{
            backgroundColor: '#1B263B',
            input: { color: '#FFFFFF' },
            '& .MuiInputLabel-root': { color: '#B0BEC5' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#B0BEC5' },
              '&:hover fieldset': { borderColor: '#4CAF50' },
            },
          }}
          aria-label="Tìm kiếm khí tài theo tên"
        />
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel sx={{ color: '#B0BEC5' }}>Loại</InputLabel>
          <Select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            sx={{
              backgroundColor: '#1B263B',
              color: '#FFFFFF',
              '& .MuiSvgIcon-root': { color: '#B0BEC5' },
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#B0BEC5' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#4CAF50' },
            }}
          >
            <MenuItem value="all">Tất cả</MenuItem>
            <MenuItem value="UAV">UAV</MenuItem>
            <MenuItem value="Tank">Xe tăng</MenuItem>
            <MenuItem value="Naval">Tàu chiến</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Danh sách khí tài */}
      {isLoading ? (
        <Grid container spacing={3}>
          {[...Array(4)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Skeleton variant="rectangular" height={300} sx={{ borderRadius: '10px', bgcolor: '#1B263B' }} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={3} sx={{ mt: 2 }}>
          {currentItems.length > 0 ? (
            currentItems.map((weapon) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={weapon.id}>
                <Tooltip title={`Xem chi tiết ${weapon.name}`} arrow>
                  <WeaponCard
                    sx={{ cursor: 'pointer' }}
                    onClick={() => navigate(`/weapons/${weapon.id}`)}
                    onKeyDown={(e) => handleCardKeyDown(e, weapon.id)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Xem chi tiết ${weapon.name}`}
                    aria-describedby={`weapon-details-${weapon.id}`}
                  >
                    {weapon.image && (
                      <CardMedia
                        component="img"
                        height="150"
                        image={weapon.image || 'https://via.placeholder.com/150'}
                        alt={weapon.name}
                        sx={{
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                          '&:hover': { transform: 'scale(1.05)' },
                        }}
                      />
                    )}
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Typography id={`weapon-details-${weapon.id}`} sx={{ display: 'none' }}>
                        {`Khí tài ${weapon.name}, thuộc danh mục ${weapon.category}. Thông số: ${JSON.stringify(weapon.technicalDetails)}`}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {weapon.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#B0BEC5', mt: 1 }}>
                        {weapon.category}
                      </Typography>
                      {weapon.technicalDetails && (
                        <Box sx={{ mt: 1 }}>
                          {weapon.technicalDetails.weight && (
                            <Typography variant="body2" sx={{ color: '#B0BEC5' }}>
                              Trọng lượng: {weapon.technicalDetails.weight}
                            </Typography>
                          )}
                          {weapon.technicalDetails.speed && (
                            <Typography variant="body2" sx={{ color: '#B0BEC5' }}>
                              Tốc độ: {weapon.technicalDetails.speed}
                            </Typography>
                          )}
                          {weapon.technicalDetails.range && (
                            <Typography variant="body2" sx={{ color: '#B0BEC5' }}>
                              Tầm bắn: {weapon.technicalDetails.range}
                            </Typography>
                          )}
                        </Box>
                      )}
                    </CardContent>
                  </WeaponCard>
                </Tooltip>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography align="center" sx={{ color: '#B0BEC5' }}>
                Không tìm thấy khí tài nào.
              </Typography>
            </Grid>
          )}
        </Grid>
      )}

      {/* Phân trang */}
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, pb: 4 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#B0BEC5',
                '&:hover': { backgroundColor: '#2E7D32', color: '#FFFFFF' },
              },
              '& .Mui-selected': { backgroundColor: '#4CAF50 !important', color: '#FFFFFF' },
            }}
            showFirstButton
            showLastButton
            aria-label="Điều hướng phân trang"
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

export default WeaponListPage;