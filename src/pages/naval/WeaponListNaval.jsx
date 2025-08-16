



// // src/pages/weapons/WeaponListNaval.jsx
// import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
// import {
//   Grid,
//   Typography,
//   Box,
//   Pagination,
//   Card,
//   CardContent,
//   CardMedia,
//   Tooltip,
//   Breadcrumbs,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Button,
//   TextField,
//   Snackbar,
//   Alert,
//   CircularProgress,
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import { useNavigate } from 'react-router-dom';
// import HomeIcon from '@mui/icons-material/Home';
// import Link from '@mui/material/Link';
// import Loading from '../../components/common/Loading';

// // 👉 Import toàn bộ dữ liệu và fallback từ naval.js
// import {
//   navalAssets as NAVAL_DATA,
//   categoryTypeMap,
//   relatedContent,
//   FALLBACK_IMAGE,
// } from '../../data/naval';

// // Styled components
// const WeaponCard = styled(Card)(({ theme }) => ({
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   cursor: 'pointer',
//   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//   '&:hover': {
//     transform: 'scale(1.03)',
//     boxShadow: theme.shadows[6],
//   },
//   backgroundColor: theme.palette.background.paper,
//   borderRadius: theme.shape.borderRadius,
// }));

// const MUILink = styled(Link)(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   color: theme.palette.text.secondary,
//   textDecoration: 'none',
//   '&:hover': {
//     textDecoration: 'underline',
//     color: theme.palette.primary.main,
//   },
// }));

// const FilterPanel = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.background.default,
//   padding: theme.spacing(3),
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: theme.shadows[3],
//   height: 'fit-content',
// }));

// const RelatedContentPanel = styled(Box)(({ theme }) => ({
//   backgroundColor: theme.palette.background.default,
//   padding: theme.spacing(2),
//   borderRadius: theme.shape.borderRadius,
//   boxShadow: theme.shadows[3],
//   height: '100%',
//   display: 'flex',
//   flexDirection: 'column',
//   gap: theme.spacing(2),
//   overflowY: 'auto',
//   '&::-webkit-scrollbar': {
//     width: '6px',
//   },
//   '&::-webkit-scrollbar-thumb': {
//     backgroundColor: theme.palette.primary.main,
//     borderRadius: '4px',
//   },
// }));

// const RelatedItem = styled(Card)(({ theme }) => ({
//   width: '100%',
//   transition: 'box-shadow 0.3s ease, transform 0.2s ease',
//   '&:hover': {
//     boxShadow: theme.shadows[6],
//     transform: 'translateY(-2px)',
//   },
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: theme.palette.background.paper,
//   position: 'relative',
// }));

// const RelatedItemComponent = memo(
//   ({ item, handleRelatedClick, handleMediaError, mediaLoading, handleMediaLoad }) => (
//     <RelatedItem
//       onClick={() => handleRelatedClick(item.link)}
//       role="button"
//       tabIndex={0}
//       onKeyDown={(e) => e.key === 'Enter' && handleRelatedClick(item.link)}
//       aria-label={`Xem nội dung liên quan: ${item.title}`}
//     >
//       {item.type === 'image' && (
//         <Box sx={{ position: 'relative' }}>
//           {mediaLoading[item.id] && (
//             <CircularProgress
//               size={24}
//               sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
//             />
//           )}
//           <CardMedia
//             component="img"
//             sx={{
//               height: { xs: 120, sm: 150, md: 180 },
//               objectFit: 'cover',
//               borderRadius: '4px 4px 0 0',
//               opacity: mediaLoading[item.id] ? 0.5 : 1,
//               transition: 'opacity 0.3s ease',
//             }}
//             image={item.src}
//             alt={item.title}
//             onLoad={() => handleMediaLoad(item.id)}
//             onError={(e) => handleMediaError(e, 'image', item.title, item.id)}
//             loading="lazy"
//           />
//         </Box>
//       )}
//       {item.type === 'video' && (
//         <Box sx={{ position: 'relative' }}>
//           {mediaLoading[item.id] && (
//             <CircularProgress
//               size={24}
//               sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
//             />
//           )}
//           <CardMedia
//             component="video"
//             sx={{
//               height: { xs: 120, sm: 150, md: 180 },
//               objectFit: 'cover',
//               borderRadius: '4px 4px 0 0',
//               opacity: mediaLoading[item.id] ? 0.5 : 1,
//               transition: 'opacity 0.3s ease',
//             }}
//             src={item.src}
//             controls
//             aria-label={`Video: ${item.title}`}
//             onLoadStart={() => handleMediaLoad(item.id)}
//             onError={(e) => handleMediaError(e, 'video', item.title, item.id)}
//           />
//         </Box>
//       )}
//       {item.type === 'article' && (
//         <CardContent sx={{ minHeight: { xs: 120, sm: 150, md: 180 }, bgcolor: 'background.paper' }}>
//           <Typography variant="body1" color="text.primary" fontWeight="medium">
//             {item.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//             Xem bài viết chi tiết về khí tài hải quân.
//           </Typography>
//         </CardContent>
//       )}
//       <CardContent sx={{ py: 1, bgcolor: 'background.default' }}>
//         <Typography variant="caption" color="text.secondary" noWrap>
//           {item.title}
//         </Typography>
//       </CardContent>
//     </RelatedItem>
//   )
// );

// export default function WeaponListNaval() {
//   const navigate = useNavigate();
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filters, setFilters] = useState({
//     mainCategory: '',
//     type: '',
//     origin: '',
//     year: '',
//   });
//   const [error, setError] = useState(null);
//   const [assets, setAssets] = useState([]);
//   const [mediaLoading, setMediaLoading] = useState({});
//   const [failedMedia, setFailedMedia] = useState(new Set());

//   const itemsPerPage = 24;

//   // Check image URL validity (có timeout an toàn)
//   const checkImageUrl = useCallback(async (url) => {
//     try {
//       // AbortSignal.timeout được hỗ trợ trong browser mới; fallback nếu không có
//       const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
//       const timeoutId = controller ? setTimeout(() => controller.abort(), 5000) : null;
//       const res = await fetch(url, { method: 'HEAD', signal: controller?.signal });
//       if (timeoutId) clearTimeout(timeoutId);
//       return res.ok && res.headers.get('content-type')?.includes('image');
//     } catch {
//       return false;
//     }
//   }, []);

//   // Initialize media loading và validate ảnh
//   useEffect(() => {
//     const initialLoading = relatedContent.reduce(
//       (acc, item) => ({ ...acc, [item.id]: item.type !== 'article' }),
//       {}
//     );
//     setMediaLoading(initialLoading);

//     const validateImages = async () => {
//       const validatedAssets = await Promise.all(
//         NAVAL_DATA.map(async (item) => ({
//           ...item,
//           image: (await checkImageUrl(item.image)) ? item.image : FALLBACK_IMAGE,
//         }))
//       );
//       setAssets(validatedAssets);
//     };
//     validateImages();
//   }, [checkImageUrl]);

//   // Giả lập fetch API
//   useEffect(() => {
//     const fetchAssets = async () => {
//       try {
//         await new Promise((r) => setTimeout(r, 800));
//         setAssets((prev) => (prev?.length ? prev : NAVAL_DATA));
//         setLoading(false);
//       } catch {
//         setError('Không thể tải dữ liệu khí tài. Vui lòng thử lại.');
//         setLoading(false);
//       }
//     };
//     fetchAssets();
//   }, []);

//   const handleClickCard = useCallback(
//     (id) => {
//       navigate(`/naval/${id}`);
//     },
//     [navigate]
//   );

//   const handleChangePage = useCallback((_, value) => {
//     setCurrentPage(value);
//     // cuộn lên đầu danh sách khi đổi trang
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, []);

//   const handleMediaError = useCallback(
//     (e, type, title, id) => {
//       if (failedMedia.has(id)) return;
//       setFailedMedia((prev) => new Set([...prev, id]));
//       console.error(`Lỗi tải ${type} cho "${title}": ${e?.target?.src}`);
//       if (type === 'image') {
//         e.target.src = FALLBACK_IMAGE;
//       }
//       setError(`Không thể tải ${type === 'image' ? 'hình ảnh' : 'video'} cho "${title}".`);
//       setMediaLoading((prev) => ({ ...prev, [id]: false }));
//     },
//     [failedMedia]
//   );

//   const handleMediaLoad = useCallback((id) => {
//     setMediaLoading((prev) => ({ ...prev, [id]: false }));
//   }, []);

//   const handleFilterChange = useCallback((event) => {
//     const { name, value } = event.target;
//     setFilters((prev) => ({
//       ...prev,
//       [name]: value,
//       ...(name === 'mainCategory' ? { type: '', origin: '', year: '' } : {}),
//       ...(name === 'type' ? { origin: '', year: '' } : {}),
//       ...(name === 'origin' ? { year: '' } : {}),
//     }));
//     setCurrentPage(1);
//   }, []);

//   const clearFilters = useCallback(() => {
//     setSearchTerm('');
//     setFilters({ mainCategory: '', type: '', origin: '', year: '' });
//     setCurrentPage(1);
//   }, []);

//   const handleRelatedClick = useCallback(
//     (link) => {
//       if (link && link.startsWith('/')) {
//         navigate(link);
//       } else if (link) {
//         window.open(link, '_blank', 'noopener,noreferrer');
//       }
//     },
//     [navigate]
//   );

//   const filteredAssets = useMemo(() => {
//     return assets.filter((item) => {
//       const matchesSearch =
//         item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         item.description.toLowerCase().includes(searchTerm.toLowerCase());
//       const matchesMainCategory = filters.mainCategory === '' || item.mainCategory === filters.mainCategory;
//       const matchesType = filters.type === '' || item.type === filters.type;
//       const matchesOrigin = filters.origin === '' || item.origin === filters.origin;
//       const matchesYear = filters.year === '' || item.year === parseInt(filters.year, 10);
//       return matchesSearch && matchesMainCategory && matchesType && matchesOrigin && matchesYear;
//     });
//   }, [assets, searchTerm, filters]);

//   const totalItems = filteredAssets.length;
//   const totalPages = Math.ceil(totalItems / itemsPerPage);

//   const visibleItems = useMemo(() => {
//     return filteredAssets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
//   }, [filteredAssets, currentPage]);

//   // Dynamic filter options
//   const mainCategories = useMemo(() => Object.keys(categoryTypeMap), []);
//   const types = useMemo(() => {
//     return filters.mainCategory
//       ? categoryTypeMap[filters.mainCategory]
//       : [...new Set(assets.map((item) => item.type))];
//   }, [filters.mainCategory, assets]);
//   const origins = useMemo(() => {
//     return [
//       ...new Set(
//         assets
//           .filter(
//             (item) =>
//               (filters.mainCategory === '' || item.mainCategory === filters.mainCategory) &&
//               (filters.type === '' || item.type === filters.type)
//           )
//           .map((item) => item.origin)
//       ),
//     ];
//   }, [filters.mainCategory, filters.type, assets]);
//   const years = useMemo(() => {
//     return [
//       ...new Set(
//         assets
//           .filter(
//             (item) =>
//               (filters.mainCategory === '' || item.mainCategory === filters.mainCategory) &&
//               (filters.type === '' || item.type === filters.type) &&
//               (filters.origin === '' || item.origin === filters.origin)
//           )
//           .map((item) => item.year)
//       ),
//     ];
//   }, [filters.mainCategory, filters.type, filters.origin, assets]);

//   return (
//     <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, bgcolor: 'background.default' }}>
//       {/* Breadcrumb */}
//       <Box sx={{ mb: 3 }}>
//         <Breadcrumbs aria-label="Điều hướng breadcrumb" separator="›" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
//           <MUILink onClick={() => navigate('/')} aria-label="Trang chủ">
//             <HomeIcon sx={{ mr: 0.5, fontSize: { xs: '1rem', sm: '1.2rem' } }} />
//             Trang chủ
//           </MUILink>
//           <MUILink onClick={() => navigate('/weapons/naval')} aria-label="Khí Tài Hải Quân">
//             Khí Tài Hải Quân
//           </MUILink>
//           <Typography color="text.primary" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
//             Danh sách
//           </Typography>
//         </Breadcrumbs>
//       </Box>

//       {/* Tiêu đề */}
//       <Typography
//         variant="h4"
//         gutterBottom
//         fontWeight="bold"
//         sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }, color: 'text.primary' }}
//       >
//         Danh sách khí tài Hải quân
//       </Typography>

//       {/* Snackbar thông báo lỗi */}
//       <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)} aria-live="assertive">
//         <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
//           {error}
//         </Alert>
//       </Snackbar>

//       {loading ? (
//         <Loading message="Đang tải dữ liệu khí tài..." size="large" />
//       ) : (
//         <Grid container spacing={3}>
//           {/* Bộ lọc */}
//           <Grid item xs={12} md={3}>
//             <FilterPanel>
//               <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
//                 Bộ lọc
//               </Typography>
//               <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//                 <TextField
//                   label="Tìm kiếm khí tài"
//                   variant="outlined"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   sx={{
//                     bgcolor: 'background.paper',
//                     '& .MuiInputLabel-root': { color: 'text.secondary' },
//                     '& .MuiOutlinedInput-root': {
//                       '& fieldset': { borderColor: 'text.secondary' },
//                       '&:hover fieldset': { borderColor: 'primary.main' },
//                       '&.Mui-focused fieldset': { borderColor: 'primary.main' },
//                     },
//                     width: '100%',
//                   }}
//                   aria-label="Tìm kiếm khí tài theo tên hoặc mô tả"
//                   placeholder="Nhập tên hoặc mô tả..."
//                 />
//                 <FormControl fullWidth>
//                   <InputLabel id="filter-mainCategory-label" sx={{ color: 'text.secondary' }}>
//                     Danh mục chính
//                   </InputLabel>
//                   <Select
//                     labelId="filter-mainCategory-label"
//                     name="mainCategory"
//                     value={filters.mainCategory}
//                     onChange={handleFilterChange}
//                     sx={{
//                       bgcolor: 'background.paper',
//                       '& .MuiSvgIcon-root': { color: 'text.secondary' },
//                       '& .MuiOutlinedInput-notchedOutline': { borderColor: 'text.secondary' },
//                       '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
//                     }}
//                     aria-label="Lọc theo danh mục chính"
//                   >
//                     <MenuItem value="">Tất cả</MenuItem>
//                     {mainCategories.map((category) => (
//                       <MenuItem key={category} value={category}>
//                         {category}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//                 <FormControl fullWidth>
//                   <InputLabel id="filter-type-label" sx={{ color: 'text.secondary' }}>
//                     Loại
//                   </InputLabel>
//                   <Select
//                     labelId="filter-type-label"
//                     name="type"
//                     value={filters.type}
//                     onChange={handleFilterChange}
//                     sx={{
//                       bgcolor: 'background.paper',
//                       '& .MuiSvgIcon-root': { color: 'text.secondary' },
//                       '& .MuiOutlinedInput-notchedOutline': { borderColor: 'text.secondary' },
//                       '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
//                     }}
//                     aria-label="Lọc theo loại khí tài"
//                   >
//                     <MenuItem value="">Tất cả</MenuItem>
//                     {types.map((type) => (
//                       <MenuItem key={type} value={type}>
//                         {type}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//                 <FormControl fullWidth>
//                   <InputLabel id="filter-origin-label" sx={{ color: 'text.secondary' }}>
//                     Nguồn gốc
//                   </InputLabel>
//                   <Select
//                     labelId="filter-origin-label"
//                     name="origin"
//                     value={filters.origin}
//                     onChange={handleFilterChange}
//                     sx={{
//                       bgcolor: 'background.paper',
//                       '& .MuiSvgIcon-root': { color: 'text.secondary' },
//                       '& .MuiOutlinedInput-notchedOutline': { borderColor: 'text.secondary' },
//                       '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
//                     }}
//                     aria-label="Lọc theo nguồn gốc khí tài"
//                   >
//                     <MenuItem value="">Tất cả</MenuItem>
//                     {origins.map((origin) => (
//                       <MenuItem key={origin} value={origin}>
//                         {origin}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//                 <FormControl fullWidth>
//                   <InputLabel id="filter-year-label" sx={{ color: 'text.secondary' }}>
//                     Năm
//                   </InputLabel>
//                   <Select
//                     labelId="filter-year-label"
//                     name="year"
//                     value={filters.year}
//                     onChange={handleFilterChange}
//                     sx={{
//                       bgcolor: 'background.paper',
//                       '& .MuiSvgIcon-root': { color: 'text.secondary' },
//                       '& .MuiOutlinedInput-notchedOutline': { borderColor: 'text.secondary' },
//                       '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
//                     }}
//                     aria-label="Lọc theo năm sản xuất"
//                   >
//                     <MenuItem value="">Tất cả</MenuItem>
//                     {years.map((year) => (
//                       <MenuItem key={year} value={year}>
//                         {year}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//                 <Button variant="outlined" color="primary" fullWidth onClick={clearFilters} sx={{ mt: 1 }}>
//                   Xóa bộ lọc
//                 </Button>
//               </Box>
//             </FilterPanel>
//           </Grid>

//           {/* Danh sách khí tài */}
//           <Grid item xs={12} md={6}>
//             {visibleItems.length === 0 ? (
//               <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
//                 Không tìm thấy khí tài phù hợp với bộ lọc.
//               </Typography>
//             ) : (
//               <Grid
//                 container
//                 spacing={{ xs: 1, sm: 2, md: 3 }}
//                 sx={{
//                   display: 'grid',
//                   gridTemplateColumns: {
//                     xs: 'repeat(2, 1fr)',
//                     sm: 'repeat(3, 1fr)',
//                     md: 'repeat(4, 1fr)',
//                   },
//                 }}
//               >
//                 {visibleItems.map((item) => (
//                   <Grid item xs={6} sm={4} md={3} key={item.id}>
//                     <Tooltip title={item.description || 'Thông tin khí tài'} arrow placement="top">
//                       <WeaponCard
//                         onClick={() => handleClickCard(item.id)}
//                         role="button"
//                         tabIndex={0}
//                         onKeyDown={(e) => e.key === 'Enter' && handleClickCard(item.id)}
//                         aria-label={`Xem chi tiết: ${item.name}`}
//                       >
//                         <CardMedia
//                           component="img"
//                           height="200"
//                           image={item.image}
//                           alt={item.name}
//                           sx={{ objectFit: 'cover', transition: 'opacity 0.3s ease' }}
//                           onError={(e) => handleMediaError(e, 'image', item.name, item.id)}
//                           onLoad={() => handleMediaLoad(item.id)}
//                           loading="lazy"
//                         />
//                         <CardContent sx={{ flexGrow: 1, p: { xs: 1.5, sm: 2 } }}>
//                           <Typography
//                             variant="h6"
//                             noWrap
//                             sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, color: 'text.primary' }}
//                           >
//                             {item.name}
//                           </Typography>
//                           <Typography
//                             variant="body2"
//                             color="text.secondary"
//                             noWrap
//                             sx={{ fontSize: { xs: '0.75rem', sm: '0.875rem' } }}
//                           >
//                             {item.origin} - {item.type}
//                           </Typography>
//                         </CardContent>
//                       </WeaponCard>
//                     </Tooltip>
//                   </Grid>
//                 ))}
//               </Grid>
//             )}
//             {totalPages > 1 && (
//               <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, pb: 2 }}>
//                 <Pagination
//                   count={totalPages}
//                   page={currentPage}
//                   onChange={handleChangePage}
//                   sx={{
//                     '& .MuiPaginationItem-root': {
//                       color: 'text.secondary',
//                       '&:hover': { backgroundColor: 'primary.main', color: 'white' },
//                     },
//                     '& .Mui-selected': { backgroundColor: 'primary.main', color: 'white' },
//                   }}
//                   showFirstButton
//                   showLastButton
//                   aria-label="Điều hướng phân trang"
//                 />
//               </Box>
//             )}
//           </Grid>

//           {/* Nội dung liên quan */}
//           <Grid item xs={12} md={3}>
//             <RelatedContentPanel aria-labelledby="related-content-title">
//               <Typography id="related-content-title" variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
//                 Nội dung liên quan
//               </Typography>
//               {relatedContent.length === 0 ? (
//                 <Typography variant="body2" color="text.secondary">
//                   Không có nội dung liên quan.
//                 </Typography>
//               ) : (
//                 relatedContent.map((item) => (
//                   <RelatedItemComponent
//                     key={item.id}
//                     item={item}
//                     handleRelatedClick={handleRelatedClick}
//                     handleMediaError={handleMediaError}
//                     handleMediaLoad={handleMediaLoad}
//                     mediaLoading={mediaLoading}
//                   />
//                 ))
//               )}
//             </RelatedContentPanel>
//           </Grid>
//         </Grid>
//       )}
//     </Box>
//   );
// }




// src/pages/weapons/WeaponListNaval.jsx
import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
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
  TextField,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Link from '@mui/material/Link';
import Loading from '../../components/common/Loading';

// ✅ Chỉ import đúng export có thật từ data/naval
import { navalAssetsDetailed as NAVAL_DATA } from '../../data/naval';

// ===== Fallback image nội bộ (vì data/naval không export) =====
const FALLBACK_IMAGE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVR42mNgAAIAAAUAAX9/c6EAAAAASUVORK5CYII=';

// ===== Chuẩn hoá item về cùng format dùng trong UI =====
function normalizeAsset(item = {}) {
  return {
    id: item.id || item.slug || item.code || item.uid || String(item.name || ''),
    mainCategory: item.mainCategory || item.category || item.group || 'Khí tài hải quân',
    name: item.name || item.title || 'Không rõ tên',
    type: item.type || item.class || item.platform || '—',
    description: item.description || item.summary || '',
    origin: item.origin || item.country || item.nation || '—',
    year: item.year || item.introduced || item.serviceEntry || null,
    image: item.image || item.thumbnail || FALLBACK_IMAGE,
  };
}

const RAW = Array.isArray(NAVAL_DATA) ? NAVAL_DATA : [];
const ALL_ASSETS = RAW.map(normalizeAsset);

// ===== Suy ra category → list types từ dữ liệu thật =====
function buildCategoryTypeMap(assets) {
  const map = new Map();
  assets.forEach((a) => {
    if (!map.has(a.mainCategory)) map.set(a.mainCategory, new Set());
    map.get(a.mainCategory).add(a.type);
  });
  const obj = {};
  map.forEach((set, cat) => {
    obj[cat] = Array.from(set).sort();
  });
  return obj;
}
const categoryTypeMap = buildCategoryTypeMap(ALL_ASSETS);

// ===== Nội dung liên quan (tạo từ dataset) =====
const relatedContent = ALL_ASSETS.slice(0, 3).map((a) => ({
  id: `rel-${a.id}`,
  type: 'image',
  src: a.image,
  title: a.name,
  link: `/naval/${a.id}`,
}));

// Styled components
const WeaponCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: theme.shadows[6],
  },
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
}));

const MUILink = styled(Link)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
    color: theme.palette.primary.main,
  },
}));

const FilterPanel = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  height: 'fit-content',
}));

const RelatedContentPanel = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  overflowY: 'auto',
  '&::-webkit-scrollbar': { width: '6px' },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '4px',
  },
}));

const RelatedItem = styled(Card)(({ theme }) => ({
  width: '100%',
  transition: 'box-shadow 0.3s ease, transform 0.2s ease',
  '&:hover': { boxShadow: theme.shadows[6], transform: 'translateY(-2px)' },
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
  position: 'relative',
}));

const RelatedItemComponent = memo(
  ({ item, handleRelatedClick, handleMediaError, mediaLoading, handleMediaLoad }) => (
    <RelatedItem
      onClick={() => handleRelatedClick(item.link)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleRelatedClick(item.link)}
      aria-label={`Xem nội dung liên quan: ${item.title}`}
    >
      <Box sx={{ position: 'relative' }}>
        {mediaLoading[item.id] && (
          <CircularProgress
            size={24}
            sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        )}
        <CardMedia
          component={item.type === 'video' ? 'video' : 'img'}
          sx={{
            height: { xs: 120, sm: 150, md: 180 },
            objectFit: 'cover',
            borderRadius: '4px 4px 0 0',
            opacity: mediaLoading[item.id] ? 0.5 : 1,
            transition: 'opacity 0.3s ease',
          }}
          {...(item.type === 'video'
            ? { src: item.src, controls: true, onLoadStart: () => handleMediaLoad(item.id) }
            : { image: item.src, onLoad: () => handleMediaLoad(item.id) })}
          alt={item.title}
          onError={(e) => handleMediaError(e, item.type, item.title, item.id)}
          loading="lazy"
        />
      </Box>
      <CardContent sx={{ py: 1, bgcolor: 'background.default' }}>
        <Typography variant="caption" color="text.secondary" noWrap>
          {item.title}
        </Typography>
      </CardContent>
    </RelatedItem>
  )
);

export default function WeaponListNaval() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({ mainCategory: '', type: '', origin: '', year: '' });
  const [error, setError] = useState(null);
  const [assets, setAssets] = useState([]);
  const [mediaLoading, setMediaLoading] = useState({});
  const [failedMedia, setFailedMedia] = useState(new Set());

  const itemsPerPage = 24;

  // Check image URL validity (timeout an toàn, không phụ thuộc AbortSignal.timeout)
  const checkImageUrl = useCallback(async (url) => {
    try {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timeoutId = controller ? setTimeout(() => controller.abort(), 5000) : null;
      const res = await fetch(url, { method: 'HEAD', signal: controller?.signal });
      if (timeoutId) clearTimeout(timeoutId);
      return res.ok && res.headers.get('content-type')?.includes('image');
    } catch {
      return false;
    }
  }, []);

  // Init media loading + validate ảnh
  useEffect(() => {
    const initialLoading = relatedContent.reduce(
      (acc, item) => ({ ...acc, [item.id]: item.type !== 'article' }),
      {}
    );
    setMediaLoading(initialLoading);

    const validateImages = async () => {
      const validatedAssets = await Promise.all(
        ALL_ASSETS.map(async (item) => ({
          ...item,
          image: (await checkImageUrl(item.image)) ? item.image : FALLBACK_IMAGE,
        }))
      );
      setAssets(validatedAssets);
      setLoading(false);
    };
    validateImages();
  }, [checkImageUrl]);

  const handleClickCard = useCallback((id) => navigate(`/naval/${id}`), [navigate]);

  const handleChangePage = useCallback((_, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleMediaError = useCallback(
    (e, type, title, id) => {
      if (failedMedia.has(id)) return;
      setFailedMedia((prev) => new Set([...prev, id]));
      if (type === 'image' && e?.target) e.target.src = FALLBACK_IMAGE;
      setError(`Không thể tải ${type === 'image' ? 'hình ảnh' : 'video'} cho "${title}".`);
      setMediaLoading((prev) => ({ ...prev, [id]: false }));
    },
    [failedMedia]
  );

  const handleMediaLoad = useCallback((id) => {
    setMediaLoading((prev) => ({ ...prev, [id]: false }));
  }, []);

  const handleFilterChange = useCallback((event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
      ...(name === 'mainCategory' ? { type: '', origin: '', year: '' } : {}),
      ...(name === 'type' ? { origin: '', year: '' } : {}),
      ...(name === 'origin' ? { year: '' } : {}),
    }));
    setCurrentPage(1);
  }, []);

  const clearFilters = useCallback(() => {
    setSearchTerm('');
    setFilters({ mainCategory: '', type: '', origin: '', year: '' });
    setCurrentPage(1);
  }, []);

  const handleRelatedClick = useCallback(
    (link) => {
      if (link && link.startsWith('/')) navigate(link);
      else if (link) window.open(link, '_blank', 'noopener,noreferrer');
    },
    [navigate]
  );

  const filteredAssets = useMemo(() => {
    return assets.filter((item) => {
      const matchesSearch =
        (item.name + ' ' + (item.description || '')).toLowerCase().includes(searchTerm.toLowerCase());
      const matchesMainCategory = !filters.mainCategory || item.mainCategory === filters.mainCategory;
      const matchesType = !filters.type || item.type === filters.type;
      const matchesOrigin = !filters.origin || item.origin === filters.origin;
      const matchesYear = !filters.year || item.year === parseInt(filters.year, 10);
      return matchesSearch && matchesMainCategory && matchesType && matchesOrigin && matchesYear;
    });
  }, [assets, searchTerm, filters]);

  const totalItems = filteredAssets.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;

  const visibleItems = useMemo(
    () => filteredAssets.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    [filteredAssets, currentPage]
  );

  // Dynamic filter options
  const mainCategories = useMemo(() => Object.keys(categoryTypeMap), []);
  const types = useMemo(
    () =>
      filters.mainCategory
        ? categoryTypeMap[filters.mainCategory]
        : Array.from(new Set(assets.map((i) => i.type))),
    [filters.mainCategory, assets]
  );
  const origins = useMemo(
    () =>
      Array.from(
        new Set(
          assets
            .filter(
              (i) =>
                (!filters.mainCategory || i.mainCategory === filters.mainCategory) &&
                (!filters.type || i.type === filters.type)
            )
            .map((i) => i.origin)
        )
      ),
    [filters.mainCategory, filters.type, assets]
  );
  const years = useMemo(
    () =>
      Array.from(
        new Set(
          assets
            .filter(
              (i) =>
                (!filters.mainCategory || i.mainCategory === filters.mainCategory) &&
                (!filters.type || i.type === filters.type) &&
                (!filters.origin || i.origin === filters.origin)
            )
            .map((i) => i.year)
        )
      ),
    [filters.mainCategory, filters.type, filters.origin, assets]
  );

  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 }, bgcolor: 'background.default' }}>
      {/* Breadcrumb */}
      <Box sx={{ mb: 3 }}>
        <Breadcrumbs aria-label="Điều hướng breadcrumb" separator="›" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
          <MUILink onClick={() => navigate('/')} aria-label="Trang chủ">
            <HomeIcon sx={{ mr: 0.5, fontSize: { xs: '1rem', sm: '1.2rem' } }} />
            Trang chủ
          </MUILink>
          <MUILink onClick={() => navigate('/weapons/naval')} aria-label="Khí Tài Hải Quân">
            Khí Tài Hải Quân
          </MUILink>
          <Typography color="text.primary" sx={{ fontSize: { xs: '0.8rem', sm: '1rem' } }}>
            Danh sách
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* Tiêu đề */}
      <Typography
        variant="h4"
        gutterBottom
        fontWeight="bold"
        sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' }, color: 'text.primary' }}
      >
        Danh sách khí tài Hải quân
      </Typography>

      {/* Snackbar thông báo lỗi */}
      <Snackbar open={!!error} autoHideDuration={6000} onClose={() => setError(null)} aria-live="assertive">
        <Alert onClose={() => setError(null)} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>

      {loading ? (
        <Loading message="Đang tải dữ liệu khí tài..." size="large" />
      ) : (
        <Grid container spacing={3}>
          {/* Bộ lọc */}
          <Grid item xs={12} md={3}>
            <FilterPanel>
              <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
                Bộ lọc
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                  label="Tìm kiếm khí tài"
                  variant="outlined"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  sx={{
                    bgcolor: 'background.paper',
                    '& .MuiInputLabel-root': { color: 'text.secondary' },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: 'text.secondary' },
                      '&:hover fieldset': { borderColor: 'primary.main' },
                      '&.Mui-focused fieldset': { borderColor: 'primary.main' },
                    },
                    width: '100%',
                  }}
                  aria-label="Tìm kiếm khí tài theo tên hoặc mô tả"
                  placeholder="Nhập tên hoặc mô tả..."
                />
                <FormControl fullWidth>
                  <InputLabel id="filter-mainCategory-label" sx={{ color: 'text.secondary' }}>
                    Danh mục chính
                  </InputLabel>
                  <Select
                    labelId="filter-mainCategory-label"
                    name="mainCategory"
                    value={filters.mainCategory}
                    onChange={handleFilterChange}
                    sx={{
                      bgcolor: 'background.paper',
                      '& .MuiSvgIcon-root': { color: 'text.secondary' },
                      '& .MuiOutlinedInput-notchedOutline': { borderColor: 'text.secondary' },
                      '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
                    }}
                    aria-label="Lọc theo danh mục chính"
                  >
                    <MenuItem value="">Tất cả</MenuItem>
                    {mainCategories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="filter-type-label" sx={{ color: 'text.secondary' }}>
                    Loại
                  </InputLabel>
                  <Select
                    labelId="filter-type-label"
                    name="type"
                    value={filters.type}
                    onChange={handleFilterChange}
                    sx={{
                      bgcolor: 'background.paper',
                      '& .MuiSvgIcon-root': { color: 'text.secondary' },
                      '& .MuiOutlinedInput-notchedOutline': { borderColor: 'text.secondary' },
                      '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
                    }}
                    aria-label="Lọc theo loại khí tài"
                  >
                    <MenuItem value="">Tất cả</MenuItem>
                    {types.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="filter-origin-label" sx={{ color: 'text.secondary' }}>
                    Nguồn gốc
                  </InputLabel>
                  <Select
                    labelId="filter-origin-label"
                    name="origin"
                    value={filters.origin}
                    onChange={handleFilterChange}
                    sx={{
                      bgcolor: 'background.paper',
                      '& .MuiSvgIcon-root': { color: 'text.secondary' },
                      '& .MuiOutlinedInput-notchedOutline': { borderColor: 'text.secondary' },
                      '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
                    }}
                    aria-label="Lọc theo nguồn gốc khí tài"
                  >
                    <MenuItem value="">Tất cả</MenuItem>
                    {origins.map((origin) => (
                      <MenuItem key={origin} value={origin}>
                        {origin}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="filter-year-label" sx={{ color: 'text.secondary' }}>
                    Năm
                  </InputLabel>
                  <Select
                    labelId="filter-year-label"
                    name="year"
                    value={filters.year}
                    onChange={handleFilterChange}
                    sx={{
                      bgcolor: 'background.paper',
                      '& .MuiSvgIcon-root': { color: 'text.secondary' },
                      '& .MuiOutlinedInput-notchedOutline': { borderColor: 'text.secondary' },
                      '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
                    }}
                    aria-label="Lọc theo năm sản xuất"
                  >
                    <MenuItem value="">Tất cả</MenuItem>
                    {years.map((year) => (
                      <MenuItem key={year} value={year}>
                        {year}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button variant="outlined" color="primary" fullWidth onClick={clearFilters} sx={{ mt: 1 }}>
                  Xóa bộ lọc
                </Button>
              </Box>
            </FilterPanel>
          </Grid>

          {/* Danh sách khí tài */}
          <Grid item xs={12} md={6}>
            {visibleItems.length === 0 ? (
              <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
                Không tìm thấy khí tài phù hợp với bộ lọc.
              </Typography>
            ) : (
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
                }}
              >
                {visibleItems.map((item) => (
                  <Grid item xs={6} sm={4} md={3} key={item.id}>
                    <Tooltip title={item.description || 'Thông tin khí tài'} arrow placement="top">
                      <WeaponCard
                        onClick={() => handleClickCard(item.id)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && handleClickCard(item.id)}
                        aria-label={`Xem chi tiết: ${item.name}`}
                      >
                        <CardMedia
                          component="img"
                          height="200"
                          image={item.image}
                          alt={item.name}
                          sx={{ objectFit: 'cover', transition: 'opacity 0.3s ease' }}
                          onError={(e) => handleMediaError(e, 'image', item.name, item.id)}
                          onLoad={() => handleMediaLoad(item.id)}
                          loading="lazy"
                        />
                        <CardContent sx={{ flexGrow: 1, p: { xs: 1.5, sm: 2 } }}>
                          <Typography
                            variant="h6"
                            noWrap
                            sx={{ fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' }, color: 'text.primary' }}
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
            )}
            {totalPages > 1 && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, pb: 2 }}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handleChangePage}
                  sx={{
                    '& .MuiPaginationItem-root': {
                      color: 'text.secondary',
                      '&:hover': { backgroundColor: 'primary.main', color: 'white' },
                    },
                    '& .Mui-selected': { backgroundColor: 'primary.main', color: 'white' },
                  }}
                  showFirstButton
                  showLastButton
                  aria-label="Điều hướng phân trang"
                />
              </Box>
            )}
          </Grid>

          {/* Nội dung liên quan */}
          <Grid item xs={12} md={3}>
            <RelatedContentPanel aria-labelledby="related-content-title">
              <Typography id="related-content-title" variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
                Nội dung liên quan
              </Typography>
              {relatedContent.length === 0 ? (
                <Typography variant="body2" color="text.secondary">
                  Không có nội dung liên quan.
                </Typography>
              ) : (
                relatedContent.map((item) => (
                  <RelatedItemComponent
                    key={item.id}
                    item={item}
                    handleRelatedClick={handleRelatedClick}
                    handleMediaError={handleMediaError}
                    handleMediaLoad={handleMediaLoad}
                    mediaLoading={mediaLoading}
                  />
                ))
              )}
            </RelatedContentPanel>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
