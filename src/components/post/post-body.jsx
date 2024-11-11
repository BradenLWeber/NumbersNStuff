import { Color } from 'styles/Color';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import { useFont } from 'utilities/useFont';

const Body = (props) => {
  const { children, mt, mb, color, ...sx } = props;

  const font = useFont();

  return (
    <Typography
      fontSize={font.body}
      color={color || Color.gray}
      mt={mt === undefined ? 20 : mt}
      mb={mb === undefined ? 0 : mb}
      sx={sx}
      textAlign='justify'
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
