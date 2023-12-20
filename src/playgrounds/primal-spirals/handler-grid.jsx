import PropTypes from 'prop-types';
import SpiralGrid from './spiral-grid';
import UIGrid from './ui-grid';
import { useState } from 'react';

const HandlerGrid = (props) => {
  const { back } = props;
  const [start, setStart] = useState(1);
  const [gap, setGap] = useState(1);
  const [sequence, setSequence] = useState('');
  const [useSequence, setUseSequence] = useState(false);
  const [key, setKey] = useState(0);

  const reset = () => {
    setKey(key + 1);
  };

  return (
    <>
      <UIGrid
        setStart={setStart}
        setGap={setGap}
        setSequence={setSequence}
        setUseSequence={setUseSequence}
        reset={reset}
        back={back}
      />
      <SpiralGrid
        start={start}
        gap={gap}
        sequence={sequence}
        key={key}
        useSequence={useSequence}
      />
    </>
  );
};

HandlerGrid.propTypes = {
  back: PropTypes.func,
};

export default HandlerGrid;
