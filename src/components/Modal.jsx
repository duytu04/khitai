import React from 'react';
import { Snackbar, Alert } from '@mui/material';

const SuccessModal = ({ open, onClose, message }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }} // 🔼 Góc trên bên phải
    >
      <Alert severity="success" onClose={onClose} sx={{ width: '100%' }}>
        {message || 'Cài đặt đã được lưu thành công!'}
      </Alert>
    </Snackbar>
  );
};

export default SuccessModal;
