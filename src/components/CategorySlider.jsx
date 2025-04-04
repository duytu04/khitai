import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  Button,
  Menu,
  MenuItem,
} from '@mui/material';

const CategorySlider = () => {
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Bắt đầu kéo
  const handleDragStart = (e) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsDragging(true);
    container.style.cursor = 'grabbing';

    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setScrollLeft(container.scrollLeft);
  };

  // Di chuyển khi kéo
  const handleDragMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const container = scrollContainerRef.current;
    if (!container) return;

    const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
    const deltaX = clientX - startX;
    container.scrollLeft = scrollLeft - deltaX;
  };

  // Ngừng kéo
  const handleDragEnd = () => {
    setIsDragging(false);
    const container = scrollContainerRef.current;
    if (container) container.style.cursor = 'grab';
  };

  // Mở dropdown
  const handleMenuOpen = (event, category) => {
    setAnchorEl(event.currentTarget);
    setSelectedCategory(category);
  };

  // Đóng dropdown
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedCategory(null);
  };

  
 

  // Danh sách danh mục khí tài
  const categories = [
    {
      name: 'Khí tài hải quân',
      path: '/weapons/naval',
      subItems: [
        { name: 'Tàu chiến', path: '/weapons/naval/ship' },
        { name: 'Tàu ngầm', path: '/weapons/naval/submarine' },
        { name: 'Vũ khí chống tàu', path: '/weapons/naval/missile' },
      ],
    },
    {
      name: 'Khí tài không quân',
      path: '/weapons/airforce',
      subItems: [
        { name: 'Máy bay chiến đấu', path: '/weapons/airforce/fighter' },
        { name: 'Máy bay vận tải', path: '/weapons/airforce/transport' },
      ],
    },
    {
      name: 'Khí tài mặt đất',
      path: '/weapons/ground',
      subItems: [
        { name: 'Xe tăng', path: '/weapons/ground/tank' },
        { name: 'Xe bọc thép', path: '/weapons/ground/vehicle' },
      ],
    },
    {
      name: 'Khí tài hóa học & sinh học',
      path: '/weapons/chemical',
      subItems: [
        { name: 'Vũ khí hóa học', path: '/weapons/chemical/chemical-weapons' },
        { name: 'Vũ khí sinh học', path: '/weapons/chemical/biological-weapons' },
        { name: 'Hệ thống phòng vệ hóa học và sinh học', path: '/weapons/chemical/defense-systems' },
      ],
    },
    {
      name: 'Khí tài chiến tranh điện tử',
      path: '/weapons/electronic',
      subItems: [
        { name: 'Hệ thống jamming', path: '/weapons/electronic/jamming' },
        { name: 'Radar tác chiến điện tử', path: '/weapons/electronic/radar' },
        { name: 'Phòng thủ tác chiến điện tử', path: '/weapons/electronic/defense' },
      ],
    },
    {
      name: 'Khí tài vũ khí hạt nhân',
      path: '/weapons/nuclear',
      subItems: [
        { name: 'Tên lửa đạn đạo liên lục địa (ICBM)', path: '/weapons/nuclear/icbm' },
        { name: 'Bom hạt nhân', path: '/weapons/nuclear/nuclear-bombs' },
        { name: 'Tên lửa mang đầu đạn hạt nhân', path: '/weapons/nuclear/nuclear-missiles' },
      ],
    },
    {
      name: 'Khí tài chiến tranh đặc biệt',
      path: '/weapons/special',
      subItems: [
        { name: 'Dụng cụ phá hoại', path: '/weapons/special/sabotage-tools' },
        { name: 'Vũ khí tàng hình', path: '/weapons/special/stealth-weapons' },
        { name: 'Khí tài thông tin', path: '/weapons/special/communications' },
        { name: 'Khí tài đặc nhiệm', path: '/weapons/special/special-ops' },
      ],
    },
    {
      name: 'Khí tài chiến tranh mạng',
      path: '/weapons/cyber',
      subItems: [
        { name: 'Hệ thống tấn công mạng', path: '/weapons/cyber/cyber-attacks' },
        { name: 'Phần mềm độc hại quân sự', path: '/weapons/cyber/malware' },
        { name: 'Phần mềm phòng thủ mạng', path: '/weapons/cyber/network-defense' },
      ],
    },
    {
      name: 'Khí tài quân sự cỡ nhỏ',
      path: '/weapons/small-arms',
      subItems: [
        { name: 'Súng bắn tỉa', path: '/weapons/small-arms/sniper-rifles' },
        { name: 'Súng trường', path: '/weapons/small-arms/rifles' },
        { name: 'Súng ngắn', path: '/weapons/small-arms/handguns' },
        { name: 'Súng máy hạng nhẹ', path: '/weapons/small-arms/light-machine-guns' },
        { name: 'Súng phóng lựu', path: '/weapons/small-arms/grenades' },
      ],
    },
    {
      name: 'Khí tài chống tăng',
      path: '/weapons/anti-tank',
      subItems: [
        { name: 'Tên lửa chống tăng', path: '/weapons/anti-tank/atgm' },
        { name: 'Lựu đạn chống tăng', path: '/weapons/anti-tank/grenades' },
        { name: 'Súng chống tăng', path: '/weapons/anti-tank/anti-tank-guns' },
      ],
    },
    {
      name: 'Khí tài không gian',
      path: '/weapons/space',
      subItems: [
        { name: 'Vệ tinh quân sự', path: '/weapons/space/satellites' },
        { name: 'Tên lửa phóng vệ tinh', path: '/weapons/space/space-missiles' },
        { name: 'Hệ thống radar không gian', path: '/weapons/space/space-radar' },
      ],
    },
    {
      name: 'Khí tài hỗ trợ chiến đấu',
      path: '/weapons/support',
      subItems: [
        { name: 'Dụng cụ trinh sát', path: '/weapons/support/surveillance' },
        { name: 'Xe cứu thương quân sự', path: '/weapons/support/ambulance' },
        { name: 'Khí tài cấp cứu chiến trường', path: '/weapons/support/emergency' },
        { name: 'Hệ thống cảnh báo sớm', path: '/weapons/support/early-warning' },
      ],
    },
    {
      name: 'Khí tài tác chiến đặc biệt',
      path: '/weapons/special-ops',
      subItems: [
        { name: 'Lựu đạn hơi cay', path: '/weapons/special-ops/tear-gas' },
        { name: 'Máy bắn đá', path: '/weapons/special-ops/stone-throwers' },
        { name: 'Khí tài đột kích vào căn cứ', path: '/weapons/special-ops/base-assault' },
      ],
    },
    {
      name: 'Khí tài đặc biệt không người lái',
      path: '/weapons/drones',
      subItems: [
        { name: 'Drone chiến đấu', path: '/weapons/drones/combat-drones' },
        { name: 'Drone vận tải', path: '/weapons/drones/transport-drones' },
        { name: 'Drone quan sát', path: '/weapons/drones/surveillance-drones' },
      ],
    },
  ];

  return (
    <Box
      ref={scrollContainerRef}
      sx={{
        bgcolor: '#f4f4f4',
        padding: '1rem 0',
        overflowX: 'auto',
        overflowY: 'hidden',
        whiteSpace: 'nowrap',
        borderBottom: '1px solid #ddd',
        userSelect: 'none',
        cursor: 'grab',
        WebkitOverflowScrolling: 'touch',
        '&::-webkit-scrollbar': { height: '8px' },
        '&::-webkit-scrollbar-thumb': { bgcolor: '#ff9900', borderRadius: '4px' },
        '&::-webkit-scrollbar-track': { bgcolor: '#ddd' },
        '@media (max-width: 768px)': {
          '&::-webkit-scrollbar': { display: 'none' },
        },
      }}
      onMouseDown={handleDragStart}
      onMouseMove={handleDragMove}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={handleDragMove}
      onTouchEnd={handleDragEnd}
    >
      <List sx={{ display: 'inline-flex', padding: '0 1rem', alignItems: 'center' }}>
        {categories.map((category) => (
          <ListItem key={category.path} sx={{ position: 'relative', marginRight: '1.5rem' }}>
            <Button
              onClick={(e) => handleMenuOpen(e, category.path)}
              sx={{
                color: '#333',
                bgcolor: '#fff',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                borderRadius: '20px',
                padding: '0.5rem 1rem',
                textTransform: 'none',
                '&:hover': { bgcolor: '#ff9900', color: '#fff' },
              }}
            >
              <NavLink
                to={category.path}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                {category.name}
              </NavLink>
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl) && selectedCategory === category.path}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              sx={{ '& .MuiPaper-root': { borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)' } }}
            >
              {category.subItems.map((subItem) => (
                <MenuItem
                  key={subItem.path}
                  onClick={handleMenuClose}
                  sx={{
                    '&:hover': { bgcolor: '#f0f0f0', color: '#ff9900' },
                  }}
                >
                  <NavLink
                    to={subItem.path}
                    style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                  >
                    {subItem.name}
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CategorySlider;