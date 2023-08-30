import { Color } from 'styles/Color';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

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
  } = props;

  return (
    <>
      <img
        src={src}
        height={height ? height + 'px' : 'auto'}
        width={width ? width + 'px' : 'auto'}
        style={{
          marginTop: mt === undefined ? 20 : mt,
          marginBottom: mb === undefined ? (cred ? 0 : 20) : mt,
          objectFit: keepRatio ? 'cover' : 'contain',
          border: border ? border : 'unset',
          borderRadius: borderRadius || 0,
        }}
      />
      {cred && (
        <Typography
          color={Color.midGray}
          fontSize={12}
          mb={mb === undefined ? 20 : 0}
        >
          Photo by{' '}
          {credRef ? (
            <a
              href={credRef}
              style={{ color: Color.midGray }}
              target='_blank'
              rel='noopener noreferrer'
            >
              {cred}
            </a>
          ) : (
            cred
          )}
        </Typography>
      )}
    </>
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
  cred: PropTypes.string,
  credRef: PropTypes.string,
};

export default Image;
