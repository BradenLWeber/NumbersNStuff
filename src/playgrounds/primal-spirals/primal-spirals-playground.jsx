import FilledButton from 'components/general/filled-button';
import HandlerGap from './handler-gap';
import HandlerGrid from './handler-grid';
import PlaygroundWrapper from 'components/playground/playground-wrapper';
import { Stack } from '@mui/material';
import { primalSpiralsTitle } from 'posts/primal-spirals/primal-spirals';
import { useState } from 'react';

const PrimalSpiralsPlayground = () => {
  const [choice, setChoice] = useState(0);

  return (
    <PlaygroundWrapper postName={primalSpiralsTitle}>
      {choice === 0 && (
        <Stack direction='horizontal'>
          <FilledButton click={() => setChoice(1)}>Gap spiral</FilledButton>
          <FilledButton click={() => setChoice(2)}>Grid spiral</FilledButton>
        </Stack>
      )}
      {choice === 1 && <HandlerGap back={() => setChoice(0)} />}
      {choice === 2 && <HandlerGrid back={() => setChoice(0)} />}
    </PlaygroundWrapper>
  );
};

export default PrimalSpiralsPlayground;
