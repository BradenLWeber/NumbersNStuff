import HeFoundItAndNowHopefullyUnderstandsIt, {
  heFoundItAndNowHopefullyUnderstandsItDate,
  heFoundItAndNowHopefullyUnderstandsItTitle,
} from './he-found-it-and-now-hopefully-understands-it/he-found-it-and-now-hopefully-understands-it';
import IFoundItButIDontUnderstandIt, {
  iFoundItButIDontUnderstandItDate,
  iFoundItButIDontUnderstandItTitle,
} from './i-found-it-but-i-dont-understand-it/i-found-it-but-i-dont-understand-it';
import NumberPalindromes, {
  numberPalindromesDate,
  numberPalindromesTitle,
} from './number-palindromes/number-palindromes';
import PascalsFlip, {
  pascalsFlipDate,
  pascalsFlipTitle,
} from './pascals-flip/pascals-flip';
import PrimalSpiralsPt1, {
  primalSpiralsPt1Date,
  primalSpiralsPt1Title,
} from './primal-spirals-pt-1/primal-spirals-pt-1';
import PrimalSpiralsPt2, {
  primalSpiralsPt2Date,
  primalSpiralsPt2Title,
} from './primal-spirals-pt-2/primal-spirals-pt-2';
import TheDivideBy3Game, {
  theDivideBy3GameDate,
  theDivideBy3GameTitle,
} from './divide-by-3-game/the-divide-by-3-game';

import ExamplePalindromes from 'posts/number-palindromes/examples.png';
import HeFoundItGraphWhite from 'posts/he-found-it-and-now-hopefully-understands-it/heFoundItGraphWhite.png';
import NumberLineWithArrowsCut from 'posts/divide-by-3-game/number-line-with-arrows-cut.png';
import PascalsTriangle from 'posts/pascals-flip/pascals-triangle.png';
import PrimeSpiralGiraffe from 'playgrounds/primal-spirals-pt-1/prime-giraffe.png';
import SummationFull from 'posts/i-found-it-but-i-dont-understand-it/summation-full.png';
import UlamSpiralGap1_2 from 'posts/primal-spirals-pt-2/UlamSpiralGap1-2.png';

export const posts = [
  {
    title: theDivideBy3GameTitle,
    description: "A nifty game to play when you're bored in class.",
    image: {
      src: NumberLineWithArrowsCut,
      height: 120,
      width: 270,
    },
    createdDate: theDivideBy3GameDate,
    tags: ['game'],
    element: <TheDivideBy3Game />,
  },
  {
    title: iFoundItButIDontUnderstandItTitle,
    description: 'This is a story about a child, a calculator, and summations.',
    image: {
      src: SummationFull,
      height: 110,
    },
    createdDate: iFoundItButIDontUnderstandItDate,
    tags: ['calculator', 'summation'],
    element: <IFoundItButIDontUnderstandIt />,
  },
  {
    title: pascalsFlipTitle,
    description: 'A surprising discovery from an inverted pyramid of numbers.',
    image: {
      src: PascalsTriangle,
    },
    createdDate: pascalsFlipDate,
    tags: ['pascal', 'geometric'],
    element: <PascalsFlip />,
  },
  {
    title: numberPalindromesTitle,
    description:
      'A journey from one end of a number to the other. And back. In other bases.',
    image: {
      src: ExamplePalindromes,
    },
    createdDate: numberPalindromesDate,
    tags: ['palindrome', 'bases'],
    element: <NumberPalindromes />,
  },
  {
    title: heFoundItAndNowHopefullyUnderstandsItTitle,
    description:
      "My old college roommate solves a problem I've had since high school.",
    image: {
      src: HeFoundItGraphWhite,
    },
    createdDate: heFoundItAndNowHopefullyUnderstandsItDate,
    tags: ['reader response', 'summation', 'calculus'],
    element: <HeFoundItAndNowHopefullyUnderstandsIt />,
  },
  {
    title: primalSpiralsPt1Title,
    description: 'Taking the prime numbers to dizzying places.',
    image: {
      src: PrimeSpiralGiraffe,
    },
    createdDate: primalSpiralsPt1Date,
    tags: ['prime', 'spiral'],
    element: <PrimalSpiralsPt1 />,
  },
  // {
  //   title: primalSpiralsPt2Title,
  //   description:
  //     'The Ulam spiral has been around for a while, but do the primes have more to say?',
  //   image: {
  //     src: UlamSpiralGap1_2,
  //   },
  //   createdDate: primalSpiralsPt2Date,
  //   tags: ['prime', 'spiral'],
  //   element: <PrimalSpiralsPt2 />,
  // },
];
