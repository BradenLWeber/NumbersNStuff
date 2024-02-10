import Body from 'components/post/post-body';
import Divider from 'components/post/post-divider';
import ExampleSpiral from './example-spiral.png';
import ExampleSpiralShaded from './example-spiral-shaded.png';
import Footer from 'components/post/post-footer';
import Header from 'components/post/post-header';
import Image from 'components/post/post-image';
import Indent from 'components/post/post-indent';
import Letter from 'components/post/post-letter';
import { Link } from 'react-router-dom';
import { MathJax } from 'better-react-mathjax';
import NumberLineGaps from './number-line-gaps.png';
import Spiral100 from './spiral-100.png';
import Spiral10000 from './spiral-10000.png';
import Spiral10000000 from './spiral-10000000.png';
import Spiral1000000020000000 from './spiral-10000000-20000000.png';
import Spiral10000120deg from './spiral-10000-120deg.png';
import Spiral10000179deg from './spiral-10000-179deg.png';
import Spiral100001deg from './spiral-10000-1deg.png';
import Spiral1000060deg from './spiral-10000-60deg.png';
import Spiral13 from './spiral-13.png';
import Spiral17 from './spiral-17.png';
import SpiralPrimeLength from './spiral-prime-length.png';
import Title from 'components/post/post-title';
import UlamSpiral from './ulam-spiral.png';
import Wrapper from 'components/post/post-wrapper';
import { parseTitleToUrl } from 'utilities/functions';

export const primalSpiralsPt1Title = 'Primal Spirals - Part 1';
export const primalSpiralsPt1Date = '1/23/2024';

export const PrimalSpiralsPt1 = () => {
  return (
    <Wrapper>
      <Title
        playgroundName={primalSpiralsPt1Title}
        date={primalSpiralsPt1Date}
        author='Braden Weber'
      >
        {primalSpiralsPt1Title}
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
      <Body>
        For all the mysteries surrounding prime numbers, there are a few things
        we do know. The problem is that most things we know are statistical in
        nature. For example, we know that prime numbers are less dense the
        further up the number line we travel.
      </Body>
      <Body>
        We also know that prime numbers seem to congregate along certain
        functions. <MathJax inline>$n^2$</MathJax> + <Letter>n</Letter> +
        3399714628553118047 is a prime example (pun intended), where{' '}
        <Letter>n</Letter> is a positive integer (source:{' '}
        <a href='https://www.youtube.com/watch?v=iFuR97YcSLM' target='_blank'>
          Numberphile
        </a>
        ). Functions like this can be difficult to find, but the task becomes
        easier when we find ways to represent the primes geometrically. The
        human eye is good at spotting patterns, even if they aren't perfectly
        consistent.
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
      <Image src={ExampleSpiralShaded} height={200} />
      <Body>
        If you carry this out far enough, diagonal lines will seem to magically
        appear. It is amazing that the randomness of primes can produce apparent
        patterns like this.
      </Body>
      <Image
        src={UlamSpiral}
        height={300}
        cred='Thanassis.space'
        credRef='https://www.thanassis.space/primes.html'
      />
      <Header>My Own Spin</Header>
      <Body>
        One of my favorite methods of mathematical exploration can be described
        with this simple algorithm:
      </Body>
      <Indent>1) Find a popular mathematical concept.</Indent>
      <Indent>
        2) Think about which aspects of that concept are arbitrary.
      </Indent>
      <Indent>3) Change those things and see what happens!</Indent>
      <Body>
        We already did number 1 by finding this idea of a prime spiral. So let's
        look at number 2.
      </Body>
      <Body>
        I like the focus on primes, so I'm not going to mess with that. But the
        construction of the Ulam spiral seems like something that could easily
        change. This spiral was constructed very predictably. The lines always
        turn left once there is room to do so, and in this way, the spiral fills
        up all the available space.
      </Body>
      <Body>
        What if we allowed the prime numbers to determine the shape of the
        spiral instead?
      </Body>
      <Body>
        Say we start with 2 and draw a line of length 2. Then after that, we
        make a left turn and draw a line of length 3. Another left turn, and we
        draw a line of length 5. We can carry that out for as long as we want.
      </Body>
      <Image src={SpiralPrimeLength} width={500} />
      <Body>
        Honestly, it wasn't all I was hoping for. There aren't any clear
        patterns emerging, at least not to my eye. Maybe it would be better if
        the lines didn't get huge so quickly.
      </Body>
      <Body>
        I've got it! I can take the <i>gaps</i> in between the primes to
        determine the length of the lines.
      </Body>
      <Body>
        So the first two primes are 2 and 3. That's a gap of 1. The next prime
        is 5, which is 2 away from 3. The next prime is 7, which is 2 away from
        5.{' '}
      </Body>
      <Image src={NumberLineGaps} width={600} />
      <Body>
        Let's see how that looks if we generate a spiral using primes up to the
        number 17.
      </Body>
      <Image src={Spiral13} width={200} />
      <Body>
        Hm, it looks like the last line is going to overlap with some of the
        previous lines.
      </Body>
      <Image src={Spiral17} width={200} />
      <Body>
        If we carry this out, it won't be clear where the spiral is going
        because the lines are overlapping. I can add a color scheme to make
        overlapping lines more apparent, but I don't think it will be perfect.
        Let's try using the primes up to 100. I'll make a little algorithm to
        speed up the process. I'll also add a green dot to the start of the
        spiral and a red dot to the end.
      </Body>
      <Image src={Spiral100} width={170} />
      <Body>
        It's a little anti-climactic, but there is also a sort of pattern-like
        quality in the randomness. Let me try cranking it up to 10,000 just to
        see what happens.
      </Body>
      <Image src={Spiral10000} />
      <Body>
        Woah! That is the kind of stuff I live for! There is a strange beauty to
        the spiral. It's like the primes all worked together to paint a picture.
      </Body>
      <Body>
        Okay, I have to test my limits, right? Let's try all the primes up to
        10,000,000.
      </Body>
      <Image src={Spiral10000000} width={220} />
      <Body>
        Either I'm going crazy, or the prime numbers just made a seahorse.
      </Body>
      <Body>
        At this point, the program is running so slowly that I'm unsure how high
        I can continue. Rendering so many lines on screens takes a lot of CPU.
        So the question is, how can I access those larger numbers?
      </Body>
      <Body>
        One possible solution is to change the starting number. I've been
        starting at 2, but that was an arbitrary decision. Why not try starting
        somewhere else? Let's see what happens if I make a spiral using the
        primes between 10,000,000 and 20,000,000.
      </Body>
      <Image src={Spiral1000000020000000} width={220} />
      <Body>
        Darn, I was hoping for another animal. I'll call this one a turtle with
        a long tail ending in the number 3.
      </Body>
      <Body>
        Just by these rules, I could have a ton of fun constructing spirals if I
        just change the range of numbers I'm looking at.
      </Body>
      <Body>
        But it strikes me that I made one more arbitrary decision. At the end of
        each line, I chose to turn left 90 degrees. What happens if I change
        that angle?
      </Body>
      <Body>
        For example, what if I do the primes up to 10,000 again, but this time I
        turn 120 degrees between each line instead of 90?
      </Body>
      <Image src={Spiral10000120deg} width={400} />
      <Body>
        Hey, that's got the same sort of beauty that a 90 degree turn makes! I
        have to think a 60 degree turn will be cool as well.
      </Body>
      <Image src={Spiral1000060deg} width={300} />
      <Body>
        That is so unexpectedly dense! Even with the randomness of prime
        numbers, all these lines ended up in roughly the same region. Huh.
      </Body>
      <Body>
        Now I just want to go crazy. How does a 1 degree turn and a 179 degree
        turn look?
      </Body>
      <Image src={Spiral10000179deg} width={400} />
      <Image src={Spiral100001deg} width={300} />
      <Body>
        Is it weird if I laugh? What cool results! All of this generated from
        the seeming randomness of primes. These are the kinds of pieces that we
        need in art museums, people!
      </Body>
      <Body>
        For now, I am content with these parameters, but you better believe I'm
        going to go on generating all sorts of other spirals. And you can join
        me! Head over to the{' '}
        <Link to={'/playground/' + parseTitleToUrl(primalSpiralsPt1Title)}>
          playground
        </Link>{' '}
        and make your own spirals. You can change the range of numbers and the
        angle of the spiral. Comment the best combinations you can find!
      </Body>
      <Footer title={primalSpiralsPt1Title} />
    </Wrapper>
  );
};

export default PrimalSpiralsPt1;
