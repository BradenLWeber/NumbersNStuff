import { ButtonBase, Typography } from '@mui/material';
import { Font } from 'styles/Font';
import PropTypes from 'prop-types';

const TextButton = (props) => {
  const { children, onClick } = props;

  return (
    <ButtonBase sx={{ px: 10, py: 5, borderRadius: 2 }} onClick={onClick}>
      <Typography fontSize={Font.size.button}>{children}</Typography>
    </ButtonBase>
  );
};

TextButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default TextButton;
