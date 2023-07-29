import { Box, IconButton, Modal, Tooltip } from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArticleIcon from '@mui/icons-material/Article';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Color } from 'styles/Color';
import { Link } from 'react-router-dom';

const PlaygroundWrapper = (props) => {
  const { children, explanation, postName } = props;
  const [helpModalOpen, setHelpModalOpen] = useState(false);

  return (
    <Box
      width='100%'
      display='flex'
      flex={1}
      minHeight={0}
      backgroundColor='white'
      p={20}
      overflow='auto'
      position='relative'
    >
      <Tooltip title='Help'>
        <IconButton
          sx={{ position: 'absolute', right: 20, top: 20 }}
          onClick={() => setHelpModalOpen(true)}
        >
          <HelpOutlineIcon />
        </IconButton>
      </Tooltip>
      <Link to={'/post/' + postName}>
        <Tooltip title='Post'>
          <IconButton sx={{ position: 'absolute', right: 60, top: 20 }}>
            <ArticleIcon />
          </IconButton>
        </Tooltip>
      </Link>
      <Modal open={helpModalOpen} onClose={() => setHelpModalOpen(false)}>
        <Box
          position='absolute'
          top='50%'
          left='50%'
          width='90vw'
          maxWidth={600}
          boxSizing='border-box'
          bgcolor='white'
          boxShadow={24}
          px={20}
          pt={0}
          pb={10}
          borderRadius={4}
          border={`10px solid ${Color.tertriary}`}
          sx={{ transform: 'translate(-50%, -50%)' }}
        >
          {explanation}
        </Box>
      </Modal>
      {children}
    </Box>
  );
};

PlaygroundWrapper.propTypes = {
  explanation: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  postName: PropTypes.string,
};

export default PlaygroundWrapper;
