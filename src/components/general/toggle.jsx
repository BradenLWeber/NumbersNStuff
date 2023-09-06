import { Switch, styled } from '@mui/material';

import { Color } from 'styles/Color';
import PropTypes from 'prop-types';

const Toggle = (props) => {
  const { onChange, ...options } = props;

  const StyledToggle = styled(Switch)(() => ({
    '& .MuiSwitch-switchBase': {
      '& + .MuiSwitch-track': {
        height: 28,
        width: 50,
        marginTop: -6.5,
        marginLeft: -7.5,
        marginRight: -7.5,
        borderRadius: 14,
      },
      '&.Mui-checked': {
        color: Color.white,
        '& + .MuiSwitch-track': {
          backgroundColor: Color.primaryDark,
          opacity: 1,
        },
      },
    },
  }));

  return (
    <StyledToggle
      id='toggle-control'
      onChange={(e) => onChange(e.target.checked)}
      {...options}
    />
  );
};

Toggle.propTypes = {
  onChange: PropTypes.func,
};

export default Toggle;
