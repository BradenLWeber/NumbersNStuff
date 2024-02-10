import { Box, MenuItem, Stack, Typography } from '@mui/material';

import CheckedBox from 'components/general/checked-box';
import { Color } from 'styles/Color';
import OutlinedButton from 'components/general/outlined-button';
import PropTypes from 'prop-types';
import TextInput from 'components/general/text-input';
import { useState } from 'react';

const UIGap = (props) => {
  const {
    setScale,
    setCeiling,
    setAnimate,
    setFloor,
    setAngle,
    setColorType,
    reset,
  } = props;
  const [localScale, setLocalScale] = useState(4);
  const [localFloor, setLocalFloor] = useState(0);
  const [localCeiling, setLocalCeiling] = useState(700);
  const [localAnimate, setLocalAnimate] = useState(false);
  const [localAngle, setLocalAngle] = useState(90);
  const [localColorType, setLocalColorType] = useState('default');

  const submit = () => {
    reset();
    setAnimate(localAnimate || false);
    setScale(Number(localScale) || 4);
    setFloor(Number(localFloor) || 0);
    setCeiling(Number(localCeiling) || 700);
    setAngle(Number(localAngle) || 90);
    setColorType(colorizeIsOption() && localColorType);
  };

  const getDisableDraw = () => {
    return (
      localFloor === '' ||
      localCeiling === '' ||
      localScale === '' ||
      localAngle === '' ||
      Number(localCeiling) - Number(localFloor) > 10000000 ||
      Number(localScale) > 20 ||
      Number(localCeiling) > Number.MAX_SAFE_INTEGER ||
      Number(localFloor) >= localCeiling ||
      Number(localAngle) > 360
    );
  };

  const onEnter = () => {
    if (!getDisableDraw()) submit();
  };

  const colorizeIsOption = () => {
    return (
      localCeiling === '' ||
      localFloor === '' ||
      Number(localCeiling) - Number(localFloor) < 500001
    );
  };

  const range = localCeiling - localFloor;
  const warningMessage =
    range > 10000000
      ? 'Differences of more than 10,000,000 are prohibited to prevent from crashing the browser.'
      : range > 1000000
      ? 'Rendering differences of more than 1,000,000 will probably cause noticeable lag.'
      : '';

  return (
    <Stack
      id='ui-bar'
      mt={3.5}
      columnGap={20}
      direction='row'
      display='flex'
      flexWrap='wrap'
      mr={100}
    >
      <Stack
        id='first-section'
        direction='row'
        spacing={20}
        height={75}
        mr={3.5}
      >
        <TextInput
          id='scale-input'
          label='Scale'
          value={localScale}
          trimChars={/[^0-9\.]/}
          onChange={(e) => setLocalScale(e)}
          onEnter={onEnter}
          sx={{ width: { sm: 100, md: 100 }, minWidth: 60 }}
        />
        <TextInput
          id='floor-input'
          label='Floor'
          value={localFloor}
          trimChars={/[^0-9]/}
          onEnter={onEnter}
          onChange={(e) => setLocalFloor(e)}
          sx={{ width: { sm: 130, md: 130, minWidth: 80 } }}
        />
      </Stack>
      <Stack
        id='second-section'
        direction='row'
        spacing={20}
        height={75}
        sx={{
          marginLeft: '0px !important',
        }}
      >
        <TextInput
          id='ceiling-input'
          label='Ceiling'
          value={localCeiling}
          trimChars={/[^0-9]/}
          onEnter={onEnter}
          onChange={(e) => setLocalCeiling(e)}
          sx={{ width: { sm: 130, md: 130 }, minWidth: 80 }}
        />
        <TextInput
          id='angle-input'
          label='Angle'
          value={localAngle}
          trimChars={/[^0-9\.]/}
          defaultValue={90}
          onChange={(e) => setLocalAngle(e)}
          sx={{ width: { sm: 100, md: 100 }, minWidth: 60 }}
        />
      </Stack>
      <Stack id='third-section' direction='row' spacing={20} height={75}>
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
        <TextInput
          id='color-text-input'
          select
          label='Color'
          value={colorizeIsOption() ? localColorType : 'default'}
          disabled={!colorizeIsOption()}
          onChange={(e) => setLocalColorType(e)}
          sx={{ width: 120, minWidth: 120, ml: 10 }}
        >
          <MenuItem value='default'>Default</MenuItem>
          <MenuItem value='random'>Random</MenuItem>
          <MenuItem value='rainbow'>Rainbow</MenuItem>
        </TextInput>
      </Stack>
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

UIGap.propTypes = {
  setScale: PropTypes.func,
  setCeiling: PropTypes.func,
  setAnimate: PropTypes.func,
  setFloor: PropTypes.func,
  setAngle: PropTypes.func,
  setColorize1: PropTypes.func,
  setColorize2: PropTypes.func,
  reset: PropTypes.func,
};

export default UIGap;
