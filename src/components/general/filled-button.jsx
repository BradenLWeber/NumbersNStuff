import { Button, buttonClasses, styled } from '@mui/material';
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
    color: color || '',
    backgroundColor: backgroundColor || '',
    borderColor: color || '',
    '&:hover': {
      backgroundColor: hoverBackgroundColor || '',
      color: hoverColor || '',
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
  background: PropTypes.string,
  hoverColor: PropTypes.string,
  hoverBackgroundColor: PropTypes.string,
  // other props are spread into "options"
};

export default FilledButton;
