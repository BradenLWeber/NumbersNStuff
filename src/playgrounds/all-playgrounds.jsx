import {
  numberPalindromesDate,
  numberPalindromesTitle,
} from 'posts/number-palindromes/number-palindromes';
import {
  primalSpiralsPt1Date,
  primalSpiralsPt1Title,
} from 'posts/primal-spirals-pt-1/primal-spirals-pt-1';
import {
  primalSpiralsPt2Date,
  primalSpiralsPt2Title,
} from 'posts/primal-spirals-pt-2/primal-spirals-pt-2';
import {
  theDivideBy3GameDate,
  theDivideBy3GameTitle,
} from 'posts/divide-by-3-game/the-divide-by-3-game';

import DivideBy3 from 'playgrounds/divide-by-3-game/divide-by-3.png';
import DivideBy3Playground from './divide-by-3-game/the-divide-by-3-playground';
import NumberPalindromes from 'playgrounds/number-palindromes/number-palindromes.png';
import NumberPalindromesPlayground from './number-palindromes/number-palindrome-playgrounds';
import PrimalSpiralsP2PlaygroundImage from './primal-spirals-pt-2/PrimalSpiralsPt2Playground.png';
import PrimalSpiralsPt1Playground from './primal-spirals-pt-1/primal-spirals-pt-1-playground';
import PrimalSpiralsPt2Playground from './primal-spirals-pt-2/primal-spirals-pt-2-playground';
import PrimeGiraffe from './primal-spirals-pt-1/prime-giraffe.png';

export const playgrounds = [
  {
    title: theDivideBy3GameTitle,
    image: {
      src: DivideBy3,
      height: 190,
      width: 420,
    },
    createdDate: theDivideBy3GameDate,
    element: <DivideBy3Playground />,
  },
  {
    title: numberPalindromesTitle,
    image: {
      src: NumberPalindromes,
      height: 190,
      width: 300,
    },
    createdDate: numberPalindromesDate,
    element: <NumberPalindromesPlayground />,
  },
  {
    title: primalSpiralsPt1Title,
    image: {
      src: PrimeGiraffe,
      height: 190,
      width: 300,
    },
    createdDate: primalSpiralsPt1Date,
    element: <PrimalSpiralsPt1Playground />,
  },
  {
    title: primalSpiralsPt2Title,
    image: {
      src: PrimalSpiralsP2PlaygroundImage,
      height: 190,
      width: 300,
    },
    createdDate: primalSpiralsPt2Date,
    element: <PrimalSpiralsPt2Playground />,
  },
];
