import { Box } from '@mui/material';

const Wrapper = (props) => {
  const { children } = props;
  return (
    <Box
      width='100%'
      p={10}
      boxSizing='border-box'
      pr={50}
      pb={25}
      maxWidth={1000}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
