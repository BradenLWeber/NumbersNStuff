import { useEffect, useMemo, useState } from 'react';

import { Color } from 'styles/Color';
import { Font } from 'styles/Font';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

const Indent = (props) => {
  const { children, mt, mb, separate, widths, bold } = props;
  const [marginTop, setMarginTop] = useState(20);
  const [marginBottom, setMarginBottom] = useState(20);
  const Children = useMemo(() => {
    if (!children || !children.includes || !children.includes('|')) return '';

    const splitChildren = children.split('|');
    return splitChildren.map((text, i) => {
      return (
        <span
          style={{
            minWidth:
              (widths && widths[i]) ||
              (splitChildren.length - 1 === i ? 'unset' : 80),
            width:
              (widths && widths[i]) ||
              (splitChildren.length - 1 === i ? 'fit-content' : 80),
            flex: splitChildren.length - 1 === i ? 1 : 'unset',
          }}
        >
          {text}
        </span>
      );
    });
  }, [children, widths, separate]);

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
      height='fit-content'
      fontWeight={bold ? 'bold' : 'normal'}
    >
      {separate ? Children : <span width='100%'>{children}</span>}
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
  bold: PropTypes.bool,
  widths: PropTypes.arrayOf(PropTypes.number),
};

export default Indent;
