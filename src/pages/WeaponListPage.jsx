import React, { useState } from 'react';
import { weapons } from '../data/weapons'; // Nhập danh sách khí tài từ /data/weapons.js
import usePagination from '../hooks/usePagination'; // Nhập hook phân trang
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Paper,
} from '@mui/material'; // Nhập các thành phần từ MUI

const WeaponListPage = () => {
  // State để lưu danh mục được chọn từ sub-navbar
  const [selectedCategory, setSelectedCategory] = useState(null);
  // State để lưu các bộ lọc chi tiết từ sidebar
  const [filters, setFilters] = useState({});

  // Lấy danh sách danh mục duy nhất từ dữ liệu
  const categories = [...new Set(weapons.map((weapon) => weapon.category))];

  // Lọc danh sách khí tài dựa trên danh mục được chọn
  const filteredWeapons = selectedCategory
    ? weapons.filter((weapon) => weapon.category === selectedCategory)
    : weapons;

  // Lọc thêm dựa trên bộ lọc từ sidebar
  const detailedFilteredWeapons = Object.keys(filters).length > 0
    ? filteredWeapons.filter((weapon) => {
        const details = weapon.technicalDetails || {};
        if (filters.weight && details.weight !== filters.weight) return false;
        if (filters.speed && details.speed !== filters.speed) return false;
        if (filters.range && details.range !== filters.range) return false;
        return true;
      })
    : filteredWeapons;

  // Sử dụng hook phân trang, hiển thị 4 khí tài mỗi trang
  const { currentItems, currentPage, totalPages, nextPage, prevPage } =
    usePagination(detailedFilteredWeapons, 4);

  // Hàm xử lý khi chọn danh mục từ sub-navbar
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFilters({}); // Reset bộ lọc khi chọn danh mục mới
  };

  // Hàm xử lý thay đổi bộ lọc từ sidebar
  const handleFilterChange = (filterKey, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: value || undefined, // Nếu value rỗng thì xóa filter đó
    }));
  };

  // Lấy danh sách giá trị duy nhất cho bộ lọc
  const uniqueWeights = [...new Set(weapons.map((w) => w.technicalDetails?.weight))];
  const uniqueSpeeds = [...new Set(weapons.map((w) => w.technicalDetails?.speed))];
  const uniqueRanges = [...new Set(weapons.map((w) => w.technicalDetails?.range))];

  // Hàm reset bộ lọc
  const resetFilters = () => setFilters({});

  return (
    <Box sx={{ padding: 3 }}>
      {/* Tiêu đề trang */}
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Danh sách khí tài
      </Typography>

      {/* Thanh navbar phụ để chọn danh mục */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3, justifyContent: 'center' }}>
        <Button
          variant={!selectedCategory ? 'contained' : 'outlined'}
          color="primary"
          onClick={() => handleCategorySelect(null)}
        >
          Tất cả
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'contained' : 'outlined'}
            color="primary"
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </Button>
        ))}
      </Box>

      {/* Container chính với danh sách và thanh lọc */}
      <Grid container spacing={3}>
        {/* Danh sách khí tài */}
        <Grid item xs={12} md={selectedCategory ? 9 : 12}>
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

        {/* Thanh lọc bên phải (hiển thị khi chọn danh mục) */}
        {selectedCategory && (
          <Grid item xs={12} md={3}>
            <Paper sx={{ padding: 2 }}>
              <Typography variant="h6" gutterBottom>
                Lọc chi tiết
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {/* Bộ lọc: Trọng lượng */}
                <FormControl fullWidth>
                  <InputLabel>Trọng lượng</InputLabel>
                  <Select
                    value={filters.weight || ''}
                    onChange={(e) => handleFilterChange('weight', e.target.value)}
                    label="Trọng lượng"
                  >
                    <MenuItem value="">Tất cả</MenuItem>
                    {uniqueWeights.map((weight) => (
                      <MenuItem key={weight} value={weight}>
                        {weight}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {/* Bộ lọc: Tốc độ (cho Xe tăng và Máy bay) */}
                {['Xe tăng', 'Máy bay chiến đấu'].includes(selectedCategory) && (
                  <FormControl fullWidth>
                    <InputLabel>Tốc độ</InputLabel>
                    <Select
                      value={filters.speed || ''}
                      onChange={(e) => handleFilterChange('speed', e.target.value)}
                      label="Tốc độ"
                    >
                      <MenuItem value="">Tất cả</MenuItem>
                      {uniqueSpeeds.map((speed) => (
                        <MenuItem key={speed} value={speed}>
                          {speed}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}

                {/* Bộ lọc: Tầm bắn (cho Tên lửa) */}
                {selectedCategory === 'Tên lửa' && (
                  <FormControl fullWidth>
                    <InputLabel>Tầm bắn</InputLabel>
                    <Select
                      value={filters.range || ''}
                      onChange={(e) => handleFilterChange('range', e.target.value)}
                      label="Tầm bắn"
                    >
                      <MenuItem value="">Tất cả</MenuItem>
                      {uniqueRanges.map((range) => (
                        <MenuItem key={range} value={range}>
                          {range}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                )}

                {/* Nút reset bộ lọc */}
                <Button variant="outlined" color="secondary" onClick={resetFilters}>
                  Xóa bộ lọc
                </Button>
              </Box>
            </Paper>
          </Grid>
        )}
      </Grid>

      {/* Phân trang */}
      {totalPages > 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
          <Button
            variant="contained"
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Trang trước
          </Button>
          <Typography variant="body1" sx={{ alignSelf: 'center' }}>
            Trang {currentPage} / {totalPages}
          </Typography>
          <Button
            variant="contained"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          >
            Trang sau
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default WeaponListPage;