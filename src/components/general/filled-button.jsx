import { Button, buttonClasses, styled } from '@mui/material';

import { Color } from 'styles/Color';
import PropTypes from 'prop-types';

const FilledButton = (props) => {
  const {
    children,
    color,
    backgroundColor,
    hoverColor,
    hoverBackgroundColor,
    ...options
  } = props;

  const StyledButton = styled(Button)(() => ({
    color: color || Color.black,
    backgroundColor: backgroundColor || Color.primary,
    borderColor: color || Color.black,
    '&:hover': {
      backgroundColor: hoverBackgroundColor || Color.tertriary,
      color: hoverColor || Color.black,
    },
  }));

  return (
    <StyledButton variant='contained' {...options}>
      {children}
    </StyledButton>
  );
};

FilledButton.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  // other props are spread into "options"
};

export default FilledButton;
