import { Box } from '@mui/material';
import { Color } from 'styles/Color';
import PropTypes from 'prop-types';

const Divider = (props) => {
  const { sx, mt, mb } = props;
  return (
    <Box
      id='post-divider'
      height='1px'
      borderTop={`1px solid ${Color.gray}`}
      mt={mt === undefined ? 20 : mt}
      mb={mb === undefined ? 20 : mb}
      sx={sx}
    />
  );
};

Divider.propTypes = {
  sx: PropTypes.object,
  mt: PropTypes.number,
  mb: PropTypes.number,
};

export default Divider;
