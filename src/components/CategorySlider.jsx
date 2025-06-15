






import React, { useRef, useState, useEffect, useCallback } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  Box,
  List,
  ListItem,
  Button,
  Menu,
  MenuItem,
  IconButton,
  Skeleton,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowBackIos, ArrowForwardIos, ExpandMore } from '@mui/icons-material';
import PropTypes from 'prop-types';
import throttle from 'lodash/throttle';

// Styled components
const SliderContainer = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, #1B263B 0%, #0D1B2A 100%)',
  padding: theme.spacing(2, 0),
  overflowX: 'auto',
  overflowY: 'hidden',
  whiteSpace: 'nowrap',
  userSelect: 'none',
  cursor: 'grab',
  position: 'relative',
  borderBottom: '1px solid #415A77',
  '&::-webkit-scrollbar': { height: '6px' },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#4CAF50',
    borderRadius: '3px',
  },
  '&::-webkit-scrollbar-track': { backgroundColor: '#2E2E2E' },
  [theme.breakpoints.down('sm')]: {
    '&::-webkit-scrollbar': { display: 'none' },
  },
  animation: 'fadeIn 1s ease-in-out',
}));

const CategoryButton = styled(Button)(({ theme }) => ({
  color: '#FFFFFF',
  backgroundColor: '#415A77',
  borderRadius: '20px',
  padding: theme.spacing(1, 2),
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: { xs: '0.875rem', md: '1rem' },
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#4CAF50',
    transform: 'translateY(-2px) scale(1.03)',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.4)',
  },
  '&:focus': {
    outline: '2px solid #4CAF50',
    outlineOffset: 2,
  },
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}));

const NavArrow = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: '#415A77',
  color: '#FFFFFF',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
  '&:hover': {
    backgroundColor: '#4CAF50',
    transform: 'translateY(-50%) scale(1.1)',
  },
  '&:focus': {
    outline: '2px solid #4CAF50',
    outlineOffset: 2,
  },
  zIndex: 2,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: '#1B263B',
    color: '#FFFFFF',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
    minWidth: '200px',
    animation: 'slideUp 0.3s ease-in-out',
  },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: '0.875rem',
  padding: theme.spacing(1, 2),
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: '#4CAF50',
    color: '#FFFFFF',
    transform: 'translateX(5px)',
  },
  '&:focus': {
    outline: '2px solid #4CAF50',
    outlineOffset: -2,
  },
}));

/**
 * Horizontal slider for weapon categories with dropdown sub-menus.
 * @param {Object} props - Component props
 * @param {Array} props.categories - List of categories with sub-items
 * @param {boolean} props.isLoading - Loading state for categories
 */
const CategorySlider = ({ categories: propCategories, isLoading }) => {
  const navigate = useNavigate();
  const scrollContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  // Default categories (fallback if propCategories is empty)
  const defaultCategories = [
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
      name: 'Khí tài đặc biệt không người lái',
      path: '/weapons/drones',
      subItems: [
        { name: 'Drone chiến đấu', path: '/weapons/drones/combat-drones' },
        { name: 'Drone vận tải', path: '/weapons/drones/transport-drones' },
        { name: 'Drone quan sát', path: '/weapons/drones/surveillance-drones' },
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
   
  ];

  const categories = propCategories?.length ? propCategories : defaultCategories;

  // Throttled drag move handler
  const handleDragMove = useCallback(
    throttle((e) => {
      if (!isDragging) return;
      e.preventDefault();

      const container = scrollContainerRef.current;
      if (!container) return;

      const clientX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
      const deltaX = clientX - startX;
      container.scrollLeft = scrollLeft - deltaX;
    }, 16),
    [isDragging, startX, scrollLeft, scrollContainerRef]
  );

  // Handle drag start
  const handleDragStart = (e) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsDragging(true);
    container.style.cursor = 'grabbing';

    const clientX = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    setStartX(clientX);
    setScrollLeft(container.scrollLeft);
  };

  // Handle drag end
  const handleDragEnd = () => {
    setIsDragging(false);
    const container = scrollContainerRef.current;
    if (container) container.style.cursor = 'grab';
  };

  // Handle menu open
  const handleMenuOpen = (event, category) => {
    setAnchorEl(event.currentTarget);
    setSelectedCategory(category);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedCategory(null);
  };

  // Scroll left/right
  const scrollBy = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Update arrow visibility
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth - 1
      );
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for menu
  const handleKeyDown = (e, category) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleMenuOpen(e, category.path);
    } else if (e.key === 'Escape') {
      handleMenuClose();
    }
  };

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Navigation Arrows */}
      {showLeftArrow && (
        <NavArrow
          onClick={() => scrollBy('left')}
          sx={{ left: 8 }}
          aria-label="Cuộn danh mục sang trái"
        >
          <ArrowBackIos sx={{ fontSize: '1.25rem' }} />
        </NavArrow>
      )}
      {showRightArrow && (
        <NavArrow
          onClick={() => scrollBy('right')}
          sx={{ right: 8 }}
          aria-label="Cuộn danh mục sang phải"
        >
          <ArrowForwardIos sx={{ fontSize: '1.25rem' }} />
        </NavArrow>
      )}

      {/* Slider Container */}
      <SliderContainer
        ref={scrollContainerRef}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragEnd}
        role="region"
        aria-label="Danh mục khí tài quân sự"
      >
        <List sx={{ display: 'inline-flex', padding: { xs: '0 0.5rem', md: '0 1rem' }, alignItems: 'center' }}>
          {isLoading ? (
            // Skeleton loader
            Array.from({ length: 5 }).map((_, index) => (
              <ListItem key={index} sx={{ marginRight: { xs: '0.75rem', md: '1.5rem' } }}>
                <Skeleton variant="rectangular" width={120} height={40} sx={{ borderRadius: '20px' }} />
              </ListItem>
            ))
          ) : categories.length ? (
            categories.map((category) => (
              <ListItem
                key={category.path}
                sx={{ position: 'relative', marginRight: { xs: '0.75rem', md: '1.5rem' } }}
              >
                <CategoryButton
                  onClick={(e) => handleMenuOpen(e, category.path)}
                  onKeyDown={(e) => handleKeyDown(e, category)}
                  aria-controls={selectedCategory === category.path ? `menu-${category.path}` : undefined}
                  aria-expanded={selectedCategory === category.path ? 'true' : 'false'}
                  aria-label={`Mở danh mục ${category.name}`}
                >
                  <NavLink
                    to={category.path}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                    onClick={(e) => {
                      if (e.button === 0) {
                        e.stopPropagation();
                        navigate(category.path);
                      }
                    }}
                  >
                    {category.name}
                  </NavLink>
                  <ExpandMore sx={{ fontSize: '1rem', ml: 0.5 }} />
                </CategoryButton>
                <StyledMenu
                  id={`menu-${category.path}`}
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl) && selectedCategory === category.path}
                  onClose={handleMenuClose}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                >
                  {category.subItems.map((subItem) => (
                    <StyledMenuItem
                      key={subItem.path}
                      onClick={() => {
                        navigate(subItem.path);
                        handleMenuClose();
                      }}
                    >
                      <NavLink
                        to={subItem.path}
                        style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                      >
                        {subItem.name}
                      </NavLink>
                    </StyledMenuItem>
                  ))}
                </StyledMenu>
              </ListItem>
            ))
          ) : (
            <ListItem>
              <Typography color="#FFFFFF" fontSize="0.875rem">
                Không có danh mục nào để hiển thị.
              </Typography>
            </ListItem>
          )}
        </List>
      </SliderContainer>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Box>
  );
};

// PropTypes for type checking
CategorySlider.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      subItems: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ),
  isLoading: PropTypes.bool,
};

// Default props
CategorySlider.defaultProps = {
  categories: [],
  isLoading: false,
};

export default CategorySlider;





