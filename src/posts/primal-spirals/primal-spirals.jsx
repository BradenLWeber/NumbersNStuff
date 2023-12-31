import Body from 'components/post/post-body';
import Divider from 'components/post/post-divider';
import ExampleSpiral from './example-spiral.png';
import ExampleSpiralPrimes from './example-spiral-primes.png';
import Footer from 'components/post/post-footer';
import { I } from 'components/post/i';
import Image from 'components/post/post-image';
import Title from 'components/post/post-title';
import UlamSpiral from './ulam-spiral.png';
import Wrapper from 'components/post/post-wrapper';

export const primalSpiralsTitle = 'Primal Spirals';
export const primalSpiralsDate = '12/16/2023';

export const PrimalSpirals = () => {
  return (
    <Wrapper>
      <Title
        playgroundName={primalSpiralsTitle}
        date={primalSpiralsDate}
        author='Braden Weber'
      >
        {primalSpiralsTitle}
      </Title>
      <Divider />
      <Header>Introduction to Prime Spirals</Header>
      <Body>
        Primes are still one of the great mysteries of mathematics. The quality
        of being prime seems to be intrinsic to numbers, yet the pattern of
        prime numbers remains elusive. There is no equation that can determine
        if a number is prime; the only way to know if a number is prime is
        through brute-force testing. There is also no way to generate prime
        numbers. You can only guess a number and check if you are right.
      </Body>
      <Body>
        For all the mysteries surrounding prime numbers, there are a few things
        we do know. The problem is that most things we know are statistical in
        nature. For example, we know that prime numbers become exponentially
        less likely the further up the number line we travel.
      </Body>
      <Body>
        We also know that prime numbers tend to congregate along certain
        functions. 2ⁿ - 1 is a prime example (pun intended), where <I>n</I> is a
        positive integer. Primes that can be generated using this equation are
        known as Mersenne Primes.
      </Body>
      <Body>
        There are other equations out there that generate primes more
        consistently than other equations. These equations can be difficult to
        find, but one strategy for finding them is to build helpful
        visualizations for primes.
      </Body>
      <Body>
        One of the most popular visualizations for primes is called the{' '}
        <b>Ulam spiral</b>. To construct this spiral, numbers are placed into a
        square grid starting at 1 and spiraling outward.
      </Body>
      <Image
        src={ExampleSpiral}
        height={200}
        cred='Wikipedia'
        credRef='https://en.wikipedia.org/wiki/Ulam_spiral'
      />
      <Body>
        Then, the prime numbers are highlighted or marked in some way.
      </Body>
      <Image
        src={ExampleSpiralPrimes}
        height={200}
        cred='Wikipedia'
        credRef='https://en.wikipedia.org/wiki/Ulam_spiral'
      />
      <Body>
        If you carry this out far enough, you will start to see diagonal lines
        magically appear. It is amazing that the randomness of primes can
        produce discernable patterns like this.
      </Body>
      <Image
        src={UlamSpiral}
        height={300}
        cred='Wikipedia'
        credRef='https://en.wikipedia.org/wiki/Ulam_spiral'
      />
      <Header>The Question</Header>
      <Footer title={primalSpiralsTitle} />
    </Wrapper>
  );
};

export default PrimalSpirals;
