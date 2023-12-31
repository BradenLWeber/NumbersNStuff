import { Box, Typography } from '@mui/material';

import BlackBoard from 'assets/global/blackboard.jpg';
import { Color } from 'styles/Color.jsx';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@uidotdev/usehooks';

const sideMargin = 250;
const boxHeight = 220;

const Home = () => {
  const isSmallDevice = useMediaQuery('only screen and (max-width : 868px)');
  const isMediumDevice = useMediaQuery(
    'only screen and (min-width : 868.1px) and (max-width : 992px)',
  );
  const isLargeDevice = useMediaQuery(
    'only screen and (min-width : 992.1px) and (max-width : 1200px)',
  );

  const getTitleSize = () => {
    if (isSmallDevice) return 30;
    if (isMediumDevice) return 34;
    if (isLargeDevice) return 38;
    return 42;
  };

  const getNameSize = () => {
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
    return (
      <Box
        id='play-around'
        mt={100}
        height={boxHeight}
        backgroundColor='white'
        width={`calc(100% - ${sideMargin * margin}px)`}
        minWidth={530}
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
          id='explore-posts-colored-area-border'
          borderBottom={`${boxHeight}px solid transparent`}
          borderLeft={`120px solid ${color}`}
          position='absolute'
          right={sideMargin * margin + 380}
        />
        <Box
          id='explore-posts-colored-area-rectangle'
          height={boxHeight}
          width={`calc(100% - ${sideMargin * margin + 500}px)`}
          position='absolute'
          left={0}
          backgroundColor={color}
        />
        <Box
          height='100%'
          padding='26px 36px'
          boxSizing='border-box'
          justifyContent='space-between'
          display='flex'
          flexDirection='column'
          width={450}
          position='relative'
          right={0}
        >
          <Link to={url} style={{ textDecoration: 'none' }}>
            <Typography
              fontSize={34}
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
          <Typography fontSize={22} fontWeight={300} textAlign='right'>
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
        overflow='auto'
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
            flexDirection='row'
            justifyContent='space-between'
            p={60}
            pb={0}
            alignItems='flex-end'
          >
            <Typography
              sx={{
                fontSize: getTitleSize(),
                fontFamily: 'Fredericka the Great',
                color: 'white',
                mr: 30,
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
                Dive into a world of mathematical possibilities and, above all,{' '}
                <b style={{ fontWeight: 500 }}>curiosity</b>
              </>
            }
            color={Color.tertriaryDark}
            margin={3}
            url='/posts'
          />
          <Banner
            text1='Play Around'
            text2='Try the interactive playgrounds and bring mathematical concepts to life'
            color={Color.secondaryDark}
            margin={2}
            url='/playgrounds'
          />
          <Banner
            text1='Contact Me'
            text2='Help me take these mathematical concepts to the next level'
            color={Color.primaryDark}
            margin={1}
            url='/about'
          />
          <Box id='bottom-margin' mt={100} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
