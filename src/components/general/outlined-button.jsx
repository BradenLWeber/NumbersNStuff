import { Button, styled } from '@mui/material';

import { Color } from 'styles/Color';
import PropTypes from 'prop-types';

const OutlinedButton = (props) => {
  const {
    children,
    color,
    borderColor,
    hoverColor,
    hoverBorderColor,
    hoverBackgroundColor,
    ...options
  } = props;

  const StyledButton = styled(Button)(() => ({
    color: color || Color.black,
    borderColor: borderColor || Color.tertriaryDark,
    '&:hover': {
      borderColor: hoverBorderColor || Color.tertriaryDark,
      color: hoverColor || Color.black,
      backgroundColor: hoverBackgroundColor || Color.tertriaryLight,
    },
  }));

  return (
    <StyledButton variant='outlined' {...options} id='outlined-button'>
      {children}
    </StyledButton>
  );
};

OutlinedButton.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  // other props are spread into "options"
};

export default OutlinedButton;
