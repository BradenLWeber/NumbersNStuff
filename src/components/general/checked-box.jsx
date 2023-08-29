import { Checkbox } from '@mui/material';

const CheckedBox = (props) => {
  const { onChange, ...options } = props;
  return (
    <Checkbox
      id='checked-box'
      onChange={(e) => onChange(e.target.checked)}
      {...options}
    ></Checkbox>
  );
};

export default CheckedBox;
