import { Box, Chip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { Color } from 'styles/Color';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { parseTitleToUrl } from 'utilities/functions';
import { useFont } from 'utilities/useFont';
import { useWindowSize } from 'utilities/useWindowSize';

const PostCard = (props) => {
  const { post, chipClick } = props;
  const { title, description, image, createdDate, tags } = post;

  const font = useFont();
  const windowSize = useWindowSize();
  let imageMaxWidth = 'unset';
  if (windowSize.width <= 1000 && !windowSize.isMobile) imageMaxWidth = 200;
  else if (windowSize.isSmallMobile) imageMaxWidth = '100%';
  else if (windowSize.isMobile) imageMaxWidth = 150;

  const [url, setUrl] = useState('/');

  useEffect(() => {
    setUrl('/post/' + parseTitleToUrl(title));
  }, []);

  return (
    <Link to={url} style={{ color: 'unset', textDecoration: 'none' }}>
      <Box
        id='post-card-wrapper'
        display='flex'
        flexDirection={windowSize.getVal('row', 'column')}
        height='fit-content'
        minHeight={220}
        maxWidth={1000}
        mb={20}
        boxSizing='border-box'
        padding='20px 20px 20px 20px'
        borderRadius={2}
        backgroundColor={Color.white}
        boxShadow={`2px 2px 5px ${Color.gray}`}
        sx={{
          transition: 'box-shadow 0.5s',
          cursor: 'pointer',
          '&:hover': {
            boxShadow: '2px 2px 10px ' + Color.gray,
          },
        }}
      >
        <Box
          flex={1}
          minWidth={0}
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
        >
          <Box>
            <Typography fontSize={font.title} lineHeight={1} mr={20}>
              {title}
            </Typography>
            <Typography fontSize={font.body} mt={10} mr={10} color={Color.gray}>
              {description}
            </Typography>
          </Box>
          <Box
            id='post-card-chip-wrapper'
            display='flex'
            flexDirection='row'
            mt={20}
            flexWrap='wrap'
            rowGap={10}
          >
            {tags.map((tag) => {
              const isGreen = tag === 'reader response';
              return (
                <Chip
                  label={tag}
                  key={tag}
                  sx={{
                    mr: 10,
                    backgroundColor: isGreen ? Color.primary : Color.secondary,
                    '&:hover': {
                      backgroundColor: isGreen
                        ? Color.primaryDark
                        : Color.secondaryDark,
                    },
                  }}
                  onClick={(e) => chipClick(tag, e)}
                />
              );
            })}
          </Box>
        </Box>
        <Box
          width={windowSize.getVal('fit-content', '100%')}
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          alignItems={windowSize.getVal('flex-end', 'flex-start')}
          mt={windowSize.getVal(0, 20)}
        >
          <img
            src={image.src}
            height={imageMaxWidth === 'unset' ? image.height || 150 : 'auto'}
            width={image.width || 'auto'}
            alt='Post icon'
            style={{ objectFit: 'cover', maxWidth: imageMaxWidth }}
          />
          <Typography
            color={Color.midGray}
            mb={-5}
            mt={windowSize.getVal(0, 10)}
          >
            {createdDate}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.shape({
      src: PropTypes.string,
      height: PropTypes.number,
      width: PropTypes.number,
    }),
    createdDate: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  chipClick: PropTypes.func,
};

export default PostCard;
