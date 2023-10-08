import { Box, ButtonBase } from '@mui/material';

import Body from 'components/post/post-body';
import { Color } from 'styles/Color';
import Divider from 'components/post/post-divider';
import Header from 'components/post/post-header';
import PropTypes from 'prop-types';

const SmallScreen = (props) => {
  const { clickContinue } = props;

  return (
    <Box
      id='ScreenWrapper'
      width='100%'
      minWidth={300}
      height='100%'
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      backgroundColor={Color.primary}
    >
      <Box flex={1} width='100%' backgroundColor={Color.primaryDark} />
      <Box flex={1} width='100%' backgroundColor={Color.primary} />
      <Box flex={1} width='100%' backgroundColor={Color.primaryLight} />
      <Box
        px={20}
        pb={40}
        backgroundColor={Color.light}
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <Header textAlign='center'>Numbers 'n Stuff</Header>
        <Body textAlign='center'>
          Congratulations! You found the right blog!
        </Body>
        <Body textAlign='center'>
          Unfortunately, this website is <b>not optimized for small screens</b>.
        </Body>
        <Body textAlign='center'>
          It is recommended you open this website on a laptop or increase the
          width of the screen.
        </Body>
        <Divider />
        <ButtonBase onClick={clickContinue} sx={{ marginTop: 10 }}>
          <Body color={Color.tertriaryDark} mt={0} textAlign='center'>
            Want to open up the blog anyway? Click here.
          </Body>
        </ButtonBase>
      </Box>
      <Box flex={1} width='100%' backgroundColor={Color.tertriaryLight} />
      <Box flex={1} width='100%' backgroundColor={Color.tertriary} />
      <Box flex={1} width='100%' backgroundColor={Color.tertriaryDark} />
    </Box>
  );
};

SmallScreen.propTypes = {
  clickContinue: PropTypes.func,
};

export default SmallScreen;
