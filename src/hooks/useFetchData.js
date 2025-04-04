import { useState, useEffect } from 'react';
import { weapons } from '../data/weapons'; // Nhập dữ liệu tĩnh từ /data/weapons.js

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Giả lập lấy dữ liệu tĩnh
        setTimeout(() => {
          setData(weapons); // Dùng dữ liệu từ weapons.js
          setLoading(false);
        }, 1000); // Giả lập độ trễ 1 giây
      } catch (err) {
        setError('Có lỗi xảy ra khi lấy dữ liệu');
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Không có dependency, chỉ chạy một lần khi mount

  return { data, loading, error };
};

export default useFetchData;
