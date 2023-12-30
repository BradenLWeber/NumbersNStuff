import { Box, IconButton, Tooltip, Typography } from '@mui/material';

import Alert from 'components/general/alert';
import { Color } from 'styles/Color';
import CommentApi from 'utilities/Comment';
import FlagIcon from '@mui/icons-material/Flag';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useState } from 'react';

const Comment = (props) => {
  const { date, name, text, post } = props;

  const [flagged, setFlagged] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(false);

  const handleCloseTooltip = () => {
    setOpenTooltip(false);
  };

  const reportComment = () => {
    setFlagged(true);
    CommentApi.flag(name, post, date);
    setOpenTooltip(true);
  };

  return (
    <>
      <Box id='comment-wrapper' display='flex' flexDirection='column'>
        <Box display='flex' flexDirection='row' alignItems='center'>
          <Typography fontWeight='bold'>{name}</Typography>
          <Typography ml={10} color={Color.gray}>
            {dayjs(date).format('DD/MM/YY HH:mm A')}
          </Typography>
          <Tooltip title='Flag for moderator'>
            <IconButton sx={{ ml: 10 }} onClick={reportComment}>
              <FlagIcon fontSize='small' sx={{ color: flagged ? 'red' : '' }} />
            </IconButton>
          </Tooltip>
        </Box>
        <Typography>{text}</Typography>
      </Box>
      <Alert open={openTooltip} onClose={handleCloseTooltip}>
        Message flagged for moderators.
      </Alert>
    </>
  );
};

Comment.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  name: PropTypes.string,
  text: PropTypes.string,
};

export default Comment;
