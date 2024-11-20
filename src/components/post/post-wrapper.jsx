import { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import globalVars from 'utilities/globalVars';
import { useWindowSize } from 'utilities/useWindowSize';

const Wrapper = (props) => {
  const [paddingRight, setPaddingRight] = useState(50);
  const [paddingLeft, setPaddingLeft] = useState(50);

  const windowSize = useWindowSize();

  useEffect(() => {
    setPaddingLeft(
      windowSize.getVal(30, 30, globalVars.smallMobilePostPadding),
    );
    if (windowSize.isSmallMobile) {
      setPaddingRight(globalVars.smallMobilePostPadding);
    } else if (windowSize.width < globalVars.archiveRepositionWidth) {
      setPaddingRight(30);
    } else {
      setPaddingRight(50);
    }
  }, [windowSize]);

  const { children } = props;
  return (
    <Box
      width='100%'
      boxSizing='border-box'
      pr={paddingRight}
      pb={25}
      pt={10}
      pl={paddingLeft}
      maxWidth={1000}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
