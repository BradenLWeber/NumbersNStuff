import { Box, Typography } from '@mui/material';

import { Color } from 'styles/Color';
import PropTypes from 'prop-types';
import globalVars from 'utilities/globalVars';

const Image = (props) => {
  const {
    src,
    height,
    width,
    mt,
    mb,
    keepRatio,
    border,
    borderRadius,
    cred,
    credRef,
    description,
    style,
  } = props;

  const textUnderPhoto = cred || description;
  const textSize = cred ? 12 : description ? 16 : 18;

  return (
    <Box width='100%' alignItems='center' display='flex' flexDirection='column'>
      <img
        src={src}
        height={height ? height + 'px' : 'auto'}
        width={width ? width + 'px' : 'auto'}
        style={{
          marginTop: mt === undefined ? 40 : mt,
          marginBottom: mb === undefined ? (cred ? 5 : 20) : mt,
          objectFit: keepRatio ? 'cover' : 'contain',
          border: border ? border : 'unset',
          borderRadius: borderRadius || 0,
          maxWidth:
            style?.maxWidth ||
            `calc(100vw - ${globalVars.smallMobilePostPadding * 2}px)`,
          ...style,
        }}
      />
      {textUnderPhoto && (
        <Typography
          color={Color.midGray}
          fontSize={textSize}
          mb={mb === undefined ? 20 : 0}
          width='fit-content'
          sx={{
            textAlign: 'center',
          }}
        >
          {cred && 'Photo By '}
          {credRef ? (
            <a
              href={credRef}
              style={{ color: Color.midGray }}
              target='_blank'
              rel='noopener noreferrer'
            >
              {textUnderPhoto}
            </a>
          ) : (
            textUnderPhoto
          )}
        </Typography>
      )}
    </Box>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  mb: PropTypes.number,
  mt: PropTypes.number,
  keepRatio: PropTypes.bool,
  border: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  description: PropTypes.string,
  cred: PropTypes.string,
  credRef: PropTypes.string,
};

export default Image;
