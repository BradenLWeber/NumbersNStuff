import { useEffect, useState } from 'react';

import { Box } from '@mui/material';
import globalVars from 'utilities/globalVars';
import { useWindowSize } from 'utilities/useWindowSize';

const Wrapper = (props) => {
  const [paddingRight, setPaddingRight] = useState(50);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < globalVars.archiveRepositionWidth) {
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
      pl={30}
      maxWidth={1000}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
