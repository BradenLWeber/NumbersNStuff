import { theDivideBy3GameTitle } from 'posts/divide-by-3-game/the-divide-by-3-game';
import DivideBy3Playground from './divide-by-3-game/the-divide-by-3-playground';
import DivideBy3 from 'playgrounds/divide-by-3-game/divide-by-3.png';

export const playgrounds = [
  {
    title: theDivideBy3GameTitle,
    image: {
      src: DivideBy3,
      height: 190,
      width: 420,
    },
    element: <DivideBy3Playground />,
  },
];
