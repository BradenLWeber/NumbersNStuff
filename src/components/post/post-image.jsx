import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

const Image = (props) => {
  const { src, height, width } = props;
  const [imgWidth, setImgWidth] = useState('auto');
  const [imgHeight, setImgHeight] = useState('auto');

  useEffect(() => {
    setImgHeight(height ? height + 'px' : 'auto');
  }, [height]);

  useEffect(() => {
    setImgWidth(width ? width + 'px' : 'auto');
  }, [width]);

  return (
    <img
      src={src}
      height={imgHeight}
      width={imgWidth}
      style={{ marginTop: 20, marginBottom: 20 }}
    ></img>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Image;
