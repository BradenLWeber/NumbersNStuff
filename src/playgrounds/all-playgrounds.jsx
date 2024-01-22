import DivideBy3 from 'playgrounds/divide-by-3-game/divide-by-3.png';
import DivideBy3Playground from './divide-by-3-game/the-divide-by-3-playground';
import NumberPalindromes from 'playgrounds/number-palindromes/number-palindromes.png';
import NumberPalindromesPlayground from './number-palindromes/number-palindrome-playgrounds';
import PrimalSpiralsPt1Playground from './primal-spirals-pt-1/primal-spirals-pt-1-playground';
import PrimeGiraffe from './primal-spirals-pt-1/prime-giraffe.png';
import { numberPalindromesTitle } from 'posts/number-palindromes/number-palindromes';
import { primalSpiralsPt1Title } from 'posts/primal-spirals-pt-1/primal-spirals-pt-1';
import { theDivideBy3GameTitle } from 'posts/divide-by-3-game/the-divide-by-3-game';

const next = {
  title: primalSpiralsPt1Title,
  image: {
    src: PrimeGiraffe,
    height: 190,
    width: 300,
  },
  createdDate: '12/19/2023',
  element: <PrimalSpiralsPt1Playground />,
};
console.log(next);

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
  // next
];
