import { Box, Typography } from '@mui/material';

import Body from 'components/post/post-body';
import Braden from 'assets/global/me.jpg';
import { Color } from 'styles/Color';
import FilledButton from 'components/general/filled-button';
import Image from 'components/post/post-image';
import KassiAndBraden from 'assets/global/kassi-and-braden.jpg';
import SubscriptionApi from 'utilities/subscription';
import TextInput from 'components/general/text-input';
import Title from 'components/post/post-title';
import { useState } from 'react';
import { validateEmail } from 'utilities/functions';

const About = () => {
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

  return (
    <Box display='flex' flexDirection='row' minWidth={0}>
      <Box
        id='about-wrapper'
        width='100%'
        height='100%'
        p={30}
        display='flex'
        flexDirection='row'
        boxSizing='border-box'
      >
        <Box flex={1} minWidth={0} mr={50}>
          <Title>Welcome!</Title>
          <Body mt={-10}>
            I am just a friendly, neighborhood mathematician. I do math because
            I enjoy it, though I only sometimes understand it. I am not
            decorated educationally in the mathematical sphere, but I can't
            shake my drive to discover new mathematical concepts.
          </Body>
          <Body mt={20}>
            This blog started to solve a simple problem. All my math adventures
            were contained inside my head and hardly anywhere else. I want other
            people to experience the wonder of math too! I can't do that if I
            keep it all to myself, so this is my attempt to get everything into
            a public space.
          </Body>
          <Title>Personal Life</Title>
          <Body mt={-10}>
            I am a native Michigander who still lives in this state for reasons
            that don't always feel good enough (who would ever purposely choose
            Michigan weather?). I graduated from Calvin University with a
            bachelor's degree in Computer Science, and I do website work as my
            full time job.
          </Body>
          <Body mt={20}>
            I am married to a woman far better than I deserve. For those who
            like the Meyer Briggs personality test, I consistently test as{' '}
            <a href='https://www.16personalities.com/infp-personality'>INFP</a>,
            and she tests as{' '}
            <a href='https://www.16personalities.com/infj-personality'>INFJ</a>.
            She's my best friend and greatest supporter, and she beats me at
            Catan.
          </Body>
          <Title>Contact Me</Title>
          <Body mt={-10}>
            Email me at bradenlweber@gmail.com, or message me on{' '}
            <a href='https://www.linkedin.com/in/braden-weber/'>LinkedIn</a>.
          </Body>
          <Title>Subscribe</Title>
          <TextInput
            value={email}
            onChange={(v) => emailChange(v)}
            placeholder='Email'
            size='small'
            fullWidth={true}
            onEnter={subscribe}
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
        <Box display='flex' flexDirection='column' alignItems='center'>
          <img
            alt='Braden'
            src={Braden}
            width={400}
            height='auto'
            style={{ marginTop: 114, maxWidth: '25vw' }}
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
            style={{ maxWidth: '25vw' }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default About;
