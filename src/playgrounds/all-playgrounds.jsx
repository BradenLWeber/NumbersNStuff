import { theDivideBy3GameTitle } from 'posts/the-divide-by-3-game';
import DivideBy3Playground from './the-divide-by-3-playground';
import DivideBy31 from '../assets/global/DivideBy31.PNG';

export const playgrounds = [
  {
    title: theDivideBy3GameTitle,
    image: {
      src: DivideBy31,
      height: 190,
      width: 420,
    },
    element: <DivideBy3Playground />,
  },
];
