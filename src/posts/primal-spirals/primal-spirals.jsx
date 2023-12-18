import Divider from 'components/post/post-divider';
import Footer from 'components/post/post-footer';
import Title from 'components/post/post-title';
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
        less likely the further up the number line one travels.
      </Body>
      <Body>
        We also know that prime numbers tend to congregate along certain
        functions. 2^n - 1 is a prime example (pun intended), where n is a
        positive integer. Primes that can be generated using this equation are
        known as Mersenne Primes.
      </Body>
      <Body>
        There are other equations out there that generate primes more
        consistently than other equations. These equations can be difficult to
        find, but one strategy for finding them is to build helpful
        visualizations for primes.
      </Body>
      <Footer title={primalSpiralsTitle} />
    </Wrapper>
  );
};

export default TheDivideBy3Game;
