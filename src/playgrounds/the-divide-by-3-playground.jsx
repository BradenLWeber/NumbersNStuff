import { Box, Button, TextField, Tooltip, Typography } from '@mui/material';
import Body from 'components/post/post-body';
import Header from 'components/post/post-header';
import { useEffect, useState } from 'react';

import { Color } from 'styles/Color';

const {
  default: PlaygroundWrapper,
} = require('components/playground/playground-wrapper');
const { default: Title } = require('components/post/post-title');

const DivideBy3Playground = (props) => {
  const [phase, setPhase] = useState(1);
  const [number, setNumber] = useState('');
  const [win, setWin] = useState(true);
  const [moves, setMoves] = useState(0);
  const [chooseNumberButtonText, setChooseNumberButtonText] =
    useState('Looking good');
  const [chooseNumberButtonColor, setChooseNumberButtonColor] = useState(
    Color.primary,
  );
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (phase !== 1) return;

    if (number.length < 8) {
      setChooseNumberButtonText('Looking good');
      setChooseNumberButtonColor(Color.lightGray);
    } else if (number.length < 12) {
      setChooseNumberButtonText('Looking great');
      setChooseNumberButtonColor(Color.primary);
    } else if (number.length < 18) {
      setChooseNumberButtonText('Looking spectacular');
      setChooseNumberButtonColor(Color.primary);
    } else if (number.length < 24) {
      setChooseNumberButtonText('Looking to maybe stop soon');
      setChooseNumberButtonColor(Color.secondary);
    } else if (number.length < 30) {
      setChooseNumberButtonText('Looking into my soul');
      setChooseNumberButtonColor(Color.tertriary);
    } else {
      setChooseNumberButtonText('I eat numbers for breakfast');
      setChooseNumberButtonColor(Color.black);
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
        <Typography pb={i === history.length - 1 ? 10 : 0} color={Color.gray}>
          {hist}
        </Typography>
      ))}
    </>
  );

  return (
    <PlaygroundWrapper>
      {phase === 1 && (
        <Box display='flex' flexDirection='column'>
          <Title>Choose a large number</Title>
          <TextField
            label='Pick a good one'
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <Button
            variant='outlined'
            sx={{
              mt: 20,
              backgroundColor: chooseNumberButtonColor,
              border: chooseNumberButtonColor,
              color:
                chooseNumberButtonColor === Color.black ? 'white' : 'black',
              '&:hover': {
                color: 'black',
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
          <Tooltip title={number}>
            <div>
              <Title>{number}</Title>
            </div>
          </Tooltip>
          <Box display='flex' flexDirection='row' columnGap={10} mb={20}>
            <Button variant='outlined' onClick={addOne}>
              +1
            </Button>
            <Button variant='outlined' onClick={subtractOne}>
              -1
            </Button>
            <Button variant='outlined' onClick={divideByThree}>
              /3
            </Button>
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
            {moves} move(s){win ? '!' : '.'}
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
          <Button variant='outlined' sx={{ mt: 20, mb: 20 }} onClick={reset}>
            Play again?
          </Button>
          <HistoryComponent />
        </Box>
      )}
    </PlaygroundWrapper>
  );
};

export default DivideBy3Playground;
