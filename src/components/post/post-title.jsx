import { Typography } from "@mui/material";
import { Font } from "../../styles/Font";

const PostTitle = (props) => {
  const { children } = props;

  return (
    <Typography fontSize={Font.size.title} sx={{ marginY: 10 }}>
      {children}
    </Typography>
  );
};

export default PostTitle;
