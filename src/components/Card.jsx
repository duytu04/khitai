// import React from 'react';
// import { useNavigate } from 'react-router-dom'; // Nhập useNavigate để điều hướng
// import '../styles/Card.css';

// const Card = ({ weapon }) => {
//   const navigate = useNavigate(); // Hook để điều hướng

//   // Hàm xử lý khi nhấp vào card
//   const handleClick = () => {
//     navigate(`/weapons/${weapon.id}`); // Điều hướng tới trang chi tiết với ID
//   };

//   return (
//     <div className="card" onClick={handleClick}>
//       <img src={weapon.image} alt={weapon.name} className="card-image" />
//       <h3 className="card-title">{weapon.name}</h3>
//       <p className="card-description">{weapon.description}</p>
//     </div>
//   );
// };

// export default Card; // Đảm bảo Card được export mặc định
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Card.css';

const Card = ({ weapon }) => {
  const navigate = useNavigate();

  // Tối ưu hàm handleClick với useCallback
  const handleClick = useCallback(() => {
    if (weapon?.id) {
      navigate(`/weapons/${weapon.id}`);
    }
  }, [navigate, weapon?.id]); // Phụ thuộc vào navigate và weapon.id

  // Kiểm tra weapon có tồn tại không
  if (!weapon) {
    return null; // Hoặc một placeholder như <div>Không có dữ liệu</div>
  }

  return (
    <div
      className="card"
      onClick={handleClick}
      role="button" // Cải thiện khả năng truy cập
      tabIndex={0} // Cho phép focus bằng bàn phím
      onKeyPress={(e) => e.key === 'Enter' && handleClick()} // Hỗ trợ Enter
      style={{ cursor: 'pointer' }} // Gợi ý đây là phần tử có thể nhấp
    >
      <img
        src={weapon.image || 'default-image.jpg'} // Dự phòng nếu image không có
        alt={weapon.name || 'Weapon'}
        className="card-image"
      />
      <h3 className="card-title">{weapon.name || 'Unnamed Weapon'}</h3>
      <p className="card-description">{weapon.description || 'No description available'}</p>
    </div>
  );
};

export default Card;