import { Typography } from '@mui/material';
import { Color } from 'styles/Color';
import { Font } from 'styles/Font';
import PropTypes from 'prop-types';

const Body = (props) => {
  const { children, mt, mb } = props;

  return (
    <Typography
      fontSize={Font.size.body}
      marginBottom={10}
      color={Color.gray}
      mt={mt || 0}
      mb={mb || 0}
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
