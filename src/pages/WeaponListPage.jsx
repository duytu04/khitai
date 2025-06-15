






// import React from 'react';
// import { weapons } from '../data/weapons'; // Nhập danh sách khí tài từ /data/weapons.js
// import usePagination from '../hooks/usePagination'; // Nhập hook phân trang
// import {
//   Box,
//   Typography,
//   Button,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
// } from '@mui/material'; // Nhập các thành phần từ MUI

// const WeaponListPage = () => {
//   // Sử dụng hook phân trang, hiển thị 4 khí tài mỗi trang
//   const { currentItems, currentPage, totalPages, nextPage, prevPage } =
//     usePagination(weapons, 4);

//   return (
//     <Box sx={{ padding: 3 }}>
//       {/* Tiêu đề trang */}
//       <Typography variant="h4" component="h1" gutterBottom align="center">
//         Danh sách khí tài
//       </Typography>

//       {/* Container chính với danh sách khí tài */}
//       <Grid container spacing={3}>
//         {/* Danh sách khí tài */}
//         <Grid item xs={12} md={12}>
//           <Grid container spacing={2}>
//             {currentItems.length > 0 ? (
//               currentItems.map((weapon) => (
//                 <Grid item xs={12} sm={6} md={4} lg={3} key={weapon.id}>
//                   <Card>
//                     {weapon.image && (
//                       <CardMedia
//                         component="img"
//                         height="140"
//                         image={weapon.image}
//                         alt={weapon.name}
//                       />
//                     )}
//                     <CardContent>
//                       <Typography variant="h6">{weapon.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {weapon.category}
//                       </Typography>
//                       {weapon.technicalDetails && (
//                         <Box sx={{ mt: 1 }}>
//                           {weapon.technicalDetails.weight && (
//                             <Typography variant="body2">
//                               Trọng lượng: {weapon.technicalDetails.weight}
//                             </Typography>
//                           )}
//                           {weapon.technicalDetails.speed && (
//                             <Typography variant="body2">
//                               Tốc độ: {weapon.technicalDetails.speed}
//                             </Typography>
//                           )}
//                           {weapon.technicalDetails.range && (
//                             <Typography variant="body2">
//                               Tầm bắn: {weapon.technicalDetails.range}
//                             </Typography>
//                           )}
//                         </Box>
//                       )}
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))
//             ) : (
//               <Grid item xs={12}>
//                 <Typography align="center">Không tìm thấy khí tài nào.</Typography>
//               </Grid>
//             )}
//           </Grid>
//         </Grid>
//       </Grid>

//       {/* Phân trang */}
//       {totalPages > 1 && (
//         <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
//           <Button
//             variant="contained"
//             onClick={prevPage}
//             disabled={currentPage === 1}
//           >
//             Trang trước
//           </Button>
//           <Typography variant="body1" sx={{ alignSelf: 'center' }}>
//             Trang {currentPage} / {totalPages}
//           </Typography>
//           <Button
//             variant="contained"
//             onClick={nextPage}
//             disabled={currentPage === totalPages}
//           >
//             Trang sau
//           </Button>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default WeaponListPage;






import React from 'react';
import { useParams } from 'react-router-dom'; // Thêm useParams
import { weapons } from '../data/weapons'; // Nhập danh sách khí tài
import usePagination from '../hooks/usePagination'; // Nhập hook phân trang
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Pagination,
} from '@mui/material'; // Nhập các thành phần từ MUI

const WeaponListPage = () => {
  const { category } = useParams(); // Lấy category từ URL, e.g., "naval"
  // Lọc khí tài theo danh mục từ URL
  const filteredWeapons = category
    ? weapons.filter((weapon) => weapon.category.toLowerCase() === category)
    : weapons;

  // Sử dụng hook phân trang, hiển thị 4 khí tài mỗi trang
  const { currentItems, currentPage, totalPages, goToPage } =
    usePagination(filteredWeapons, 4);

  // Hàm xử lý thay đổi trang
  const handlePageChange = (event, newPage) => {
    goToPage(newPage);
  };

  return (
    <Box sx={{ padding: 3 }}>
      {/* Tiêu đề trang */}
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Danh sách khí tài
      </Typography>

      {/* Container chính với danh sách khí tài */}
      <Grid container spacing={3}>
        {/* Danh sách khí tài */}
        <Grid item xs={12} md={12}>
          <Grid container spacing={2}>
            {currentItems.length > 0 ? (
              currentItems.map((weapon) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={weapon.id}>
                  <Card>
                    {weapon.image && (
                      <CardMedia
                        component="img"
                        height="140"
                        image={weapon.image}
                        alt={weapon.name}
                      />
                    )}
                    <CardContent>
                      <Typography variant="h6">{weapon.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {weapon.category}
                      </Typography>
                      {weapon.technicalDetails && (
                        <Box sx={{ mt: 1 }}>
                          {weapon.technicalDetails.weight && (
                            <Typography variant="body2">
                              Trọng lượng: {weapon.technicalDetails.weight}
                            </Typography>
                          )}
                          {weapon.technicalDetails.speed && (
                            <Typography variant="body2">
                              Tốc độ: {weapon.technicalDetails.speed}
                            </Typography>
                          )}
                          {weapon.technicalDetails.range && (
                            <Typography variant="body2">
                              Tầm bắn: {weapon.technicalDetails.range}
                            </Typography>
                          )}
                        </Box>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Typography align="center">Không tìm thấy khí tài nào.</Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
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
            page={currentPage}
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

export default WeaponListPage;




// import React from 'react';
// import { useParams } from 'react-router-dom';
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
// } from '@mui/material';

// const WeaponListPage = () => {
//   const { category } = useParams(); // e.g., "naval"
//   // Lọc khí tài theo danh mục từ URL
//   const filteredWeapons = category
//     ? weapons.filter((weapon) =>
//         weapon.category.toLowerCase().includes(category.toLowerCase())
//       )
//     : weapons;

//   // Debug logs
//   console.log({ category, filteredWeapons, totalItems: filteredWeapons.length });

//   // Sử dụng hook phân trang, hiển thị 4 khí tài mỗi trang
//   const { currentItems, currentPage, totalPages, goToPage } =
//     usePagination(filteredWeapons, 4);

//   // Debug logs
//   console.log({ currentItems, currentPage, totalPages });

//   // Hàm xử lý thay đổi trang
//   const handlePageChange = (event, newPage) => {
//     console.log(`Navigating to page ${newPage}`);
//     goToPage(newPage);
//   };

//   return (
//     <Box sx={{ padding: 3 }}>
//       {/* Tiêu đề trang */}
//       <Typography variant="h4" component="h1" gutterBottom align="center">
//         Danh sách khí tài {category ? `- ${category.replace(/-/g, ' ')}` : ''}
//       </Typography>

//       {/* Container chính với danh sách khí tài */}
//       <Grid container spacing={3}>
//         {/* Danh sách khí tài */}
//         <Grid item xs={12} md={12}>
//           <Grid container spacing={2}>
//             {currentItems.length > 0 ? (
//               currentItems.map((weapon) => (
//                 <Grid item xs={12} sm={6} md={4} lg={3} key={weapon.id}>
//                   <Card>
//                     {weapon.image && (
//                       <CardMedia
//                         component="img"
//                         height="140"
//                         image={weapon.image}
//                         alt={weapon.name}
//                       />
//                     )}
//                     <CardContent>
//                       <Typography variant="h6">{weapon.name}</Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {weapon.category}
//                       </Typography>
//                       {weapon.technicalDetails && (
//                         <Box sx={{ mt: 1 }}>
//                           {weapon.technicalDetails.weight && (
//                             <Typography variant="body2">
//                               Trọng lượng: {weapon.technicalDetails.weight}
//                             </Typography>
//                           )}
//                           {weapon.technicalDetails.speed && (
//                             <Typography variant="body2">
//                               Tốc độ: {weapon.technicalDetails.speed}
//                             </Typography>
//                           )}
//                           {weapon.technicalDetails.range && (
//                             <Typography variant="body2">
//                               Tầm bắn: {weapon.technicalDetails.range}
//                             </Typography>
//                           )}
//                         </Box>
//                       )}
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))
//             ) : (
//               <Grid item xs={12}>
//                 <Typography align="center">Không tìm thấy khí tài nào.</Typography>
//               </Grid>
//             )}
//           </Grid>
//         </Grid>
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
//             page={currentPage}
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

// export default WeaponListPage;
