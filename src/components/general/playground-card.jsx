import { Box, Typography } from '@mui/material';

import { Color } from 'styles/Color';
import Image from 'components/post/post-image';
import PropTypes from 'prop-types';
import { parseTitleToUrl } from 'utilities/functions';
import { useNavigate } from 'react-router-dom';
import { useWindowSize } from 'utilities/useWindowSize';

const PlaygroundCard = (props) => {
  const { title, image, mb } = props;

  const navigate = useNavigate();
  const windowSize = useWindowSize();

  const openPost = () => {
    navigate('/playground/' + parseTitleToUrl(title));
  };

  return (
    <Box
      id='playground-card-wrapper'
      height='fit-content'
      width={windowSize.isSmallMobile ? '100%' : 'fit-content'}
      maxWidth='100%'
      mb={mb || 0}
      mr={windowSize.isSmallMobile ? 0 : 10}
      backgroundColor={Color.white}
      borderRadius={3}
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      alignItems='center'
      sx={{
        transition: 'box-shadow 0.5s',
        cursor: 'pointer',
        boxShadow: `2px 2px 5px ${Color.gray}`,
        '&:hover': {
          boxShadow: `2px 2px 10px ${Color.gray}`,
        },
      }}
      onClick={openPost}
    >
      <Image
        mt={0}
        mb={0}
        src={image.src}
        height={image.height}
        width={image.width}
        maxWidth='100%'
        style={{ maxWidth: 'unset' }}
        borderRadius='7px 7px 0px 0px'
      />
      <Typography
        fontSize={20}
        textAlign='center'
        backgroundColor={Color.primaryLight}
        sx={{
          transition: 'background-color 0.5s',
          cursor: 'pointer',
        }}
        width='100%'
        boxSizing='border-box'
        color={Color.black}
        borderRadius='0 0 7px 7px'
        py={5}
        px={10}
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
