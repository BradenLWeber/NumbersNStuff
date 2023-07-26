import { Box } from '@mui/material';

const PlaygroundWrapper = (props) => {
  const { children } = props;

  return (
    <Box
      width='100%'
      display='flex'
      flex={1}
      minHeight={0}
      backgroundColor='white'
      p={20}
      overflow='auto'
    >
      {children}
    </Box>
  );
};

export default PlaygroundWrapper;
