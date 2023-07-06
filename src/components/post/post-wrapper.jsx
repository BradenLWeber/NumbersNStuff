import { Box } from "@mui/material";

const Wrapper = (props) => {
  const { children } = props;
  return (
    <Box height="100%" width="100%" p={10}>
      {children}
    </Box>
  );
};

export default Wrapper;
