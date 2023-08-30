import { IconButton, Slide, Snackbar } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import { Color } from 'styles/Color';

function SlideTransition(props) {
  return <Slide {...props} direction='up' />;
}

const Alert = (props) => {
  const { open, onClose, children } = props;

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') return;
    onClose(event, reason);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={children}
      TransitionComponent={SlideTransition}
      ContentProps={{
        sx: {
          backgroundColor: Color.primaryDark,
        },
      }}
      action={
        <IconButton size='small' color='inherit' onClick={handleClose}>
          <CloseIcon fontSize='small' />
        </IconButton>
      }
    />
  );
};

export default Alert;
