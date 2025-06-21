import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Autocomplete,
  TextField,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Typography,
  Rating,
  Tooltip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

// Dữ liệu mẫu
const weapons = [
  {
    id: 1,
    name: 'AK-47',
    type: 'Súng trường tấn công',
    range: '400m',
    fireRate: '600 viên/phút',
    weight: '4.3kg',
    ammo: '7.62x39mm',
    fireMode: 'Liên tục / bán tự động',
    origin: 'Liên Xô',
    note: 'Bền bỉ, dễ bảo trì',
    pros: 'Độ bền cao, dễ sửa chữa',
    cons: 'Giật mạnh, nặng',
    rating: 4,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'M16A4',
    type: 'Súng trường tấn công',
    range: '550m',
    fireRate: '750 viên/phút',
    weight: '3.9kg',
    ammo: '5.56x45mm NATO',
    fireMode: 'Bán tự động / 3 viên',
    origin: 'Mỹ',
    note: 'Nhẹ, chính xác cao',
    pros: 'Tầm bắn xa, ít giật',
    cons: 'Dễ kẹt đạn nếu bụi bẩn',
    rating: 5,
    image: 'https://via.placeholder.com/150',
  },
];

// Styled components
const ComparisonTable = styled(TableContainer)(({ theme }) => ({
  backgroundColor: '#1B263B',
  borderRadius: '10px',
  marginTop: theme.spacing(2),
  overflowX: 'auto',
  '&::-webkit-scrollbar': {
    height: '8px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#4CAF50',
    borderRadius: '4px',
  },
  '&::-webkit-box-shadow': {
    backgroundColor: '#0D1B2A',
  },
}));

const TableHeader = styled(TableCell)(({ theme }) => ({
  backgroundColor: '#2E7D32',
  color: '#FFFFFF',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: theme.spacing(1.5),
  border: '1px solid #B0BEC5',
}));

const TableData = styled(TableCell)(({ theme }) => ({
  color: '#FFFFFF',
  textAlign: 'center',
  padding: theme.spacing(1.5),
  border: '1px solid #B0BEC5',
  verticalAlign: 'middle',
}));

const ActionButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  textTransform: 'none',
}));

const BallisticsPage = () => {
  const navigate = useNavigate();
  const [selectedWeapons, setSelectedWeapons] = useState([]);

  // Xử lý chọn vũ khí
  const handleWeaponChange = (event, newValue) => {
    if (newValue.length <= 3) {
      setSelectedWeapons(newValue);
    }
  };

  // Lưu bộ so sánh
  const handleSaveComparison = () => {
    localStorage.setItem('selectedWeapons', JSON.stringify(selectedWeapons.map((w) => w.name)));
    alert('Bộ so sánh đã được lưu!');
  };

  // Tạo PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text('So sánh khí tài', 20, 20);
    const tableColumn = ['Thuộc tính', ...selectedWeapons.map((w) => w.name)];
    const tableRows = [
      ['Hình ảnh', ...selectedWeapons.map(() => '')],
      ['Tên', ...selectedWeapons.map((w) => w.name)],
      ['Loại', ...selectedWeapons.map((w) => w.type)],
      ['Tầm bắn hiệu quả', ...selectedWeapons.map((w) => w.range)],
      ['Tốc độ bắn', ...selectedWeapons.map((w) => w.fireRate)],
      ['Trọng lượng', ...selectedWeapons.map((w) => w.weight)],
      ['Đạn sử dụng', ...selectedWeapons.map((w) => w.ammo)],
      ['Chế độ bắn', ...selectedWeapons.map((w) => w.fireMode)],
      ['Nguồn gốc', ...selectedWeapons.map((w) => w.origin)],
      ['Ghi chú', ...selectedWeapons.map((w) => w.note)],
      ['Ưu điểm nổi bật', ...selectedWeapons.map((w) => w.pros)],
      ['Nhược điểm', ...selectedWeapons.map((w) => w.cons)],
      ['Đánh giá tổng thể', ...selectedWeapons.map((w) => '⭐'.repeat(w.rating))],
    ];
    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
      styles: { fillColor: '#1B263B', textColor: '#FFFFFF', lineColor: '#B0BEC5', lineWidth: 0.1 },
      headStyles: { fillColor: '#2E7D32' },
    });
    doc.save('ballistics_comparison.pdf');
  };

  // Điều hướng chi tiết
  const handleDetailedComparison = () => {
    navigate('/ballistics/details', { state: { weapons: selectedWeapons } });
  };

  return (
    <Box sx={{ backgroundColor: '#0D1B2A', minHeight: '100vh', padding: { xs: 2, md: 4 } }}>
      <Typography
        variant="h4"
        align="center"
        sx={{
          color: '#FFFFFF',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          mb: 4,
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        }}
      >
        So sánh các loại khí tài
      </Typography>

      {/* Bộ lọc chọn khí tài */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Autocomplete
          multiple
          options={weapons}
          getOptionLabel={(option) => option.name}
          value={selectedWeapons}
          onChange={handleWeaponChange}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Chọn tối đa 3 khí tài"
              variant="outlined"
              sx={{
                backgroundColor: '#1B263B',
                '& .MuiInputLabel-root': { color: '#B0BEC5' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#B0BEC5' },
                  '&:hover fieldset': { borderColor: '#4CAF50' },
                  '& .MuiInputBase-input': { color: '#FFFFFF' },
                },
              }}
            />
          )}
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip
                key={option.id}
                label={option.name}
                {...getTagProps({ index })}
                sx={{
                  backgroundColor: '#2E7D32',
                  color: '#FFFFFF',
                  '& .MuiChip-deleteIcon': { color: '#B0BEC5' },
                }}
              />
            ))
          }
          sx={{ width: { xs: '100%', sm: '500px' } }}
          aria-label="Chọn khí tài để so sánh"
          disableCloseOnSelect
          limitTags={3}
        />
      </Box>

      {/* Bảng so sánh */}
      {selectedWeapons.length > 0 && (
        <ComparisonTable component={Paper}>
          <Table aria-label="Bảng so sánh đạn đạo khí tài">
            <TableHead>
              <TableRow>
                <TableHeader>Thuộc tính</TableHeader>
                {selectedWeapons.map((weapon) => (
                  <TableHeader key={weapon.id}>{weapon.name}</TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {[
                {
                  label: '📸 Hình ảnh',
                  key: 'image',
                  render: (weapon) => (
                    <img
                      src={weapon.image}
                      alt={weapon.name}
                      style={{ width: '80px', height: '80px', objectFit: 'cover', margin: 'auto' }}
                      loading="lazy"
                    />
                  ),
                },
                { label: '🔤 Tên', key: 'name' },
                { label: '🏷️ Loại', key: 'type' },
                { label: '🎯 Tầm bắn hiệu quả', key: 'range' },
                { label: '🔫 Tốc độ bắn', key: 'fireRate' },
                { label: '⚖️ Trọng lượng', key: 'weight' },
                { label: '💥 Đạn sử dụng', key: 'ammo' },
                { label: '🛠️ Chế độ bắn', key: 'fireMode' },
                { label: '🧭 Nguồn gốc', key: 'origin' },
                { label: '📝 Ghi chú', key: 'note' },
                { label: '🌟 Ưu điểm nổi bật', key: 'pros' },
                { label: '⚠️ Nhược điểm', key: 'cons' },
                {
                  label: '📊 Đánh giá tổng thể',
                  key: 'rating',
                  render: (weapon) => <Rating value={weapon.rating} readOnly size="small" />,
                },
              ].map((row) => (
                <TableRow key={row.label}>
                  <TableData>{row.label}</TableData>
                  {selectedWeapons.map((weapon) => (
                    <TableData key={weapon.id}>
                      {row.render ? row.render(weapon) : weapon[row.key]}
                    </TableData>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </ComparisonTable>
      )}

      {/* Nút chức năng */}
      {selectedWeapons.length > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 4, flexWrap: 'wrap' }}>
          <Tooltip title="Xem phân tích đạn đạo chi tiết">
            <ActionButton
              variant="contained"
              onClick={handleDetailedComparison}
              sx={{ backgroundColor: '#4CAF50', '&:hover': { bgcolor: '#388E3C' } }}
              aria-label="So sánh chi tiết hơn"
            >
              So sánh chi tiết hơn
            </ActionButton>
          </Tooltip>
          <Tooltip title="Lưu vào danh sách yêu thích">
            <ActionButton
              variant="contained"
              onClick={handleSaveComparison}
              sx={{ backgroundColor: '#2E7D32', '&:hover': { bgcolor: '#1B5B24' } }}
              aria-label="Lưu bộ so sánh"
            >
              Lưu bộ so sánh
            </ActionButton>
          </Tooltip>
          <Tooltip title="Tải bảng so sánh dưới dạng PDF">
            <ActionButton
              variant="outlined"
              onClick={handleDownloadPDF}
              sx={{
                borderColor: '#4CAF50',
                color: '#4CAF50',
                '&:hover': { bgcolor: '#4CAF50', color: 'white' },
              }}
              aria-label="Tải PDF"
            >
              Tải PDF
            </ActionButton>
          </Tooltip>
        </Box>
      )}

      {/* Animation CSS */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
          animation: fadeIn 0.6s ease-in-out;
        }
      `}</style>
    </Box>
  );
};

export default BallisticsPage;