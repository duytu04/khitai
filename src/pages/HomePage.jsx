import React from 'react';
import useFetchData from '../hooks/useFetchData'; 
import Card from '../components/Card'; // Đảm bảo Card được export mặc định
import Loading from '../components/common/Loading'; // Đảm bảo Loading được export mặc định
import Button from '../components/common/Button'; // Đảm bảo Button được export mặc định
import '../styles/HomePage.css';

const HomePage = () => {
  // Sử dụng hook useFetchData để lấy danh sách khí tài
  const { data: weapons, loading, error } = useFetchData();

  // Hàm xử lý khi nhấn nút "Xem thêm" (có thể điều hướng hoặc tải thêm dữ liệu)
  const handleViewMore = () => {
    console.log('Xem thêm được nhấn!');
    // Ví dụ: Có thể điều hướng tới /weapons bằng useNavigate của react-router-dom
  };

  // Nếu đang tải dữ liệu, hiển thị component Loading
  if (loading) return <Loading />;

  // Nếu có lỗi khi lấy dữ liệu, hiển thị thông báo lỗi
  if (error) return <p>Lỗi: {error}</p>;

  return (
    <div className="homepage">
      {/* Tiêu đề trang chủ */}
      <h1 className="homepage-title">Khí tài nổi bật</h1>

      {/* Danh sách khí tài */}
      <div className="weapon-list">
        {weapons.slice(0, 4).map((weapon) => ( // Chỉ hiển thị 3 khí tài đầu tiên
          <Card key={weapon.id} weapon={weapon} />
        ))}
      </div>

      {/* Nút "Xem thêm" */}
      <div className="homepage-button">
        <Button text="Xem thêm" onClick={handleViewMore} />
      </div>
    </div>
  );
};

export default HomePage;