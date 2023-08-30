import { Box, MenuItem, TextField } from '@mui/material';

import PostCard from 'components/general/post-card';
import TextInput from 'components/general/text-input';
import _ from 'lodash';
import { posts } from 'posts/all-posts';
import { useState } from 'react';

const Posts = () => {
  const [filter, setFilter] = useState('');
  const [allPosts, setAllPosts] = useState([...posts].reverse());
  const [postList, setPostList] = useState([...posts].reverse());
  const [filterBy, setFilterBy] = useState('Newest first');

  const updateFilter = (v, event) => {
    event.stopPropagation();
    event.preventDefault();
    const value = v.toLowerCase();
    setPostList(
      allPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(value) ||
          p.description.toLowerCase().includes(value) ||
          p.tags.some((tag) => tag.toLowerCase().includes(value)),
      ),
    );
    setFilter(value);
  };

  const updateFilterBy = (value) => {
    const direction = value === 'Newest first' ? -1 : 1;

    setAllPosts(
      _.orderBy(
        allPosts,
        (item) => new Date(item.createdDate).getTime() * direction,
      ),
    );

    setPostList(
      _.orderBy(
        postList,
        (item) => new Date(item.createdDate).getTime() * direction,
      ),
    );
    setFilterBy(value);
  };

  return (
    <Box display='flex' flexDirection='row' width='100%'>
      <Box
        id='posts-wrapper'
        width='100%'
        height='100%'
        p={30}
        boxSizing='border-box'
      >
        <Box
          width='100%'
          maxWidth={1000}
          display='flex'
          flexDirection='row'
          mb={20}
        >
          <TextInput
            variant='standard'
            label='Filter'
            sx={{ flex: 1, minWidth: 0, mt: 8 }}
            backgroundColor='inherit'
            value={filter}
            onChange={(v, e) => updateFilter(v, e)}
          />
          <TextInput
            select
            label='filter by'
            value={filterBy}
            onChange={(e) => updateFilterBy(e)}
            sx={{ width: 220, ml: 30 }}
          >
            <MenuItem value='Newest first'>Newest first</MenuItem>
            <MenuItem value='Oldest first'>Oldest first</MenuItem>
          </TextInput>
        </Box>
        {postList.map((post) => (
          <PostCard post={post} chipClick={updateFilter} key={post.title} />
        ))}
      </Box>
    </Box>
  );
};

export default Posts;
