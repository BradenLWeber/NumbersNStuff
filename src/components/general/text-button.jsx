import { ButtonBase, Typography } from '@mui/material';

import PropTypes from 'prop-types';
import { useFont } from 'utilities/useFont';

const TextButton = (props) => {
  const { children, onClick } = props;

  const font = useFont();

  return (
    <ButtonBase
      id='text-button'
      sx={{ px: 10, py: 5, borderRadius: 2 }}
      onClick={onClick}
    >
      <Typography fontSize={font.button}>{children}</Typography>
    </ButtonBase>
  );
};

TextButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

export default TextButton;
