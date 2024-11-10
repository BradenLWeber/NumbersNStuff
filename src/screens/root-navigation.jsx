import { Box, ButtonBase, Typography } from '@mui/material';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import ChalkBrain from 'assets/global/ChalkBrain.png';
import { Color } from 'styles/Color';
import Error from './error';
import PostTree from 'components/general/post-tree';
import PropTypes from 'prop-types';
import ReactLogo from 'assets/global/react-logo.png';
import SmallScreen from './small-screen';
import TextButton from 'components/general/text-button';
import ViewApi from 'utilities/View';
import globalVars from 'utilities/globalVars';
import { useWindowSize } from 'utilities/useWindowSize';

const navbarNormalHeight = 70;

const RootNavigation = (props) => {
  const { page } = props;

  const [showPhoneMessage, setShowPhoneMessage] = useState(undefined);
  const [bypassPhoneMessage, setBypassPhoneMessage] = useState(false);
  const [previousScrollPos, setPreviousScrollPos] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(navbarNormalHeight);
  const [reload, setReload] = useState(0);
  const [archivePosition, setArchivePosition] = useState('left');
  const [previousUrl, setPreviousUrl] = useState(undefined);
  const [myUUID, setMyUUID] = useState(null);

  const previousScrollRef = useRef(previousScrollPos);
  const navbarHeightRef = useRef(navbarHeight);

  const location = useLocation();
  const navigate = useNavigate();
  const windowSize = useWindowSize();

  useEffect(() => {
    if (location.pathname === '/') navigate('/home');
    if (window.location.href !== previousUrl) {
      let uuid = myUUID;
      if (uuid === null) {
        uuid = crypto.randomUUID();
        setMyUUID(uuid);
      }
      ViewApi.add(
        window.location.href,
        uuid,
        window.innerWidth,
        window.innerHeight,
      );
      setPreviousUrl(window.location.href);
    }
  }, [location]);

  useEffect(() => {
    if (bypassPhoneMessage) {
      if (showPhoneMessage) setShowPhoneMessage(false);
    } else {
      setShowPhoneMessage(
        windowSize.width && windowSize.width < globalVars.minScreenWidth,
      );
    }

    if (windowSize.height < 500) {
      const bodyWrapper = document.getElementById('main-body-wrapper');
      if (bodyWrapper) {
        if (page !== 'Error') {
          bodyWrapper.addEventListener('scroll', handleScroll);

          return () => bodyWrapper.removeEventListener('scroll', handleScroll);
        }
      } else {
        setReload((reload) => reload + 1);
      }
    } else {
      navbarHeightRef.current = navbarNormalHeight;
      setNavbarHeight(navbarNormalHeight);
    }

    setArchivePosition(
      windowSize.width < globalVars.archiveRepositionWidth ? 'bottom' : 'left',
    );
  }, [windowSize, reload]);

  const handleScroll = () => {
    const bodyWrapper = document.getElementById('main-body-wrapper');
    const currentScrollY = bodyWrapper.scrollTop;
    const previousScrollY = previousScrollRef.current;

    let height = 0;
    if (currentScrollY > previousScrollY) {
      height = Math.max(
        navbarHeightRef.current + (previousScrollY - currentScrollY) / 2,
        10,
      );
    } else {
      height = Math.min(
        navbarHeightRef.current + (previousScrollY - currentScrollY) / 2,
        navbarNormalHeight,
      );
    }

    navbarHeightRef.current = height;
    setNavbarHeight(height);

    previousScrollRef.current = currentScrollY;
    setPreviousScrollPos(currentScrollY);
  };

  const clickContinue = () => {
    setBypassPhoneMessage(true);
    setShowPhoneMessage(false);
  };

  const showExtraItems =
    !location.pathname.includes('home') &&
    !location.pathname.includes('playground/');

  const clickLogo = () => {
    window
      .open('https://github.com/BradenLWeber/NumbersNStuff', '_blank')
      .focus();
  };

  if (showPhoneMessage) return <SmallScreen clickContinue={clickContinue} />;

  return (
    <Box
      id='ScreenWrapper'
      width='100%'
      minWidth={globalVars.minScreenWidth}
      height='100%'
      display='flex'
      flexDirection='column'
    >
      <Box
        id="'NavigationBar'"
        height={70}
        marginTop={navbarHeightRef.current - 70}
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
            <Typography ml={12} fontSize={40} minWidth={320} id='blog-title'>
              Numbers 'n Stuff
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
          flexDirection={archivePosition === 'left' ? 'row' : 'column-reverse'}
        >
          {showExtraItems && <PostTree />}
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
            <img
              src={ReactLogo}
              height={30}
              onClick={clickLogo}
              style={{ cursor: 'pointer' }}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

RootNavigation.propTypes = {
  page: PropTypes.string,
};

export default RootNavigation;
