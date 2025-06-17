// import { useState } from 'react';

// // Custom hook để xử lý phân trang
// const usePagination = (items, itemsPerPage) => {
//   const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại

//   // Tính tổng số trang
//   const totalPages = Math.ceil(items.length / itemsPerPage);

//   // Tính chỉ số bắt đầu và kết thúc của danh sách hiển thị
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   // Lấy danh sách hiện tại dựa trên trang
//   const currentItems = items.slice(startIndex, endIndex);

//   // Chuyển đến trang tiếp theo
//   const nextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   // Chuyển đến trang trước
//   const prevPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   return {
//     currentItems, // Danh sách hiển thị trên trang hiện tại
//     currentPage, // Trang hiện tại
//     totalPages, // Tổng số trang
//     nextPage, // Hàm chuyển trang tiếp
//     prevPage, // Hàm chuyển trang trước
//     setCurrentPage, // Hàm đặt trang cụ thể
//   };
// };

// export default usePagination;





import { useState, useEffect } from 'react';

const usePagination = (items, itemsPerPage, initialPage = 1) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Reset page if it exceeds totalPages
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Thêm goToPage để hỗ trợ nhảy trực tiếp đến trang
  const goToPage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Debug log
  console.log('usePagination:', { currentPage, totalPages, itemsLength: items.length });

  return {
    currentItems,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    goToPage,
    setCurrentPage, // Giữ lại cho tương thích
  };
};

export default usePagination;
