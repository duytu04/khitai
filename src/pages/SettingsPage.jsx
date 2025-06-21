


// import React, { useState } from 'react';
// import {
//   Box,
//   Paper,
//   Tabs,
//   Tab,
//   Typography,
//   TextField,
//   Button,
//   Switch,
//   FormControlLabel,
//   Select,
//   MenuItem,
//   InputLabel,
//   FormControl,
//   Divider,
// } from '@mui/material';

// const Settings = () => {
//   const [tabIndex, setTabIndex] = useState(0);
//   const [darkMode, setDarkMode] = useState(false);
//   const [language, setLanguage] = useState('vi');

//   const handleTabChange = (e, newValue) => {
//     setTabIndex(newValue);
//   };

//   return (
//     <Box sx={{ minHeight: '100vh', bgcolor: '#f0f2f5', py: 5 }}>
//       <Paper sx={{ maxWidth: 800, mx: 'auto', p: 4, borderRadius: 3 }}>
//         <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#1a2b49' }}>
//           Cài đặt hệ thống
//         </Typography>

//         {/* Tabs điều hướng */}
//         <Tabs
//           value={tabIndex}
//           onChange={handleTabChange}
//           variant="scrollable"
//           scrollButtons="auto"
//         >
//           <Tab label="Bảo mật" />
//           <Tab label="Giao diện" />
//           <Tab label="Thông báo" />
//         </Tabs>

//         {/* Nội dung tab */}
//         <Box sx={{ mt: 4 }}>
//           {/* === TAB 1: BẢO MẬT === */}
//           {tabIndex === 0 && (
//             <Box>
//               <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
//                 Đổi mật khẩu
//               </Typography>
//               <Divider sx={{ mb: 3 }} />
//               <TextField
//                 fullWidth
//                 label="Mật khẩu hiện tại"
//                 type="password"
//                 sx={{ mb: 2 }}
//               />
//               <TextField
//                 fullWidth
//                 label="Mật khẩu mới"
//                 type="password"
//                 sx={{ mb: 2 }}
//               />
//               <TextField
//                 fullWidth
//                 label="Xác nhận mật khẩu mới"
//                 type="password"
//                 sx={{ mb: 3 }}
//               />
//               <Box sx={{ textAlign: 'right' }}>
//                 <Button
//                   variant="contained"
//                   sx={{ bgcolor: '#1a2b49', '&:hover': { bgcolor: '#0d1a33' } }}
//                 >
//                   Cập nhật mật khẩu
//                 </Button>
//               </Box>
//             </Box>
//           )}

//           {/* === TAB 2: GIAO DIỆN === */}
//           {tabIndex === 1 && (
//             <Box>
//               <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
//                 Cài đặt hiển thị
//               </Typography>
//               <Divider sx={{ mb: 3 }} />
//               <FormControlLabel
//                 control={
//                   <Switch
//                     checked={darkMode}
//                     onChange={() => setDarkMode(!darkMode)}
//                   />
//                 }
//                 label="Chế độ tối (Dark Mode)"
//                 sx={{ mb: 3 }}
//               />
//               <FormControl fullWidth sx={{ mb: 3 }}>
//                 <InputLabel id="lang-label">Ngôn ngữ</InputLabel>
//                 <Select
//                   labelId="lang-label"
//                   value={language}
//                   onChange={(e) => setLanguage(e.target.value)}
//                   label="Ngôn ngữ"
//                 >
//                   <MenuItem value="vi">Tiếng Việt</MenuItem>
//                   <MenuItem value="en">English</MenuItem>
//                 </Select>
//               </FormControl>
//               <Box sx={{ textAlign: 'right' }}>
//                 <Button variant="contained">Lưu giao diện</Button>
//               </Box>
//             </Box>
//           )}

//           {tabIndex === 2 && (
//   <Box>
//     <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
//       Cài đặt thông báo
//     </Typography>
//     <Divider sx={{ mb: 3 }} />
    
//     <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
//       <FormControlLabel
//         control={<Switch defaultChecked />}
//         label="Gửi email thông báo"
//       />
//       <FormControlLabel
//         control={<Switch />}
//         label="Nhận tin hệ thống"
//       />
//       <FormControlLabel
//         control={<Switch />}
//         label="Thông báo khi có tin mới"
//       />
//       <FormControlLabel
//         control={<Switch />}
//         label="Thông báo cập nhật phần mềm"
//       />
//     </Box>

//     <Box sx={{ textAlign: 'right' }}>
//       <Button variant="contained">Lưu tùy chọn</Button>
//     </Box>
//   </Box>
// )}

//         </Box>
//       </Paper>
//     </Box>
//   );
// };

// export default Settings;

import React, { useState } from 'react';
import {
  Box,
  Paper,
  Tabs,
  Tab,
  Typography,
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Divider,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal'; // Đường dẫn tùy vào cấu trúc dự án của bạn

const Settings = () => {
  const [tabIndex, setTabIndex] = useState(0);
  
  const [language, setLanguage] = useState('vi');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  const handleTabChange = (e, newValue) => {
    setTabIndex(newValue);
  };

  const handleSave = () => {
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f0f2f5', py: 5 }}>
      <Paper sx={{ maxWidth: 800, mx: 'auto', p: 4, borderRadius: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 3, color: '#1a2b49' }}>
          Cài đặt hệ thống
        </Typography>

        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Bảo mật" />
          <Tab label="Giao diện" />
          <Tab label="Thông báo" />
        </Tabs>

        <Box sx={{ mt: 4 }}>
          {/* TAB 1: BẢO MẬT */}
          {tabIndex === 0 && (
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
                Đổi mật khẩu
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <TextField fullWidth label="Mật khẩu hiện tại" type="password" sx={{ mb: 2 }} />
              <TextField fullWidth label="Mật khẩu mới" type="password" sx={{ mb: 2 }} />
              <TextField fullWidth label="Xác nhận mật khẩu mới" type="password" sx={{ mb: 3 }} />
              <Box sx={{ textAlign: 'right' }}>
                <Button variant="contained" onClick={handleSave}
                  sx={{ bgcolor: '#1a2b49', '&:hover': { bgcolor: '#0d1a33' } }}
                >
                  Cập nhật mật khẩu
                </Button>
              </Box>
            </Box>
          )}

          {/* TAB 2: GIAO DIỆN */}
          {tabIndex === 1 && (
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
                Cài đặt hiển thị
              </Typography>
              <Divider sx={{ mb: 3 }} />
              
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel id="lang-label">Ngôn ngữ</InputLabel>
                <Select
                  labelId="lang-label"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  label="Ngôn ngữ"
                >
                  <MenuItem value="vi">Tiếng Việt</MenuItem>
                  <MenuItem value="en">English</MenuItem>
                </Select>
              </FormControl>
              <Box sx={{ textAlign: 'right' }}>
                <Button variant="contained" onClick={handleSave}>
                  Lưu giao diện
                </Button>
              </Box>
            </Box>
          )}

          {/* TAB 3: THÔNG BÁO */}
          {tabIndex === 2 && (
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 500, mb: 2 }}>
                Cài đặt thông báo
              </Typography>
              <Divider sx={{ mb: 3 }} />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 4 }}>
                <FormControlLabel control={<Switch defaultChecked />} label="Gửi email thông báo" />
                <FormControlLabel control={<Switch />} label="Nhận tin hệ thống" />
                <FormControlLabel control={<Switch />} label="Thông báo khi có tin mới" />
                <FormControlLabel control={<Switch />} label="Thông báo cập nhật phần mềm" />
              </Box>
              <Box sx={{ textAlign: 'right' }}>
                <Button variant="contained" onClick={handleSave}>
                  Lưu tùy chọn
                </Button>
              </Box>
            </Box>
          )}
        </Box>

       
      </Paper>

      {/* Thông báo sử dụng Modal */}
      <Modal
        open={snackbarOpen}
        message="Cài đặt đã được lưu thành công!"
        onClose={handleCloseSnackbar}
      />
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

export default Settings;

