import React from 'react';
import '../styles/SearchBar.css'; // Nhập CSS cho SearchBar

// Component thanh tìm kiếm
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  // Xử lý thay đổi giá trị tìm kiếm
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      {/* Input để nhập từ khóa tìm kiếm */}
      <input
        type="text"
        placeholder="Tìm kiếm khí tài..."
        value={searchTerm}
        onChange={handleChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;