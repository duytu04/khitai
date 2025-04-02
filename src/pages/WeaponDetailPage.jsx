import React from 'react';
import { useParams } from 'react-router-dom'; // Nhập useParams để lấy ID từ URL
import { weapons } from '../data/weapons'; // Nhập danh sách khí tài từ /data/weapons.js
import '../styles/WeaponDetailPage.css'; // Nhập CSS cho trang

const WeaponDetailPage = () => {
  // Lấy ID từ URL
  const { id } = useParams();

  // Tìm khí tài dựa trên ID
  const weapon = weapons.find((w) => w.id === parseInt(id));

  // Nếu không tìm thấy khí tài
  if (!weapon) {
    return (
      <div className="weapon-detail-page">
        <h1>Không tìm thấy khí tài</h1>
      </div>
    );
  }

  return (
    <div className="weapon-detail-page">
      {/* Tiêu đề khí tài */}
      <h1 className="weapon-detail-title">{weapon.name}</h1>

      {/* Container chính cho nội dung chi tiết */}
      <div className="weapon-detail-content">
        {/* Hình ảnh khí tài */}
        <img
          src={weapon.image}
          alt={weapon.name}
          className="weapon-detail-image"
        />

        {/* Thông tin chi tiết */}
        <div className="weapon-detail-info">
          <h2>Thông tin kỹ thuật</h2>
          <p><strong>Danh mục:</strong> {weapon.category}</p>
          <p><strong>Mô tả:</strong> {weapon.description}</p>
          <ul className="technical-details">
            <li><strong>Trọng lượng:</strong> {weapon.technicalDetails.weight}</li>
            <li><strong>Tốc độ/Tầm bắn:</strong> {weapon.technicalDetails.speed || weapon.technicalDetails.range}</li>
            <li><strong>Vũ khí:</strong> {weapon.technicalDetails.armament || weapon.technicalDetails.warhead}</li>
            <li><strong>Thủy thủ đoàn:</strong> {weapon.technicalDetails.crew}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WeaponDetailPage;