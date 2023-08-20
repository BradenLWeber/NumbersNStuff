import { theDivideBy3GameTitle } from 'posts/divide-by-3-game/the-divide-by-3-game';
import DivideBy3Playground from './divide-by-3-game/the-divide-by-3-playground';
import DivideBy3 from 'playgrounds/divide-by-3-game/divide-by-3.png';
import { numberPalindromesTitle } from 'posts/number-palindromes/number-palindromes';
import NumberPalindromesPlayground from './number-palindromes/number-palindrome-playgrounds';

export const playgrounds = [
  {
    title: theDivideBy3GameTitle,
    image: {
      src: DivideBy3,
      height: 190,
      width: 420,
    },
    createdDate: '6/11/2023',
    element: <DivideBy3Playground />,
  },
  {
    title: numberPalindromesTitle,
    image: {
      src: DivideBy3,
      height: 190,
      width: 420,
    },
    createdDate: '8/20/2023',
    element: <NumberPalindromesPlayground />,
  },
];
