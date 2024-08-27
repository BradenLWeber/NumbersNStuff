import { Box, IconButton, Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';

import ArticleIcon from '@mui/icons-material/Article';
import ExplanationModal from './explanation-modal';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { parseTitleToUrl } from 'utilities/functions';

const PlaygroundWrapper = (props) => {
  const { children, explanation, postTitle } = props;
  const [helpModalOpen, setHelpModalOpen] = useState(false);
  const [postUrl, setPostUrl] = useState('');

  useEffect(() => {
    setPostUrl('/post/' + parseTitleToUrl(postTitle));
  }, []);

  return (
    <Box
      id='playground-wrapper'
      width='100%'
      display='flex'
      flex={1}
      minHeight={0}
      backgroundColor='white'
      p={20}
      overflowX='hidden'
      position='relative'
      flexDirection='column'
      boxSizing='border-box'
      sx={{ overflowY: 'auto' }}
    >
      <Tooltip title='Help'>
        <IconButton
          sx={{ position: 'absolute', right: 20, top: 20 }}
          onClick={() => setHelpModalOpen(true)}
        >
          <HelpOutlineIcon />
        </IconButton>
      </Tooltip>
      <Link to={postUrl}>
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
  postTitle: PropTypes.string,
};

export default PlaygroundWrapper;
