import { Box, Chip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import { Color } from 'styles/Color';
import { Font } from 'styles/Font';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { parseTitleToUrl } from 'utilities/functions';
import { useWindowSize } from '@uidotdev/usehooks';

const PostCard = (props) => {
  const { post, chipClick } = props;
  const { title, description, image, createdDate, tags } = post;

  const windowSize = useWindowSize();
  const imageMaxWidth =
    windowSize.width > 1000 ? 'unset' : windowSize.width > 800 ? 200 : 150;

  const [url, setUrl] = useState('/');

  useEffect(() => {
    setUrl('/post/' + parseTitleToUrl(title));
  }, []);

  return (
    <Link to={url} style={{ color: 'unset', textDecoration: 'none' }}>
      <Box
        id='post-card-wrapper'
        display='flex'
        flexDirection='row'
        height='fit-content'
        minHeight={220}
        maxWidth={1000}
        minWidth={450}
        mr={10}
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
            <Typography fontSize={Font.size.title} lineHeight={1} mr={20}>
              {title}
            </Typography>
            <Typography
              fontSize={Font.size.body}
              mt={10}
              mr={10}
              color={Color.gray}
            >
              {description}
            </Typography>
          </Box>
          <Box display='flex' flexDirection='row' mt={20}>
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
          width='fit-content'
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          alignItems='flex-end'
        >
          <img
            src={image.src}
            height={imageMaxWidth === 'unset' ? image.height || 150 : 'auto'}
            width={image.width || 'auto'}
            alt='Post icon'
            style={{ objectFit: 'cover', maxWidth: imageMaxWidth }}
          />
          <Typography color={Color.midGray} mb={-5}>
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
