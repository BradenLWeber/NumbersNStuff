import { Checkbox, styled } from '@mui/material';

import { Color } from 'styles/Color';
import PropTypes from 'prop-types';

const CheckedBox = (props) => {
  const { onChange, ...options } = props;

  const StyledCheckbox = styled(Checkbox)(() => ({
    '&.Mui-checked': {
      color: Color.primaryDark,
      opacity: 1,
    },
  }));

  return (
    <StyledCheckbox
      id='checked-box'
      onChange={(e) => onChange(e.target.checked)}
      {...options}
    />
  );
};

CheckedBox.propTypes = {
  onChange: PropTypes.func,
};

export default CheckedBox;
