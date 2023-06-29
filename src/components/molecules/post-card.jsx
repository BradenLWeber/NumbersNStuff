import { Box, Typography } from "@mui/material";
import { Font } from "../../styles/Font";
import PropTypes from "prop-types";

const PostCard = (props) => {
  const { post } = props;
  const { title, description, image } = post;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: 300,
        width: "100%",
        mx: 10,
      }}
    >
      <img src={image} height={300}></img>
      <Box>
        <Typography sx={{ fontSize: Font.size.header }}>{title}</Typography>
        <Typography sx={{ fontSize: Font.size.body }}>{description}</Typography>
      </Box>
    </Box>
  );
};

PostCard.propTypes = {
  post: PropTypes.object({
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
  }),
};

export default PostCard;
