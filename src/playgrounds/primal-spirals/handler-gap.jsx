import PropTypes from 'prop-types';
import SpiralGap from './spiral-gap';
import UIGap from './ui-gap';
import { useState } from 'react';

const DEV = false;

const HandlerGap = (props) => {
  const { back } = props;
  const [scale, setScale] = useState(0);
  const [ceiling, setCeiling] = useState(0);
  const [animate, setAnimate] = useState(0);
  const [floor, setFloor] = useState(0);
  const [key, setKey] = useState(0);

  const reset = () => {
    setKey(key + 1);
  };

  return (
    <>
      <UIGap
        setScale={setScale}
        setCeiling={setCeiling}
        setAnimate={setAnimate}
        setFloor={setFloor}
        reset={reset}
        back={back}
      />
      <SpiralGap
        scale={scale}
        ceil={ceiling}
        floor={floor}
        key={key}
        animate={animate}
        dev={DEV}
      />
    </>
  );
};

HandlerGap.propTypes = {
  back: PropTypes.func,
};

export default HandlerGap;
