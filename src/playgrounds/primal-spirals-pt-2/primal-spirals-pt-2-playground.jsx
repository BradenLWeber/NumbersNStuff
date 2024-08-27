import Body from 'components/post/post-body';
import PlaygroundWrapper from 'components/playground/playground-wrapper';
import PropTypes from 'prop-types';
import SpiralGrid from './spiral-grid';
import UIGrid from './ui-grid';
import { primalSpiralsPt2Title } from 'posts/primal-spirals-pt-2/primal-spirals-pt-2';
import { useState } from 'react';

const PrimalSpiralsPt2Playground = (props) => {
  const { back } = props;
  const [start, setStart] = useState(1);
  const [gap, setGap] = useState(1);
  const [sequence, setSequence] = useState('');
  const [useSequence, setUseSequence] = useState(false);
  const [size, setSize] = useState(2);
  const [key, setKey] = useState(0);

  const reset = () => {
    setKey(key + 1);
  };

  const Explanation = () => (
    <>
      <Body>
        This prime spiral is made by setting up a square grid, filling in the
        numbers in a spiral pattern, and coloring the prime squares dark. The
        numbering starts in the middle (on the red dot) and works its way
        outward. You can see the number of any given square by hovering over it.
      </Body>
      <Body>
        The <b>start</b> determines the first number in the spiral. A start of 1
        may correspond to 1, 2, 3, etc. while a start of 5 may correspond to 5,
        6, 7, etc.
      </Body>
      <Body>
        The <b>gap</b> determines how far apart each next number in the sequence
        will be. A gap of 1 may correspond to 1, 2, 3, etc. while a gap of 2 may
        correspond to 1, 3, 5, etc.
      </Body>
      <Body>
        The <b>sequence</b> determines the gap between numbers to a more
        granular level. Input a comma-separated sequence of gaps that will cycle
        over and over. For example, a sequence of 1, 2 may correspond to 1, 2,
        4, 5, 7, 8, 10, 11, etc. while a sequence of 2, 3, 5 may correspond to
        1, 3, 6, 11, 13, 16, 21, 23, etc.
      </Body>
      <Body>
        <b>Use sequence</b> activates the ability to input a sequence instead of
        a gap.
      </Body>
      <Body>
        the <b>size</b> determines how large of a spiral is drawn. Be warned,
        the larger spirals may slow down the screen.
      </Body>
    </>
  );

  return (
    <PlaygroundWrapper
      postTitle={primalSpiralsPt2Title}
      explanation={<Explanation />}
    >
      <UIGrid
        setStart={setStart}
        setGap={setGap}
        setSequence={setSequence}
        setUseSequence={setUseSequence}
        setSize={setSize}
        reset={reset}
        back={back}
      />
      <SpiralGrid
        start={start}
        gap={gap}
        sequence={sequence}
        key={key}
        size={size}
        useSequence={useSequence}
      />
    </PlaygroundWrapper>
  );
};

PrimalSpiralsPt2Playground.propTypes = {
  back: PropTypes.func,
};

export default PrimalSpiralsPt2Playground;
