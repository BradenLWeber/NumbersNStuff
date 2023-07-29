import { Box } from '@mui/material';
import { playgrounds } from 'playgrounds/all-playgrounds';
import { posts } from 'posts/all-posts';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { parseTitleToUrl } from 'utilities/functions';
import Error from './error';

const Playground = () => {
  const { title } = useParams();

  const [playground, setPlayground] = useState({});

  useEffect(() => {
    const allPlaygrounds = playgrounds;
    setPlayground(
      allPlaygrounds.filter((playground) => {
        console.log(playground.title);
        return parseTitleToUrl(playground.title) === title;
      })[0],
    );
  }, [title]);

  return playground?.element || <Navigate to={'/error'} />;
};

export default Playground;
