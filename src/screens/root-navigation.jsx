import { Box, ButtonBase, Typography } from '@mui/material';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

import ChalkBrain from 'assets/global/ChalkBrain.png';
import { Color } from 'styles/Color';
import Error from './error';
import PostTree from 'components/general/post-tree';
import PropTypes from 'prop-types';
import ReactLogo from 'assets/global/react-logo.png';
import TextButton from 'components/general/text-button';
import database from 'utilities/database';
import { useEffect } from 'react';

const RootNavigation = (props) => {
  const { page, showArchive } = props;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    database.connect();
  }, []);

  useEffect(() => {
    if (location.pathname === '/') navigate('/home');
  }, [location]);

  const showExtraItems =
    !location.pathname.includes('home') &&
    !location.pathname.includes('playground/');

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
        id='main-body-wrapper'
        overflow='auto'
        flex={1}
        display='flex'
        minHeight={0}
        flexDirection='column'
      >
        <Box
          flex={1}
          minWidth={0}
          backgroundColor={Color.light}
          display='flex'
          flexDirection='row'
        >
          {showArchive || (showExtraItems && <PostTree />)}
          {page === 'Error' && <Error />}
          <Outlet />
        </Box>
        {showExtraItems && (
          <Box
            id='bottom-wrapper'
            width='100%'
            height={40}
            minHeight={40}
            backgroundColor={Color.gray}
            display='flex'
            flexDirection='row'
            justifyContent='center'
            alignItems='center'
            color={Color.white}
          >
            <Typography>Created in React</Typography>
            <img src={ReactLogo} height={30} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

RootNavigation.propTypes = {
  showArchive: PropTypes.bool,
  page: PropTypes.string,
};

export default RootNavigation;
