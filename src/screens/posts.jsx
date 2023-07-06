import { Box, TextField } from "@mui/material";
import PostTree from "../components/molecules/post-tree";
import { posts } from "../posts/posts";
import PostCard from "../components/molecules/post-card";
import { useState } from "react";

const Posts = () => {
  const [filter, setFilter] = useState("");
  const [postList, setPostList] = useState(posts);

  const chipClick = (tag) => {
    setFilter(tag);
  };

  const updateFilter = (event) => {
    const value = (
      typeof event === "string" ? event : event.target.value
    ).toLowerCase();
    setPostList(
      posts.filter(
        (p) =>
          p.title.toLowerCase().includes(value) ||
          p.description.toLowerCase().includes(value) ||
          p.tags.some((tag) => tag.toLowerCase().includes(value))
      )
    );
    setFilter(value);
  };

  return (
    <Box display="flex" flexDirection="row">
      <PostTree></PostTree>
      <Box id="posts-wrapper" width="100%" height="100%" p={30}>
        <TextField
          variant="standard"
          label="Filter"
          sx={{ width: "100%", maxWidth: 1000 }}
          value={filter}
          onChange={(v) => updateFilter(v)}
        ></TextField>
        {postList.map((post) => (
          <PostCard
            post={post}
            chipClick={updateFilter}
            key={post.title}
          ></PostCard>
        ))}
      </Box>
    </Box>
  );
};

export default Posts;
