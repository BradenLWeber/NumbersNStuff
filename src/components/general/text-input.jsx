import PropTypes from 'prop-types';
import { TextField } from '@mui/material';

const TextInput = (props) => {
  const { value, onChange, label, onEnter, sx, ...options } = props;

  const keyPress = (e) => {
    if (e.keyCode === 13 && onEnter) {
      onEnter(e.target.value);
    }
  };

  return (
    <TextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      label={label}
      onKeyDown={keyPress}
      sx={{ backgroundColor: 'white', ...sx }}
      {...options}
    ></TextField>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  onEnter: PropTypes.func,
};

export default TextInput;
