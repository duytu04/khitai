import React from 'react';
import { useNavigate } from 'react-router-dom'; // Nhập useNavigate để điều hướng
import '../styles/Card.css';

const Card = ({ weapon }) => {
  const navigate = useNavigate(); // Hook để điều hướng

  // Hàm xử lý khi nhấp vào card
  const handleClick = () => {
    navigate(`/weapons/${weapon.id}`); // Điều hướng tới trang chi tiết với ID
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={weapon.image} alt={weapon.name} className="card-image" />
      <h3 className="card-title">{weapon.name}</h3>
      <p className="card-description">{weapon.description}</p>
    </div>
  );
};

export default Card; // Đảm bảo Card được export mặc định