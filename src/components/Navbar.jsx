


import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/Logo_QĐNDVN.png';

const Navbar = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

// Bắt đầu kéo khi nhấn chuột hoặc chạm
const handleDragStart = (e) => {
  const container = scrollContainerRef.current;
  if (!container) return;

  setIsDragging(true);
  container.classList.add('dragging');

  // Lấy vị trí X ban đầu (chuột hoặc cảm ứng)
  const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
  setStartX(clientX);
  setScrollLeft(container.scrollLeft);
};

// Di chuyển khi kéo (chỉ khi đang giữ chuột)
const handleDragMove = (e) => {
  if (!isDragging) return; // Chỉ hoạt động khi đang kéo
  e.preventDefault(); // Ngăn chọn văn bản hoặc các hành vi mặc định khác

  const container = scrollContainerRef.current;
  if (!container) return;

  // Tính toán khoảng cách di chuyển
  const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
  const deltaX = clientX - startX;
  container.scrollLeft = scrollLeft - deltaX; // Cập nhật vị trí cuộn
};

// Ngừng kéo khi nhả chuột hoặc thả tay
const handleDragEnd = () => {
  setIsDragging(false); // Dừng trạng thái kéo
  const container = scrollContainerRef.current;
  if (container) container.classList.remove('dragging');
};
  return (
    <div>
      {/* Thanh navbar chính */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul className="navbar-menu">
          <li className="navbar-item"><NavLink to="/">Home</NavLink></li>
          <li className="navbar-item"><NavLink to="/weapons">Weapons</NavLink></li>
          <li className="navbar-item"><NavLink to="/news">News</NavLink></li>
          <li className="navbar-item"><NavLink to="/about">About</NavLink></li>
        </ul>
      </nav>

      {/* Thanh trượt ngang danh mục khí tài */}
      <div
        className="horizontal-scroll-container"
        ref={scrollContainerRef}
        onMouseDown={handleDragStart} // Nhấn chuột để bắt đầu kéo
        onMouseMove={handleDragMove} // Di chuyển chuột khi giữ
        onMouseUp={handleDragEnd}    // Nhả chuột để dừng kéo
        onMouseLeave={handleDragEnd} // Rời khỏi khu vực cũng dừng kéo
        onTouchStart={handleDragStart} // Hỗ trợ cảm ứng trên mobile
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
      >
        <ul className="horizontal-scroll">
          <li>
            <NavLink to="/weapons/naval">Khí tài hải quân</NavLink>
            <ul className="sub-dropdown">
              <li><NavLink to="/weapons/naval/ship">Tàu chiến</NavLink></li>
              <li><NavLink to="/weapons/naval/submarine">Tàu ngầm</NavLink></li>
              <li><NavLink to="/weapons/naval/missile">Vũ khí chống tàu</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="/weapons/airforce">Khí tài không quân</NavLink>
            <ul className="sub-dropdown">
              <li><NavLink to="/weapons/airforce/fighter">Máy bay chiến đấu</NavLink></li>
              <li><NavLink to="/weapons/airforce/transport">Máy bay vận tải</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="/weapons/ground">Khí tài mặt đất</NavLink>
            <ul className="sub-dropdown">
              <li><NavLink to="/weapons/ground/tank">Xe tăng</NavLink></li>
              <li><NavLink to="/weapons/ground/vehicle">Xe bọc thép</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="/weapons/chemical">Khí tài hóa học & sinh học</NavLink>
            <ul className="sub-dropdown">
              <li><NavLink to="/weapons/chemical/chemical-weapons">Vũ khí hóa học</NavLink></li>
              <li><NavLink to="/weapons/chemical/biological-weapons">Vũ khí sinh học</NavLink></li>
              <li><NavLink to="/weapons/chemical/defense-systems">Hệ thống phòng vệ hóa học và sinh học</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="/weapons/electronic">Khí tài chiến tranh điện tử</NavLink>
            <ul className="sub-dropdown">
              <li><NavLink to="/weapons/electronic/jamming">Hệ thống jamming</NavLink></li>
              <li><NavLink to="/weapons/electronic/radar">Radar tác chiến điện tử</NavLink></li>
              <li><NavLink to="/weapons/electronic/defense">Phòng thủ tác chiến điện tử</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="/weapons/nuclear">Khí tài vũ khí hạt nhân</NavLink>
            <ul className="sub-dropdown">
              <li><NavLink to="/weapons/nuclear/icbm">Tên lửa đạn đạo liên lục địa (ICBM)</NavLink></li>
              <li><NavLink to="/weapons/nuclear/nuclear-bombs">Bom hạt nhân</NavLink></li>
              <li><NavLink to="/weapons/nuclear/nuclear-missiles">Tên lửa mang đầu đạn hạt nhân</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="/weapons/special">Khí tài chiến tranh đặc biệt</NavLink>
            <ul className="sub-dropdown">
              <li><NavLink to="/weapons/special/sabotage-tools">Dụng cụ phá hoại</NavLink></li>
              <li><NavLink to="/weapons/special/stealth-weapons">Vũ khí tàng hình</NavLink></li>
              <li><NavLink to="/weapons/special/communications">Khí tài thông tin</NavLink></li>
              <li><NavLink to="/weapons/special/special-ops">Khí tài đặc nhiệm</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="/weapons/cyber">Khí tài chiến tranh mạng</NavLink>
            <ul className="sub-dropdown">
              <li><NavLink to="/weapons/cyber/cyber-attacks">Hệ thống tấn công mạng</NavLink></li>
              <li><NavLink to="/weapons/cyber/malware">Phần mềm độc hại quân sự</NavLink></li>
              <li><NavLink to="/weapons/cyber/network-defense">Phần mềm phòng thủ mạng</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="/weapons/small-arms">Khí tài quân sự cỡ nhỏ</NavLink>
            <ul className="sub-dropdown">
              <li><NavLink to="/weapons/small-arms/sniper-rifles">Súng bắn tỉa</NavLink></li>
              <li><NavLink to="/weapons/small-arms/rifles">Súng trường</NavLink></li>
              <li><NavLink to="/weapons/small-arms/handguns">Súng ngắn</NavLink></li>
              <li><NavLink to="/weapons/small-arms/light-machine-guns">Súng máy hạng nhẹ</NavLink></li>
              <li><NavLink to="/weapons/small-arms/grenades">Súng phóng lựu</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="/weapons/anti-tank">Khí tài chống tăng</NavLink>
            <ul className="sub-dropdown">
              <li><NavLink to="/weapons/anti-tank/atgm">Tên lửa chống tăng</NavLink></li>
              <li><NavLink to="/weapons/anti-tank/grenades">Lựu đạn chống tăng</NavLink></li>
              <li><NavLink to="/weapons/anti-tank/anti-tank-guns">Súng chống tăng</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="/weapons/space">Khí tài không gian</NavLink>
            <ul className="sub-dropdown">
              <li><NavLink to="/weapons/space/satellites">Vệ tinh quân sự</NavLink></li>
              <li><NavLink to="/weapons/space/space-missiles">Tên lửa phóng vệ tinh</NavLink></li>
              <li><NavLink to="/weapons/space/space-radar">Hệ thống radar không gian</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="/weapons/support">Khí tài hỗ trợ chiến đấu</NavLink>
            <ul className="sub-dropdown">
              <li><NavLink to="/weapons/support/surveillance">Dụng cụ trinh sát</NavLink></li>
              <li><NavLink to="/weapons/support/ambulance">Xe cứu thương quân sự</NavLink></li>
              <li><NavLink to="/weapons/support/emergency">Khí tài cấp cứu chiến trường</NavLink></li>
              <li><NavLink to="/weapons/support/early-warning">Hệ thống cảnh báo sớm</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="/weapons/special-ops">Khí tài tác chiến đặc biệt</NavLink>
            <ul className="sub-dropdown">
              <li><NavLink to="/weapons/special-ops/tear-gas">Lựu đạn hơi cay</NavLink></li>
              <li><NavLink to="/weapons/special-ops/stone-throwers">Máy bắn đá</NavLink></li>
              <li><NavLink to="/weapons/special-ops/base-assault">Khí tài đột kích vào căn cứ</NavLink></li>
            </ul>
          </li>
          <li>
            <NavLink to="/weapons/drones">Khí tài đặc biệt không người lái</NavLink>
            <ul className="sub-dropdown">
              <li><NavLink to="/weapons/drones/combat-drones">Drone chiến đấu</NavLink></li>
              <li><NavLink to="/weapons/drones/transport-drones">Drone vận tải</NavLink></li>
              <li><NavLink to="/weapons/drones/surveillance-drones">Drone quan sát</NavLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;