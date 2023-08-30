import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { Color } from 'styles/Color';
import { Font } from 'styles/Font';
import PropTypes from 'prop-types';

const Indent = (props) => {
  const { children, mt, mb, separate, widthFirstLine, bold } = props;
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
      display='flex'
      flexDirection='row'
      justifyContent='space-between'
      alignItems='center'
      width='fit-content'
      height={'fit-content'}
      fontWeight={bold ? 'bold' : 'normal'}
    >
      {separate ? (
        <>
          <span
            style={{
              width: widthFirstLine || 80,
              minWidth: widthFirstLine || 80,
            }}
          >
            {children.split('|')[0]}
          </span>
          <span>{children.split('|')[1]}</span>
        </>
      ) : (
        <span>{children}</span>
      )}
    </Typography>
  );
};

Indent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ]),
  mt: PropTypes.number,
  mb: PropTypes.number,
  separate: PropTypes.bool,
  widthFirstLine: PropTypes.number,
  bold: PropTypes.bool,
};

export default Indent;
