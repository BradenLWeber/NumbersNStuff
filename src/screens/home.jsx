import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import BlackBoard from 'assets/global/blackboard.jpg';
import { Color } from 'styles/Color.jsx';
import { Link } from 'react-router-dom';
import globalVars from 'utilities/globalVars';
import { useMediaQuery } from '@uidotdev/usehooks';
import { useWindowSize } from 'utilities/useWindowSize';

const sideMargin = 250;
const boxHeight = 220;
const minBannerWidth = 530;

const Home = () => {
  // eslint-disable-next-line
  const [key, setKey] = useState(1);

  const windowSize = useWindowSize();

  const isSmallDevice = useMediaQuery('only screen and (max-width : 868px)');
  const isMediumDevice = useMediaQuery(
    'only screen and (min-width : 868.1px) and (max-width : 992px)',
  );
  const isLargeDevice = useMediaQuery(
    'only screen and (min-width : 992.1px) and (max-width : 1200px)',
  );

  useEffect(() => {
    setKey((k) => (k + 1) % 100);
  }, [windowSize]);

  const getTitleSize = () => {
    if (windowSize.isSmallMobile) return 26;
    if (isSmallDevice) return 30;
    if (isMediumDevice) return 34;
    if (isLargeDevice) return 38;
    return 42;
  };

  const getNameSize = () => {
    if (windowSize.isSmallMobile) return 16;
    if (isSmallDevice) return 18;
    if (isMediumDevice) return 20;
    if (isLargeDevice) return 21;
    return 22;
  };

  const getNameMargin = () => {
    if (isSmallDevice) return 2;
    if (isMediumDevice) return 4;
    if (isLargeDevice) return 5;
    return 6;
  };

  const Banner = (props) => {
    const { text1, text2, margin, color, url } = props;
    // If it's a wide screen, the banners can pop out a bit
    const isWideScreen = minBannerWidth + sideMargin * 3 <= window.innerWidth;
    const marginModifier = isWideScreen
      ? 1
      : Math.max(
          (window.innerWidth - minBannerWidth - sideMargin) / (2 * sideMargin),
          0,
        );
    const offScreen =
      sideMargin * (margin * marginModifier + 3) >
      Math.max(window.innerWidth, globalVars.mobileScreenWidth);
    const widthExtendsScreen = window.innerWidth < globalVars.mobileScreenWidth;
    const triangleRight = offScreen
      ? widthExtendsScreen
        ? globalVars.mobileScreenWidth - sideMargin + 130
        : window.innerWidth - sideMargin + 130
      : sideMargin * (margin * marginModifier + 1) + 381;
    return (
      <Box
        id='play-around'
        mt={100}
        height={boxHeight}
        backgroundColor='white'
        width={`calc(100% - ${
          windowSize.isMobile
            ? 70
            : sideMargin + sideMargin * margin * marginModifier
        }px)`}
        minWidth={windowSize.getVal(530, 'unset')}
        maxWidth={windowSize.getVal('unset', 500)}
        borderRadius='0px 10px 10px 0px'
        display='flex'
        justifyContent='flex-end'
        sx={{
          transition: 'box-shadow 0.25s',
          '&:hover': {
            boxShadow: '0px 0px 20px ' + Color.black,
          },
        }}
      >
        <Box
          id='colored-area-border'
          borderBottom={`${boxHeight}px solid transparent`}
          borderLeft={`120px solid ${color}`}
          position='absolute'
          right={triangleRight}
        />
        <Box
          id='colored-area-rectangle'
          height={boxHeight}
          width={`calc(100% - ${
            sideMargin + sideMargin * margin * marginModifier + 500
          }px)`}
          position='absolute'
          left={0}
          backgroundColor={color}
        />
        <Box
          id='banner-text-wrapper'
          height='100%'
          padding='26px 36px'
          paddingLeft={windowSize.width < 350 ? 15 : 36}
          paddingRight={windowSize.width < 350 ? 30 : 36}
          boxSizing='border-box'
          justifyContent='space-between'
          display='flex'
          flexDirection='column'
          width={450}
          position='relative'
          right={0}
          borderLeft={
            windowSize.width < 520
              ? `${windowSize.width < 350 ? 15 : 30}px solid ${color}`
              : 'unset'
          }
        >
          <Link to={url} style={{ textDecoration: 'none' }}>
            <Typography
              fontSize={windowSize.getVal(34, 34, 28)}
              fontWeight={300}
              color={Color.gray}
              textAlign='right'
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  color: color,
                },
              }}
            >
              {text1}
            </Typography>
          </Link>
          <Typography
            fontSize={windowSize.getVal(22, 22, 18)}
            fontWeight={300}
            textAlign='right'
          >
            {text2}
          </Typography>
        </Box>
      </Box>
    );
  };

  return (
    <Box
      id='home-wrapper'
      height='100%'
      width='100%'
      position='relative'
      overflow='auto'
    >
      <img
        alt='Chalk drawing of a brain'
        src={BlackBoard}
        width='100%'
        height='100%'
        style={{ position: 'absolute', zIndex: 0 }}
      />
      <Box
        id='home-content-wrapper'
        height='100%'
        position='relative'
        zIndex={1}
      >
        <Box
          id='home-content'
          height='100%'
          width='100%'
          zIndex={10}
          position='relative'
        >
          <Box
            id='title-bar'
            display='flex'
            flexDirection={windowSize.isMobile ? 'column' : 'row'}
            justifyContent='space-between'
            p={windowSize.isMobile ? 40 : 60}
            pb={0}
            alignItems={windowSize.isMobile ? 'flex-start' : 'flex-end'}
            rowGap={20}
          >
            <Typography
              sx={{
                fontSize: getTitleSize(),
                fontFamily: 'Fredericka the Great',
                color: 'white',
                mr: 30,
                maxWidth: windowSize.width < 512 ? 250 : 'unset',
              }}
            >
              Mathematics for the addicts
            </Typography>
            <Typography
              sx={{
                fontSize: getNameSize(),
                color: 'white',
                mb: getNameMargin(),
                fontWeight: 200,
              }}
            >
              Braden Weber
            </Typography>
          </Box>
          <Banner
            text1='Explore Posts'
            text2={
              <>
                Dive into a world of mathematical possibilities and,
                above&nbsp;all,&nbsp;
                <b style={{ fontWeight: 500 }}>curiosity</b>
              </>
            }
            color={Color.tertiaryDark}
            margin={2}
            url='/posts'
          />
          <Banner
            text1='Play Around'
            text2='Try the interactive playgrounds and bring mathematical concepts&nbsp;to&nbsp;life'
            color={Color.secondaryDark}
            margin={1}
            url='/playgrounds'
          />
          <Banner
            text1='Contact Me'
            text2='Help me take these mathematical concepts to the next&nbsp;level'
            color={Color.primaryDark}
            margin={0}
            url='/about'
          />
          <Box id='bottom-margin' mt={100} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
