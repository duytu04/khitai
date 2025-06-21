import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Box,
  Pagination,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Skeleton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

// 👉 Dữ liệu mẫu tích hợp tại chỗ
const navalAssets = [
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: '/images/naval/kilo636.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  },
  {
    id: 'naval-003',
    name: 'Tàu tên lửa Molniya',
    image: '/images/naval/molniya.jpg',
    description: 'Tàu tên lửa lớp Molniya sử dụng tên lửa Kh-35 Uran-E',
    origin: 'Việt Nam',
    type: 'Tàu tên lửa',
    year: 2007,
  },
  {
    id: 'naval-004',
    name: 'Tàu tuần tra DN-2000',
    image: '/images/naval/dn2000.jpg',
    description: 'Tàu tuần tra hiện đại DN-2000 do Hà Lan thiết kế',
    origin: 'Việt Nam / Hà Lan',
    type: 'Tàu tuần tra',
    year: 2015,
  },
  {
    id: 'naval-005',
    name: 'Tàu đổ bộ HQ-571',
    image: '/images/naval/hq571.jpg',
    description: 'Tàu vận tải đổ bộ HQ-571 thuộc Lữ đoàn 125 Hải quân',
    origin: 'Việt Nam',
    type: 'Tàu đổ bộ',
    year: 2012,
  },
  {
    id: 'naval-006',
    name: 'Tàu săn ngầm lớp Pohang',
    image: '/images/naval/pohang.jpg',
    description: 'Tàu săn ngầm Hàn Quốc chuyển giao cho Việt Nam',
    origin: 'Hàn Quốc',
    type: 'Tàu săn ngầm',
    year: 2018,
  },
  // 👇 Bạn có thể thêm nhiều mục khác theo cấu trúc này
];

const WeaponCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  transition: '0.3s',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: theme.shadows[4],
  },
}));

export default function WeaponListNaval() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 24;
  const totalItems = navalAssets.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000); // Giả lập loading 1 giây
  }, []);

  const handleClickCard = (id) => {
    navigate(`/naval/${id}`);
  };

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  const visibleItems = navalAssets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        Danh sách khí tài Hải quân
      </Typography>

      <Grid container spacing={3}>
        {loading
          ? Array.from({ length: itemsPerPage }).map((_, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Skeleton variant="rectangular" height={200} />
                <Skeleton />
                <Skeleton width="60%" />
              </Grid>
            ))
          : visibleItems.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <Tooltip title={item.description || 'Thông tin khí tài'} arrow>
                  <WeaponCard onClick={() => handleClickCard(item.id)}>
                    <CardMedia
                      component="img"
                      height="160"
                      image={item.image}
                      alt={item.name}
                    />
                    <CardContent>
                      <Typography variant="h6" noWrap>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" noWrap>
                        {item.origin} - {item.type}
                      </Typography>
                    </CardContent>
                  </WeaponCard>
                </Tooltip>
              </Grid>
            ))}
      </Grid>

      {/* Phân trang */}
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, pb: 4 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handleChangePage}
            color="primary"
            shape="rounded"
            siblingCount={1}
            boundaryCount={1}
          />
        </Box>
      )}
    </Box>
  );
}
