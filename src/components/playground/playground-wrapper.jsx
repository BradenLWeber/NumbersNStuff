import { Box, IconButton, Tooltip } from '@mui/material';

import ArticleIcon from '@mui/icons-material/Article';
import ExplanationModal from './explanation-modal';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';

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
      overflowY='auto'
      overflowX='hidden'
      position='relative'
      flexDirection='column'
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
      <ExplanationModal
        open={helpModalOpen}
        onClose={() => setHelpModalOpen(false)}
        explanation={explanation}
      />
      {children}
    </Box>
  );
};

PlaygroundWrapper.propTypes = {
  explanation: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  postName: PropTypes.string,
};

export default PlaygroundWrapper;
