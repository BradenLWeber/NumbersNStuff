import { Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import CheckedBox from 'components/general/checked-box';
import { Color } from 'styles/Color';
import FilledButton from 'components/general/filled-button';
import PlaygroundWrapper from 'components/playground/playground-wrapper';
import TextInput from 'components/general/text-input';
import { numberPalindromesTitle } from 'posts/number-palindromes/number-palindromes';
import { parseTitleToUrl } from 'utilities/functions';

const ButtonRow = (props) => (
  <Box
    id='button-row'
    display='flex'
    flexDirection='row'
    alignItems='center'
    p={20}
    flexWrap='wrap'
    height='fit-content'
    width='calc(100% - 140px)'
    columnGap={10}
    mt={props.mt || 0}
  >
    {props.children}
  </Box>
);

const NumberPalindromesPlayground = () => {
  const [postName, setPostName] = useState('');
  const [startNumber, setStartNumber] = useState('1');
  const [endNumber, setEndNumber] = useState('10000');
  const [startBase, setStartBase] = useState('2');
  const [endBase, setEndBase] = useState('10');
  const [showDivisors, setShowDivisors] = useState(false);
  const [showAllNumbers, setShowAllNumbers] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setPostName(parseTitleToUrl(numberPalindromesTitle));
  }, []);

  const calculate = () => {
    if (!validate()) return;
  };

  const validate = () => {
    let message = '';

    const startNum = Number(startNumber);
    const endNum = Number(endNumber);
    const startBas = Number(startBase);
    const endBas = Number(endBase);

    const isNan = (v) => v !== v;
    // Validate if numbers
    if (isNan(startNum) || isNan(endNum) || isNan(startBas) || isNan(endBas)) {
      message = 'Only use number characters (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)';
    }
    // Validate negatives and large numbers
    else if (startNum < 0) {
      message = 'Start number cannot be less than 0';
    } else if (endNum > Number.MAX_SAFE_INTEGER) {
      message = 'End number cannot be larger than ' + Number.MAX_SAFE_INTEGER;
    } else if (startBas < 2) {
      message = 'Start base cannot be less than 2';
    } else if (endBas > Number.MAX_SAFE_INTEGER) {
      message = 'End base cannot be larger than ' + Number.MAX_SAFE_INTEGER;
    }
    // validate floats
    else if (
      startNumber.includes('.') ||
      endNumber.includes('.') ||
      startBase.includes('.') ||
      endBase.includes('.')
    ) {
      message = 'Only whole numbers are allowed';
    }
    // validate out of order arguments
    else if (startNum > endNum) {
      message = 'Start number cannot be greater than end number';
    } else if (startBas > endBas) {
      message = 'Start base cannot be greater than end base';
    }
    // validate number range when showing numbers
    else if (showAllNumbers && endNum - startNum > 10000) {
      message =
        '"Show all numbers" only works for number ranges of 10,000 or less';
    }

    setErrorMessage(message);
    return message === '';
  };

  return (
    <PlaygroundWrapper postName={postName}>
      <Box
        display='flex'
        flexDirection='column'
        width='100%'
        id='button-rows-wrapper'
      >
        <ButtonRow>
          <Typography>Number range</Typography>
          <TextInput
            label='Start'
            value={startNumber}
            onChange={(v) => setStartNumber(v)}
            sx={{ width: 80 }}
          />
          <TextInput
            label='End'
            value={endNumber}
            onChange={(v) => setEndNumber(v)}
            sx={{ width: 80 }}
          />
          <Typography ml={10}>Base range</Typography>
          <TextInput
            label='Start'
            value={startBase}
            onChange={(v) => setStartBase(v)}
            sx={{ width: 80 }}
          />
          <TextInput
            label='End'
            value={endBase}
            onChange={(v) => setEndBase(v)}
            sx={{ width: 80 }}
          />
        </ButtonRow>
        <ButtonRow mt={-10}>
          <Typography>Show divisors</Typography>
          <CheckedBox
            checked={showDivisors}
            onChange={(v) => setShowDivisors(v)}
          />
          <Typography ml={10}>Show all numbers</Typography>
          <CheckedBox
            checked={showAllNumbers}
            onChange={(v) => setShowAllNumbers(v)}
          />
          <FilledButton
            color={Color.black}
            backgroundColor={Color.primary}
            hoverBackgroundColor={Color.primaryDark}
            sx={{ ml: 85 }}
            onClick={calculate}
          >
            Calculate
          </FilledButton>
        </ButtonRow>
        <Typography color={Color.red} ml={10}>
          {errorMessage}
        </Typography>
      </Box>
    </PlaygroundWrapper>
  );
};

export default NumberPalindromesPlayground;
