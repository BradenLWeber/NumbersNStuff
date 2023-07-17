import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Color } from 'styles/Color';
import { Font } from 'styles/Font';

const Indent = (props) => {
  const { children, mt, mb } = props;
  const [marginTop, setMarginTop] = useState(20);
  const [marginBottom, setMarginBottom] = useState(20);

  useEffect(() => {
    setMarginTop(mt === undefined ? 20 : mt);
  }, [mt]);

  useEffect(() => {
    setMarginBottom(mb === undefined ? 20 : mb);
  }, [mb]);

  return (
    <Typography
      fontSize={Font.size.body}
      color={Color.gray}
      mb={marginBottom}
      mt={marginTop}
      ml={20}
    >
      {children}
    </Typography>
  );
};

export default Indent;
