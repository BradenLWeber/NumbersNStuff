import { Box, Chip, Typography } from '@mui/material';
import { Font } from 'styles/Font';
import PropTypes from 'prop-types';
import { Color } from 'styles/Color';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PostCard = (props) => {
  const { post, chipClick } = props;
  const { title, description, image, createdDate, tags } = post;

  const [url, setUrl] = useState('/');

  useEffect(() => {
    setUrl('/post/' + title.toLowerCase().split(' ').join('-'));
  }, []);

  return (
    <Box
      id='post-card-wrapper'
      display='flex'
      flexDirection='row'
      height={220}
      width='100%'
      maxWidth={1000}
      mr={10}
      mb={20}
      padding='20px 20px 20px 0px'
      boxSizing='border-box'
    >
      <Box
        flex={1}
        minWidth={0}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
      >
        <Box>
          <Link to={url} style={{ color: 'unset', textDecoration: 'none' }}>
            <Typography
              fontSize={Font.size.title}
              sx={{
                ':hover': {
                  color: Color.tertriary,
                  cursor: 'pointer',
                },
              }}
            >
              {title}
            </Typography>
          </Link>
          <Typography fontSize={Font.size.body} mt={10}>
            {description}
          </Typography>
        </Box>
        <Box display='flex' flexDirection='row'>
          {tags.map((tag) => (
            <Chip
              label={tag}
              key={tag}
              sx={{
                mr: 10,
                backgroundColor: Color.secondary,
              }}
              onClick={() => chipClick(tag)}
            />
          ))}
        </Box>
      </Box>
      <Box
        width='fit-content'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        alignItems='flex-end'
      >
        <img src={image} height={150} alt={'Post icon'} />
        <Typography color={Color.gray}>{createdDate}</Typography>
      </Box>
    </Box>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    createdDate: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }),
  chipClick: PropTypes.func,
};

export default PostCard;
