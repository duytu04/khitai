import React from 'react';
import '../styles/Footer.css'; // Nhập CSS từ thư mục styles

const Footer = () => {
  return (
    <footer className="footer">
      {/* Phần nội dung chính của footer */}
      <div className="footer-content">
        {/* Phần giới thiệu */}
        <div className="footer-section">
          <h3>Giới thiệu</h3>
          <p>
            Nền tảng dành riêng cho khí tài quân sự và tin tức. Được xây dựng bởi những người đam mê cho cộng đồng đam mê.
          </p>
        </div>
        {/* Phần liên hệ */}
        <div className="footer-section">
          <h3>Liên hệ</h3>
          <p>Email: info@militaryapp.com</p>
          <p>Điện thoại: +123-456-7890</p>
        </div>
        {/* Phần mạng xã hội */}
        <div className="footer-section">
          <h3>Theo dõi chúng tôi</h3>
          <div className="footer-social">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
      {/* Phần dưới cùng của footer */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Military App. Bản quyền thuộc về chúng tôi.</p>
      </div>
    </footer>
  );
};

export default Footer;