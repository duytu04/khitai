




import React, { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { Box, Grid, Typography, Breadcrumbs, Link as MUILink, Chip, Card, CardMedia, CardContent, Divider, Avatar, IconButton, Tooltip, Skeleton, List, ListItem, ListItemIcon, ListItemText, Table, TableBody, TableCell, TableHead, TableRow, Paper, Alert, Snackbar, Button, TextField, LinearProgress } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import LaunchIcon from '@mui/icons-material/Launch';
import InfoIcon from '@mui/icons-material/Info';
import TimelineIcon from '@mui/icons-material/Timeline';
import AnchorIcon from '@mui/icons-material/Anchor';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import ArticleIcon from '@mui/icons-material/Article';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SensorsIcon from '@mui/icons-material/Sensors';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { styled, alpha } from '@mui/material/styles';
import { useParams, useNavigate } from 'react-router-dom';
import { navalAssetsDetailed as NAVAL_DATA } from '../../data/naval';

const FALLBACK_IMAGE = 'data:image/jpeg;base64,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';

// ====== Simplified Data Model ======
const RAW_DATA = Array.isArray(NAVAL_DATA) ? NAVAL_DATA : [];

function toSimpleAsset(item = {}) {
  const gallery = item.gallery || item.images || (item.image ? [item.image] : []) || [];
  const specs = normalizeSpecs(item.specs || item.specifications || item.performance || item.characteristics || {});
  const references = (item.references || item.sources || item.links || []).map((r) => (typeof r === 'string' ? { title: r, url: r } : { title: r.title || r.name || r.url || 'Nguồn', url: r.url || '#' })).filter((r) => !!r.title);
  const history = (item.timeline || item.history || []).map((h) => ({ year: Number(h.year) || null, event: h.event || h.note || h.description || '' })).filter((h) => h.year || h.event);
  const simple = {
    id: String(item.id || item.slug || item.code || item.uid || item.name || ''),
    name: item.name || item.title || 'Không rõ tên',
    type: item.type || item.class || item.platform || '—',
    origin: item.origin || item.country || item.nation || '—',
    year: item.year || item.introduced || item.serviceEntry || null,
    image: item.image || item.thumbnail || gallery[0] || FALLBACK_IMAGE,
    summary: item.description || item.summary || '',
    tags: item.tags || item.keywords || [],
    specs,
    armament: item.armament || item.weapons || item.loadout || [],
    sensors: item.sensors || item.sensorSuite || [],
    history,
    references,
    gallery: gallery.length ? gallery : [item.image || FALLBACK_IMAGE],
  };
  if (!simple.history.length && simple.year) {
    simple.history = [
      { year: simple.year, event: 'Hạ thuỷ / nguyên mẫu đầu tiên' },
      { year: simple.year + 2, event: 'Biên chế' },
    ];
  }
  if (!simple.id) simple.id = simple.name.toLowerCase().replace(/\s+/g, '-');
  return simple;
}

function normalizeSpecs(s) {
  if (Array.isArray(s)) {
    const obj = {}; s.forEach((row) => { const k = row.attr || row.label || row.k || row.key; const v = row.value || row.v || row.val; if (k && (v || v === 0)) obj[String(k)] = String(v); });
    return prioritizeSpecs(obj);
  }
  if (s && typeof s === 'object') {
    const flat = { ...s, ...(s.dimensions || {}), ...(s.performance || {}), ...(s.propulsion || {}) };
    const obj = {}; Object.entries(flat).forEach(([k, v]) => { if (v === null || v === undefined || v === '') return; obj[String(k)] = typeof v === 'object' ? JSON.stringify(v) : String(v); });
    return prioritizeSpecs(obj);
  }
  return {};
}

function prioritizeSpecs(obj) {
  const map = { displacement: 'Lượng giãn nước', fullLoadDisplacement: 'Lượng giãn nước (đầy tải)', length: 'Chiều dài', beam: 'Chiều rộng', draft: 'Mớn nước', speed: 'Tốc độ tối đa', range: 'Tầm hoạt động', endurance: 'Thời gian hoạt động', crew: 'Thủy thủ đoàn', propulsion: 'Động lực', powerplant: 'Động cơ' };
  const keep = ['displacement','fullLoadDisplacement','length','beam','draft','speed','range','endurance','crew','propulsion','powerplant'];
  const out = {}; keep.forEach((k) => { if (obj[k]) out[map[k] || k] = obj[k]; }); return out;
}

// ====== Newsroom-like Typography & Layout ======
const MAX_WIDTH = 880;
const Prose = styled('article')(({ theme }) => ({
  maxWidth: MAX_WIDTH,
  margin: '0 auto',
  lineHeight: 1.8,
  fontSize: 16,
  color: theme.palette.text.primary,
  '& h1, & h2, & h3, & h4': { letterSpacing: 0.2 },
  '& p': { marginTop: theme.spacing(1.2) },
  '& .dropcap:first-letter': { float: 'left', fontSize: '3.25rem', lineHeight: 1, paddingRight: theme.spacing(1), fontWeight: 800 },
  '& figure': { margin: 0 },
  '& figcaption': { color: theme.palette.text.secondary, fontSize: 13, marginTop: 6 },
}));

const StickySidebar = styled(Box)(({ theme }) => ({ position: 'sticky', top: theme.spacing(10) }));
const Hero = styled(Box)(({ theme }) => ({ position: 'relative', borderRadius: theme.shape.borderRadius * 1.2, overflow: 'hidden', boxShadow: theme.shadows[3] }));
const Section = styled('section')(({ theme }) => ({ marginTop: theme.spacing(4) }));
const TocLink = styled(MUILink)(({ theme }) => ({ display: 'block', padding: theme.spacing(0.75, 0), color: theme.palette.text.secondary, cursor: 'pointer', '&:hover': { color: theme.palette.primary.main, textDecoration: 'underline' } }));

const MetaPill = ({ icon, children }) => (
  <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, px: 1, py: 0.5, borderRadius: 999, bgcolor: (t) => alpha(t.palette.text.primary, 0.06), mr: 1, mb: 1 }}>
    {icon}
    <Typography variant="caption" color="text.secondary">{children}</Typography>
  </Box>
);

function estimateReadingMinutes(asset) {
  const text = [asset.summary, ...Object.values(asset.specs || {}), ...(asset.armament || []), ...(asset.sensors || []), ...(asset.history || []).map((h) => h.event)].join(' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export default function NavalAssetBlogNewsroom() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [asset, setAsset] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snack, setSnack] = useState('');
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  const refs = { overview: useRef(null), specs: useRef(null), payload: useRef(null), history: useRef(null), gallery: useRef(null), refs: useRef(null) };

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        await new Promise((r) => setTimeout(r, 150));
        const found = RAW_DATA.find((x) => String(x.id ?? x.slug ?? x.code ?? x.uid ?? x.name) === String(id)) || RAW_DATA.find((x) => String(x.slug ?? x.name ?? '').toLowerCase() === String(id).toLowerCase());
        const simple = found ? toSimpleAsset(found) : null;
        if (!cancelled) {
          if (!simple) setError('Không tìm thấy khí tài.');
          setAsset(simple); setLoading(false);
        }
      } catch {
        if (!cancelled) { setError('Lỗi tải dữ liệu.'); setLoading(false); }
      }
    })();
    return () => { cancelled = true; };
  }, [id]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY; const doc = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(doc > 0 ? Math.min(100, Math.max(0, (y / doc) * 100)) : 0);
      setShowTop(y > 480);
    };
    window.addEventListener('scroll', onScroll); onScroll(); return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCopy = useCallback(async () => {
    try { await navigator.clipboard.writeText(window.location.href); setSnack('Đã sao chép liên kết!'); } catch { setSnack('Không thể sao chép.'); }
  }, []);
  const handleShare = useCallback(async () => { if (navigator.share) { try { await navigator.share({ title: asset?.name || 'Khí tài hải quân', text: 'Xem chi tiết khí tài hải quân', url: window.location.href }); } catch {} } else { handleCopy(); } }, [asset?.name, handleCopy]);
  const scrollTo = useCallback((key) => { const el = refs[key]?.current; if (!el) return; const y = el.getBoundingClientRect().top + window.scrollY - 88; window.scrollTo({ top: y, behavior: 'smooth' }); }, [refs]);

  const specRows = useMemo(() => (!asset?.specs ? [] : Object.entries(asset.specs).map(([attr, value]) => ({ attr, value }))), [asset?.specs]);
  const gallery = useMemo(() => { const arr = Array.isArray(asset?.gallery) ? asset.gallery : []; const uniq = [...new Set(arr.length ? arr : [asset?.image].filter(Boolean))]; return uniq.length ? uniq : [FALLBACK_IMAGE]; }, [asset?.gallery, asset?.image]);

  if (loading) {
    return (
      <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
        <LinearProgress variant="determinate" value={progress} sx={{ mb: 2, height: 3, borderRadius: 2 }} />
        <Skeleton variant="text" width={320} height={40} />
        <Skeleton variant="rectangular" height={380} sx={{ borderRadius: 2, my: 2 }} />
        <Prose>
          <Skeleton variant="text" height={28} width="85%" />
          <Skeleton variant="text" height={24} width="95%" />
          <Skeleton variant="text" height={24} width="78%" />
        </Prose>
      </Box>
    );
  }
  if (error || !asset) {
    return (
      <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
        <Alert severity="error" sx={{ mb: 2 }}>{error || 'Không có dữ liệu.'}</Alert>
        <Button variant="contained" onClick={() => navigate('/weapons/naval')}>Quay lại danh sách</Button>
      </Box>
    );
  }

  const readingMin = estimateReadingMinutes(asset);

  return (
    <Box sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
      <LinearProgress variant="determinate" value={progress} sx={{ position: 'sticky', top: 0, zIndex: 5, mb: 2, height: 3, borderRadius: 2 }} />

      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2, maxWidth: MAX_WIDTH, mx: 'auto' }} separator="›">
        <MUILink sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/') }>
          <HomeIcon fontSize="small" style={{ marginRight: 6 }} /> Trang chủ
        </MUILink>
        <MUILink sx={{ cursor: 'pointer' }} onClick={() => navigate('/weapons/naval')}>Khí Tài Hải Quân</MUILink>
        <Typography color="text.primary">{asset.name}</Typography>
      </Breadcrumbs>

      <Hero sx={{ maxWidth: MAX_WIDTH, mx: 'auto' }}>
        <CardMedia component="img" height="420" image={asset.image || FALLBACK_IMAGE} alt={asset.name}
          onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)} sx={{ objectFit: 'cover', filter: 'saturate(1.05)' }} />
        <Box sx={{ position: 'absolute', inset: 0, bgcolor: 'rgba(0,0,0,0.25)' }} />
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: { xs: 1.5, sm: 2.5 }, color: 'white' }}>
          <Typography variant="h3" fontWeight={900} sx={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{asset.name}</Typography>
          <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap' }}>
            <MetaPill icon={<AnchorIcon fontSize="small" />}>{asset.type}</MetaPill>
            <MetaPill icon={<LocalOfferIcon fontSize="small" />}>{asset.origin}</MetaPill>
            <MetaPill icon={<TimelineIcon fontSize="small" />}>{asset.year || '—'}</MetaPill>
            <MetaPill icon={<ArticleIcon fontSize="small" />}>{readingMin} phút đọc</MetaPill>
            <Box sx={{ flex: 1 }} />
            <Tooltip title="Chia sẻ"><IconButton color="inherit" onClick={handleShare} aria-label="Chia sẻ"><ShareIcon /></IconButton></Tooltip>
            <Tooltip title="Sao chép liên kết"><IconButton color="inherit" onClick={handleCopy} aria-label="Sao chép"><ContentCopyIcon /></IconButton></Tooltip>
          </Box>
        </Box>
      </Hero>

      <Grid container spacing={3} sx={{ mt: 1, maxWidth: MAX_WIDTH + 320, mx: 'auto' }}>
        <Grid item xs={12} md={8}>
          <Prose>
            <Section ref={refs.overview} id="tong-quan">
              <Typography variant="h5" fontWeight="bold" gutterBottom>Giới thiệu</Typography>
              <Typography className="dropcap" variant="body1" color="text.secondary">{asset.summary || 'Không có mô tả.'}</Typography>
              {!!(asset.tags?.length) && (
                <Box sx={{ mt: 1.5, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {asset.tags.slice(0, 6).map((t) => (<Chip key={t} size="small" label={`#${t}`} variant="outlined" />))}
                </Box>
              )}
            </Section>

            {(asset.specs?.['Tốc độ tối đa'] || asset.specs?.['Tầm hoạt động']) && (
              <Paper variant="outlined" sx={{ p: 2, my: 3, borderLeft: (t) => `4px solid ${t.palette.primary.main}` }}>
                <Typography variant="subtitle1" fontStyle="italic">
                  {asset.specs['Tốc độ tối đa'] && `Tốc độ: ${asset.specs['Tốc độ tối đa']}`}
                  {asset.specs['Tốc độ tối đa'] && asset.specs['Tầm hoạt động'] && ' • '}
                  {asset.specs['Tầm hoạt động'] && `Tầm hoạt động: ${asset.specs['Tầm hoạt động']}`}
                </Typography>
              </Paper>
            )}

            {!!specRows.length && (
              <Section ref={refs.specs} id="thong-so">
                <Typography variant="h5" fontWeight="bold" gutterBottom>Thông số chính</Typography>
                <Card variant="outlined" sx={{ mt: 1 }}>
                  <Table size="small" aria-label="Bảng thông số cơ bản">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 700, width: '42%' }}>Thuộc tính</TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>Giá trị</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {specRows.map((row) => (
                        <TableRow key={`${row.attr}-${row.value}`} hover>
                          <TableCell>{row.attr}</TableCell>
                          <TableCell>{row.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Card>
              </Section>
            )}

            <Section ref={refs.payload} id="trang-bi">
              <Typography variant="h5" fontWeight="bold" gutterBottom>Trang bị chính</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="subtitle1" fontWeight={700} gutterBottom>Vũ khí</Typography>
                    {asset.armament?.length ? (
                      <List dense>
                        {asset.armament.map((item, i) => (
                          <ListItem key={`${item}-${i}`} sx={{ pl: 0 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}><ArrowRightAltIcon /></ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                    ) : (<Typography variant="body2" color="text.secondary">Chưa có dữ liệu.</Typography>)}
                  </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Paper variant="outlined" sx={{ p: 2 }}>
                    <Typography variant="subtitle1" fontWeight={700} gutterBottom>Cảm biến</Typography>
                    {asset.sensors?.length ? (
                      <List dense>
                        {asset.sensors.map((s, i) => (
                          <ListItem key={`${s}-${i}`} sx={{ pl: 0 }}>
                            <ListItemIcon sx={{ minWidth: 36 }}><SensorsIcon /></ListItemIcon>
                            <ListItemText primary={s} />
                          </ListItem>
                        ))}
                      </List>
                    ) : (<Typography variant="body2" color="text.secondary">Chưa có dữ liệu.</Typography>)}
                  </Paper>
                </Grid>
              </Grid>
            </Section>

            {!!(asset.history?.length) && (
              <Section ref={refs.history} id="lich-su">
                <Typography variant="h5" fontWeight="bold" gutterBottom>Lịch sử</Typography>
                <List>
                  {asset.history.map((t, i) => (
                    <ListItem key={`${t.year}-${i}`} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ minWidth: 36 }}><TimelineIcon /></ListItemIcon>
                      <ListItemText primary={t.year || '—'} secondary={t.event} />
                    </ListItem>
                  ))}
                </List>
              </Section>
            )}

            {!!gallery.length && (
              <Section ref={refs.gallery} id="thu-vien">
                <Typography variant="h5" fontWeight="bold" gutterBottom>Thư viện</Typography>
                <Grid container spacing={2}>
                  {gallery.map((src, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={`${src}-${idx}`}>
                      <figure>
                        <Card variant="outlined" sx={{ height: '100%' }}>
                          <CardMedia component="img" height="180" image={src || FALLBACK_IMAGE} alt={`${asset.name} - ảnh ${idx + 1}`}
                            onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)} sx={{ objectFit: 'cover' }} />
                        </Card>
                        <figcaption>{asset.name} — ảnh {idx + 1}</figcaption>
                      </figure>
                    </Grid>
                  ))}
                </Grid>
              </Section>
            )}

            {!!(asset.references?.length) && (
              <>
                <Divider sx={{ my: 3 }} />
                <Section ref={refs.refs} id="tai-lieu">
                  <Typography variant="h6" fontWeight={700} gutterBottom>Tài liệu tham khảo</Typography>
                  <List dense>
                    {asset.references.map((ref, i) => (
                      <ListItem key={`${ref.url || ref.title}-${i}`} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}><ArticleIcon /></ListItemIcon>
                        <ListItemText primary={<MUILink href={ref.url} target="_blank" rel="noopener noreferrer">{ref.title}</MUILink>} />
                      </ListItem>
                    ))}
                  </List>
                </Section>
              </>
            )}
          </Prose>
        </Grid>

        <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
          <StickySidebar>
            <Card variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={700} gutterBottom>Mục lục</Typography>
                <TocLink onClick={() => scrollTo('overview')}>Giới thiệu</TocLink>
                {!!specRows.length && <TocLink onClick={() => scrollTo('specs')}>Thông số</TocLink>}
                <TocLink onClick={() => scrollTo('payload')}>Trang bị</TocLink>
                {!!(asset.history?.length) && <TocLink onClick={() => scrollTo('history')}>Lịch sử</TocLink>}
                {!!gallery.length && <TocLink onClick={() => scrollTo('gallery')}>Thư viện</TocLink>}
                {!!(asset.references?.length) && <TocLink onClick={() => scrollTo('refs')}>Tài liệu</TocLink>}
              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ mb: 2 }}>
              <CardContent>
                <Typography variant="subtitle1" fontWeight={700} gutterBottom>Thông tin nhanh</Typography>
                <List dense>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><InfoIcon /></ListItemIcon>
                    <ListItemText primary="Loại" secondary={asset.type} />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><LocalOfferIcon /></ListItemIcon>
                    <ListItemText primary="Nguồn gốc" secondary={asset.origin} />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}><TimelineIcon /></ListItemIcon>
                    <ListItemText primary="Năm ra mắt" secondary={asset.year || '—'} />
                  </ListItem>
                </List>
                <Button fullWidth variant="outlined" endIcon={<LaunchIcon />} sx={{ mt: 1 }} onClick={() => navigate('/weapons/naval')}>
                  Quay lại danh sách
                </Button>
              </CardContent>
            </Card>

            <Card variant="outlined">
              <CardContent>
                <Typography variant="subtitle1" fontWeight={700} gutterBottom>Bài viết liên quan</Typography>
                {pickRelated(asset, RAW_DATA).map((rel) => (
                  <RelatedItem key={rel.id} title={rel.name} subtitle={`${rel.origin || '—'} • ${rel.type || '—'}`} onClick={() => navigate(`/naval/${rel.id}`)} />
                ))}
                {!pickRelated(asset, RAW_DATA).length && (
                  <Typography variant="body2" color="text.secondary">Chưa có bài liên quan.</Typography>
                )}
              </CardContent>
            </Card>
          </StickySidebar>
        </Grid>
      </Grid>

      {showTop && (
        <IconButton color="primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          sx={{ position: 'fixed', right: 16, bottom: 16, boxShadow: 3, bgcolor: 'background.paper' }} aria-label="Lên đầu trang">
          <KeyboardArrowUpIcon />
        </IconButton>
      )}

      <Snackbar open={!!snack} autoHideDuration={3000} onClose={() => setSnack('')}>
        <Alert severity="success" onClose={() => setSnack('')}>{snack}</Alert>
      </Snackbar>
    </Box>
  );
}

function RelatedItem({ title, subtitle, onClick }) {
  return (
    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center', p: 1, borderRadius: 1, cursor: 'pointer', '&:hover': { bgcolor: 'action.hover' } }} onClick={onClick}>
      <Avatar variant="rounded"><ArticleIcon /></Avatar>
      <Box sx={{ minWidth: 0 }}>
        <Typography variant="body2" fontWeight={700} noWrap>{title}</Typography>
        <Typography variant="caption" color="text.secondary" noWrap>{subtitle}</Typography>
      </Box>
    </Box>
  );
}

function pickRelated(current, raw) { if (!current) return []; const pool = raw.map(toSimpleAsset).filter((x) => x.id !== current.id); const sameType = pool.filter((x) => x.type === current.type); const sameTag = pool.filter((x) => x.tags?.some?.((t) => current.tags?.includes?.(t))); const uniq = new Map(); [...sameType, ...sameTag].forEach((x) => uniq.set(x.id, x)); return Array.from(uniq.values()).slice(0, 3); }







