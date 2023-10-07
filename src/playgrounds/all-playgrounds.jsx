import DivideBy3 from 'playgrounds/divide-by-3-game/divide-by-3.png';
import DivideBy3Playground from './divide-by-3-game/the-divide-by-3-playground';
import NumberPalindromes from 'playgrounds/number-palindromes/number-palindromes.png';
import NumberPalindromesPlayground from './number-palindromes/number-palindrome-playgrounds';
import { numberPalindromesTitle } from 'posts/number-palindromes/number-palindromes';
import { theDivideBy3GameTitle } from 'posts/divide-by-3-game/the-divide-by-3-game';

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
      src: NumberPalindromes,
      height: 190,
      width: 300,
    },
    createdDate: '8/20/2023',
    element: <NumberPalindromesPlayground />,
  },
];
