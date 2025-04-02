import React, { useState } from 'react';
import { weapons } from '../data/weapons'; // Nhập danh sách khí tài từ /data/weapons.js
import Card from '../components/Card'; // Nhập component Card
import Button from '../components/common/Button'; // Nhập component Button
import usePagination from '../hooks/usePagination'; // Nhập hook phân trang
import '../styles/WeaponListPage.css'; // Nhập CSS cho trang

const WeaponListPage = () => {
  // State để lưu danh mục được chọn từ sub-navbar
  const [selectedCategory, setSelectedCategory] = useState(null);
  // State để lưu các bộ lọc chi tiết từ sidebar
  const [filters, setFilters] = useState({});

  // Lấy danh sách danh mục duy nhất từ dữ liệu
  const categories = [...new Set(weapons.map((weapon) => weapon.category))];

  // Lọc danh sách khí tài dựa trên danh mục được chọn
  const filteredWeapons = selectedCategory
    ? weapons.filter((weapon) => weapon.category === selectedCategory)
    : weapons;

  // Lọc thêm dựa trên bộ lọc từ sidebar
  const detailedFilteredWeapons = Object.keys(filters).length > 0
    ? filteredWeapons.filter((weapon) => {
        const details = weapon.technicalDetails || {};
        if (filters.weight && details.weight !== filters.weight) return false;
        if (filters.speed && details.speed !== filters.speed) return false;
        if (filters.range && details.range !== filters.range) return false;
        return true;
      })
    : filteredWeapons;

  // Sử dụng hook phân trang, hiển thị 4 khí tài mỗi trang
  const { currentItems, currentPage, totalPages, nextPage, prevPage } =
    usePagination(detailedFilteredWeapons, 4);

  // Hàm xử lý khi chọn danh mục từ sub-navbar
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setFilters({}); // Reset bộ lọc khi chọn danh mục mới
  };

  // Hàm xử lý thay đổi bộ lọc từ sidebar
  const handleFilterChange = (filterKey, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterKey]: value || undefined, // Nếu value rỗng thì xóa filter đó
    }));
  };

  // Lấy danh sách giá trị duy nhất cho bộ lọc
  const uniqueWeights = [...new Set(weapons.map((w) => w.technicalDetails?.weight))];
  const uniqueSpeeds = [...new Set(weapons.map((w) => w.technicalDetails?.speed))];
  const uniqueRanges = [...new Set(weapons.map((w) => w.technicalDetails?.range))];

  // Hàm reset bộ lọc
  const resetFilters = () => setFilters({});

  return (
    <div className="weapon-list-page">
      {/* Tiêu đề trang */}
      <h1 className="weapon-list-title">Danh sách khí tài</h1>

      {/* Thanh navbar phụ để chọn danh mục */}
      <nav className="sub-navbar">
        <button
          className={`sub-navbar-item ${!selectedCategory ? 'active' : ''}`}
          onClick={() => handleCategorySelect(null)}
        >
          Tất cả
        </button>
        {categories.map((category) => (
          <button
            key={category}
            className={`sub-navbar-item ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => handleCategorySelect(category)}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Container chính với danh sách và thanh lọc */}
      <div className="weapon-list-content">
        {/* Danh sách khí tài */}
        <div className="weapon-list">
          {currentItems.length > 0 ? (
            currentItems.map((weapon) => (
              <Card key={weapon.id} weapon={weapon} />
            ))
          ) : (
            <p className="no-results">Không tìm thấy khí tài nào.</p>
          )}
        </div>

        {/* Thanh lọc bên phải (hiển thị khi chọn danh mục) */}
        {selectedCategory && (
          <aside className="filter-sidebar">
            <h3 className="filter-title">Lọc chi tiết</h3>
            <div className="filter-options">
              {/* Bộ lọc: Trọng lượng */}
              <label className="filter-option">
                Trọng lượng:
                <select
                  value={filters.weight || ''}
                  onChange={(e) => handleFilterChange('weight', e.target.value)}
                >
                  <option value="">Tất cả</option>
                  {uniqueWeights.map((weight) => (
                    <option key={weight} value={weight}>
                      {weight}
                    </option>
                  ))}
                </select>
              </label>

              {/* Bộ lọc: Tốc độ (cho Xe tăng và Máy bay) */}
              {['Xe tăng', 'Máy bay chiến đấu'].includes(selectedCategory) && (
                <label className="filter-option">
                  Tốc độ:
                  <select
                    value={filters.speed || ''}
                    onChange={(e) => handleFilterChange('speed', e.target.value)}
                  >
                    <option value="">Tất cả</option>
                    {uniqueSpeeds.map((speed) => (
                      <option key={speed} value={speed}>
                        {speed}
                      </option>
                    ))}
                  </select>
                </label>
              )}

              {/* Bộ lọc: Tầm bắn (cho Tên lửa) */}
              {selectedCategory === 'Tên lửa' && (
                <label className="filter-option">
                  Tầm bắn:
                  <select
                    value={filters.range || ''}
                    onChange={(e) => handleFilterChange('range', e.target.value)}
                  >
                    <option value="">Tất cả</option>
                    {uniqueRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </label>
              )}

              {/* Nút reset bộ lọc */}
              <Button text="Xóa bộ lọc" onClick={resetFilters} />
            </div>
          </aside>
        )}
      </div>

      {/* Phân trang */}
      {totalPages > 1 && (
        <div className="pagination">
          <Button
            text="Trang trước"
            onClick={prevPage}
            disabled={currentPage === 1}
          />
          <span className="pagination-info">
            Trang {currentPage} / {totalPages}
          </span>
          <Button
            text="Trang sau"
            onClick={nextPage}
            disabled={currentPage === totalPages}
          />
        </div>
      )}
    </div>
  );
};

export default WeaponListPage;