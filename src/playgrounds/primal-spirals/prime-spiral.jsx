import { useEffect, useRef, useState } from 'react';

import { LinearProgress } from '@mui/material';
import _ from 'lodash';

const MARGIN = 40;
const POINTS_TO_SHOW = 100;

const isPrime = (num) => {
  for (let i = 2, ceiling = Math.sqrt(num); i <= ceiling; i++)
    if (num % i === 0) return false;
  return num > 1;
};

const getPrimes = (ceiling, floor) => {
  const ceil = Number(ceiling);
  const flo = Number(floor);
  const primeList = [];
  for (let i = flo; i < ceil; i++) {
    if (isPrime(i)) primeList.push(i);
  }
  return primeList;
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

const PrimeSpiral = (props) => {
  const { scale, ceil, floor, animate, dev } = props;
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
    const primes = getPrimes(ceil, floor);
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
    for (let i = 0; i < gaps.length; i++) {
      x = points[i][0];
      y = points[i][1];
      gap = gaps[i];
      if (i % 4 === 0) {
        points.push([x + gap * scale, y]);
      } else if (i % 4 === 1) {
        points.push([x, y + gap * scale]);
      } else if (i % 4 === 2) {
        points.push([x - gap * scale, y]);
      } else {
        points.push([x, y - gap * scale]);
      }
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

export default PrimeSpiral;
