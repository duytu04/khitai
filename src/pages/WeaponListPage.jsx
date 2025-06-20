



import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { weapons } from '../data/weapons';
import usePagination from '../hooks/usePagination';
import { Breadcrumbs, Link as MUILink } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

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
  const [subFilterType, setSubFilterType] = useState('all');
  const [isLoading, setIsLoading] = useState(true);

  const routeMap = {
    'Khí tài hải quân': '/weapons/naval',
    'Khí tài không quân': '/weapons/airforce',
    'Khí tài mặt đất': '/weapons/ground',
    'Khí tài hóa học & sinh học': '/weapons/chemical',
    'Khí tài chiến tranh điện tử': '/weapons/electronic',
    'Khí tài vũ khí hạt nhân': '/weapons/nuclear',
    'Khí tài chiến tranh đặc biệt': '/weapons/special',
    'Khí tài chiến tranh mạng': '/weapons/cyber',
    'Khí tài quân sự cỡ nhỏ': '/weapons/small-arms',
    'Khí tài chống tăng': '/weapons/anti-tank',
    'Khí tài không gian': '/weapons/space',
    'Khí tài hỗ trợ chiến đấu': '/weapons/support',
    'Khí tài tác chiến đặc biệt': '/weapons/special-ops',
    'UAV': '/weapons/drones',
    'Tank': '/weapons/ground/tank',
  };

  const subCategoryMap = {
    'Khí tài hải quân': ['Tất cả', 'Tàu chiến', 'Tàu ngầm', 'Tàu sân bay', 'Tàu hộ tống'],
    'UAV': ['Tất cả', 'UAV trinh sát', 'UAV chiến đấu', 'UAV đa nhiệm'],
    'Tank': ['Tất cả', 'Xe tăng chủ lực', 'Xe tăng hạng nhẹ', 'Xe tăng hỗ trợ'],
    'Khí tài không quân': ['Tất cả', 'Máy bay chiến đấu', 'Máy bay ném bom', 'Máy bay vận tải'],
    'Khí tài mặt đất': ['Tất cả', 'Pháo binh', 'Xe bọc thép', 'Hệ thống phòng không'],
    'Khí tài hóa học & sinh học': ['Tất cả', 'Vũ khí hóa học', 'Vũ khí sinh học'],
    'Khí tài chiến tranh điện tử': ['Tất cả', 'Radar', 'Hệ thống gây nhiễu', 'Hệ thống giám sát'],
    'Khí tài vũ khí hạt nhân': ['Tất cả', 'Tên lửa hạt nhân', 'Bom hạt nhân'],
    'Khí tài chiến tranh đặc biệt': ['Tất cả', 'Vũ khí đặc nhiệm', 'Thiết bị ngụy trang'],
    'Khí tài chiến tranh mạng': ['Tất cả', 'Phần mềm tấn công', 'Hệ thống phòng thủ mạng'],
    'Khí tài quân sự cỡ nhỏ': ['Tất cả', 'Súng trường', 'Súng ngắn', 'Súng máy'],
    'Khí tài chống tăng': ['Tất cả', 'Tên lửa chống tăng', 'Mìn chống tăng'],
    'Khí tài không gian': ['Tất cả', 'Vệ tinh quân sự', 'Tên lửa không gian'],
    'Khí tài hỗ trợ chiến đấu': ['Tất cả', 'Xe cứu thương', 'Xe hậu cần'],
    'Khí tài tác chiến đặc biệt': ['Tất cả', 'Thiết bị đặc nhiệm', 'Vũ khí phi sát thương'],
  };

  const filteredWeapons = weapons
    .filter((weapon) => !category || weapon.category.toLowerCase() === category)
    .filter((weapon) => weapon.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((weapon) => subFilterType === 'all' || subFilterType === 'Tất cả' || weapon.subCategory === subFilterType);

  const { currentItems, currentPage, totalPages, goToPage } = usePagination(filteredWeapons, 4);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000); // Giả lập tải dữ liệu
  }, []);

  const handlePageChange = (event, newPage) => {
    goToPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCardKeyDown = (e, id) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navigate(`/weapons/${id}`);
    }
  };

  const handleFilterChange = (event) => {
    const selected = event.target.value;
    setFilterType(selected);
    setSubFilterType('all'); // Reset sub-filter khi thay đổi filter chính
    if (routeMap[selected]) {
      navigate(routeMap[selected]);
    }
  };

  const handleSubFilterChange = (event) => {
    setSubFilterType(event.target.value);
  };

  return (
    <Box sx={{ backgroundColor: '#0D1B2A', minHeight: '100vh', padding: { xs: 2, md: 4 } }}>
      <Helmet>
        <title>{category ? `Khí tài ${category.toUpperCase()}` : 'Danh sách khí tài'}</title>
        <meta
          name="description"
          content={`Khám phá danh sách khí tài ${category || 'quân sự'} như UAV, xe tăng, tàu chiến.`}
        />
        <meta property="og:title" content={category ? `Khí tài ${category.toUpperCase()}` : 'Danh sách khí tài'} />
        <meta property="og:description" content="Khám phá các khí tài quân sự hiện đại như UAV, xe tăng, tàu chiến." />
      </Helmet>
<Box sx={{ color: '#B0BEC5', mb: 2 }}>
  <Breadcrumbs aria-label="breadcrumb" separator="›">
    <MUILink
      underline="hover"
      color="inherit"
      onClick={() => navigate('/')}
      sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
    >
      <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Trang chủ
    </MUILink>
    <MUILink
      underline="hover"
      color="inherit"
      onClick={() => navigate('/weapons')}
      sx={{ cursor: 'pointer' }}
    >
      Danh sách khí tài
    </MUILink>
    {category && (
      <Typography color="text.primary" sx={{ color: '#FFFFFF' }}>
        {category}
      </Typography>
    )}
  </Breadcrumbs>
</Box>

      <SectionTitle
      
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontSize: { xs: '2rem', md: '3rem' }, textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}
      >
        {category ? `Danh sách ${category.toUpperCase()}` : 'Danh sách khí tài'}
      </SectionTitle>

      {/* Bộ lọc và tìm kiếm */}
      <Box
  sx={{
    display: 'flex',
    gap: 2,
    mb: 4,
    justifyContent: { xs: 'center', sm: 'flex-start' }, // Center trên mobile, trái trên desktop
    flexWrap: 'wrap',
  }}
>

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
            width: { xs: '100%', sm: '300px' },
          }}
          aria-label="Tìm kiếm khí tài theo tên"
        />
        <FormControl sx={{ minWidth: 120, width: { xs: '100%', sm: '200px' } }}>
          <InputLabel id="filter-type-label" sx={{ color: '#B0BEC5' }}>
            Loại
          </InputLabel>
          <Select
  labelId="filter-type-label"
  value={filterType}
  onChange={handleFilterChange}
  MenuProps={{
    PaperProps: {
      style: {
        maxHeight: 250, // 👈 Giới hạn chiều cao dropdown, sẽ cuộn nếu vượt quá
      },
    },
  }}
  sx={{
    backgroundColor: '#1B263B',
    color: '#FFFFFF',
    '& .MuiSvgIcon-root': { color: '#B0BEC5' },
    '& .MuiOutlinedInput-notchedOutline': { borderColor: '#B0BEC5' },
    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#4CAF50' },
  }}
  aria-label="Lọc theo loại khí tài"
  aria-describedby="filter-type-description"
>
  <MenuItem value="all">Tất cả</MenuItem>
  <MenuItem value="UAV">UAV</MenuItem>
  <MenuItem value="Tank">Xe tăng</MenuItem>
  <MenuItem value="Khí tài hải quân">Khí tài hải quân</MenuItem>
  <MenuItem value="Khí tài không quân">Khí tài không quân</MenuItem>
  <MenuItem value="Khí tài mặt đất">Khí tài mặt đất</MenuItem>
  <MenuItem value="Khí tài hóa học & sinh học">Khí tài hóa học & sinh học</MenuItem>
  <MenuItem value="Khí tài chiến tranh điện tử">Khí tài chiến tranh điện tử</MenuItem>
  <MenuItem value="Khí tài vũ khí hạt nhân">Khí tài vũ khí hạt nhân</MenuItem>
  <MenuItem value="Khí tài chiến tranh đặc biệt">Khí tài chiến tranh đặc biệt</MenuItem>
  <MenuItem value="Khí tài chiến tranh mạng">Khí tài chiến tranh mạng</MenuItem>
  <MenuItem value="Khí tài quân sự cỡ nhỏ">Khí tài quân sự cỡ nhỏ</MenuItem>
  <MenuItem value="Khí tài chống tăng">Khí tài chống tăng</MenuItem>
  <MenuItem value="Khí tài không gian">Khí tài không gian</MenuItem>
  <MenuItem value="Khí tài hỗ trợ chiến đấu">Khí tài hỗ trợ chiến đấu</MenuItem>
  <MenuItem value="Khí tài tác chiến đặc biệt">Khí tài tác chiến đặc biệt</MenuItem>
</Select>

          <Typography id="filter-type-description" sx={{ display: 'none' }}>
            Lọc danh sách khí tài theo danh mục như UAV, xe tăng, tàu chiến, v.v.
          </Typography>
        </FormControl>
        {filterType !== 'all' && subCategoryMap[filterType] && (
          <FormControl sx={{ minWidth: 120, width: { xs: '100%', sm: '200px' } }}>
            <InputLabel id="sub-filter-type-label" sx={{ color: '#B0BEC5' }}>
              Phân loại
            </InputLabel>
            <Select
              labelId="sub-filter-type-label"
              value={subFilterType}
              onChange={handleSubFilterChange}
              sx={{
                backgroundColor: '#1B263B',
                color: '#FFFFFF',
                '& .MuiSvgIcon-root': { color: '#B0BEC5' },
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#B0BEC5' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#4CAF50' },
              }}
              aria-label="Lọc theo phân loại khí tài"
              aria-describedby="sub-filter-type-description"
            >
              {subCategoryMap[filterType].map((subCategory) => (
                <MenuItem key={subCategory} value={subCategory}>
                  {subCategory}
                </MenuItem>
              ))}
            </Select>
            <Typography id="sub-filter-type-description" sx={{ display: 'none' }}>
              Lọc chi tiết danh sách khí tài theo phân loại như tàu chiến, UAV chiến đấu, v.v.
            </Typography>
          </FormControl>
        )}
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
                        loading="lazy"
                        sx={{
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                          '&:hover': { transform: 'scale(1.05)' },
                        }}
                      />
                    )}
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <Typography id={`weapon-details-${weapon.id}`} sx={{ display: 'none' }}>
                        {`Khí tài ${weapon.name}, thuộc danh mục ${weapon.category}, phân loại: ${weapon.subCategory || 'Không có'}. Thông số: ${JSON.stringify(weapon.technicalDetails)}`}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                        {weapon.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#B0BEC5', mt: 1 }}>
                        {weapon.category}
                      </Typography>
                      {weapon.subCategory && (
                        <Typography variant="body2" sx={{ color: '#B0BEC5', mt: 0.5 }}>
                          Phân loại: {weapon.subCategory}
                        </Typography>
                      )}
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





