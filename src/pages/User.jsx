

import { useNavigate } from 'react-router-dom'; // THÊM DÒNG NÀY Ở ĐẦU FILE
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Divider,
  Button,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import { styled } from '@mui/material/styles';



const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 700,
  margin: '20px auto',
  borderRadius: '16px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
  },
}));

const rankOptions = ['Hạ sĩ', 'Trung sĩ', 'Thượng sĩ', 'Thiếu úy', 'Trung úy', 'Thượng úy', 'Đại úy'];

const User = () => {
  const [user, setUser] = useState({
    name: 'Nguyen Van A',
    email: 'nguyenvana@example.com',
    avatar: '/path-to-user-avatar.jpg',
    bio: 'Người dùng nhiệt tình của QĐNDVN.',
    phone: '0123456789',
    dob: '1990-01-01',
    address: 'Hà Nội, Việt Nam',
    nationality: 'Việt Nam',
    studentId: 'SV123456',
    class: 'Kỹ sư CNTT 2021',
    rank: 'Thượng úy',
  });

  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setUser(formData);
    setEditing(false);
  };

  const handleCancel = () => {
    setFormData(user);
    setEditing(false);
  };
  const navigate = useNavigate(); // THÊM DÒNG NÀY TRONG COMPONENT User


  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f5f5', pt: 6 }}>
      <StyledPaper elevation={3}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar
            src={formData.avatar}
            alt={formData.name}
            sx={{
              width: 130,
              height: 130,
              mb: 2,
              border: '4px solid #ff9900',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'scale(1.05)' },
            }}
          />

          {editing ? (
            <>
              <TextField
                label="Tên"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Giới thiệu"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                multiline
                rows={3}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Ảnh đại diện (URL)"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Số điện thoại"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Ngày sinh"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
                InputLabelProps={{ shrink: true }}
              />
              <TextField
                label="Địa chỉ"
                name="address"
                value={formData.address}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Quốc tịch"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Mã số sinh viên"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Lớp"
                name="class"
                value={formData.class}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />

              {/* Cấp bậc dùng Select */}
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel id="rank-label">Cấp bậc / Chức vụ</InputLabel>
                <Select
                  labelId="rank-label"
                  name="rank"
                  value={formData.rank}
                  label="Cấp bậc / Chức vụ"
                  onChange={handleChange}
                >
                  {rankOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleSave}
                  sx={{ bgcolor: '#1a2b49', '&:hover': { bgcolor: '#0d1a33' } }}
                >
                  Lưu
                </Button>
                <Button variant="outlined" onClick={handleCancel}>
                  Hủy
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Typography variant="h4" sx={{ fontWeight: 600, color: '#1a2b49' }}>
                {user.name}
              </Typography>
              <Typography variant="body1" sx={{ color: '#666', mb: 2 }}>
                {user.email}
              </Typography>
              <Divider sx={{ width: '80%', my: 2 }} />
              <Typography variant="body2" sx={{ textAlign: 'center', color: '#333', mb: 2 }}>
                {user.bio}
              </Typography>

              {/* Hiển thị các thông tin bổ sung */}
              <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                📱 <strong>SĐT:</strong> {user.phone}
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                🎂 <strong>Ngày sinh:</strong> {user.dob}
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                🏠 <strong>Địa chỉ:</strong> {user.address}
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                🏳️ <strong>Quốc tịch:</strong> {user.nationality}
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                🎓 <strong>MSSV:</strong> {user.studentId}
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mb: 1 }}>
                🏫 <strong>Lớp:</strong> {user.class}
              </Typography>
              <Typography variant="body2" sx={{ color: '#555', mb: 3 }}>
                🛡️ <strong>Cấp bậc:</strong> {user.rank}
              </Typography>

              <Button
                variant="contained"
                onClick={() => setEditing(true)}
                sx={{
                  bgcolor: '#ff9900',
                  '&:hover': { bgcolor: '#e68a00' },
                  borderRadius: '20px',
                  px: 4,
                }}
              >
                Edit Profile
              </Button>
              
            </>
          )}
        </Box>
      </StyledPaper>
      <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 3 }}>
  <Button
    variant="outlined"
    onClick={() => navigate('/')}
    sx={{ px: 4 }}
  >
    ← Quay lại trang chính
  </Button>
</Box>


    </Box>
  );
};

export default User;
