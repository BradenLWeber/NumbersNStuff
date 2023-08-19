import { playgrounds } from 'playgrounds/all-playgrounds';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { parseTitleToUrl } from 'utilities/functions';

const Playground = () => {
  const { title } = useParams();

  const [playground, setPlayground] = useState({ element: <div /> });

  useEffect(() => {
    const allPlaygrounds = playgrounds;
    setPlayground(
      allPlaygrounds.filter((playground) => {
        return parseTitleToUrl(playground.title) === title;
      })[0],
    );
  }, [title]);

  return playground?.element || <Navigate to='/error' />;
};

export default Playground;
