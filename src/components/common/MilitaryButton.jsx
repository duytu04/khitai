

import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const MilitaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#2E7D32',
  color: '#fff',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  padding: '10px 24px',
  borderRadius: '8px',
  '&:hover': {
    backgroundColor: '#388E3C'
  }
}));

export default MilitaryButton;
