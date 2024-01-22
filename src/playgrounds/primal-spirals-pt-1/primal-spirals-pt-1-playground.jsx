import Body from 'components/post/post-body';
import PlaygroundWrapper from 'components/playground/playground-wrapper';
import SpiralGap from './spiral-gap';
import UIGap from './ui-gap';
import { primalSpiralsPt1Title } from 'posts/primal-spirals-pt-1/primal-spirals-pt-1';
import { useState } from 'react';

const DEV = false;

const PrimalSpiralsPt1Playground = () => {
  const [scale, setScale] = useState(0);
  const [ceiling, setCeiling] = useState(0);
  const [animate, setAnimate] = useState(0);
  const [angle, setAngle] = useState(90);
  const [floor, setFloor] = useState(0);
  const [key, setKey] = useState(0);

  const reset = () => {
    setKey(key + 1);
  };

  const Explanation = () => (
    <>
      <Body>
        Prime spirals are made by taking the gaps between primes and generating
        spirals where the line length of the next prong is equal to the next gap
        between primes. The angle at which each prong turns can be varied.
      </Body>
      <Body>
        The <b>floor</b> and <b>ceiling</b> determine the interval that the
        prime numbers are pulled from.
      </Body>
      <Body>
        The <b>angle</b> will determine the direction the next line in the
        spiral is drawn toward.
      </Body>
      <Body>
        The <b>scale</b> will determine the size of the lines. Larger spirals
        might fit on the screen better if they are scaled down.
      </Body>
      <Body>
        Animate will show the lines being drawn. Be warned, for larger spirals,
        this may take a long time to complete.
      </Body>
    </>
  );

  return (
    <PlaygroundWrapper
      postName={primalSpiralsPt1Title}
      explanation={<Explanation />}
    >
      <UIGap
        setScale={setScale}
        setCeiling={setCeiling}
        setAnimate={setAnimate}
        setFloor={setFloor}
        setAngle={setAngle}
        reset={reset}
      />
      <SpiralGap
        scale={scale}
        ceil={ceiling}
        floor={floor}
        angle={angle}
        key={key}
        animate={animate}
        dev={DEV}
      />
    </PlaygroundWrapper>
  );
};

export default PrimalSpiralsPt1Playground;
