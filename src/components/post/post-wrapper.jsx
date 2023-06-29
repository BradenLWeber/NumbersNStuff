import { Box } from "@mui/material";

export default PostWrapper = (props) => {
  const { children } = props;
  return (
    <Box sx={{ height: "100%", width: "100%", padding: 10 }}>{children}</Box>
  );
};
