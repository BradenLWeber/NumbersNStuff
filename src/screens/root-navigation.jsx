import { Box, ButtonBase, Typography } from '@mui/material';
import { Color } from 'styles/Color';
import ChalkBrain from 'assets/global/ChalkBrain.png';
import TextButton from 'components/atoms/text-button';
import PropTypes from 'prop-types';
import PostTree from 'components/molecules/post-tree';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import Error from './error';

import { useEffect } from 'react';

const RootNavigation = (props) => {
  const { page } = props;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') navigate('/home');
  }, [location]);

  return (
    <Box
      id='ScreenWrapper'
      width='100%'
      height='100%'
      display='flex'
      flexDirection='column'
    >
      <Box
        id="'NavigationBar'"
        height={70}
        backgroundColor={Color.primary}
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Link to='/home' style={{ color: 'unset' }}>
          <ButtonBase id='Logo' sx={{ p: 5, pr: 15, borderRadius: '10px' }}>
            <img
              alt='Chalk drawing of a brain'
              src={ChalkBrain}
              height={60}
              width={60}
              style={{ borderRadius: 10 }}
            />
            <Typography ml={12} fontSize={40}>
              Math Addict
            </Typography>
          </ButtonBase>
        </Link>
        <Box mr={14} display='flex' flexDirection='row' columnGap={5}>
          <Link to='/posts' style={{ color: 'unset' }}>
            <TextButton>Posts</TextButton>
          </Link>
          <Link to='/playgrounds' style={{ color: 'unset' }}>
            <TextButton>Playgrounds</TextButton>
          </Link>
          <Link to='/about' style={{ color: 'unset' }}>
            <TextButton>About</TextButton>
          </Link>
        </Box>
      </Box>
      <Box
        flex={1}
        backgroundColor={Color.light}
        display='flex'
        flexDirection='row'
        overflow='auto'
      >
        {!(
          location.pathname.includes('home') ||
          location.pathname.includes('playground')
        ) && <PostTree />}
        {page === 'Error' && <Error />}
        <Outlet />
      </Box>
    </Box>
  );
};

RootNavigation.propTypes = {
  showArchive: PropTypes.bool,
  page: PropTypes.string,
};

export default RootNavigation;
