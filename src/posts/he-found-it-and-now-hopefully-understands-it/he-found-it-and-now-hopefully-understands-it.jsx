import Body from 'components/post/post-body';
import Divider from 'components/post/post-divider';
import Footer from 'components/post/post-footer';
import Graph1 from './graph1.png';
import Graph2 from './graph2.png';
import Graph3 from './graph3.png';
import Header from 'components/post/post-header';
import Image from 'components/post/post-image';
import { Link } from 'react-router-dom';
import { MathJax } from 'better-react-mathjax';
import Title from 'components/post/post-title';
import Wrapper from 'components/post/post-wrapper';

export const heFoundItAndNowHopefullyUnderstandsItTitle =
  'He Found It and Now Hopefully Understands It';
export const heFoundItAndNowHopefullyUnderstandsItDate = '12/17/2023';

export const HeFoundItAndNowHopefullyUnderstandsIt = () => {
  return (
    <Wrapper>
      <Title
        date={heFoundItAndNowHopefullyUnderstandsItDate}
        author='Jack Vandermolen'
      >
        {heFoundItAndNowHopefullyUnderstandsItTitle}
      </Title>
      <Body>
        <i>
          A reader's response to the post{' '}
          <Link to='/post/i-found-it-but-i-dont-understand-it'>
            I found it but I don't understand it
          </Link>
          .
        </i>
      </Body>
      <Divider />
      <Header>Problem</Header>
      <Body>
        We will show that for any positive integer <i>a</i>, the following
        equation holds
      </Body>
      <MathJax>
        {
          '$$\\lim_{m \\to \\infty} \\sum_{n=a^m+1}^{a^{m+1}} \\frac{1}{n} = \\ln(a)$$'
        }
      </MathJax>
      <Body>
        as presented in Braden's June post, “
        <Link to='/post/i-found-it-but-i-dont-understand-it'>
          I Found It but I Don't Understand It
        </Link>
        .”
      </Body>
      <Header>Background</Header>
      <Body>
        From the perspective of somebody who has taken a lot of calculus, and
        then analysis (calculus with proofs) afterwards, the proof is pretty
        straightforward. In a way, the most difficult part of this problem is
        realizing that the question should even be asked, and so it is quite
        remarkable that Braden was able to pull this equality seemingly out of
        nowhere. I think the proof presented here shouldn't be overly difficult
        to follow for somebody who has recently taken Calculus II, and I think
        could be understood with a bit of work by someone who has taken Calculus
        I.
      </Body>
      <Body>
        The key step in this proof is realizing the connection between
        summations and integrals, though this is a little bit different than how
        they are typically connected. The integral of a function <i>f</i> from{' '}
        <i>a</i> to <i>b</i>, that is{' '}
        <MathJax inline>{'$\\int_a^b f(x) dx$'}</MathJax>, gives the area
        between the function <i>f</i> and the horizontal axis over the interval
        from <i>a</i> to <i>b</i>, shaded in blue in the graph below.
      </Body>
      <Image src={Graph1} height={400} />
      <Body>
        We can consider the sum{' '}
        <MathJax inline>{'$\\sum_{(n = a + 1)}^b f(n)$'}</MathJax> to give an
        approximation of this same area, covering the area with rectangles of
        width <i>1</i> and height the output of the function at the rectangles
        location, shaded in red. Under the right conditions (when the function
        changes gradually enough), the summation and the integral of the
        function will approach the same value when we take the limit.
      </Body>
      <Body>
        When looking at this problem, I happened to recall that{' '}
        <MathJax inline>$ln(x)$</MathJax> is an antiderivative of{' '}
        <MathJax inline>{'$\\frac{1}{x}$'}</MathJax>. In other words, the area
        between the function
        <MathJax inline>{'$\\frac{1}{x}$'}</MathJax> and the horizontal axis
        over the interval from <i>0</i> to <i>b</i> is equal to{' '}
        <MathJax inline>$ln(b)$</MathJax>. This fact is typically memorized in
        one's first or second course in calculus, but the proof is a bit tricky
        and will be omitted here. This fact lead me to try this technique of
        comparing summations and integrals.
      </Body>
      <Header>Proof</Header>
      <Body>
        The graph below demonstrates that the following inequality holds for all
        positive integers <i>a</i> and <i>m</i>:
      </Body>
      <MathJax>
        {
          '$$\\int_{a^m+1}^{a^{m+1}+1} \\frac{1}{x} dx \\leq \\sum_{n=a^m+1}^{a^{m+1}} \\frac{1}{n} \\leq \\int_{a^m}^{a^{m+1}} \\frac{1}{x} dx $$'
        }
      </MathJax>
      <Body>
        Notice that the red (northeast lines) and blue (northwest lines)
        rectangles cover the same area, representing the summation, but the the
        blue rectangles show that the sum is less than the area under the curve
        from <MathJax inline>$a^m$</MathJax> to{' '}
        <MathJax inline>{'$a^{m + 1}$'}</MathJax>, while the red rectangles show
        that the sum is greater than the area under the curve from{' '}
        <MathJax inline>$a^m+1$</MathJax> to{' '}
        <MathJax inline>{'$a^{m + 1}+1$'}</MathJax>.
      </Body>
      <Image src={Graph2} height={400} />
      <Body>
        Applying a limit to each part of the inequality, we may then observe
        that
      </Body>
      <MathJax>
        {
          '$$\\lim_{m \\to \\infty} \\int_{a^m+1}^{a^{m+1}+1} \\frac{1}{x} dx \\leq \\lim_{m \\to \\infty} \\sum_{n=a^m+1}^{a^{m+1}} \\frac{1}{n} \\leq \\lim_{m \\to \\infty} \\int_{a^m}^{a^{m+1}} \\frac{1}{x} dx $$'
        }
      </MathJax>
      <Body>
        If we can show that the limits of the integrals approach the same value,
        namely ln(a), then the limit of the summation must approach that same
        value, because it is stuck between the outer values.
      </Body>
      <Body>
        Following, we evaluate the right side; a couple of the equalities are
        justified by the rules of logarithms and exponents.
      </Body>
      <MathJax>
        {`\\begin{align*}
          \\lim_{m \\to \\infty} \\int_{a^m}^{a^{m+1}} \\frac{1}{x} dx
          & = \\lim_{m \\to \\infty} \\ln(x) |_{a^m}^{a^{m+1}} \\\\
          & = \\lim_{m \\to \\infty} \\ln(a^{m+1}) - \\ln(a^m)\\\\
          & = \\lim_{m \\to \\infty} \\ln \\left(\\frac{a^{m+1}}{a^m} \\right) \\\\
          & = \\lim_{m \\to \\infty} \\ln(a)\\\\
          & = \\ln(a)
        \\end{align*}`}
      </MathJax>
      <Body>
        The left side is a bit more complicated because we need to account for
        the added 1's, but it starts off similar. We may move the limit inside
        of the natural log because the natural log is a continuous function (it
        is smooth), and then we divide the numerator and denominator by{' '}
        <MathJax inline>$a^m$</MathJax>, noting that{' '}
        <MathJax inline>{'$lim_{m \\to \\infty} \\frac{1}{a^m} = 0$'}</MathJax>,
        in order to evaluate the limit.
      </Body>
      <MathJax>
        {`\\begin{align*}
                \\lim_{m \\to \\infty} \\int_{a^m+1}^{a^{m+1}+1} \\frac{1}{x} dx
                & = \\lim_{m \\to \\infty} \\ln(x) |_{a^m+1}^{a^{m+1}+1} \\\\
                & = \\lim_{m \\to \\infty} \\ln(a^{m+1}+1) - \\ln(a^m+1)\\\\
                & = \\lim_{m \\to \\infty} \\ln \\left(\\frac{a^{m+1}+1}{a^m+1} \\right) \\\\
                & = \\ln \\left( \\lim_{m \\to \\infty} \\frac{a^{m+1}+1}{a^m+1} \\right) \\\\
                & = \\ln \\left( \\lim_{m \\to \\infty} \\frac{a+\\tfrac{1}{a^m}}{1+\\tfrac{1}{a^m}} \\right) \\\\
                & = \\ln \\left( \\frac{a+0}{1+0} \\right) \\\\
                & = \\ln(a)
              \\end{align*}`}
      </MathJax>
      <Body>Therefore,</Body>
      <MathJax>
        {
          '$$\\ln(a) = \\lim_{m \\to \\infty} \\int_{a^m+1}^{a^{m+1}+1} \\frac{1}{x} dx \\leq \\lim_{m \\to \\infty} \\sum_{n=a^m+1}^{a^{m+1}} \\frac{1}{n} \\leq \\lim_{m \\to \\infty} \\int_{a^m}^{a^{m+1}} \\frac{1}{x} dx = \\ln(a)$$'
        }
      </MathJax>
      <Body>and so we achieve our desired result</Body>
      <MathJax>
        {
          '$$\\lim_{m \\to \\infty} \\sum_{n=a^m+1}^{a^{m+1}} \\frac{1}{n} = \\ln(a).$$'
        }
      </MathJax>
      <Header>Additional Observations</Header>
      <Body>
        An alternative set of limits of integration on the function{' '}
        <MathJax inline>{'$\\frac{1}{x}$'}</MathJax> gives the same result:
      </Body>
      <MathJax>
        {
          '$$\\int_1^a \\frac{1}{x} dx = \\ln(x)|_1^a = \\ln(a) - \\ln(1) = \\ln(a)$$'
        }
      </MathJax>
      <Body>
        Given what we have already shown with Braden's identity, this implies
        that
      </Body>
      <MathJax>
        {
          '$$\\int_1^a \\frac{1}{x} dx = \\ln(a) = \\lim_{m \\to \\infty} \\int_{a^m}^{a^{m+1}} \\frac{1}{x} dx.$$'
        }
      </MathJax>
      <Body>
        That is, the area of the blue (northwest lines) region below approaches
        the area of the red (northeast lines) region as <i>m</i> approaches
        infinity.
      </Body>
      <Image src={Graph3} height={400} />
      <Body>
        I am curious if there is some geometric interpretation for why these
        should have the same area (there is a certain amount of fudging with the
        added 1's here that makes it seem reasonable for this to be fairly
        inconsequential, however). One may wish to consider that{' '}
        <MathJax inline>{'$\\int_1^a \\frac{1}{x} dx$'}</MathJax> is just the
        case from the limit when <i>m</i> = 0:
      </Body>
      <MathJax>
        {
          '$$\\int_{a^0}^{a^{0+1}} \\frac{1}{x} dx = \\int_1^a \\frac{1}{x} dx.$$'
        }
      </MathJax>
      <Body>
        I also wonder if Braden's summation would be a good way to approximate
        the value of ln(a). One could perhaps calculate an error bound and
        compare the performance to that of Taylor polynomials, which I believe
        calculators generally use.
      </Body>
      <Footer />
    </Wrapper>
  );
};

export default HeFoundItAndNowHopefullyUnderstandsIt;
