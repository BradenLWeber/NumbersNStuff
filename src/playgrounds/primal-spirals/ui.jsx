import { Box, Button, Checkbox, TextField, Typography } from '@mui/material';

import CheckedBox from 'components/general/checked-box';
import { Color } from 'styles/Color';
import OutlinedButton from 'components/general/outlined-button';
import { Stack } from '@mui/system';
import TextInput from 'components/general/text-input';
import { useState } from 'react';

const UI = (props) => {
  const { setScale, setCeiling, setAnimate, setFloor, reset } = props;
  const [localScale, setLocalScale] = useState(4);
  const [localFloor, setLocalFloor] = useState(0);
  const [localCeiling, setLocalCeiling] = useState(700);
  const [localAnimate, setLocalAnimate] = useState(false);

  const submit = () => {
    reset();
    setAnimate(localAnimate || false);
    setScale(localScale || 4);
    setFloor(localFloor || 0);
    setCeiling(localCeiling || 700);
  };

  const getDisableDraw = () => {
    return (
      localFloor === '' ||
      localCeiling === '' ||
      localScale === '' ||
      localCeiling - localFloor > 10000000 ||
      localScale > 20 ||
      localFloor < 0 ||
      localCeiling > Number.MAX_SAFE_INTEGER ||
      localFloor >= localCeiling
    );
  };

  const onEnter = () => {
    if (!getDisableDraw()) submit();
  };

  const range = localCeiling - localFloor;
  const warningMessage =
    range > 10000000
      ? 'Differences of more than 10,000,000 are prohibited to prevent from crashing the browser.'
      : range > 1000000
      ? 'Rendering differences of more than 1,000,000 will probably cause noticeable lag.'
      : '';

  return (
    <Stack mt={3.5} ml={3.5} spacing={3} direction='row'>
      <TextInput
        id='outlined-basic'
        label='Scale'
        onChange={(e) => setLocalScale(e)}
        defaultValue={4}
        onEnter={onEnter}
        sx={{ width: { sm: 100, md: 100 } }}
      />
      <TextInput
        id='outlined-basic'
        label='Floor'
        defaultValue={0}
        onEnter={onEnter}
        onChange={(e) => setLocalFloor(e)}
        sx={{ width: { sm: 100, md: 100 } }}
      />
      <TextInput
        id='outlined-basic'
        label='Ceiling'
        defaultValue={700}
        onEnter={onEnter}
        onChange={(e) => setLocalCeiling(e)}
        sx={{ width: { sm: 100, md: 100 } }}
      />
      <Box
        id='animate-wrapper'
        display='flex'
        flexDirection='column'
        alignItems='center'
        pl={10}
        pr={10}
      >
        <Typography>Animate</Typography>
        <CheckedBox
          checked={localAnimate}
          onChange={(e) => setLocalAnimate(e)}
        />
      </Box>
      <OutlinedButton
        click={submit}
        sx={{ height: 56 }}
        disabled={getDisableDraw()}
      >
        Draw it!
      </OutlinedButton>
      <Typography color={Color.redDark} pl={10} width={350} pr={100}>
        {warningMessage}
      </Typography>
    </Stack>
  );
};

export default UI;
