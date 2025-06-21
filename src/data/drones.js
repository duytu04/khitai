const droneAssets = [
  {
    id: 'drone001',
    name: 'Bayraktar TB2',
    type: 'Drone chiến đấu',
    country: 'Thổ Nhĩ Kỳ',
    description: 'UAV tầm trung có khả năng mang vũ khí chính xác.',
    image: '/images/drones/bayraktar.jpg',
    specs: {
      length: '6.5 m',
      weight: '700 kg',
      range: '150 km',
      speed: '220 km/h',
      armament: 'Bom thông minh MAM-L',
    },
  },
  {
    id: 'drone002',
    name: 'MQ-9 Reaper',
    type: 'Drone chiến đấu',
    country: 'Hoa Kỳ',
    description: 'Máy bay không người lái vũ trang với thời gian bay dài.',
    image: '/images/drones/mq9.jpg',
    specs: {
      length: '11 m',
      weight: '4,760 kg',
      range: '1,900 km',
      speed: '480 km/h',
      armament: 'Hellfire, GBU-12 Paveway II',
    },
  },
];
export default droneAssets;
