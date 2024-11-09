import { Box, MenuItem, Typography } from '@mui/material';
import { strCount, sumArray } from 'utilities/functions';

import CheckedBox from 'components/general/checked-box';
import FilledButton from 'components/general/filled-button';
import OutlinedButton from 'components/general/outlined-button';
import PropTypes from 'prop-types';
import { Stack } from '@mui/system';
import TextInput from 'components/general/text-input';
import html2canvas from 'html2canvas';
import { useState } from 'react';

const UIGrid = (props) => {
  const {
    setStart,
    setGap,
    setSequence,
    setUseSequence,
    setSize,
    reset,
    back,
  } = props;
  const [localStart, setLocalStart] = useState(1);
  const [localGap, setLocalGap] = useState(1);
  const [localUseSequence, setLocalUseSequence] = useState(false);
  const [localSequence, setLocalSequence] = useState('1,2,3');
  const [localSize, setLocalSize] = useState('2');
  const [loadingPng, setLoadingPng] = useState(false);

  const makePdf = () => {
    setLoadingPng(true);
    html2canvas(document.querySelector('#spiral-grid')).then((canvas) => {
      const MIME_TYPE = 'image/png';

      const imgURL = canvas.toDataURL(MIME_TYPE);

      const dlLink = document.createElement('a');
      dlLink.download = 'Prime_spiral';
      dlLink.href = imgURL;
      dlLink.dataset.downloadurl = [
        MIME_TYPE,
        dlLink.download,
        dlLink.href,
      ].join(':');

      document.body.appendChild(dlLink);
      dlLink.click();
      document.body.removeChild(dlLink);
      setLoadingPng(false);
    });
  };

  const submit = () => {
    reset();
    setStart(Number(localStart) || 1);
    setGap(Number(localGap) || 1);
    setSequence(localSequence?.split(',')?.map((n) => Number(n)) || []);
    setUseSequence(Boolean(localUseSequence) || false);
    setSize(Number(localSize));
  };

  const getDisableDraw = () => {
    return (
      !localStart ||
      (localUseSequence ? !localSequence : !localGap) ||
      (localUseSequence && !/^[0-9, ]+$/.test(localSequence)) ||
      (localUseSequence && /,,/.test(localSequence)) ||
      (localUseSequence && strCount(localSequence, ',') > 100) ||
      (localUseSequence &&
        localSequence.split(',').some((n) => !n || !n.trim())) ||
      (localUseSequence &&
        sumArray(localSequence.split(',').map((n) => Number(n))) > 10000) ||
      (localGap && Number(localGap) > 10000)
    );
  };

  const onEnter = () => {
    if (!getDisableDraw()) submit();
  };

  return (
    <Stack
      id='ui-bar'
      direction='row'
      columnGap={20}
      display='flex'
      flexWrap='wrap'
      mr={100}
      mt={3.5}
      ml={3.5}
    >
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
      >
        <Typography>Use Sequence</Typography>
        <CheckedBox
          checked={localUseSequence}
          onChange={(e) => setLocalUseSequence(e)}
        />
      </Box>
      <TextInput
        id='size-text-input'
        select
        label='Size'
        value={localSize}
        onChange={(e) => setLocalSize(e)}
        sx={{ width: 120, minWidth: 120 }}
      >
        <MenuItem value='1'>1</MenuItem>
        <MenuItem value='2'>2</MenuItem>
        <MenuItem value='3'>3</MenuItem>
        <MenuItem value='4'>4</MenuItem>
      </TextInput>
      <OutlinedButton
        click={submit}
        sx={{ height: 56 }}
        disabled={getDisableDraw()}
      >
        Draw it!
      </OutlinedButton>
      <FilledButton click={makePdf} sx={{ height: 55 }} loading={loadingPng}>
        Download PNG
      </FilledButton>
    </Stack>
  );
};

UIGrid.propTypes = {
  setStart: PropTypes.func,
  setGap: PropTypes.func,
  setUseSequence: PropTypes.func,
  setSize: PropTypes.func,
  reset: PropTypes.func,
  back: PropTypes.func,
};

export default UIGrid;
