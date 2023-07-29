import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Color } from 'styles/Color';
import { parseTitleToUrl } from 'utilities/functions';

const Footer = (props) => {
  const { title } = props;
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!title)
      setMessage(
        <>
          Thank you for reading! Feel free to contact the author at
          bradenlweber@gmail.com.
        </>,
      );
    else
      setMessage(
        <>
          Thank you for reading! Feel free to contact the author at
          bradenlweber@gmail.com, and don't forget to get your toes wet in the{' '}
          <Link to={'/playground/' + parseTitleToUrl(title)}>playground</Link>{' '}
          for this post.
        </>,
      );
  }, [title]);

  return (
    <Box mt={40} pt={40} borderTop={'1px solid ' + Color.gray}>
      <Typography fontStyle='italic' color={Color.gray}>
        {message}
      </Typography>
    </Box>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
};

export default Footer;
