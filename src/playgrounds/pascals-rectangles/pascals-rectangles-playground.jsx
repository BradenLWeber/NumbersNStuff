import Body from 'components/post/post-body';
import PlaygroundWrapper from 'components/playground/playground-wrapper';
import RectanglesOutput from './rectangles-output';
import RectanglesUI from './rectangles-ui';
import { pascalsRectanglesTitle } from 'posts/pascals-rectangles/pascals-rectangles';
import { useState } from 'react';

const PascalsRectanglesPlayground = () => {
  const [mod, setMod] = useState(4);
  const [start, setStart] = useState('1,1,1,1');
  const [key, setKey] = useState(0);

  const reset = () => {
    setKey(key + 1);
  };

  const Explanation = () => <Body>There are no rules. Fly free!</Body>;

  return (
    <PlaygroundWrapper
      postTitle={pascalsRectanglesTitle}
      explanation={<Explanation />}
    >
      <RectanglesUI setMod={setMod} setStart={setStart} reset={reset} />
      <RectanglesOutput mod={mod} start={start} key={key} />
    </PlaygroundWrapper>
  );
};

export default PascalsRectanglesPlayground;
