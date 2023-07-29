import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import { Font } from 'styles/Font';
import { Color } from 'styles/Color';
import CalculateIcon from '@mui/icons-material/Calculate';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { parseTitleToUrl } from 'utilities/functions';

const Title = (props) => {
  const { children, playgroundName } = props;
  const [playgroundUrl, setPlaygroundUrl] = useState('');

  useState(() => {
    if (playgroundName)
    setPlaygroundUrl('/playground/' + parseTitleToUrl(playgroundName))
  }, [playgroundName])

  return (
    <Box display='flex' flexDirection='row' justifyContent='space-between' alignItems='center'>
      <Typography
        fontSize={Font.size.title}
        marginY={20}
        color={Color.gray}
        fontWeight={500}
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
  );
};

export default Title;
