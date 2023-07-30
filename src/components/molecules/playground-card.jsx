import { Box, Typography } from '@mui/material';
import Image from 'components/post/post-image';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Color } from 'styles/Color';
import { parseTitleToUrl } from 'utilities/functions';

const PlaygroundCard = (props) => {
  const { title, image, mb } = props;
  const navigate = useNavigate();

  const openPost = () => {
    navigate('/playground/' + parseTitleToUrl(title));
  };

  return (
    <Box
      height={260}
      width='fit-content'
      p={10}
      mb={mb || 0}
      backgroundColor={Color.white}
      border={'5px solid ' + Color.primary}
      borderRadius={3}
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      sx={{
        '&:hover': {
          border: '5px solid ' + Color.tertriary,
        },
        transition: 'border 0.5s',
        cursor: 'pointer',
      }}
      onClick={openPost}
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
        backgroundColor={Color.lightGray}
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
    width: PropTypes.string,
  }),
  mb: PropTypes.number,
};

export default PlaygroundCard;
