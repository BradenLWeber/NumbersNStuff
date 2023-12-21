import { useEffect, useRef, useState } from 'react';

import { LinearProgress } from '@mui/material';
import PropTypes from 'prop-types';
import _ from 'lodash';

const MARGIN = 40;
const POINTS_TO_SHOW = 100;

const sieveOfAtkin = (start, end) => {
  // Adjust the sieve size to cover the specified range
  const limit = end;
  const sqrtLimit = Math.sqrt(limit);

  // Initialize the sieve array with false values
  const sieve = Array(limit + 1).fill(false);

  // Part 1: Mark sieve values for specific quadratic forms
  for (let x = 1; x <= sqrtLimit; x++) {
    for (let y = 1; y <= sqrtLimit; y++) {
      const n = 4 * x * x + y * y;
      if (n <= limit && (n % 12 === 1 || n % 12 === 5)) {
        sieve[n] = !sieve[n];
      }

      const m = 3 * x * x + y * y;
      if (m <= limit && m % 12 === 7) {
        sieve[m] = !sieve[m];
      }

      const o = 3 * x * x - y * y;
      if (x > y && o <= limit && o % 12 === 11) {
        sieve[o] = !sieve[o];
      }
    }
  }

  // Part 2: Mark sieve values for multiples of squares
  for (let i = 5; i <= sqrtLimit; i++) {
    if (sieve[i]) {
      for (let j = i * i; j <= limit; j += i * i) {
        sieve[j] = false;
      }
    }
  }

  // Mark 2 and 3 as prime
  sieve[2] = sieve[3] = true;

  // Collect the prime numbers within the specified range
  const primes = [];
  for (let i = Math.max(2, start); i <= limit; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }

  return primes;
};

const getGaps = (primes) => {
  const gaps = [];
  for (let i = 0; i < primes.length - 1; i++) {
    gaps.push((primes[i + 1] - primes[i]) / 2);
  }
  return gaps;
};

const normalizePoints = (pointList) => {
  const currentMinX = _.minBy(pointList, function (point) {
    return point[0];
  })[0];
  const currentMinY = _.minBy(pointList, function (point) {
    return point[1];
  })[1];

  if (currentMinX < MARGIN) {
    const add = MARGIN - currentMinX;
    for (let i = 0; i < pointList.length; i++) {
      pointList[i][0] += add;
    }
  }
  if (currentMinY < MARGIN) {
    const add = MARGIN - currentMinY;
    for (let i = 0; i < pointList.length; i++) {
      pointList[i][1] += add;
    }
  }

  return pointList;
};

const getRgb = (i) => {
  const difference = Math.round(Math.cos(i / 15) * 25);
  return `rgb(${225 + difference}, ${125 + difference}, ${25 + difference})`;
};

const ProgressBar = (props) => (
  <LinearProgress
    variant='determinate'
    value={props.percent}
    sx={{
      width: 347,
      marginLeft: 3.5,
      '& .MuiLinearProgress-bar': {
        transition: 'none',
      },
    }}
  />
);

const SpiralGap = (props) => {
  const { scale, ceil, floor, angle, animate, dev } = props;
  const strokeWidth = Number(scale / 2);

  const [delayedPoints, setDelayedPoints] = useState([]);
  const delayedPointsRef = useRef(delayedPoints);
  delayedPointsRef.current = delayedPoints;
  const [minX, setMinX] = useState(0);
  const minXRef = useRef(minX);
  minXRef.current = minX;
  const [maxX, setMaxX] = useState(1000);
  const maxXRef = useRef(maxX);
  maxXRef.current = maxX;
  const [minY, setMinY] = useState(0);
  const minYRef = useRef(minY);
  minYRef.current = minY;
  const [maxY, setMaxY] = useState(1000);
  const maxYRef = useRef(maxY);
  maxYRef.current = maxY;
  const [points, setPoints] = useState([]);
  const pointsRef = useRef(points);
  pointsRef.current = points;

  useEffect(() => {
    const primes = sieveOfAtkin(floor, ceil);
    const gaps = getGaps(primes);
    const rawPoints = getPoints(gaps);
    const points = normalizePoints(rawPoints);
    setPoints(points);
    setMinX(
      _.minBy(points, function (point) {
        return point[0];
      })[0],
    );
    setMinY(
      _.minBy(points, function (point) {
        return point[1];
      })[1],
    );
    setMaxX(
      _.maxBy(points, function (point) {
        return point[0];
      })[0],
    );
    setMaxY(
      _.maxBy(points, function (point) {
        return point[1];
      })[1],
    );
    if (animate) setPointsWithDelay(points, 0, points.length);
  }, []);

  const getPoints = (gaps) => {
    const start = [0, 0];
    const points = [];
    points.push(start);

    let x;
    let y;
    let gap;
    let currentAngle = (angle + 180) % 360;
    for (let i = 0; i < gaps.length; i++) {
      currentAngle = (currentAngle + angle) % 360;

      x = points[i][0];
      y = points[i][1];
      gap = gaps[i];
      points.push([
        x + gap * scale * Math.cos((currentAngle * 2 * Math.PI) / 360),
        y + gap * scale * Math.sin((currentAngle * 2 * Math.PI) / 360),
      ]);
      // if (i % 4 === 0) {
      //   points.push([x + gap * scale, y]);
      // } else if (i % 4 === 1) {
      //   points.push([x, y + gap * scale]);
      // } else if (i % 4 === 2) {
      //   points.push([x - gap * scale, y]);
      // } else {
      //   points.push([x, y - gap * scale]);
      // }
    }
    return points;
  };

  const pointsToString = (points) => {
    let pointString = '';
    for (let i = 0; i < points.length; i++) {
      pointString += `${points[i][0]}, ${points[i][1]} `;
    }
    return pointString;
  };

  const setPointsWithDelay = (points, i, length) => {
    if (i === length) return;
    setTimeout(() => {
      setDelayedPoints(() => delayedPointsRef.current.concat([points[i]]));
      setPointsWithDelay(points, i + 1, length);
    }, 4);
  };

  const sliceIndex =
    delayedPoints.length >= points.length * (dev ? 2 : 1)
      ? 0
      : delayedPoints.length - POINTS_TO_SHOW;
  const slicedDelayedPoints = delayedPoints.slice(
    sliceIndex >= 0 ? sliceIndex : 0,
  );

  if (!ceil) return;

  return (
    <>
      {animate && (
        <ProgressBar
          percent={
            (delayedPoints.length / (points.length * (dev ? 2 : 1))) * 100
          }
        />
      )}
      <svg
        width={maxXRef.current - minXRef.current + MARGIN * 2}
        height={maxYRef.current - minYRef.current + MARGIN * 2}
      >
        {animate ? (
          slicedDelayedPoints.map((point, i) => {
            if (i) {
              return (
                <line
                  x1={slicedDelayedPoints[i - 1][0]}
                  y1={slicedDelayedPoints[i - 1][1]}
                  x2={point[0]}
                  y2={point[1]}
                  stroke={getRgb(i)}
                  fill='transparent'
                  strokeWidth={strokeWidth}
                  key={i}
                />
              );
            }
          })
        ) : (
          <polyline
            stroke='orange'
            fill='transparent'
            strokeWidth={strokeWidth}
            points={pointsToString(points)}
          />
        )}
      </svg>
    </>
  );
};

SpiralGap.propTypes = {
  scale: PropTypes.number,
  ceil: PropTypes.number,
  floor: PropTypes.number,
  angle: PropTypes.number,
  animate: PropTypes.bool,
  dev: PropTypes.bool,
};

export default SpiralGap;
