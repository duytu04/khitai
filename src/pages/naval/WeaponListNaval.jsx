

import React, { useState, useEffect } from 'react';
import {
  Grid,
  Typography,
  Box,
  Pagination,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Breadcrumbs,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Link from '@mui/material/Link';
import Loading from '../../components/common/Loading';

const navalAssets = [
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: 'https://vnanet.vn/Data/Articles/2019/07/19/3979609/vna_potal_nga_ham_doi_phuong_bac_tap_tran_chong_tau_ngam_stand.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: 'https://vnanet.vn/Data/Articles/2019/07/19/3979609/vna_potal_nga_ham_doi_phuong_bac_tap_tran_chong_tau_ngam_stand.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: 'https://vnanet.vn/Data/Articles/2019/07/19/3979609/vna_potal_nga_ham_doi_phuong_bac_tap_tran_chong_tau_ngam_stand.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  },
   {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: 'https://vnanet.vn/Data/Articles/2019/07/19/3979609/vna_potal_nga_ham_doi_phuong_bac_tap_tran_chong_tau_ngam_stand.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: '/images/naval/kilo636.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  },
   {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: '/images/naval/kilo636.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  },
   {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: '/images/naval/kilo636.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  },
   {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: '/images/naval/kilo636.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  },
   {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: '/images/naval/kilo636.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  },
   {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: '/images/naval/kilo636.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  },
   {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: '/images/naval/kilo636.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  }, {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: '/images/naval/kilo636.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  },
   {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: '/images/naval/kilo636.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  },
   {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: '/images/naval/kilo636.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  },
   {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: '/images/naval/kilo636.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  },
   {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: '/images/naval/kilo636.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  }, {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: '/images/naval/kilo636.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  },
   {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: '/images/naval/kilo636.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  },
   {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-001',
    name: 'Tàu hộ vệ Gepard 3.9',
    image: '/images/naval/gepard39.jpg',
    description: 'Tàu hộ vệ tên lửa hiện đại do Nga chế tạo, thuộc lớp Gepard 3.9',
    origin: 'Nga',
    type: 'Tàu hộ vệ tên lửa',
    year: 2011,
  },
  {
    id: 'naval-002',
    name: 'Tàu ngầm Kilo 636',
    image: '/images/naval/kilo636.jpg',
    description: 'Tàu ngầm diesel-điện lớp Kilo trang bị tên lửa hành trình Kalibr',
    origin: 'Nga',
    type: 'Tàu ngầm',
    year: 2014,
  },
  // ... (other assets remain the same, duplicates removed for brevity)
];

// Sample related content for the right panel
const relatedContent = [
  {
    id: 'rel-001',
    type: 'image',
    src: 'https://vnanet.vn/Data/Articles/2019/07/19/3979609/vna_potal_nga_ham_doi_phuong_bac_tap_tran_chong_tau_ngam_stand.jpg',
    title: 'Tàu Gepard 3.9 trong diễn tập',
  },
  {
    id: 'rel-002',
    type: 'video',
    src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ98V6yd9vk3UwRwV3CEswzkHleJYg93ZckFPkj5jAJL6knHfNZBYeFruI18cdbR7u-CDct6Grf_K6SQcmQdtzVWCDKBNVVS5whNgXp2pA',
    title: 'Tàu ngầm Kilo 636 phóng tên lửa',
  },
  {
    id: 'rel-003',
    type: 'article',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9JhwtK1oJ3ihKtl7vgfKWDjpFayfZXoITNoNWGW7VKI2OTRYSSR50NbT8mS0EJahZUiWerx6hiQsIaRaIURxeKFvr9ysRT1dBebQBCtc',
    title: 'Bài viết: Đánh giá Tàu hộ vệ Gepard 3.9',
  },
  {
    id: 'rel-004',
    type: 'image',
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9JhwtK1oJ3ihKtl7vgfKWDjpFayfZXoITNoNWGW7VKI2OTRYSSR50NbT8mS0EJahZUiWerx6hiQsIaRaIURxeKFvr9ysRT1dBebQBCtc',
    title: 'Tàu ngầm Kilo 636 lặn sâu',
  },
  
  
];

const WeaponCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  transition: '0.3s',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: theme.shadows[4],
  },
  minWidth: '150px',
  maxWidth: '100%',
}));

const MUILink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const FilterPanel = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  height: 'fit-content',
}));

const RelatedContentPanel = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
  height: '100%',
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const RelatedItem = styled(Card)(({ theme }) => ({
  width: '100%',
  transition: '0.3s',
  '&:hover': {
    boxShadow: theme.shadows[4],
  },
}));

export default function WeaponListNaval() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    type: '',
    origin: '',
    year: '',
  });
  const [currentRelatedIndex, setCurrentRelatedIndex] = useState(0);

  const itemsPerPage = 24;

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
    // Auto-scroll related content every 5 seconds
    const interval = setInterval(() => {
      setCurrentRelatedIndex((prev) => (prev + 1) % relatedContent.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleClickCard = (id) => {
    navigate(`/naval/${id}`);
  };

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  const handleImageError = (e) => {
    e.target.src = '/images/naval/placeholder.jpg';
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setFilters({ type: '', origin: '', year: '' });
    setCurrentPage(1);
  };

  const filteredAssets = navalAssets.filter((item) => {
    return (
      (filters.type === '' || item.type === filters.type) &&
      (filters.origin === '' || item.origin === filters.origin) &&
      (filters.year === '' || item.year === parseInt(filters.year))
    );
  });

  const totalItems = filteredAssets.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const visibleItems = filteredAssets.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const types = [...new Set(navalAssets.map((item) => item.type))];
  const origins = [...new Set(navalAssets.map((item) => item.origin))];
  const years = [...new Set(navalAssets.map((item) => item.year))];

  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
      <Box sx={{ color: '#B0BEC5', mb: 2 }}>
        <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' } }}>
          <MUILink
            color="inherit"
            onClick={() => navigate('/')}
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            <HomeIcon sx={{ mr: 0.5, fontSize: { xs: '1rem', sm: '1.2rem' } }} />
            Trang chủ
          </MUILink>
          <MUILink
            color="inherit"
            onClick={() => navigate('/weapons/naval')}
            sx={{ cursor: 'pointer' }}
          >
            Khí Tài Hải Quân
          </MUILink>
          <Typography color="text.primary" sx={{ color: '#FFFFFF', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
            
          </Typography>
        </Breadcrumbs>
      </Box>

      <Typography
        variant="h4"
        gutterBottom
        fontWeight="bold"
        sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
      >
        Danh sách khí tài Hải quân
      </Typography>

      {loading ? (
        <Loading message="Đang tải dữ liệu khí tài..." size="large" />
      ) : (
        <Grid container spacing={3}>
          {/* Filter Panel (1/4) */}
          <Grid item xs={12} md={3}>
            <FilterPanel>
              <Typography variant="h6" gutterBottom>
                Bộ lọc
              </Typography>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Loại</InputLabel>
                <Select
                  name="type"
                  value={filters.type}
                  onChange={handleFilterChange}
                  label="Loại"
                >
                  <MenuItem value="">Tất cả</MenuItem>
                  {types.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Nguồn gốc</InputLabel>
                <Select
                  name="origin"
                  value={filters.origin}
                  onChange={handleFilterChange}
                  label="Nguồn gốc"
                >
                  <MenuItem value="">Tất cả</MenuItem>
                  {origins.map((origin) => (
                    <MenuItem key={origin} value={origin}>
                      {origin}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Năm</InputLabel>
                <Select
                  name="year"
                  value={filters.year}
                  onChange={handleFilterChange}
                  label="Năm"
                >
                  <MenuItem value="">Tất cả</MenuItem>
                  {years.map((year) => (
                    <MenuItem key={year} value={year}>
                      {year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                variant="outlined"
                fullWidth
                onClick={clearFilters}
                sx={{ mt: 1 }}
              >
                Xóa bộ lọc
              </Button>
            </FilterPanel>
          </Grid>

          {/* Asset Cards (2/4) */}
          <Grid item xs={12} md={6}>
            <Grid
              container
              spacing={{ xs: 1, sm: 2, md: 3 }}
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(2, 1fr)',
                  sm: 'repeat(3, 1fr)',
                  md: 'repeat(4, 1fr)',
                },
                gridTemplateRows: {
                  xs: 'repeat(12, auto)',
                  sm: 'repeat(8, auto)',
                  md: 'repeat(6, auto)',
                },
                gap: { xs: 1, sm: 2, md: 3 },
              }}
            >
              {visibleItems.map((item) => (
                <Grid item xs={6} sm={4} md={3} key={item.id}>
                  <Tooltip title={item.description || 'Thông tin khí tài'} arrow>
                    <WeaponCard
                      onClick={() => handleClickCard(item.id)}
                      sx={{ height: '100%' }}
                    >
                      <CardMedia
                        component="img"
                        height="150"
                        width="100%"
                        image={item.image}
                        alt={item.name}
                        sx={{ objectFit: 'cover' }}
                        onError={handleImageError}
                      />
                      <CardContent sx={{ padding: { xs: 1, sm: 2 } }}>
                        <Typography
                          variant="h6"
                          noWrap
                          sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' } }}
                        >
                          {item.name}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          noWrap
                          sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
                        >
                          {item.origin} - {item.type}
                        </Typography>
                      </CardContent>
                    </WeaponCard>
                  </Tooltip>
                </Grid>
              ))}
            </Grid>

            {totalPages > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, pb: 4 }}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handleChangePage}
                  sx={{
                    '& .MuiPaginationItem-root': {
                      color: '#B0BEC5',
                      '&:hover': {
                        backgroundColor: '#2E7D32',
                        color: '#FFFFFF',
                      },
                    },
                    '& .Mui-selected': {
                      backgroundColor: '#4CAF50 !important',
                      color: '#FFFFFF',
                    },
                  }}
                  showFirstButton
                  showLastButton
                  aria-label="Điều hướng phân trang"
                />
              </Box>
            )}
          </Grid>

          {/* Related Content (1/4) */}
          <Grid item xs={12} md={3}>
            <RelatedContentPanel>
              <Typography variant="h6" gutterBottom>
                Nội dung liên quan
              </Typography>
              {relatedContent.map((item, index) => (
                <RelatedItem
                  key={item.id}
                  sx={{
                    opacity: index === currentRelatedIndex ? 1 : 0.5,
                    transition: 'opacity 0.5s ease-in-out',
                  }}
                >
                  {item.type === 'image' && (
                    <CardMedia
                      component="img"
                      height="150"
                      image={item.src}
                      alt={item.title}
                      sx={{ objectFit: 'cover' }}
                      onError={handleImageError}
                    />
                  )}
                  {item.type === 'video' && (
                    <CardMedia
                      component="video"
                      height="150"
                      src={item.src}
                      controls
                      sx={{ objectFit: 'cover' }}
                    />
                  )}
                  {item.type === 'article' && (
                    <CardContent>
                      <Typography variant="body2" color="text.primary">
                        <a href={item.src} target="_blank" rel="noopener noreferrer">
                          {item.title}
                        </a>
                      </Typography>
                    </CardContent>
                  )}
                  <CardContent>
                    <Typography variant="caption" color="text.secondary">
                      {item.title}
                    </Typography>
                  </CardContent>
                </RelatedItem>
              ))}
            </RelatedContentPanel>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}