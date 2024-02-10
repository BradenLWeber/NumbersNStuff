import { useEffect, useState } from 'react';

import Body from 'components/post/post-body';
import PlaygroundWrapper from 'components/playground/playground-wrapper';
import SpiralGap from './spiral-gap';
import UIGap from './ui-gap';
import { parseTitleToUrl } from 'utilities/functions';
import { primalSpiralsPt1Title } from 'posts/primal-spirals-pt-1/primal-spirals-pt-1';

const DEV = false;

const PrimalSpiralsPt1Playground = () => {
  const [postName, setPostName] = useState('');
  const [scale, setScale] = useState(0);
  const [ceiling, setCeiling] = useState(0);
  const [animate, setAnimate] = useState(0);
  const [angle, setAngle] = useState(90);
  const [floor, setFloor] = useState(0);
  const [colorType, setColorType] = useState('default');
  const [key, setKey] = useState(0);

  useEffect(() => {
    setPostName(parseTitleToUrl(primalSpiralsPt1Title));
  }, []);

  const reset = () => {
    setKey(key + 1);
  };

  const Explanation = () => (
    <>
      <Body>
        Prime spirals are made by looking at the gaps between primes in a
        certain range of numbers. The length of the next line is always equal to
        the next gap between primes. The angle at which each line turns can be
        varied.
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
        <b>Animate</b> will show the lines being drawn. Be warned, for larger
        spirals, this may take a long time to complete.
      </Body>
      <Body>
        <b>Color</b> decides the color scheme for the spiral. <i>Default</i>{' '}
        will use a slightly varying shade of orange. <i>Random</i> will change
        the color randomly but gradually, which highlights the behavior of the
        spiral in localized areas. <i>Rainbow</i> will use all the colors of the
        rainbow gradually from start to finish, which highlights the behavior of
        the spiral as a whole.
      </Body>
      <Body>
        For number gaps of more than 500,000, all lines will be drawn in solid
        orange to save rendering time.
      </Body>
    </>
  );

  return (
    <PlaygroundWrapper postName={postName} explanation={<Explanation />}>
      <UIGap
        setScale={setScale}
        setCeiling={setCeiling}
        setAnimate={setAnimate}
        setFloor={setFloor}
        setAngle={setAngle}
        setColorType={setColorType}
        reset={reset}
      />
      <SpiralGap
        scale={scale}
        ceil={ceiling}
        floor={floor}
        angle={angle}
        key={key}
        animate={animate}
        colorType={colorType}
        dev={DEV}
      />
    </PlaygroundWrapper>
  );
};

export default PrimalSpiralsPt1Playground;
