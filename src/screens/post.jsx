import { Box, Stack } from '@mui/material';
import { useEffect, useState } from 'react';

import Body from 'components/post/post-body';
import Comment from 'components/post/post-comment';
import CommentApi from 'utilities/Comment';
import Divider from 'components/post/post-divider';
import FilledButton from 'components/general/filled-button';
import TextInput from 'components/general/text-input';
import Title from 'components/post/post-title';
import { parseTitleToUrl } from 'utilities/functions';
import { posts } from 'posts/all-posts';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { title } = useParams();

  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [submitCommentText, setSubmitCommentText] = useState('Submit');
  const [submitCommentDisabled, setSubmitCommentDisabled] = useState(true);

  useEffect(() => {
    const allPosts = posts;
    setPost(
      allPosts.filter((post) => {
        return parseTitleToUrl(post.title) === title;
      })[0],
    );
    CommentApi.getAll(title).then((res) => {
      setComments(res || []);
    });
  }, [title]);

  const submitComment = () => {
    if (!comment) return;

    setSubmitCommentDisabled(true);
    setSubmitCommentText('Submitting...');
    CommentApi.add(comment, name, title).then(() => {
      setSubmitCommentText('Submitted!');
      setComments([...comments, { text: comment, name, date: new Date() }]);
      setComment('');
      setName('');
    });
  };

  const nameChange = (v) => {
    setName(v);
    if (v && comment) {
      setSubmitCommentText('Submit');
      setSubmitCommentDisabled(false);
    } else {
      setSubmitCommentDisabled(true);
    }
  };

  const commentChange = (v) => {
    setComment(v);
    if (v && name) {
      setSubmitCommentText('Submit');
      setSubmitCommentDisabled(false);
    } else {
      setSubmitCommentDisabled(true);
    }
  };

  return (
    <Box id='post-wrapper' mt={10} flex={1} minWidth={0}>
      {post.element}
      <Divider />
      <Box p={10} mt={0} mb={50} display='flex' flexDirection='column'>
        <Title>Comments</Title>
        <Stack direction='column' spacing={20} mb={40}>
          {comments?.map((c) => (
            <Comment
              date={c.date}
              name={c.name}
              text={c.text}
              post={title}
              key={c.name + c.date}
            />
          ))}
        </Stack>
        <Body mb={10}>Leave a comment</Body>
        <TextInput
          placeholder='Name'
          value={name}
          onChange={nameChange}
          size='small'
          sx={{ width: 200, mb: 10 }}
        />
        <TextInput
          placeholder='Comment'
          value={comment}
          onChange={commentChange}
          multiline
          rows={4}
          sx={{ mr: 50, maxWidth: 1000 }}
        />
        <FilledButton
          click={submitComment}
          disabled={submitCommentDisabled}
          sx={{ mt: 10, width: 200 }}
        >
          {submitCommentText}
        </FilledButton>
      </Box>
    </Box>
  );
};

export default Post;
