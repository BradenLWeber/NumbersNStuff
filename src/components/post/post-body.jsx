import { Typography } from '@mui/material';
import { Color } from 'styles/Color';
import { Font } from 'styles/Font';

const Body = (props) => {
  const { children } = props;

  return (
    <Typography fontSize={Font.size.body} marginBottom={10} color={Color.gray}>
      {children}
    </Typography>
  );
};

export default Body;
