// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Box,
//   Typography,
//   TextField,
//   Button,
//   Paper,
//   Link,
//   Fade,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';

// // Styled components cho giao diện
// const StyledPaper = styled(Paper)(({ theme }) => ({
//   padding: theme.spacing(4),
//   maxWidth: 400,
//   width: '100%',
//   margin: '0 auto',
//   borderRadius: '12px',
//   boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//   transition: 'transform 0.3s ease',
//   '&:hover': {
//     transform: 'translateY(-5px)',
//   },
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   borderRadius: '20px',
//   padding: '10px 20px',
//   backgroundColor: '#ff9900',
//   '&:hover': {
//     backgroundColor: '#e68a00',
//   },
// }));

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // Xử lý đăng nhập
//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (email === 'test@example.com' && password === 'password123') {
//       setError('');
//       navigate('/');
//     } else {
//       setError('Email hoặc mật khẩu không đúng!');
//     }
//   };

//   return (
//     <Box
//       sx={{
//         minHeight: '100vh',
//         bgcolor: '#f5f5f5',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         py: 4,
//       }}
//     >
//       <Fade in={true} timeout={500}>
//         <StyledPaper elevation={3}>
//           <Box sx={{ textAlign: 'center', mb: 3 }}>
//             <Typography
//               variant="h4"
//               sx={{ fontWeight: 600, color: '#1a2b49', mb: 1 }}
//             >
//               Đăng Nhập
//             </Typography>
//             <Typography variant="body2" sx={{ color: '#666' }}>
//               Chào mừng bạn trở lại!
//             </Typography>
//           </Box>

//           <form onSubmit={handleLogin}>
//             {/* Email */}
//             <TextField
//               fullWidth
//               label="Email"
//               variant="outlined"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               sx={{ mb: 2 }}
//               required
//               type="email"
//               InputProps={{
//                 sx: { borderRadius: '8px' },
//               }}
//             />

//             {/* Password */}
//             <TextField
//               fullWidth
//               label="Mật khẩu"
//               variant="outlined"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               sx={{ mb: 3 }}
//               required
//               type="password"
//               InputProps={{
//                 sx: { borderRadius: '8px' },
//               }}
//             />

//             {/* Hiển thị lỗi nếu có */}
//             {error && (
//               <Typography
//                 variant="body2"
//                 sx={{ color: '#d32f2f', mb: 2, textAlign: 'center' }}
//               >
//                 {error}
//               </Typography>
//             )}

//             {/* Nút Đăng nhập */}
//             <StyledButton
//               fullWidth
//               variant="contained"
//               type="submit"
//               sx={{ mb: 2 }}
//             >
//               Đăng Nhập
//             </StyledButton>

//             {/* Liên kết tạo tài khoản */}
//             <Typography variant="body2" sx={{ textAlign: 'center', color: '#666' }}>
//               Chưa có tài khoản?{' '}
//               <Link
//                 href="/request-account"
//                 sx={{
//                   color: '#ff9900',
//                   textDecoration: 'none',
//                   '&:hover': { textDecoration: 'underline' },
//                 }}
//               >
//                 Tạo tài khoản
//               </Link>
//             </Typography>
//           </form>
//         </StyledPaper>
//       </Fade>
//     </Box>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Link,
  Fade,
} from '@mui/material';
import { styled } from '@mui/material/styles';

// Styled components cho giao diện
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: 400,
  width: '100%',
  margin: '0 auto',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '20px',
  padding: '10px 20px',
  backgroundColor: '#ff9900',
  '&:hover': {
    backgroundColor: '#e68a00',
  },
}));

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Xử lý đăng nhập
  const handleLogin = (e) => {
    e.preventDefault();
    // Logic giả lập đăng nhập (thay bằng API thực tế)
    if (email === 'test@example.com' && password === 'password123') {
      setError('');
      // Lưu token vào localStorage (giả lập)
      localStorage.setItem('authToken', 'fake-token-123');
      // Chuyển hướng sau khi đăng nhập thành công
      navigate('/');
    } else {
      setError('Email hoặc mật khẩu không đúng!');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
      }}
    >
      <Fade in={true} timeout={500}>
        <StyledPaper elevation={3}>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, color: '#1a2b49', mb: 1 }}
            >
              Đăng Nhập
            </Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>
              Chào mừng bạn trở lại!
            </Typography>
          </Box>

          <form onSubmit={handleLogin}>
            {/* Email */}
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ mb: 2 }}
              required
              type="email"
              InputProps={{
                sx: { borderRadius: '8px' },
              }}
            />

            {/* Password */}
            <TextField
              fullWidth
              label="Mật khẩu"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 3 }}
              required
              type="password"
              InputProps={{
                sx: { borderRadius: '8px' },
              }}
            />

            {/* Hiển thị lỗi nếu có */}
            {error && (
              <Typography
                variant="body2"
                sx={{ color: '#d32f2f', mb: 2, textAlign: 'center' }}
              >
                {error}
              </Typography>
            )}

            {/* Nút Đăng nhập */}
            <StyledButton
              fullWidth
              variant="contained"
              type="submit"
              sx={{ mb: 2 }}
            >
              Đăng Nhập
            </StyledButton>

            {/* Liên kết tạo tài khoản */}
            <Typography variant="body2" sx={{ textAlign: 'center', color: '#666' }}>
              Chưa có tài khoản?{' '}
              <Link
                href="/request-account"
                sx={{
                  color: '#ff9900',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                Tạo tài khoản
              </Link>
            </Typography>
          </form>
        </StyledPaper>
      </Fade>
    </Box>
  );
};

export default Login;