import { Box, ButtonBase, Typography } from '@mui/material';
import { Color } from 'styles/Color';
import ChalkBrain from 'assets/global/ChalkBrain.png';
import TextButton from 'components/atoms/text-button';
import Home from './home';
import Posts from './posts';
import About from './about';
import PropTypes from 'prop-types';
import PostTree from 'components/molecules/post-tree';
import { Link, useParams } from 'react-router-dom';
import Post from './post';

const RootNavigation = (props) => {
  const { showArchive, page } = props;
  const { year, month, day } = useParams();

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
        <Link to='/' style={{ color: 'unset' }}>
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
        {showArchive && <PostTree />}
        {page === 'Home' && <Home />}
        {page === 'Posts' && <Posts />}
        {page === 'Post' && <Post year={year} month={month} day={day} />}
        {page === 'About' && <About />}
        {page === 'Playground' && 'Playground'}
      </Box>
    </Box>
  );
};

RootNavigation.propTypes = {
  showArchive: PropTypes.bool,
  page: PropTypes.string,
};

export default RootNavigation;
