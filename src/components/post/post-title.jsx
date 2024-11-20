import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import CalculateIcon from '@mui/icons-material/Calculate';
import { Color } from 'styles/Color';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { parseTitleToUrl } from 'utilities/functions';
import { useFont } from 'utilities/useFont';
import { useWindowSize } from 'utilities/useWindowSize';

const Title = (props) => {
  const { children, playgroundName, date, author, mt, mb } = props;
  const [playgroundUrl, setPlaygroundUrl] = useState('');

  const font = useFont();
  const windowSize = useWindowSize();

  useEffect(() => {
    if (playgroundName)
      setPlaygroundUrl('/playground/' + parseTitleToUrl(playgroundName));
  }, [playgroundName]);

  useEffect(() => {
    dayjs.extend(localizedFormat);
  }, []);

  return (
    <>
      <Box
        display='flex'
        flexDirection='row'
        justifyContent='space-between'
        alignItems='center'
      >
        <Typography
          fontSize={font.title}
          marginTop={mt === undefined ? 20 : mt}
          marginBottom={mb === undefined ? 20 : mb}
          color={Color.gray}
          fontWeight={500}
          lineHeight={1}
        >
          {children}
        </Typography>
        {playgroundName && (
          <Link to={playgroundUrl}>
            <Tooltip title='Playground'>
              <IconButton>
                <CalculateIcon />
              </IconButton>
            </Tooltip>
          </Link>
        )}
      </Box>
      {date && author && (
        <Box
          display='flex'
          flexDirection={windowSize.getVal('row', 'row', 'column')}
          mt={-5}
        >
          <Typography color={Color.midGray} fontWeight='bold'>
            {author}
            {!windowSize.isSmallMobile && <>&nbsp;&nbsp;&nbsp;•</>}
          </Typography>
          <Typography color={Color.midGray} ml={windowSize.getVal(12, 12, 0)}>
            {dayjs(date).format('LL')}
          </Typography>
        </Box>
      )}
    </>
  );
};

Title.propTypes = {
  children: PropTypes.string,
  playgroundName: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  mt: PropTypes.number,
  mb: PropTypes.number,
};

export default Title;
