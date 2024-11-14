import { Box, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import Alert from 'components/general/alert';
import Body from 'components/post/post-body';
import Braden from 'assets/global/me.jpg';
import { Color } from 'styles/Color';
import EmailIcon from '@mui/icons-material/Email';
import FilledButton from 'components/general/filled-button';
import Image from 'components/post/post-image';
import KassiAndBraden from 'assets/global/kassi-and-braden.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SubscriptionApi from 'utilities/subscription';
import TextInput from 'components/general/text-input';
import Title from 'components/post/post-title';
import globalVars from 'utilities/globalVars';
import { useWindowSize } from 'utilities/useWindowSize';
import { validateEmail } from 'utilities/functions';

const About = () => {
  const imageMaxWidth = `max(calc(25vw), ${
    globalVars.mobileScreenWidth - 500
  }px)`;

  const [email, setEmail] = useState('');
  const [openTooltip, setOpenTooltip] = useState(false);
  const [subscribeButtonText, setSubscribeButtonText] = useState('Subscribe');
  const [subscribeButtonDisabled, setSubscribeButtonDisabled] = useState(true);
  const [showPictures, setShowPictures] = useState(true);

  const windowSize = useWindowSize();

  useEffect(() => {
    setShowPictures(!windowSize.isMobile);
  }, [windowSize]);

  const handleCloseTooltip = () => {
    setOpenTooltip(false);
  };

  const emailChange = (v) => {
    setEmail(v);

    setSubscribeButtonText('Subscribe');
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

  return (
    <Box display='flex' flexDirection='row' minWidth={0}>
      <Box
        id='about-wrapper'
        width='100%'
        height='100%'
        py={30}
        px={windowSize.isSmallMobile ? globalVars.smallMobilePostPadding : 30}
        display='flex'
        flexDirection='row'
        boxSizing='border-box'
      >
        <Box flex={1} minWidth={0} mr={showPictures ? 50 : 0}>
          <Title>About Me</Title>
          <Body mt={0}>
            My name is Braden Weber. I am just a friendly, neighborhood
            mathematician. I do math because I enjoy it, though I only sometimes
            understand it. I am not decorated educationally in the mathematical
            sphere, but I can't shake my drive to discover new mathematical
            concepts.
          </Body>
          <Body mt={20}>
            This blog started to solve a simple problem. All my math adventures
            were contained inside my head and hardly anywhere else. I want other
            people to experience the wonder of math too! I can't do that if I
            keep it all to myself, so this is my attempt to get everything into
            a public space.
          </Body>
          <Body mt={20}>
            I am a native Michigander who still lives in this state for reasons
            that don't always feel good enough (who would ever purposely choose
            Michigan weather?). I graduated from Calvin University with a
            bachelor's degree in Computer Science, and I do website work as my
            full time job.
          </Body>
          <Body mt={20} mb={30}>
            I am married to a woman far better than I deserve. For those who
            like the Meyer Briggs personality test, I consistently test as{' '}
            <a href='https://www.16personalities.com/infp-personality'>INFP</a>,
            and she tests as{' '}
            <a href='https://www.16personalities.com/infj-personality'>INFJ</a>.
            She's my best friend and greatest supporter, and she beats me at
            Catan.
          </Body>
          <Title>Contact Me</Title>
          <Stack direction='row' spacing={12}>
            <EmailIcon />
            <Body mt={0}>bradenlweber@gmail.com</Body>
          </Stack>
          <Stack direction='row' spacing={12} mt={10} mb={30}>
            <LinkedInIcon />
            <Body mt={0}>
              <a href='https://www.linkedin.com/in/braden-weber'>
                https://www.linkedin.com/in/braden-weber
              </a>
            </Body>
          </Stack>
          <Title>Subscribe</Title>
          <TextInput
            value={email}
            onChange={(v) => emailChange(v)}
            placeholder='Email'
            size='small'
            fullWidth={true}
            onEnter={subscribe}
            sx={{ mt: 10 }}
          />
          <FilledButton
            variant='contained'
            sx={{ mt: 10 }}
            fullWidth={true}
            disabled={subscribeButtonDisabled}
            click={subscribe}
          >
            {subscribeButtonText}
          </FilledButton>
        </Box>
        {showPictures && (
          <Box display='flex' flexDirection='column' alignItems='center'>
            <img
              alt='Braden'
              src={Braden}
              width={400}
              height='auto'
              style={{ marginTop: 114, maxWidth: imageMaxWidth }}
            />
            <Typography color={Color.midGray} fontSize={12}>
              Photo by my most wonderful wife
            </Typography>
            <Image
              alt='Braden and Kassi'
              src={KassiAndBraden}
              width={400}
              mt={50}
              cred='Heidi Musolff Photography'
              credRef='https://heidimusolff.com/'
              style={{ maxWidth: imageMaxWidth }}
            />
          </Box>
        )}
      </Box>
      <Alert open={openTooltip} onClose={handleCloseTooltip}>
        Successfully subscribed!
      </Alert>
    </Box>
  );
};

export default About;
