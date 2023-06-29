import { Typography } from "@mui/material";
import { Font } from "../../styles/Font";

const PostBody = (props) => {
  const { children } = props;

  return (
    <Typography sx={{ fontSize: Font.size.body, marginBottom: 10 }}>
      {children}
    </Typography>
  );
};

export default PostBody;
