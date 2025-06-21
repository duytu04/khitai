// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import HomePage from './pages/HomePage';
import WeaponListPage from './pages/WeaponListPage';
import WeaponListNaval from './pages/naval/WeaponListNaval';
import NewsPage from './pages/NewsPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';
import Footer from './components/Footer';
import Ballistics from './pages/BallisticsPage';
import About from './pages/AboutPage';
import Compare from './pages/ComparePage';
import Login from './pages/LoginPage';
import RequestAccount from './pages/RequestAccount';
import User from './pages/User';
import Settings from './pages/SettingsPage';
import Modal from './components/Modal';



const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', bgcolor: '#f5f5f5' }}>
        <Routes>
           {/* Trang login không dùng Layout */}
  <Route path="/login" element={<Login />} />
  <Route path="/request-account" element={<RequestAccount />} />
          {/* Layout bọc các trang con */}
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="weapons" element={<WeaponListPage />} />
           <Route path="weapons/naval" element={<WeaponListNaval />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="ballistics" element={<Ballistics />} />
            <Route path="about" element={<About />} />
            <Route path="compare" element={<Compare />} />
            <Route path="settings" element={<Settings />} />
      
            {/* Thêm route cho các trang con */}
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
