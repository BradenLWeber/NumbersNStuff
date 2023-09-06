import { Color } from 'styles/Color';
import { LoadingButton } from '@mui/lab';
import PropTypes from 'prop-types';
import { styled } from '@mui/material';

const FilledButton = (props) => {
  const {
    children,
    color,
    backgroundColor,
    hoverColor,
    hoverBackgroundColor,
    click,
    ...options
  } = props;

  const StyledButton = styled(LoadingButton)(() => ({
    color: color || Color.black,
    backgroundColor: backgroundColor || Color.tertriary,
    borderColor: color || Color.black,
    '&:hover': {
      backgroundColor: hoverBackgroundColor || Color.tertriaryDark,
      color: hoverColor || Color.black,
    },
  }));

  return (
    <StyledButton
      id='filled-button'
      variant='contained'
      onClick={click}
      {...options}
    >
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
  click: PropTypes.func,
  // other props are spread into "options"
};

export default FilledButton;
