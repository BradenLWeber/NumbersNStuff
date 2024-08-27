import Body from 'components/post/post-body';
import Divider from 'components/post/post-divider';
import Footer from 'components/post/post-footer';
import Header from 'components/post/post-header';
import Title from 'components/post/post-title';
import Wrapper from 'components/post/post-wrapper';

export const primalSpiralsPt2Title = 'Primal Spirals - Part 2';
export const primalSpiralsPt2Date = '8/25/2024';

export const PrimalSpiralsPt2 = () => {
  return (
    <Wrapper>
      <Title
        playgroundName={primalSpiralsPt2Title}
        date={primalSpiralsPt2Date}
        author='Braden Weber'
      >
        {primalSpiralsPt2Title}
      </Title>
      <Divider />
      <Header>Introduction to Prime Spirals</Header>
      <Body>
        Primes are still one of the great mysteries of mathematics. The quality
        of being prime seems to be intrinsic to numbers, yet the pattern of
        prime numbers remains elusive. There is no equation that can determine
        if a number is prime; the only way to know if a number is prime is
        through brute-force testing.
      </Body>
      <Footer title={primalSpiralsPt2Title} />
    </Wrapper>
  );
};

export default PrimalSpiralsPt2;
