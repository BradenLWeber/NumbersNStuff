import PlaygroundWrapper from 'components/playground/playground-wrapper';
import PrimeSpiral from './prime-spiral';
import UI from './ui';
import { primalSpiralsTitle } from 'posts/primal-spirals/primal-spirals';
import { useState } from 'react';

const DEV = true;

const PrimalSpiralsPlayground = () => {
  const [scale, setScale] = useState(0);
  const [ceiling, setCeiling] = useState(0);
  const [animate, setAnimate] = useState(0);
  const [floor, setFloor] = useState(0);
  const [key, setKey] = useState(0);

  const reset = () => {
    setKey(key + 1);
  };

  return (
    <PlaygroundWrapper postName={primalSpiralsTitle}>
      <UI
        setScale={setScale}
        setCeiling={setCeiling}
        setAnimate={setAnimate}
        setFloor={setFloor}
        reset={reset}
      />
      <PrimeSpiral
        scale={scale}
        ceil={ceiling}
        floor={floor}
        key={key}
        animate={animate}
        dev={DEV}
      />
    </PlaygroundWrapper>
  );
};

export default PrimalSpiralsPlayground;
