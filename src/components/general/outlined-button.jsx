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
    click,
    ...options
  } = props;

  const StyledButton = styled(Button)(() => ({
    color: color || Color.black,
    borderColor: borderColor || Color.tertiaryDark,
    '&:hover': {
      borderColor: hoverBorderColor || Color.tertiaryDark,
      color: hoverColor || Color.black,
      backgroundColor: hoverBackgroundColor || Color.tertiaryLight,
    },
  }));

  return (
    <StyledButton
      variant='outlined'
      {...options}
      onClick={click}
      id='outlined-button'
    >
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
  click: PropTypes.func,
  // other props are spread into "options"
};

export default OutlinedButton;
