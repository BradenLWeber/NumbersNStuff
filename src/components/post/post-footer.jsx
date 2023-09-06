import { Box, Typography } from '@mui/material';
import { parseTitleToUrl, validateEmail } from 'utilities/functions';
import { useEffect, useState } from 'react';

import { Color } from 'styles/Color';
import FilledButton from 'components/general/filled-button';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SubscriptionApi from 'utilities/subscription';
import TextInput from 'components/general/text-input';

const Footer = (props) => {
  const { title } = props;
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [subscribeButtonText, setSubscribeButtonText] = useState('Subscribe');
  const [subscribeButtonDisabled, setSubscribeButtonDisabled] = useState(true);

  const emailChange = (v) => {
    setEmail(v);

    setSubscribeButtonText('Subscribe');
    setSubscribeButtonDisabled(!validateEmail(v));
  };

  const subscribe = () => {
    if (subscribeButtonDisabled) return;

    setSubscribeButtonText('Subscribing...');
    setSubscribeButtonDisabled(true);
    SubscriptionApi.add(email).then((res) => {
      if (res.success) {
        setSubscribeButtonText('Subscribed!');
      } else {
        setSubscribeButtonText('Subscribe');
        setSubscribeButtonDisabled(false);
      }
    });
  };

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
      <Box
        display='flex'
        flexDirection='row'
        columnGap={20}
        alignItems='center'
        mt={20}
      >
        <Typography fontStyle='italic' color={Color.gray}>
          Subscribe and be the first to hear about every new post!
        </Typography>
        <TextInput
          sx={{ ml: 20 }}
          size='small'
          placeholder='Email'
          value={email}
          onChange={(v) => emailChange(v)}
          onEnter={subscribe}
        />
        <FilledButton
          disabled={subscribeButtonDisabled}
          click={subscribe}
          sx={{ minWidth: 92 }}
        >
          {subscribeButtonText}
        </FilledButton>
      </Box>
    </Box>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
};

export default Footer;
