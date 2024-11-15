import { Box, Button, Tooltip, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

import Body from 'components/post/post-body';
import { Color } from 'styles/Color';
import Header from 'components/post/post-header';
import OutlinedButton from 'components/general/outlined-button';
import PlaygroundWrapper from 'components/playground/playground-wrapper';
import TextInput from 'components/general/text-input';
import Title from 'components/post/post-title';
import { theDivideBy3GameTitle } from 'posts/divide-by-3-game/the-divide-by-3-game';

const DivideBy3Playground = () => {
  const [phase, setPhase] = useState(1);
  const [number, setNumber] = useState('');
  const [win, setWin] = useState(true);
  const [moves, setMoves] = useState(0);
  const [chooseNumberButtonText, setChooseNumberButtonText] =
    useState('Looking good');
  const [chooseNumberButtonColor, setChooseNumberButtonColor] = useState(
    Color.primary,
  );
  const [chooseNumberButtonHoverColor, setChooseNumberButtonHoverColor] =
    useState(Color.primaryDark);
  const [chooseNumberButtonTextColor, setChooseNumberButtonTextColor] =
    useState(Color.black);
  const [history, setHistory] = useState([]);

  const numberChange = (num) => {
    setNumber(num.replaceAll(/[^0-9]/g, ''));
  };

  useEffect(() => {
    if (phase !== 1) return;

    if (number.length < 8) {
      setChooseNumberButtonText('Looking good');
      setChooseNumberButtonColor(Color.lightGray);
      setChooseNumberButtonHoverColor(Color.midGray);
      setChooseNumberButtonTextColor(Color.black);
    } else if (number.length < 12) {
      setChooseNumberButtonText('Looking great');
      setChooseNumberButtonColor(Color.primary);
      setChooseNumberButtonHoverColor(Color.primaryDark);
      setChooseNumberButtonTextColor(Color.black);
    } else if (number.length < 18) {
      setChooseNumberButtonText('Looking spectacular');
      setChooseNumberButtonColor(Color.primary);
      setChooseNumberButtonHoverColor(Color.primaryDark);
      setChooseNumberButtonTextColor(Color.black);
    } else if (number.length < 24) {
      setChooseNumberButtonText('Looking to maybe stop soon');
      setChooseNumberButtonColor(Color.secondary);
      setChooseNumberButtonHoverColor(Color.secondaryDark);
      setChooseNumberButtonTextColor(Color.black);
    } else if (number.length < 30) {
      setChooseNumberButtonText('Looking into my soul');
      setChooseNumberButtonColor(Color.tertriary);
      setChooseNumberButtonHoverColor(Color.tertriaryDark);
      setChooseNumberButtonTextColor(Color.black);
    } else {
      setChooseNumberButtonText('I eat numbers for breakfast');
      setChooseNumberButtonColor(Color.black);
      setChooseNumberButtonHoverColor(Color.gray);
      setChooseNumberButtonTextColor(Color.white);
    }

    if (number.length > 35)
      setNumber((prevNumber) => prevNumber.substring(0, 35));
  }, [number]);

  const addOne = () => {
    const newNumber = BigInt(BigInt(number) + BigInt(1)).toString();
    setNumber(newNumber);
    setHistory([...history, '+1 ' + newNumber]);
    setMoves(moves + 1);
  };

  const subtractOne = () => {
    const newNumber = BigInt(BigInt(number) - BigInt(1)).toString();
    setNumber(newNumber);
    setMoves(moves + 1);
    setHistory([...history, '-1 ' + newNumber]);
    if (number === '1') {
      playerWon();
    }
  };

  const divideByThree = () => {
    const divided = BigInt(number) / BigInt(3);
    setMoves(moves + 1);
    if (divided * BigInt(3) !== BigInt(number)) {
      setWin(false);
      setPhase(3);
    } else if (divided === BigInt(0)) {
      playerWon();
    } else {
      setNumber(divided.toString());
      setHistory([...history, '/3 ' + divided.toString()]);
    }
  };

  const playerWon = () => {
    setWin(true);
    setPhase(3);
  };

  const reset = () => {
    setNumber('');
    setMoves(0);
    setPhase(1);
    setHistory([]);
  };

  const chooseNumber = () => {
    setPhase(2);
    setHistory([number]);
  };

  const HistoryComponent = () => (
    <>
      <Header>History</Header>
      {history.map((hist, i) => (
        <Typography
          pb={i === history.length - 1 ? 10 : 0}
          color={Color.gray}
          key={i}
        >
          {hist}
        </Typography>
      ))}
    </>
  );

  const Explanation = () => (
    <>
      <Body>
        <b>1)</b> Start with a large number
      </Body>
      <Body>
        <b>2)</b> Add 1, subtract 1, or divide by 3
      </Body>
      <Body>
        <b>3)</b> Repeat step 2 until you reach 0.
      </Body>
      <Body mt={30}>
        If the resulting number is ever not a whole number, you lose.
      </Body>
    </>
  );

  return (
    <PlaygroundWrapper
      explanation={<Explanation />}
      postTitle={theDivideBy3GameTitle}
    >
      {phase === 1 && (
        <Box display='flex' flexDirection='column'>
          <Title>Choose a large number</Title>
          <TextInput
            label='Pick a good one'
            value={number}
            onChange={(v) => numberChange(v)}
          />
          <Button
            variant='outlined'
            sx={{
              mt: 20,
              backgroundColor: chooseNumberButtonColor,
              border: chooseNumberButtonColor,
              color: chooseNumberButtonTextColor,
              '&:hover': {
                color: chooseNumberButtonTextColor,
                backgroundColor: chooseNumberButtonHoverColor,
              },
            }}
            disabled={number.length <= 3}
            onClick={chooseNumber}
          >
            {chooseNumberButtonText}
          </Button>
        </Box>
      )}
      {phase === 2 && (
        <Box display='flex' flexDirection='column'>
          <Tooltip title={number} mb={0}>
            <div>
              <Title>{number}</Title>
            </div>
          </Tooltip>
          {/* I moved the title margin to this component so the tooltip displays a little higher up */}
          <Box
            display='flex'
            flexDirection='row'
            columnGap={10}
            mb={20}
            mt={20}
          >
            <OutlinedButton click={addOne}>+1</OutlinedButton>
            <OutlinedButton click={subtractOne}>-1</OutlinedButton>
            <OutlinedButton click={divideByThree}>/3</OutlinedButton>
          </Box>
          <HistoryComponent />
        </Box>
      )}
      {phase === 3 && (
        <Box>
          <Title>
            {win ? 'Congratulations!' : 'Better Luck next time :\\'}
          </Title>
          <Header>
            {win ? 'You won in ' : 'You lost in '}
            {moves} move{moves > 1 ? 's' : ''}
            {win ? '!' : '.'}
          </Header>
          <Body>
            {win
              ? ''
              : `${number} / 3 = ${
                  (BigInt(number) / BigInt(3)) * BigInt(3) - BigInt(number) ===
                  BigInt(-2)
                    ? BigInt(number) / BigInt(3) + '.666666'
                    : BigInt(number) / BigInt(3) + '.333333'
                }`}
          </Body>
          <OutlinedButton sx={{ mt: 20, mb: 20 }} click={reset}>
            Play again?
          </OutlinedButton>
          <HistoryComponent />
        </Box>
      )}
    </PlaygroundWrapper>
  );
};

export default DivideBy3Playground;
