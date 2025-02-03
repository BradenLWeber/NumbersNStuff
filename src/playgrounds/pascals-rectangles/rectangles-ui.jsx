import { Stack, Typography } from '@mui/material';

import { Color } from 'styles/Color';
import OutlinedButton from 'components/general/outlined-button';
import PropTypes from 'prop-types';
import TextInput from 'components/general/text-input';
import { useState } from 'react';
import { useWindowSize } from 'utilities/useWindowSize';

const RectanglesUI = (props) => {
  const { setMod, setStart, reset } = props;
  const [localMod, setLocalMod] = useState(4);
  const [localStart, setLocalStart] = useState('1,1,1,1');

  const windowSize = useWindowSize();

  const submit = () => {
    setMod(Number(localMod));
    setStart(localStart.replaceAll(' ', ''));
    reset();
  };

  const getDisableCalc = () => {
    return (
      localMod === '' ||
      localStart === '' ||
      Number(localMod) < 2 ||
      Number(localMod) > Number.MAX_SAFE_INTEGER ||
      localStart.split(',').some((x) => !x)
    );
  };

  const onEnter = () => {
    if (!getDisableCalc()) submit();
  };

  const localStartIsInvalid = localStart.split(',').some((x) => !x);
  const warningMessage = localStartIsInvalid
    ? 'Starting string must be comma separated list of numbers'
    : '';

  return (
    <Stack
      id='ui-bar'
      mt={3.5}
      columnGap={20}
      direction='row'
      display='flex'
      flexWrap='wrap'
      mr={windowSize.getVal(100, 0)}
    >
      <Stack id='first-section' direction='row' spacing={20} height={75}>
        <TextInput
          id='mod-input'
          label='Mod'
          value={localMod}
          trimChars={/[^0-9]/}
          onEnter={onEnter}
          onChange={(e) => setLocalMod(e)}
          sx={{ width: { sm: 130, md: 130, minWidth: 80 } }}
        />
        <TextInput
          id='start-input'
          label='Start'
          value={localStart}
          trimChars={/[^0-9,]/}
          onEnter={onEnter}
          onChange={(e) => setLocalStart(e)}
          sx={{ width: { sm: 130, md: 130 }, minWidth: 80 }}
        />
      </Stack>
      <OutlinedButton
        click={submit}
        sx={{ height: 56, mb: 20 }}
        disabled={getDisableCalc()}
      >
        Calculate!
      </OutlinedButton>
      <Typography color={Color.redDark} width={350} pr={10} pb={10}>
        {warningMessage}
      </Typography>
    </Stack>
  );
};

RectanglesUI.propTypes = {
  setMod: PropTypes.func,
  setStart: PropTypes.func,
  reset: PropTypes.func,
};

export default RectanglesUI;
