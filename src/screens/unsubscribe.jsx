import Alert from 'components/general/alert';
import Body from 'components/post/post-body';
import { Box } from '@mui/material';
import FilledButton from 'components/general/filled-button';
import Header from 'components/post/post-header';
import SubscriptionApi from 'utilities/subscription';
import TextInput from 'components/general/text-input';
import { useState } from 'react';
import { validateEmail } from 'utilities/functions';

const Unsubscribe = () => {
  const [email, setEmail] = useState('');
  const [openTooltip, setOpenTooltip] = useState(false);
  const [unsubscribeButtonText, setUnsubscribeButtonText] =
    useState('Unsubscribe');
  const [unsubscribeButtonDisabled, setUnsubscribeButtonDisabled] =
    useState(true);

  const handleCloseTooltip = () => {
    setOpenTooltip(false);
  };

  const emailChange = (v) => {
    setEmail(v);

    setUnsubscribeButtonText('Unsubscribe');
    setUnsubscribeButtonDisabled(!validateEmail(v));
  };

  const unsubscribe = () => {
    if (unsubscribeButtonDisabled) return;

    setUnsubscribeButtonText('Unsubscribing...');
    setUnsubscribeButtonDisabled(true);
    SubscriptionApi.delete(email)
      .then(() => {
        setOpenTooltip(true);
      })
      .catch(() => {
        alert(
          'Unsubscribe failed for some reason. Please contact bradenlweber@gmail.com',
        );
      })
      .finally(() => {
        setUnsubscribeButtonText('Unsubscribe');
        setUnsubscribeButtonDisabled(false);
        setEmail('');
      });
  };

  return (
    <Box id='unsubscribe-wrapper' display='flex' flexDirection='column'>
      <Header>
        Good luck on your future math ventures, or good luck avoiding them.
      </Header>
      <Body>Enter your email to unsubscribe.</Body>
      <TextInput
        sx={{ mt: 20, width: 300 }}
        value={email}
        onChange={emailChange}
        placeholder='Email'
        onEnter={unsubscribe}
      />
      <FilledButton
        disabled={unsubscribeButtonDisabled}
        click={unsubscribe}
        sx={{ minWidth: 92, mt: 20, width: 300 }}
      >
        {unsubscribeButtonText}
      </FilledButton>
      <Alert open={openTooltip} onClose={handleCloseTooltip}>
        Successfully subscribed!
      </Alert>
    </Box>
  );
};

export default Unsubscribe;
