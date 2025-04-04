// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Box } from '@mui/material';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import WeaponListPage from './pages/WeaponListPage';
// import WeaponDetailPage from './pages/WeaponDetailPage';
// import NewsPage from './pages/NewsPage';
// import NotFoundPage from './pages/NotFoundPage';
// import Layout from './components/Layout';

// const App = () => {
//   console.log('Navbar:', typeof Navbar); // Phải là "function"
//   console.log('Footer:', typeof Footer); // Phải là "function"
//   console.log('HomePage:', typeof HomePage); // Phải là "function"
//   console.log('WeaponListPage:', typeof WeaponListPage); // Phải là "function"
//   console.log('WeaponDetailPage:', typeof WeaponDetailPage); // Phải là "function"
//   console.log('NewsPage:', typeof NewsPage); // Phải là "function"
//   console.log('NotFoundPage:', typeof NotFoundPage); // Phải là "function"

//   return (
//     <Router>
//       <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
//         <Navbar />
//         <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/weapons" element={<WeaponListPage />} />
//             <Route path="/weapons/:id" element={<WeaponDetailPage />} />
//             <Route path="/news" element={<NewsPage />} />
//             <Route path="/about" element={<Box sx={{ textAlign: 'center', py: 4 }}>Trang Giới thiệu (Chưa phát triển)</Box>} />
//             <Route path="*" element={<NotFoundPage />} />
//           </Routes>
//         </Box>
//         <Footer />
//       </Box>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import HomePage from './pages/HomePage';
import WeaponListPage from './pages/WeaponListPage';
import WeaponDetailPage from './pages/WeaponDetailPage';
import NewsPage from './pages/NewsPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import Footer from './components/Footer';

const App = () => {
  // Kiểm tra các component (tùy chọn, có thể giữ hoặc xóa)
  console.log('Layout:', typeof Layout); // Phải là "function"
  console.log('HomePage:', typeof HomePage); // Phải là "function"
  console.log('WeaponListPage:', typeof WeaponListPage); // Phải là "function"
  console.log('WeaponDetailPage:', typeof WeaponDetailPage); // Phải là "function"
  console.log('NewsPage:', typeof NewsPage); // Phải là "function"
  console.log('NotFoundPage:', typeof NotFoundPage); // Phải là "function"
  console.log('Footer:', typeof Footer); // Phải là "function"

  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/weapons" element={<WeaponListPage />} />
            <Route path="/weapons/:id" element={<WeaponDetailPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<Box sx={{ textAlign: 'center', py: 4 }}>Trang Giới thiệu (Chưa phát triển)</Box>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;