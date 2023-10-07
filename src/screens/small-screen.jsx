import { Box, Typography } from '@mui/material';

import { Color } from 'styles/Color';
import Header from 'components/post/post-header';

const SmallScreen = () => {
  return (
    <Box
      id='ScreenWrapper'
      width='100%'
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
      <Box px={20} pb={40} backgroundColor={Color.light}>
        <Header textAlign='center'>Numbers 'n Stuff</Header>
        <Typography textAlign='center'>
          Website is not optimized for small screens. Please open this website
          on a laptop, or increase the pixel width of the screen.
        </Typography>
      </Box>
      <Box flex={1} width='100%' backgroundColor={Color.tertriaryLight} />
      <Box flex={1} width='100%' backgroundColor={Color.tertriary} />
      <Box flex={1} width='100%' backgroundColor={Color.tertriaryDark} />
    </Box>
  );
};

export default SmallScreen;
