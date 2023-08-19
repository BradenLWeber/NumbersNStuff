import IFoundItButIDontUnderstandIt, {
  iFoundItButIDontUnderstandItTitle,
} from './i-found-it-but-i-dont-understand-it/i-found-it-but-i-dont-understand-it';
import PascalsFlip, { pascalsFlipTitle } from './pascals-flip/pascals-flip';
import TheDivideBy3Game, {
  theDivideBy3GameTitle,
} from './divide-by-3-game/the-divide-by-3-game';
import NumberLineWithArrows from 'posts/divide-by-3-game/number-line-with-arrows.png';
import SummationFull from 'posts/i-found-it-but-i-dont-understand-it/summation-full.png';
import PascalsTriangle from 'posts/pascals-flip/pascals-triangle.png';
import NumberPalindromes, {
  numberPalindromesTitle,
} from './number-palindromes/number-palindromes';
import ExamplePalindromes from 'posts/number-palindromes/examples.png';

export const posts = [
  {
    title: theDivideBy3GameTitle,
    description: "A nifty game to play when you're bored in class.",
    image: {
      src: NumberLineWithArrows,
      height: 120,
      width: 270,
    },
    createdDate: '6/11/2023',
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
    createdDate: '6/13/2023',
    tags: ['calculator', 'summation'],
    element: <IFoundItButIDontUnderstandIt />,
  },
  {
    title: pascalsFlipTitle,
    description: 'A surprising discovery from an inverted pyramid of numbers.',
    image: {
      src: PascalsTriangle,
    },
    createdDate: '6/18/2023',
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
    createdDate: '8/19/2023',
    tags: ['palindrome', 'bases'],
    element: <NumberPalindromes />,
  },
];
