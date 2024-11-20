import { useEffect, useState } from 'react';

import { Color } from 'styles/Color';
import PropTypes from 'prop-types';
import { sieveOfAtkin } from 'utilities/functions';

const percentNumbersKept_seq = (sequence) => {
  const numbersPassedThrough = sequence.reduce(
    (partialSum, a) => partialSum + a,
    0,
  );
  return sequence.length / numbersPassedThrough;
};
const percentNumbersKept_gap = (gap) => {
  if (gap === 1) return 1;
  return 1 / gap;
};

const getSquareGridSize = (totalBoxes) => {
  let size = 1;
  let layer = 1;
  while (size < totalBoxes) {
    size += layer * 8;
    layer += 1;
  }
  return layer * 2 - 1;
};

const getGrid = (numbers, totalBoxes) => {
  const gridSize = getSquareGridSize(totalBoxes);
  const grid = Array(gridSize).fill(null);
  for (let i = 0; i < gridSize; i++) {
    grid[i] = Array(gridSize).fill(null);
  }

  let x = Math.floor(gridSize / 2);
  let y = x;
  let layer = 1;
  grid[y][x] = numbers.pop();
  while (numbers.length > 7) {
    y -= 1;
    grid[y][x] = numbers.pop();

    for (let i = 0; i < layer * 2 - 1; i++) {
      x += 1;
      grid[y][x] = numbers.pop();
    }
    for (let i = 0; i < layer * 2; i++) {
      y += 1;
      grid[y][x] = numbers.pop();
    }
    for (let i = 0; i < layer * 2; i++) {
      x -= 1;
      grid[y][x] = numbers.pop();
    }
    for (let i = 0; i < layer * 2; i++) {
      y -= 1;
      grid[y][x] = numbers.pop();
    }
    layer += 1;
  }
  return grid;
};

const getBoxColor = (box, start) => {
  return box.num === start ? Color.red : box.isPrime ? Color.gray : Color.light;
};

const SpiralGrid = (props) => {
  const { start, gap, sequence, key, useSequence, size } = props;
  const [grid, setGrid] = useState(null);
  const [boxSize, setBoxSize] = useState(5);

  useEffect(() => {
    let totalBoxes = 1;
    if (size === 1) {
      totalBoxes = 1681;
      setBoxSize(10);
    } else if (size === 2) {
      totalBoxes = 10201;
      setBoxSize(5);
    } else if (size === 3) {
      totalBoxes = 78961;
      setBoxSize(4);
    } else if (size === 4) {
      totalBoxes = 160801;
      setBoxSize(3);
    }

    const percentNumbersKept = useSequence
      ? percentNumbersKept_seq(sequence)
      : percentNumbersKept_gap(gap);

    const numberCeiling =
      Math.floor(totalBoxes / percentNumbersKept) + start - 1;
    let numbersToUse = sieveOfAtkin(start, numberCeiling, true);

    if (useSequence) {
      const allNumbers = numbersToUse.reverse();
      const newNumbersToUse = [];
      let arrayIsEmpty = false;
      while (!arrayIsEmpty) {
        for (const nextGap of sequence) {
          const nextNum = allNumbers.pop();
          if (nextNum == undefined) {
            arrayIsEmpty = true;
            break;
          }
          nextNum.color = getBoxColor(nextNum, start);
          newNumbersToUse.push(nextNum);

          for (let i = 0; i < nextGap - 1; i++) {
            allNumbers.pop();
          }
        }
      }
      numbersToUse = newNumbersToUse;
    } else {
      numbersToUse = numbersToUse.filter((_v, i) => i % gap === 0);
      numbersToUse.forEach((o) => (o.color = getBoxColor(o, start)));
    }

    const grid = getGrid(numbersToUse.reverse(), totalBoxes);

    setGrid(grid);
  }, [key]);

  const getGridWidth = () => {
    if (size === 1) return 410;
    if (size === 2) return 505;
    if (size === 3) return 1124;
    if (size === 4) return 1203;
  };

  return (
    <div style={{ marginTop: 20, paddingRight: 20, width: 'fit-content' }}>
      <div
        id='spiral-grid'
        style={{
          width: 'fit-content',
          minWidth: getGridWidth(),
        }}
      >
        {grid?.map((obj, i) => (
          <div
            style={{
              height: boxSize,
              display: 'flex',
            }}
            key={i}
          >
            {obj.map((o) => (
              <div
                style={{
                  width: boxSize,
                  height: boxSize,
                  backgroundColor: o.color,
                  display: 'inline-block',
                  color: 'gray',
                }}
                title={o.num}
                key={o.num}
              >
                {' '}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

SpiralGrid.propTypes = {
  start: PropTypes.string,
  gap: PropTypes.number,
  sequence: PropTypes.array,
  key: PropTypes.number,
  useSequence: PropTypes.bool,
  size: PropTypes.number,
};

export default SpiralGrid;
