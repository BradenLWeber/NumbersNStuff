import { Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import PrimalSpiralsPt2Playground from 'playgrounds/primal-spirals-pt-2/primal-spirals-pt-2-playground';
import { parseTitleToUrl } from 'utilities/functions';
import { playgrounds } from 'playgrounds/all-playgrounds';

const Playground = () => {
  const { title } = useParams();

  const [playground, setPlayground] = useState({ element: <div /> });

  useEffect(() => {
    if (title === 'test') {
      setPlayground({ element: <PrimalSpiralsPt2Playground /> });
    } else {
      const allPlaygrounds = playgrounds;
      setPlayground(
        allPlaygrounds.filter((playground) => {
          return parseTitleToUrl(playground.title) === title;
        })[0],
      );
    }
  }, [title]);

  return playground?.element || <Navigate to='/error' />;
};

export default Playground;
