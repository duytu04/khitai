import React from 'react';
import './Loading.css'; // Giả sử bạn thêm file CSS

const Loading = ({ message = 'Loading...', size = 'medium' }) => {
  return (
    <div
      className={`loading-container loading-${size}`}
      role="status" // Định nghĩa đây là trạng thái
      aria-live="polite" // Thông báo thay đổi cho công cụ đọc màn hình
    >
      <span className="loading-spinner" /> {/* Hoạt ảnh spinner */}
      <span className="loading-message">{message}</span>
    </div>
  );
};

export default Loading;