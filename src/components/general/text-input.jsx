import { TextField, styled } from '@mui/material';

import { Color } from 'styles/Color';
import PropTypes from 'prop-types';
import { useMemo } from 'react';

const TextInput = (props) => {
  const {
    value,
    onChange,
    label,
    onEnter,
    sx,
    backgroundColor,
    borderColor,
    trimChars,
    ...options
  } = props;

  const keyPress = (e) => {
    if (e.keyCode === 13 && onEnter) {
      onEnter(e.target.value);
    }
  };

  const onLocalChange = (e) => {
    const value = trimChars
      ? e.target.value.replace(trimChars, '')
      : e.target.value;
    onChange(value, e);
  };

  const StyledTextField = useMemo(
    () =>
      styled(TextField)({
        '& label.Mui-focused': {
          color: Color.black,
        },
        '& .MuiOutlinedInput-root': {
          '&.Mui-focused fieldset': {
            borderColor: borderColor || Color.primary,
          },
        },
      }),
    [borderColor],
  );

  return (
    <StyledTextField
      id='text-input'
      value={value}
      onChange={(e) => onLocalChange(e)}
      label={label}
      onKeyDown={keyPress}
      sx={{ backgroundColor: backgroundColor || 'white', ...sx }}
      {...options}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string,
  onEnter: PropTypes.func,
  sx: PropTypes.object,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  trimChars: PropTypes.instanceOf(RegExp),
};

export default TextInput;
