import { TextField, styled } from '@mui/material';

const TextInput = (props) => {
  const { value, onChange, ...options } = props;

  return <TextField value={value} onChange={onChange} {...options}></TextField>;
};

export default TextInput;
