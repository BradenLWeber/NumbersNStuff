import { Typography } from '@mui/material';
import { Color } from 'styles/Color';
import { Font } from 'styles/Font';

const Header = (props) => {
  const { children } = props;

  return (
    <Typography
      fontSize={Font.size.header}
      mt={40}
      mb={20}
      fontWeight='bold'
      color={Color.gray}
    >
      {children}
    </Typography>
  );
};

export default Header;
