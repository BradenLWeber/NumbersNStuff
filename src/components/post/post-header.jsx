import { Typography } from "@mui/material";
import { Font } from "../../styles/Font";

const PostHeader = (props) => {
  const { children } = props;

  return (
    <Typography
      sx={{ fontSize: Font.size.header, marginY: 5, fontWeight: "bold" }}
    >
      {children}
    </Typography>
  );
};

export default PostHeader;
