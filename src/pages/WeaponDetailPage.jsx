import React from 'react';
import { useParams } from 'react-router-dom';
import { weapons } from '../data/weapons'; // Nhập danh sách khí tài
import {
  Box,
  Typography,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

const WeaponDetailPage = () => {
  // Lấy ID từ URL
  const { id } = useParams();

  // Tìm khí tài dựa trên ID
  const weapon = weapons.find((w) => w.id === parseInt(id));

  // Nếu không tìm thấy khí tài
  if (!weapon) {
    return (
      <Box sx={{ padding: 3, textAlign: 'center' }}>
        <Typography variant="h4" color="error">
          Không tìm thấy khí tài
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      {/* Tiêu đề khí tài */}
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        {weapon.name}
      </Typography>

      {/* Container chính cho nội dung chi tiết */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        {/* Hình ảnh khí tài */}
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={weapon.image}
            alt={weapon.name}
            sx={{
              width: '100%',
              maxHeight: 400,
              objectFit: 'cover',
              borderRadius: 2,
            }}
          />
        </Grid>

        {/* Thông tin chi tiết */}
        <Grid item xs={12} md={6}>
          <Box sx={{ bgcolor: '#f5f5f5', padding: 2, borderRadius: 2 }}>
            <Typography variant="h5" gutterBottom>
              Thông tin kỹ thuật
            </Typography>
            <List dense>
              <ListItem>
                <ListItemText
                  primary={<Typography variant="body1"><strong>Danh mục:</strong> {weapon.category}</Typography>}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<Typography variant="body1"><strong>Mô tả:</strong> {weapon.description}</Typography>}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      <strong>Trọng lượng:</strong> {weapon.technicalDetails.weight || 'Không có dữ liệu'}
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      <strong>Tốc độ/Tầm bắn:</strong>{' '}
                      {weapon.technicalDetails.speed || weapon.technicalDetails.range || 'Không có dữ liệu'}
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      <strong>Vũ khí:</strong>{' '}
                      {weapon.technicalDetails.armament || weapon.technicalDetails.warhead || 'Không có dữ liệu'}
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      <strong>Thủy thủ đoàn:</strong>{' '}
                      {weapon.technicalDetails.crew || 'Không có dữ liệu'}
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WeaponDetailPage;