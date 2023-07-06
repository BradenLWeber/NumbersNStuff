import { Box, Chip, Typography } from "@mui/material";
import { Font } from "../../styles/Font";
import PropTypes from "prop-types";
import { Color } from "../../styles/Color";

const PostCard = (props) => {
  const { post, chipClick } = props;
  const { title, description, image, createdDate, tags } = post;

  return (
    <Box
      id="post-card-wrapper"
      display="flex"
      flexDirection="row"
      height={220}
      width="100%"
      maxWidth={1000}
      mr={10}
      mb={20}
      padding="20px 20px 20px 0px"
      boxSizing="border-box"
    >
      <Box
        flex={1}
        minWidth={0}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            fontSize={Font.size.title}
            sx={{
              ":hover": {
                color: Color.tertriary,
                cursor: "pointer",
              },
            }}
          >
            {title}
          </Typography>
          <Typography fontSize={Font.size.body} mt={10}>
            {description}
          </Typography>
        </Box>
        <Box display="flex" flexDirection="row">
          {tags.map((tag) => (
            <Chip
              label={tag}
              key={tag}
              sx={{
                mr: 10,
                backgroundColor: Color.secondary,
              }}
              onClick={() => chipClick(tag)}
            ></Chip>
          ))}
        </Box>
      </Box>
      <Box
        width="fit-content"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <img src={image} height={150}></img>
        <Typography>{createdDate}</Typography>
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
