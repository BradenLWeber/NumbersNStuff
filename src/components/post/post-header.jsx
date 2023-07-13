import { Typography } from '@mui/material';
import { Font } from 'styles/Font';

const Header = (props) => {
  const { children } = props;

  return (
    <Typography fontSize={Font.size.header} marginY={5} fontWeight='bold'>
      {children}
    </Typography>
  );
};

export default Header;
