// App.js
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
import About from './pages/AboutPage';
import Login from './pages/LoginPage';
import RequestAccount from './pages/RequestAccount';
import User from './pages/User';


const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
        <Routes>
          {/* Layout bọc các trang con */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="weapons" element={<WeaponListPage />} />
            <Route path="weapons/:id" element={<WeaponDetailPage />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="about" element={<About />} />
            <Route path="user" element={<User />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
};

export default App;
