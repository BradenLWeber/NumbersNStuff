import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const { value, onChange, label, ...options } = props;

  return (
    <TextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      label={label}
      {...options}
    ></TextField>
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
};

export default TextInput;
