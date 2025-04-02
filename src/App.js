import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Nhập các thành phần từ react-router-dom để điều hướng
import Navbar from './components/Navbar'; // Nhập Navbar để hiển thị menu điều hướng
import Footer from './components/Footer'; // Nhập Footer để hiển thị chân trang
import HomePage from './pages/HomePage'; // Nhập trang chủ
import WeaponListPage from './pages/WeaponListPage'; // Nhập trang danh sách khí tài
import WeaponDetailPage from './pages/WeaponDetailPage'; // Nhập trang chi tiết khí tài
import NewsPage from './pages/NewsPage'; // Nhập trang tin tức
import NotFoundPage from './pages/NotFoundPage'; // Nhập trang 404
import './App.css'; // Nhập CSS cho App

const App = () => {
  return (
    // Router bao bọc toàn bộ ứng dụng để hỗ trợ điều hướng
    <Router>
      <div className="app">
        {/* Navbar hiển thị ở đầu trang */}
        <Navbar />

        {/* Phần nội dung chính, chứa các trang */}
        <main className="app-main">
          <Routes>
            {/* Định tuyến cho trang chủ */}
            <Route path="/" element={<HomePage />} />
            
            {/* Định tuyến cho trang danh sách khí tài */}
            <Route path="/weapons" element={<WeaponListPage />} />
            
            {/* Định tuyến cho trang chi tiết khí tài, sử dụng param :id */}
            <Route path="/weapons/:id" element={<WeaponDetailPage />} />
            
            {/* Định tuyến cho trang tin tức */}
            <Route path="/news" element={<NewsPage />} />
            
            {/* Định tuyến cho trang About (tạm dùng placeholder vì chưa có AboutPage) */}
            <Route path="/about" element={<div>Trang Giới thiệu (Chưa phát triển)</div>} />
            
            {/* Định tuyến cho mọi đường dẫn không khớp (404) */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Footer hiển thị ở cuối trang */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;