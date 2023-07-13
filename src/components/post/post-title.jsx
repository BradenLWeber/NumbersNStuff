import { Typography } from '@mui/material';
import { Font } from 'styles/Font';
import { Color } from 'styles/Color';

const Title = (props) => {
  const { children } = props;

  return (
    <Typography fontSize={Font.size.title} marginY={20} color={Color.gray}>
      {children}
    </Typography>
  );
};

export default Title;
