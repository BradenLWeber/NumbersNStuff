import { Box, ListItem } from '@mui/material';
import { useEffect, useState } from 'react';

import { FixedSizeList } from 'react-window';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { useWindowSize } from 'utilities/useWindowSize';

const generateRectangle = (mod, start) => {
  const width = start.split(',').length;
  const rows = [start.split(',').map((x) => Number(x) % mod)];
  const first100Rows = [...rows];

  for (let i = 0; i < 100; i++) {
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

    const foundIndex = first100Rows.findIndex((row) => _.isEqual(newRow, row));
    if (
      foundIndex != -1 &&
      (i >= 100 || foundIndex < first100Rows.length - 1)
    ) {
      return rows;
    }
  }

  rows.push(['No loop was found']);
  return rows;
};

const RectanglesOutput = (props) => {
  const { mod, start } = props;

  const [rowList, setRowList] = useState([]);
  const [loopLength, setLoopLength] = useState(0);

  const windowSize = useWindowSize();

  useEffect(() => {
    const rectangleList = generateRectangle(mod, start);
    setRowList(rectangleList);
    setLoopLength(rectangleList.length - 1);
  }, []);

  const getItem = (props) => {
    const { index, style } = props;
    const row = rowList[index];
    return (
      <ListItem disablePadding style={style} sx={{ height: 43 + 1 / 3 }}>
        {row.map((num, i) => (
          <span
            style={{
              width: 30,
              minWidth: 30,
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              paddingBottom: 5,
              marginLeft: i === 0 ? 0 : 10,
              color: 'black',
            }}
            key={index + '_' + i}
          >
            {num}
          </span>
        ))}
      </ListItem>
    );
  };

  return (
    <div>
      <span>Loop length: {loopLength}</span>
      <Box minWidth={540} id='fixed-size-list-wrapper'>
        <FixedSizeList
          id='scroll-list-wrapper'
          height={Math.max(window.innerHeight - 390, 200)}
          width={window.innerWidth - 60}
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

// Deal with all those console errors
