import { Box, ListItem, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import {
  baseToString,
  findDivisors,
  parseTitleToUrl,
  toBaseX,
} from 'utilities/functions';

import Body from 'components/post/post-body';
import CheckedBox from 'components/general/checked-box';
import { Color } from 'styles/Color';
import FilledButton from 'components/general/filled-button';
import { FixedSizeList } from 'react-window';
import PlaygroundWrapper from 'components/playground/playground-wrapper';
import TextInput from 'components/general/text-input';
import Title from 'components/post/post-title';
import Toggle from 'components/general/toggle';
import _ from 'lodash';
import { numberPalindromesTitle } from 'posts/number-palindromes/number-palindromes';

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
    minWidth={650}
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
  const [showOtherBases, setShowOtherBases] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingPercent, setLoadingPercent] = useState(0);

  useEffect(() => {
    window.stopNumberPalindromeComputation = false;
    setPostName(parseTitleToUrl(numberPalindromesTitle));
    return () => {
      window.stopNumberPalindromeComputation = true;
    };
  }, []);

  const calculate = () => {
    if (!validate()) return;

    setLoading(true);
    makeNumBaseArray().then((numBaseArray) => {
      if (!numBaseArray) {
        // computation was cancelled
        setLoading(false);
        return;
      }

      if (startBase === endBase) {
        calculateGap(numBaseArray);
      } else {
        calculateArray(numBaseArray);
      }

      setLoading(false);
    });
  };

  const stopNumberPalindromeComputation = () => {
    window.stopNumberPalindromeComputation = true;
  };

  // Use memo is necessary here because while calculations are happening,
  // setLoading gets called constantly, which rerenders the button and
  // makes it quite difficult to press. This makes sure the button doesn't
  // keep getting rerendered
  const submitButton = useMemo(() => {
    return loading ? (
      <FilledButton
        backgroundColor={Color.red}
        color={Color.white}
        hoverBackgroundColor={Color.redDark}
        hoverColor={Color.white}
        click={stopNumberPalindromeComputation}
        sx={{ ml: 20, width: 80, minWidth: 80 }}
      >
        Stop
      </FilledButton>
    ) : (
      <FilledButton
        sx={{ ml: 20, width: 100, minWidth: 100 }}
        click={calculate}
      >
        Calculate
      </FilledButton>
    );
  }, [
    loading,
    startNumber,
    endNumber,
    startBase,
    endBase,
    showDivisors,
    showAllNumbers,
    showOtherBases,
  ]);

  const calculateGap = (numBaseArray) => {
    // These first two items don't work in the loop logic
    if (numBaseArray.length === 0) return [];
    if (numBaseArray.length === 1) return [numBaseArray[0].num];
    if (numBaseArray.length === 2)
      return [numBaseArray[0].num, numBaseArray[1].num - numBaseArray[0].num];

    const gaps = [
      numBaseArray[0].num,
      numBaseArray[1].num - numBaseArray[0].num,
    ];
    const nextNum = numBaseArray[2].num - numBaseArray[1].num;
    if (gaps[0] === gaps[1] && nextNum !== gaps[0] && nextNum !== gaps[1]) {
      gaps.push('  *' + nextNum + '*');
    } else {
      gaps.push(nextNum);
    }
    for (let i = 3; i < numBaseArray.length; i++) {
      const newNum = numBaseArray[i].num - numBaseArray[i - 1].num;
      const numBefore = numBaseArray[i - 1].num - numBaseArray[i - 2].num;
      const numBeforeBefore = numBaseArray[i - 2].num - numBaseArray[i - 3].num;
      const gapNumBefore = gaps[i - 1];
      if (
        numBefore === numBeforeBefore &&
        newNum !== numBefore &&
        newNum !== numBeforeBefore
      ) {
        gaps.push('  *' + newNum + '*');
      } else {
        gaps.push(
          typeof gapNumBefore === 'string' && gapNumBefore.includes('*')
            ? '\n' + newNum
            : newNum,
        );
      }
    }

    setResult([{ title: 'Gaps', gaps: gaps.join(', ').split('\n') }]);
  };

  const calculateArray = (numBaseArray) => {
    // group based on numbers
    const numGroups = _.groupBy(numBaseArray, (obj) => obj.num);

    // Find the max number of palindromes one number has and append it to array
    const endResult = [];
    let maxMatches = 0;
    for (const num in numGroups) {
      if (!showAllNumbers && numGroups[num].length > maxMatches) {
        maxMatches = numGroups[num].length;
        endResult.length = 0; // reset end result array
      }
      if (showAllNumbers || numGroups[num].length === maxMatches) {
        const convertedObj = numGroups[num].map((o) => ({
          base: o.base,
          converted: o.converted,
        }));
        const bases = numGroups[num].map((o) => o.base).join(', ');
        const divisors = findDivisors(num).join(', ');
        const otherBases = numGroups[num]
          .map((o) => baseToString(o.converted))
          .join(', ');
        endResult.push({
          num,
          convertedObj,
          bases,
          divisors,
          otherBases,
        });
      }
    }

    setResult(endResult);
  };

  const makeNumBaseArray = async () => {
    const isPalindrome = (arr) => {
      return arr.length > 1 && _.isEqual(arr, [...arr].reverse());
    };

    return new Promise(async (res) => {
      const results = [];
      const range = Number(endNumber) - Number(startNumber) + 1;
      let totalProcessed = 0;
      for (let num = Number(startNumber); num <= Number(endNumber); num++) {
        setLoadingPercent(Math.floor(((num - startNumber) / range) * 100));
        for (let base = Number(startBase); base <= Number(endBase); base++) {
          totalProcessed++;
          // Since this is an expensive computation task, give the server some
          // breathing room every once in a while
          if (totalProcessed % 80000 === 0) {
            if (window.stopNumberPalindromeComputation) {
              window.stopNumberPalindromeComputation = false;
              return res(null);
            }
            await new Promise((res) => setTimeout(() => res()));
          }
          const converted = toBaseX(num, base);
          if (isPalindrome(converted)) {
            results.push({
              num,
              base,
              converted,
            });
          }
        }
      }
      res(results);
    });
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
    else if (
      showAllNumbers &&
      (endNum - startNum + 1) * (endBase - startBase + 1) > 10000000
    ) {
      message = `"Show all numbers" only works when the total numbers shown is 10,000,000 or less (multiply number range by base range). Current selection would display ${(
        (endNum - startNum + 1) *
        (endBase - startBase + 1)
      ).toLocaleString()}.`;
    }

    setErrorMessage(message);
    return message === '';
  };

  const Explanation = () => (
    <>
      <Body mt={30}>
        Alter the 5 inputs and press <b>calculate</b> to run the program and see
        the result.
      </Body>
      <Body>
        If the <b>start base</b> and <b>end base</b> are different, the program
        will find the numbers that are most frequently a palindrome in the range
        of bases, checking every number from the <b>start number</b> to the{' '}
        <b>end number</b>.
      </Body>
      <Body>
        If the <b>start base</b> and <b>end base</b> are the same, the program
        will find the gaps between palindromes in that base, checking every
        number from the <b>start number</b> to the <b>end number</b>.
      </Body>
      <Body>
        Activate <b>Display all numbers</b> to show every number, not just the
        most frequent palindromic numbers. This only takes effect after
        recalculating.
      </Body>
      <Body>
        Toggle <b>Show other bases</b> to show the resulting numbers written out
        in every base of which it is a palindrome.
      </Body>
      <Body>
        Toggle <b>Show divisors</b> to show the divisors of the resulting
        numbers.
      </Body>
    </>
  );

  const getItem = (props) => {
    const { index, style } = props;
    const res = result[index];
    return (
      <ListItem disablePadding style={style} sx={{ height: 43 + 1 / 3 }}>
        <span style={{ width: 100, minWidth: 100 }}>{res.num}</span>
        <span
          style={{
            whiteSpace: 'nowrap',
            marginLeft: 10,
            width: 100,
            minWidth: 100,
            overflowX: 'auto',
            flex: 1,
          }}
        >
          {res.bases}
        </span>
        {showOtherBases && (
          <span
            style={{
              whiteSpace: 'nowrap',
              marginLeft: 10,
              width: 200,
              minWidth: 200,
              overflowX: 'auto',
              flex: 2,
            }}
          >
            {res.otherBases}
          </span>
        )}
        {showDivisors && (
          <span
            style={{
              whiteSpace: 'nowrap',
              marginLeft: 10,
              width: 300,
              minWidth: 300,
              overflowX: 'auto',
              flex: 3,
            }}
          >
            {res.divisors}
          </span>
        )}
      </ListItem>
    );
  };

  return (
    <PlaygroundWrapper postName={postName} explanation={<Explanation />}>
      <Box display='flex' flexDirection='column' width='100%'>
        {/* Gotta leave some room in the width so this doesn't cover the top right buttons */}
        <Box
          position='relative'
          display='flex'
          flexDirection='column'
          width='calc(100% - 90px)'
          mb={50}
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
              sx={{ width: 120 }}
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
          {startBase !== endBase && (
            <ButtonRow mt={-10}>
              <Typography>Display all numbers</Typography>
              <CheckedBox
                checked={showAllNumbers}
                onChange={(v) => setShowAllNumbers(v)}
                sx={{ mr: 10 }}
              />
              <Typography ml={10}>Show other bases</Typography>
              <Toggle
                checked={showOtherBases}
                onChange={(v) => setShowOtherBases(v)}
              />
              <Typography ml={10}>Show divisors</Typography>
              <Toggle
                checked={showDivisors}
                onChange={(v) => setShowDivisors(v)}
                sx={{ mr: 10 }}
              />
            </ButtonRow>
          )}
          <Box display='flex' flexDirection='row'>
            {submitButton}
            {errorMessage && (
              // line height is being weird when I don't add "px"
              <Typography
                color={Color.red}
                ml={20}
                minWidth={700}
                lineHeight='18px'
              >
                {errorMessage}
              </Typography>
            )}
          </Box>
          {loading && (
            <>
              <Box
                height={6}
                width={600}
                position='absolute'
                bottom={-30}
                left={20}
                backgroundColor={Color.secondaryLight}
              />
              <Box
                height={6}
                width={(600 * loadingPercent) / 100}
                position='absolute'
                bottom={-30}
                left={20}
                backgroundColor={Color.secondaryDark}
              />
            </>
          )}
        </Box>
        {result.length > 0 &&
          (result[0].title ? (
            <>
              <span style={{ marginBottom: 10, marginLeft: 20 }}>
                <b>Gaps:</b>
              </span>
              {result[0].gaps.map((gap, i) => (
                <span
                  style={{
                    whiteSpace: 'pre-wrap',
                    marginLeft: 20,
                    width: 'calc(100% - 60px)',
                    wordWrap: 'break-word',
                  }}
                  key={gap + '-' + i}
                >
                  {gap}
                </span>
              ))}
            </>
          ) : (
            <>
              <Box display='flex' flexDirection='row' ml={20}>
                <Typography fontWeight='bold' width={100} minWidth={100}>
                  Number
                </Typography>
                <Typography
                  fontWeight='bold'
                  width={100}
                  minWidth={100}
                  flex={1}
                  ml={10}
                >
                  Bases
                </Typography>
                {showOtherBases && (
                  <Typography
                    fontWeight='bold'
                    width={200}
                    minWidth={200}
                    flex={2}
                    ml={10}
                  >
                    Number in other bases
                  </Typography>
                )}
                {showDivisors && (
                  <Typography
                    fontWeight='bold'
                    width={300}
                    minWidth={300}
                    flex={3}
                    ml={10}
                  >
                    Divisors
                  </Typography>
                )}
              </Box>
              <Box ml={20}>
                <FixedSizeList
                  id='scroll-list-wrapper'
                  height={window.innerHeight - 390}
                  width={window.innerWidth - 60}
                  itemSize={43 + 1 / 3}
                  itemCount={result.length}
                  overscanCount={5}
                >
                  {getItem}
                </FixedSizeList>
              </Box>
            </>
          ))}
      </Box>
    </PlaygroundWrapper>
  );
};

export default NumberPalindromesPlayground;

// Show loading bar
