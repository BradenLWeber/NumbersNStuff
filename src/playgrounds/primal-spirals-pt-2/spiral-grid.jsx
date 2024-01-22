import PropTypes from 'prop-types';

const SpiralGrid = () => {
  // const { start, gap, sequence, key, useSequence } = props;
  return <p>spiral grid</p>;
};

SpiralGrid.propTypes = {
  start: PropTypes.string,
  gap: PropTypes.string,
  sequence: PropTypes.string,
  key: PropTypes.number,
  useSequence: PropTypes.bool,
};

export default SpiralGrid;
