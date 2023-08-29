import { Box, Typography } from '@mui/material';

import { Color } from 'styles/Color';
import Image from 'components/post/post-image';
import PropTypes from 'prop-types';
import { parseTitleToUrl } from 'utilities/functions';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const PlaygroundCard = (props) => {
  const { title, image, mb } = props;
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);

  const openPost = () => {
    navigate('/playground/' + parseTitleToUrl(title));
  };

  return (
    <Box
      id='playground-card-wrappers'
      height={260}
      width='fit-content'
      p={10}
      mb={mb || 0}
      backgroundColor={Color.white}
      border={`5px solid ${hover ? Color.secondary : Color.primary}`}
      borderRadius={3}
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      sx={{
        transition: 'border 0.4s',
        cursor: 'pointer',
      }}
      onClick={openPost}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={image.src}
        height={image.height}
        width={image.width}
        mt={0}
        keepRatio={true}
      />
      <Typography
        fontSize={20}
        textAlign='center'
        backgroundColor={hover ? Color.secondaryLight : Color.primaryLight}
        sx={{
          transition: 'background-color 0.4s',
          cursor: 'pointer',
        }}
        color={Color.black}
        m={-10}
        borderRadius='0 0 7px 7px'
        py={10}
      >
        {title}
      </Typography>
    </Box>
  );
};

PlaygroundCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
  }),
  mb: PropTypes.number,
};

export default PlaygroundCard;
