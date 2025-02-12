import { Box, ListItem } from '@mui/material';
import { useEffect, useState } from 'react';

import { FixedSizeList } from 'react-window';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useWindowSize } from 'utilities/useWindowSize';

const MAXLOOPSIZE = 1000000;

const arraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((val, index) => val === arr2[index]);
};

const generateRectangle = async (mod, start) => {
  const width = start.split(',').length;
  const rows = [start.split(',').map((x) => Number(x) % mod)];
  const first100Rows = [...rows];

  for (let i = 0; i < MAXLOOPSIZE; i++) {
    const beforeRow = rows[rows.length - 1];
    const newRow = [];
    for (let j = 0; j < width; j++) {
      if (j === 0) {
        newRow[j] = (beforeRow[j] + beforeRow[j + 1]) % mod;
      } else if (j === width - 1) {
        newRow[j] = (beforeRow[j] + beforeRow[j - 1]) % mod;
      } else {
        newRow[j] = (beforeRow[j] + beforeRow[j + 1] + beforeRow[j - 1]) % mod;
      }
    }
    rows.push(newRow);
    if (i < 100) {
      first100Rows.push(newRow);
    }

    const foundIndex = first100Rows.findIndex((row) =>
      arraysEqual(newRow, row),
    );
    if (
      foundIndex != -1 &&
      (i >= 100 || foundIndex < first100Rows.length - 1)
    ) {
      return rows;
    }
    if (i % 30000 == 0) {
      await new Promise((res) => setTimeout(() => res()));
    }
  }

  rows.push(['No loop was found']);
  return rows;
};

const RectanglesOutput = (props) => {
  const { mod, start } = props;

  const [rowList, setRowList] = useState([[]]);
  const [loopLength, setLoopLength] = useState(0);
  const [loopLocation, setLoopLocation] = useState(0);
  const [loading, setLoading] = useState(false);

  const windowSize = useWindowSize();

  useEffect(() => {
    setLoading(true);
    generateRectangle(mod, start).then((rectangleList) => {
      const loopLocation = rectangleList
        .slice(0, rectangleList.length - 1)
        .findIndex((row) =>
          _.isEqual(row, rectangleList[rectangleList.length - 1]),
        );
      setLoopLocation(loopLocation);
      setRowList(rectangleList);
      const noLoopFound =
        rectangleList[rectangleList.length - 1][0] === 'No loop was found';
      setLoopLength(
        noLoopFound
          ? `None found (Checked up to ${MAXLOOPSIZE} rows)`
          : rectangleList.length - 1 - loopLocation,
      );
      setLoading(false);
    });
  }, []);

  const getItem = (props) => {
    const { index, style } = props;
    const row = rowList[index];
    const startsLoop = loopLocation === index;
    return (
      <ListItem
        disablePadding
        style={style}
        sx={{
          height: 43 + 1 / 3,
          backgroundColor: startsLoop && !loading ? 'yellow' : 'default',
          pl: 15,
          boxSizing: 'border-box',
        }}
      >
        {row.map((num, i) =>
          row.length === 1 ? (
            <span
              style={{
                width: 200,
                minWidth: 200,
                paddingBottom: 5,
                color: 'black',
              }}
            >
              {num}
            </span>
          ) : (
            <span
              style={{
                width: Math.max(Math.floor(Math.log10(mod)) * 10, 30) + 10,
                minWidth: Math.max(Math.floor(Math.log10(mod)) * 10, 30) + 10,
                overflowX: 'auto',
                whiteSpace: 'nowrap',
                paddingBottom: 5,
                paddingLeft: i === 0 ? 0 : 10,
                color: 'black',
                height: 44,
                display: 'flex',
                alignItems: 'center',
                backgroundColor: startsLoop ? 'yellow' : 'default',
              }}
              key={index + '_' + i}
            >
              {num}
            </span>
          ),
        )}
      </ListItem>
    );
  };

  return (
    <div>
      <span style={{ marginBottom: 20, display: 'block' }}>
        {loading
          ? 'Calculating...'
          : 'Loop length: ' +
            loopLength +
            (loopLocation === 0 || loopLocation === -1
              ? ''
              : ` Offset ${loopLocation}`)}
      </span>
      <Box
        id='fixed-size-list-wrapper-2'
        class='pad-right'
        sx={{
          overflowX: 'auto',
          minWidth: Math.min(windowSize.width - 40),
          maxWidth: Math.min(windowSize.width - 40),
        }}
        pb={10}
      >
        <FixedSizeList
          id='scroll-list-wrapper'
          height={Math.max(
            window.innerHeight - windowSize.getVal(250, 380, 380),
            200,
          )}
          width={
            rowList[0].length *
              (Math.max(Math.floor(Math.log10(mod)) * 10, 30) + 20) +
            15
          }
          itemSize={48 + 1 / 3}
          itemCount={rowList.length}
          overscanCount={5}
        >
          {getItem}
        </FixedSizeList>
      </Box>
    </div>
  );
};

RectanglesOutput.propTypes = {
  mod: PropTypes.number,
  start: PropTypes.string,
};

export default RectanglesOutput;
