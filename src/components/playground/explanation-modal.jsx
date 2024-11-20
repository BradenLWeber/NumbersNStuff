import { Box, Modal } from '@mui/material';

import { Color } from 'styles/Color';
import PropTypes from 'prop-types';
import Title from 'components/post/post-title';
import { useWindowSize } from 'utilities/useWindowSize';

const ExplanationModal = (props) => {
  const { explanation, open, onClose } = props;

  const windowSize = useWindowSize();

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        id='modal-wrapper'
        height='fit-content'
        maxHeight='calc(100vh - 100px)'
        position='absolute'
        top='50%'
        left='50%'
        width='90vw'
        maxWidth={600}
        boxSizing='border-box'
        bgcolor='white'
        boxShadow={24}
        pl={20}
        pt={0}
        pb={10}
        borderRadius={3}
        display='flex'
        flexDirection='column'
        sx={{ transform: 'translate(-50%, -50%)' }}
      >
        <Box
          id='modal-backdrop'
          position='absolute'
          top={0}
          width='100%'
          height={windowSize.getVal(88, 76)}
          backgroundColor={Color.secondaryLight}
          zIndex={1}
          ml={-20}
          borderRadius='12px 12px 0px 0px'
        />
        <Box
          position='relative'
          zIndex={100}
          id='modal-title-wrapper'
          height={windowSize.getVal(100, 76)}
        >
          <Title>Playground Rules</Title>
        </Box>
        <Box
          id='modal-inner-wrapper'
          height='100%'
          position='relative'
          flex={1}
          minHeight={0}
          pr={20}
          pb={10}
          sx={{
            overflowY: 'auto',
            overflowX: 'hidden',
          }}
        >
          {explanation}
        </Box>
      </Box>
    </Modal>
  );
};

ExplanationModal.propTypes = {
  explanation: PropTypes.node,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

export default ExplanationModal;
