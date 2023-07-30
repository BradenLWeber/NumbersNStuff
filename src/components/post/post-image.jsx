import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const Image = (props) => {
  const { src, height, width, mt, mb, keepRatio, border } = props;

  return (
    <img
      src={src}
      height={height ? height + 'px' : 'auto'}
      width={width ? width + 'px' : 'auto'}
      style={{
        marginTop: mt === undefined ? 20 : mt,
        marginBottom: mb === undefined ? 20 : mt,
        objectFit: keepRatio ? 'cover' : 'contain',
        border: border ? border : 'unset',
      }}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  mb: PropTypes.number,
  mt: PropTypes.number,
  keepRatio: PropTypes.bool,
};

export default Image;
