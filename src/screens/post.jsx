import { Box } from '@mui/material';
import { posts } from 'posts/all-posts';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { parseTitleToUrl } from 'utilities/functions';

const Post = () => {
  const { title } = useParams();

  const [post, setPost] = useState({});

  useEffect(() => {
    const allPosts = posts;
    setPost(
      allPosts.filter((post) => {
        return parseTitleToUrl(post.title) === title;
      })[0],
    );
  }, [title]);

  return (
    <Box id='post-wrapper' mt={10}>
      {post.post}
    </Box>
  );
};

export default Post;
