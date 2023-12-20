import { Color } from 'styles/Color';
import { Font } from 'styles/Font';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Body = (props) => {
  const { children, mt, mb, color, ...sx } = props;

  return (
    <Typography
      fontSize={Font.size.body}
      color={color || Color.gray}
      mt={mt === undefined ? 20 : mt}
      mb={mb === undefined ? 0 : mb}
      sx={sx}
    >
      {children}
    </Typography>
  );
};

Body.propTypes = {
  mt: PropTypes.number,
  mb: PropTypes.number,
};

export default Body;
