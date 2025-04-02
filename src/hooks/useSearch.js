import { useState } from 'react';

// Custom hook để xử lý phân trang
const usePagination = (items, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại

  // Tính tổng số trang
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Tính chỉ số bắt đầu và kết thúc của danh sách hiển thị
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Lấy danh sách hiện tại dựa trên trang
  const currentItems = items.slice(startIndex, endIndex);

  // Chuyển đến trang tiếp theo
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  // Chuyển đến trang trước
  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return {
    currentItems, // Danh sách hiển thị trên trang hiện tại
    currentPage, // Trang hiện tại
    totalPages, // Tổng số trang
    nextPage, // Hàm chuyển trang tiếp
    prevPage, // Hàm chuyển trang trước
    setCurrentPage, // Hàm đặt trang cụ thể
  };
};

export default usePagination;