


import React from 'react';
import { GiRadarSweep } from 'react-icons/gi';

const Loading = ({ message = 'Đang tải dữ liệu khí tài...', size = 'large' }) => {
  const iconSize = size === 'small' ? 40 : size === 'large' ? 80 : 60;

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '60vh',
        textAlign: 'center',
      }}
    >
      <GiRadarSweep
        style={{
          fontSize: iconSize,
          color: '#2c3e50',
          animation: 'spin 2s linear infinite',
        }}
      />
      <p style={{ marginTop: 16, fontSize: '1.2rem', color: '#555' }}>{message}</p>

      {/* CSS animation */}
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
