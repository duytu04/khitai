import React from 'react';
import '../../styles/common/Button.css'; // Nhập CSS cho Button

const Button = ({ text, onClick, disabled }) => {
  return (
    <button className="button" onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button; // Đảm bảo Button được export mặc định