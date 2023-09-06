import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import CalculateIcon from '@mui/icons-material/Calculate';
import { Color } from 'styles/Color';
import { Font } from 'styles/Font';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { parseTitleToUrl } from 'utilities/functions';

const Title = (props) => {
  const { children, playgroundName, date, author } = props;
  const [playgroundUrl, setPlaygroundUrl] = useState('');

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
          fontSize={Font.size.title}
          marginY={20}
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
        <Box display='flex' flexDirection='row' mt={-5}>
          <Typography color={Color.midGray} fontWeight='bold'>
            {author}
            &nbsp;&nbsp;&nbsp;•
          </Typography>
          <Typography color={Color.midGray} ml={12}>
            {dayjs(date).format('LL')}
          </Typography>
        </Box>
      )}
    </>
  );
};

export default Title;
