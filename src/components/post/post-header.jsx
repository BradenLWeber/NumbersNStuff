import { Color } from 'styles/Color';
import { Typography } from '@mui/material';
import { useFont } from 'utilities/useFont';

const Header = (props) => {
  const { children, ...sx } = props;

  const font = useFont();

  return (
    <Typography
      fontSize={font.header}
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
