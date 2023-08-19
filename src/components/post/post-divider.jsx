import { Box } from '@mui/material';
import { Color } from 'styles/Color';

const Divider = () => {
  return <Box height='1px' borderTop={`1px solid ${Color.gray}`} mt={20} />;
};

export default Divider;
