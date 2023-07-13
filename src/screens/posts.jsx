import { Box, MenuItem, TextField } from '@mui/material';
import { posts } from 'posts/all-posts';
import PostCard from 'components/molecules/post-card';
import { useState } from 'react';
import _ from 'lodash';

const Posts = () => {
  const [filter, setFilter] = useState('');
  const [postList, setPostList] = useState([...posts].reverse());
  const [filterBy, setFilterBy] = useState('Newest first');

  const updateFilter = (event) => {
    const value = (
      typeof event === 'string' ? event : event.target.value
    ).toLowerCase();
    setPostList(
      posts.filter(
        (p) =>
          p.title.toLowerCase().includes(value) ||
          p.description.toLowerCase().includes(value) ||
          p.tags.some((tag) => tag.toLowerCase().includes(value)),
      ),
    );
    setFilter(value);
  };

  const updateFilterBy = (event) => {
    const value = event.target.value;
    const direction = value === 'Newest first' ? -1 : 1;

    setPostList(
      _.orderBy(
        posts,
        (item) => new Date(item.createdDate).getTime() * direction,
      ),
    );
    setFilterBy(value);
  };

  return (
    <Box display='flex' flexDirection='row'>
      <Box id='posts-wrapper' width='100%' height='100%' p={30}>
        <Box width='100%' maxWidth={1000} display='flex' flexDirection='row'>
          <TextField
            variant='standard'
            label='Filter'
            sx={{ flex: 1, minWidth: 0 }}
            value={filter}
            onChange={(v) => updateFilter(v)}
          />
          <TextField
            select
            label='filter by'
            value={filterBy}
            onChange={(e) => updateFilterBy(e)}
            sx={{ width: 220, ml: 30 }}
          >
            <MenuItem value='Newest first'>Newest first</MenuItem>
            <MenuItem value='Oldest first'>Oldest first</MenuItem>
          </TextField>
        </Box>
        {postList.map((post) => (
          <PostCard post={post} chipClick={updateFilter} key={post.title} />
        ))}
      </Box>
    </Box>
  );
};

export default Posts;
