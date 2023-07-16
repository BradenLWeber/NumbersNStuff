import { Typography } from '@mui/material';
import { Color } from 'styles/Color';
import { Font } from 'styles/Font';

const Indent = (props) => {
  const { children } = props;

  return (
    <Typography
      fontSize={Font.size.body}
      color={Color.gray}
      mb={20}
      ml={20}
      mt={20}
    >
      {children}
    </Typography>
  );
};

export default Indent;
