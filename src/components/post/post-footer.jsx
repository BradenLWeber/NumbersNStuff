import { Box, Typography } from '@mui/material';
import { parseTitleToUrl, validateEmail } from 'utilities/functions';
import { useEffect, useState } from 'react';

import Alert from 'components/general/alert';
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
  const [openTooltip, setOpenTooltip] = useState(false);
  const [subscribeButtonText, setSubscribeButtonText] = useState('Subscribe');
  const [subscribeButtonDisabled, setSubscribeButtonDisabled] = useState(true);

  const handleCloseTooltip = () => {
    setOpenTooltip(false);
  };

  const emailChange = (v) => {
    setEmail(v);

    setSubscribeButtonDisabled(!validateEmail(v));
  };

  const subscribe = () => {
    if (subscribeButtonDisabled) return;

    setSubscribeButtonText('Subscribing...');
    setSubscribeButtonDisabled(true);
    SubscriptionApi.add(email)
      .then(() => {
        setOpenTooltip(true);
      })
      .catch(() => {
        alert(
          'Subscribe failed for some reason. Please contact bradenlweber@gmail.com',
        );
      })
      .finally(() => {
        setSubscribeButtonText('Subscribe');
        setSubscribeButtonDisabled(false);
        setEmail('');
      });
  };

  useEffect(() => {
    if (!title) setMessage('');
    else
      setMessage(
        <>
          Thank you for reading! Don't forget to get your toes wet in the{' '}
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
        mt={message ? 20 : 0}
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
      <Alert open={openTooltip} onClose={handleCloseTooltip}>
        Successfully subscribed!
      </Alert>
    </Box>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
};

export default Footer;
