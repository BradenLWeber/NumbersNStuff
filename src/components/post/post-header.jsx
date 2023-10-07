import { Color } from 'styles/Color';
import { Font } from 'styles/Font';
import { Typography } from '@mui/material';

const Header = (props) => {
  const { children, ...sx } = props;

  return (
    <Typography
      fontSize={Font.size.header}
      mt={40}
      mb={20}
      fontWeight='bold'
      color={Color.gray}
      sx={sx}
    >
      {children}
    </Typography>
  );
};

export default Header;
