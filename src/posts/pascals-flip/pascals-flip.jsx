import AddOnes from 'posts/pascals-flip/inverted-pyramid-ones.png';
import AddX from 'posts/pascals-flip/inverted-pyramid-x.png';
import Body from 'components/post/post-body';
import CosX from 'posts/pascals-flip/inverted-pyramid-cos-x.png';
import Divider from 'components/post/post-divider';
import Footer from 'components/post/post-footer';
import Header from 'components/post/post-header';
import Image from 'components/post/post-image';
import Indent from 'components/post/post-indent';
import Integral1 from 'posts/pascals-flip/inverted-pyramid-ones-only.png';
import IntegralExamples from 'posts/pascals-flip/inverted-pyramid-integral-example.png';
import IntegralX from 'posts/pascals-flip/inverted-pyramid-x-step-2.png';
import IntegralX2 from 'posts/pascals-flip/inverted-pyramid-integral-x2.png';
import OneOverX from 'posts/pascals-flip/inverted-pyramid-one-over-x.png';
import PascalsTriangle from 'posts/pascals-flip/pascals-triangle.png';
import PowerOf2 from 'posts/pascals-flip/inverted-pyramid-2-power-of-n.png';
import SubtractionLine from 'posts/pascals-flip/inverted-pyramid-subtract-all.png';
import Title from 'components/post/post-title';
import Wrapper from 'components/post/post-wrapper';
import X2 from 'posts/pascals-flip/inverted-pyramid-x2.png';
import X3 from 'posts/pascals-flip/inverted-pyramid-x3.png';
import XComplex from 'posts/pascals-flip/inverted-pyramid-x2-complicated.png';

export const pascalsFlipTitle = "Pascal's Flip";
export const pascalsFlipDate = '6/18/2023';

export const PascalsFlip = () => {
  return (
    <Wrapper>
      <Title date={pascalsFlipDate} author='Braden Weber'>
        {pascalsFlipTitle}
      </Title>
      <Divider />
      <Body>
        Everyone knows Pascal's triangle. You start with 1 at the top, and on
        every subsequent layer of the pyramid, you add the two numbers above.
      </Body>
      <Image src={PascalsTriangle} />
      <Body>
        One of my favorite things to do when I'm bored is think of a popular
        mathematical thing I've been taught and then ask myself, which parts of
        this concept are arbitrary, and how can I construct something new by
        changing those arbitrary decisions to something else?
      </Body>
      <Body>
        In this case, I was sitting there thinking about Pascal's triangle and I
        thought, why does the pointed side have to be on the top? Why not start
        with a long line of numbers and work down to one at the bottom?
      </Body>
      <Body>So I made a long line of 1's and started adding</Body>
      <Image src={AddOnes} />
      <Body>
        I stopped pretty quickly because it was clear I wasn't doing anything
        groundbreaking. The pattern was obvious. So I thought okay, what can I
        do to shake up this pattern a bit?
      </Body>
      <Body>
        Maybe, instead of a long line of 1's on top, I can construct the numbers
        using a polynomial. The simplest one would be f(x) = x, where x starts
        at 1 and increases by 1 every step.
      </Body>
      <Image src={AddX} />
      <Body>
        This one was a little more interesting, but it still takes on a very
        predictable quality. The thing I enjoyed about Pascal's triangle is that
        it had some chaos inside. I couldn't explain it in a technical way, but
        subjectively, the numbers in Pascal's triangle make you look at them
        quizzically and wonder what you've gotten yourself into. Y'know?
      </Body>
      <Body>
        My first thought was hey, let's change up our f(x) to something more
        random, but I was afraid it was going to create more boring patterns.
        What else could I change?
      </Body>
      <Body>
        And then I got it. How about subtracting instead of adding? I've never
        seen it done, and I have no idea what to expect. Sounds adventurous!
      </Body>
      <Header>Flipping with subtraction!</Header>
      <Body>
        To do this, I will definitely need to make f(x) more complex, so I
        started small. f(x) = x³.
      </Body>
      <Image src={X3} />
      <Body>
        Woah! Hold up. When I started with a line of numbers calculated from
        f(x) = x³ and recursively subtracted the next number from the previous
        one, it all hit 0 at the same time. I would have never guessed that.
        This was the kind of behavior I was looking for!
      </Body>
      <Body>
        The first thing I wanted to do was try to replicate this behavior with
        something other than f(x) = x³. I started small with x².
      </Body>
      <Image src={X2} />
      <Body>
        Replicated! But there was something different about the two examples.
        The previous one ended up with 0s after four iterations and had a line
        of 6s right before. This one reached 0s after three iterations and had a
        line of 2s right before. What does it mean?
      </Body>
      <Body>
        I held these observations in my head as I tried a much more complex
        example. I tried f(x) = 2x³ - 3x² + x - 5.
      </Body>
      <Image src={XComplex} />
      <Body>
        Once again, the end result was a little different. This one ended in 0s
        after four lines and had a line of 12s right before.
      </Body>
      <Body>
        I was puzzling over these observations, trying to figure out if there
        was some pattern I was missing. I ran a few more examples and compiled
        the data.
      </Body>
      <Indent separate={true} widths={[200]}>
        f(x) = x² | runs for 3 lines, ends with 2s
      </Indent>
      <Indent separate={true} widths={[200]}>
        f(x) = x² - x + 1 | runs for 3 lines, ends with 2s
      </Indent>
      <Indent separate={true} widths={[200]}>
        f(x) = 2x² - 1 | runs for 3 lines, ends with 4s
      </Indent>
      <Indent separate={true} widths={[200]}>
        f(x) = x³ | runs for 4 lines, ends with 6s.
      </Indent>
      <Indent separate={true} widths={[200]}>
        f(x) = x³ - x² - x | runs for 4 lines, ends with 6s.
      </Indent>
      <Indent separate={true} widths={[200]}>
        f(x) = x³ + x² | runs for 4 lines, ends with 6s.
      </Indent>
      <Indent separate={true} widths={[200]}>
        f(x) = 2x³ -3x² + x - 5 | runs for 4 lines, ends with 12s
      </Indent>
      <Indent separate={true} widths={[200]}>
        f(x) = x⁴ | runs for 5 lines, ends with 24s
      </Indent>
      <Body>
        At this point, I started to see a pattern emerging. The line of numbers
        at the end seemed to depend upon the highest term within f(x). Rewriting
        the above data according to highest term looked like this.
      </Body>
      <Indent separate={true} widths={[130]}>
        f(x) = x² | 3 lines, ends with 2s
      </Indent>
      <Indent separate={true} widths={[130]}>
        f(x) = x² ... | 3 lines, ends with 2s
      </Indent>
      <Indent separate={true} widths={[130]}>
        f(x) = 2x² ... | 3 lines, ends with 4s
      </Indent>
      <Indent separate={true} widths={[130]}>
        f(x) = x³ | 4 lines, ends with 6s.
      </Indent>
      <Indent separate={true} widths={[130]}>
        f(x) = x³ ... | 4 lines, ends with 6s.
      </Indent>
      <Indent separate={true} widths={[130]}>
        f(x) = x³ ... | 4 lines, ends with 6s.
      </Indent>
      <Indent separate={true} widths={[130]}>
        f(x) = 2x³ ... | 4 lines, ends with 12s
      </Indent>
      <Indent separate={true} widths={[130]}>
        f(x) = x⁴ | 5 lines, ends with 24s
      </Indent>
      <Body>
        Whenever I changed things other than the highest term in f(x), the end
        result didn't change.
      </Body>
      <Body>
        Once I realized the link between how the pyramid ended and the highest
        term, I noticed a pattern that sparked my excitement again.
      </Body>
      <Indent>2 = 2</Indent>
      <Indent>6 = 2 * 3</Indent>
      <Indent>24 = 2 * 3 * 4</Indent>
      <Body>
        It looked like the last line of numbers followed closely to the
        factorial of the highest power. So if I wanted to predict the line of
        numbers it would end with, I could run it through this formula:
      </Body>
      <Indent>a * x^b ={'>'} a * (b!)</Indent>
      <Body>
        For the above examples, I checked to make sure this held true.
      </Body>
      <Indent separate={true} widths={[100]}>
        f(x) = x² | 1 * 2! = 2
      </Indent>
      <Indent separate={true} widths={[100]}>
        f(x) = 2x² | 2 * 2! = 4
      </Indent>
      <Indent separate={true} widths={[100]}>
        f(x) = x³ | 1 * 3! = 6
      </Indent>
      <Indent separate={true} widths={[100]}>
        f(x) = 2x³ | 2 * 3! = 12
      </Indent>
      <Indent separate={true} widths={[100]}>
        f(x) = x⁴ | 1 * 4! = 24
      </Indent>
      <Body>
        Eureka! What an unexpected pattern to find here! Recapping what we've
        got so far in a very long sentence:
      </Body>
      <Body>
        When we start with a line of numbers calculated by some polynomial f(x),
        and when we create a new line of numbers underneath by subtracting every
        right term from the left one, and we do this recursively until we reach
        0, the line right before the 0s will have only one number in it, and
        this number can be calculated only by looking at the highest term of
        f(x) and converting it using this form: a * x^b ={'>'} a * (b!).
      </Body>
      <Header>The most integral part</Header>
      <Body>While celebrating this find, it finally hit me.</Body>
      <Body>
        The a * (b!) is nice and neat, but it looks very much like something
        else. It looks like someone took the integral of the final number over
        and over until they reached the first term.
      </Body>
      <Body>I did some calculations to make sure.</Body>
      <Indent mb={5}>
        <b>x² from 2</b>
      </Indent>
      <Indent mt={5} mb={5}>
        ∫2 = 2x
      </Indent>
      <Indent mt={5} mb={5}>
        ∫2x = x²
      </Indent>
      <Indent mb={5}>
        <b>2x² from 4</b>
      </Indent>
      <Indent mt={5} mb={5}>
        ∫4 = 4x
      </Indent>
      <Indent mt={5} mb={5}>
        ∫4x = 2x²
      </Indent>
      <Indent mb={5}>
        <b>x³ from 6</b>
      </Indent>
      <Indent mt={5} mb={5}>
        ∫6 = 6x
      </Indent>
      <Indent mt={5} mb={5}>
        ∫6x = 3x²
      </Indent>
      <Indent mt={5} mb={5}>
        ∫3x² = x³
      </Indent>
      <Indent mb={5}>
        <b>2x³ from 12</b>
      </Indent>
      <Indent mt={5} mb={5}>
        ∫12 = 12x
      </Indent>
      <Indent mt={5} mb={5}>
        ∫12x = 6x²
      </Indent>
      <Indent mt={5} mb={5}>
        ∫6x² = 2x³
      </Indent>
      <Indent mb={5}>
        <b>x⁴ from 24</b>
      </Indent>
      <Indent mt={5} mb={5}>
        ∫24 = 24x
      </Indent>
      <Indent mt={5} mb={5}>
        ∫24x = 12x²
      </Indent>
      <Indent mt={5} mb={5}>
        ∫12x² = 4x³
      </Indent>
      <Indent mt={5}>∫4x³ = x⁴</Indent>
      <Body>
        I didn't know for sure, but I had a good feeling that this was the true
        pattern. At this time, I also noticed that the amount of times the
        number had to be taken to the integral was the same as the amount of
        lines it took to reach that final number before the 0s. I visualized it
        like this:
      </Body>
      <Image src={IntegralExamples} />
      <Body>
        Interestingly, this integral strategy didn't seem to apply to the middle
        rows in a consistent way. It only applied to the bottom and top row.
      </Body>
      <Body>
        But it was something! Using this, I could find the highest term in
        whatever polynomial had been used to calculate the first row.
      </Body>
      <Body>
        The next question came naturally. Could I calculate any of the other
        terms in f(x)?
      </Body>
      <Header>Calculating other parts</Header>
      <Body>After pondering this, I made a simple observation.</Body>
      <Body>
        Let's say I have the equation x² - x + 1. I do this whole flipped
        pyramid thing and land on the number 2, I run the integrals, and I
        figure out the first term is x².
      </Body>
      <Image src={IntegralX2} width={800} />
      <Body>
        Theoretically, I should be able go through each number in the line I
        started with and subtract x² from it. Whatever is left will be all the
        terms other than the highest term.
      </Body>
      <Image src={SubtractionLine} />
      <Body>
        In this example, we would be left with f(x) = -x + 1, as expected. Then
        I do the flipped pyramid again to figure out the highest term, which
        will be -x.
      </Body>
      <Image src={IntegralX} />
      <Body>
        Then I subtract -x from the top row, and I should be left with f(x) = 1.
        I can confirm this when I subtract -x from every row and see it's a list
        of ones
      </Body>
      <Image src={Integral1} />
      <Body>
        So with just that starting line of numbers, I can calculate all the
        terms of f(x) one by one. How cool! I love finding things I don't
        expect. Life is great.
      </Body>
      <Header>What about things other than polynomials?</Header>
      <Body>
        Now that I had satisfied myself with flipped pyramids of polynomials, I
        tried other things, such as f(x) = 1/x.
      </Body>
      <Image src={OneOverX} width={800} />
      <Body>
        Nothing jumped out to me with that same "What treasure did I just
        stumble upon" feeling. Next I tried f(x) = cos(x), except I jumped by
        increments of π/2 instead of 1.
      </Body>
      <Image src={CosX} width={800} />
      <Body>
        It brought an interesting pattern, but it was predictable. I didn't
        sense anything significant to mine from here. What about f(x) = 2^x?
      </Body>
      <Image src={PowerOf2} width={800} />
      <Body>
        I stopped early in this one because it was pretty obvious where it was
        going. Once again, an interesting pattern, but I didn't see anything
        significant to mine from here.
      </Body>
      <Body>
        If anyone can find other functions that produce interesting patterns, I
        would love to see them!
      </Body>
      <Header>Ending note</Header>
      <Body>
        I've had some ideas for how I could rigorously prove my inverted pyramid
        calculating polynomials scheme, but I haven't pursued them very far. If
        anyone could figure out how to prove the method mathematically instead
        of empirically, I would love to see the proof.
      </Body>
      <Footer />
    </Wrapper>
  );
};

export default PascalsFlip;
