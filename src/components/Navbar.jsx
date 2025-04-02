import React from 'react';
import { NavLink } from 'react-router-dom'; // Nhập NavLink để điều hướng
import '../styles/Navbar.css'; // Nhập CSS từ thư mục styles
import logo from '../assets/images/Logo_QĐNDVN.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Phần logo bên trái */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
         
      {/* Danh sách các mục menu */}
      <ul className="navbar-menu">
        {/* Mục Home */}
        <li className="navbar-item">
          <NavLink
            to="/" // Đường dẫn tới trang chủ
            className={({ isActive }) => (isActive ? 'active' : '')} // Thêm class 'active' khi trang được chọn
          >
            Home
          </NavLink>
        </li>
        {/* Mục Weapons */}
        <li className="navbar-item">
          <NavLink
            to="/weapons" // Đường dẫn tới trang danh sách khí tài
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Weapons
          </NavLink>
        </li>
        {/* Mục News */}
        <li className="navbar-item">
          <NavLink
            to="/news" // Đường dẫn tới trang tin tức
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            News
          </NavLink>
        </li>
        {/* Mục About */}
        <li className="navbar-item">
          <NavLink
            to="/about" // Đường dẫn tới trang giới thiệu
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;