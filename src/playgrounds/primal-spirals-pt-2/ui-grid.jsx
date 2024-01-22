import { Box, Typography } from '@mui/material';

import CheckedBox from 'components/general/checked-box';
import FilledButton from 'components/general/filled-button';
import OutlinedButton from 'components/general/outlined-button';
import PropTypes from 'prop-types';
import { Stack } from '@mui/system';
import TextInput from 'components/general/text-input';
import { useState } from 'react';

const UIGrid = (props) => {
  const { setStart, setGap, setSequence, setUseSequence, reset, back } = props;
  const [localStart, setLocalStart] = useState(1);
  const [localGap, setLocalGap] = useState(1);
  const [localUseSequence, setLocalUseSequence] = useState(false);
  const [localSequence, setLocalSequence] = useState('1,2,3');

  const submit = () => {
    reset();
    setStart(localStart || 1);
    setGap(localGap || 1);
    setSequence(localSequence || '');
    setUseSequence(localUseSequence || false);
  };

  const getDisableDraw = () => {
    return !localStart || (localUseSequence ? !localSequence : !localGap);
  };

  const onEnter = () => {
    if (!getDisableDraw()) submit();
  };

  return (
    <Stack mt={3.5} ml={3.5} spacing={20} direction='row'>
      <FilledButton click={back} sx={{ height: 55 }}>
        Back
      </FilledButton>
      <TextInput
        label='Start'
        onChange={(e) => setLocalStart(e)}
        onEnter={onEnter}
        value={localStart}
        sx={{ width: { sm: 100, md: 100 } }}
      />
      {localUseSequence ? (
        <TextInput
          label='Sequence'
          value={localSequence}
          onEnter={onEnter}
          onChange={(e) => setLocalSequence(e)}
          sx={{ width: { sm: 130, md: 130 } }}
        />
      ) : (
        <TextInput
          label='Gap'
          value={localGap}
          onEnter={onEnter}
          onChange={(e) => setLocalGap(e)}
          sx={{ width: { sm: 130, md: 130 } }}
        />
      )}
      <Box
        id='use-sequence-wrapper'
        display='flex'
        flexDirection='column'
        alignItems='center'
        pl={10}
        pr={10}
      >
        <Typography>Use Sequence</Typography>
        <CheckedBox
          checked={localUseSequence}
          onChange={(e) => setLocalUseSequence(e)}
        />
      </Box>
      <OutlinedButton
        click={submit}
        sx={{ height: 56 }}
        disabled={getDisableDraw()}
      >
        Draw it!
      </OutlinedButton>
    </Stack>
  );
};

UIGrid.propTypes = {
  setStart: PropTypes.func,
  setGap: PropTypes.func,
  setUseSequence: PropTypes.func,
  reset: PropTypes.func,
  back: PropTypes.func,
};

export default UIGrid;
