import Body from 'components/post/post-body';
import Checkerboard from './checkerboard.png';
import Divider from 'components/post/post-divider';
import EvenSpiral from './even-spiral.png';
import EveryThreeGoneSpiral from './every-three-gone-spiral.png';
import EveryThreeSpiral from './every-three-spiral.png';
import Footer from 'components/post/post-footer';
import Gap_1_1_1_1_1_1_1_1_2 from './gap_1_1_1_1_1_1_1_1_2.png';
import Gap_1_1_1_1_1_1_1_2 from './gap_1_1_1_1_1_1_1_2.png';
import Gap_1_1_1_1_1_1_2 from './gap_1_1_1_1_1_1_2.png';
import Gap_1_1_1_1_1_2 from './gap_1_1_1_1_1_2.png';
import Gap_1_1_1_1_2 from './gap_1_1_1_1_2.png';
import Gap_1_1_1_2 from './gap_1_1_1_2.png';
import Gap_1_1_2 from './gap_1_1_2.png';
import Gap_1_2 from './gap_1_2.png';
import Header from 'components/post/post-header';
import Image from 'components/post/post-image';
import Indent from 'components/post/post-indent';
import Jump_1_10 from './jump_1_10.png';
import Jump_1_2 from './jump_1_2.png';
import Jump_1_3 from './jump_1_3.png';
import Jump_1_4 from './jump_1_4.png';
import Jump_1_5 from './jump_1_5.png';
import Jump_1_6 from './jump_1_6.png';
import Jump_1_7 from './jump_1_7.png';
import Jump_1_8 from './jump_1_8.png';
import Jump_1_9 from './jump_1_9.png';
import Jump_2_5 from './jump_2_5.png';
import Jump_3_5 from './jump_3_5.png';
import Jump_4_5 from './jump_4_5.png';
import Sequence_1_1_1_1_35 from './sequence_1_1_1_1_35.png';
import Sequence_1_1_1_2_1_1_1_3_1_1_1_4_1_1_1_5 from './sequence_1_1_1_2_1_1_1_3_1_1_1_4_1_1_1_5.png';
import Sequence_1_2_3_4_3_2 from './sequence_1_2_3_4_3_2.png';
import Sequence_1_6_2_7_3_8_4_9_5 from './sequence_1_6_2_7_3_8_4_9_5.png';
import Sequence_2_5_2 from './sequence_2_5_2.png';
import Sequence_444_3 from './sequence_444_3.png';
import Sequence_47_32_21_3 from './sequence_47_32_21_3.png';
import Sequence_s10_1_3_2_4 from './sequence_s10_1_3_2_4.png';
import Sequence_s1_1_3_2_4 from './sequence_s1_1_3_2_4.png';
import Sequence_s2_1_3_2_4 from './sequence_s2_1_3_2_4.png';
import Sequence_s3_1_3_2_4 from './sequence_s3_1_3_2_4.png';
import Sequence_s4_1_3_2_4 from './sequence_s4_1_3_2_4.png';
import Sequence_s5_1_3_2_4 from './sequence_s5_1_3_2_4.png';
import Sequence_s6_1_3_2_4 from './sequence_s6_1_3_2_4.png';
import Sequence_s7_1_3_2_4 from './sequence_s7_1_3_2_4.png';
import Sequence_s8_1_3_2_4 from './sequence_s8_1_3_2_4.png';
import Sequence_s9_1_3_2_4 from './sequence_s9_1_3_2_4.png';
import Title from 'components/post/post-title';
import UlamSpiral from './ulam-spiral.png';
import UlamSpiralZoomed from './ulam-spiral-zoomed.png';
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
        if a number is prime.
      </Body>
      <Body>
        With the mysteriousness of primes, anything mathematical that shows a
        pattern in the primes is like candy to me. I love finding organization
        in that beautiful chaos.
      </Body>
      <Body>
        One such organization is the Ulam Spiral, which I explain more in depth
        in{' '}
        <a
          href='https://numbers-n-stuff.com/post/primal-spirals---part-1'
          target='_blank'
        >
          Part 1
        </a>{' '}
        of the primal spirals. The idea is that the integers are written in
        sequence starting in the middle and spiraling outward, and the prime
        numbers are colored in.
      </Body>
      <Image src={UlamSpiralZoomed} height={200} />
      <Body>
        Just as a refresher, here's what it looks like on a larger scale. The
        red dot is marking the center of the spiral.
      </Body>
      <Image src={UlamSpiral} width={600} />
      <Body>
        In part 1, I explained this spiral and then scooted right past it. But I
        want to go back again and ask my favorite question. Is there something
        about the construction of the Ulam Spiral that was arbitrarily chosen?
        And more interestingly, what happens when we change it?
      </Body>
      <Header>My Spin</Header>
      <Body>
        We must start by asking ourselves, why does the Ulam Spiral seem to show
        diagonal lines? It could make lines in any direction, so why diagonal?
      </Body>
      <Body>
        The answer is somewhat simple given the observation that every even
        number is divisible by 2. That means half the boxes are never capable of
        holding a prime because they are a multiple of 2. What would it look
        like if we only highlighted the boxes holding odd numbers?
      </Body>
      <Image src={Checkerboard} width={400} />
      <Body>
        Yes indeed, it is a checkerboard pattern. That means clear horizontal
        and vertical lines are almost impossible as they would have too many
        gaps, while diagonal lines can chain together with no gaps.
      </Body>
      <Body>
        So now the question. How can we change our selection of numbers to allow
        for lines of different shapes?
      </Body>
      <Header>Taking Ulam to the Next Level</Header>
      <Body>
        My first thought is to filter out all the even numbers. Since the even
        numbers are what cause the checkerboard pattern, maybe taking them out
        will allow for new patterns, right? So I'll craft a spiral that goes 1,
        3, 5, 7, and so on.
      </Body>
      <Image
        src={EvenSpiral}
        width={300}
        description='All odd numbers (1, 3, 5, 7, 9...)'
      />
      <Body>
        This shouldn't be to complicated to calculate in a larger scale, so
        let's give that a shot.
      </Body>
      <Image
        src={Jump_1_2}
        width={600}
        description='All odd numbers (1, 3, 5, 7, 9...)'
      />
      <Body>
        Hey! That's the kind of stuff I live for! There's still the chaos of
        primes, but some clear patterns are emerging. It's the kind of result
        that I don't immediately grasp, and I probably never will, but it seems
        important somehow.
      </Body>
      <Body>
        Notice the clear pinwheel type shape in the whitespace going out from
        the middle. And notice how each quadrant of that pinwheel seems to have
        faint outlines that are parallel to the pinwheel lines. This <i>did</i>{' '}
        produce vertical and horizontal lines just like I was hoping!
      </Body>
      <Body>
        Any easily contented person might stop there, but I spent way to long
        coding up something that could make prime spirals and I'm going to make
        it worth my time! Not to mention, it's pretty easy to tweak my spiral
        and see — what happens when we take away all the numbers divisible by 3?
      </Body>
      <Image
        src={EveryThreeGoneSpiral}
        width={300}
        description='All numbers except those divisible by 3 (1, 2, 4, 5, 7...)'
      />
      <Body>
        So far I'm noting that the numbers in the spiral repeat the same pattern
        over and over: even, even, odd, odd. I wonder what that one looks like
        on a larger scale?
      </Body>
      <Image
        src={Gap_1_2}
        width={600}
        description='All numbers except those divisible by 3 (1, 2, 4, 5, 7...)'
      />
      <Body>
        Another beautiful result with just as much pattern as chaos! Goodness, I
        am enjoying this too much. I gotta check what happens for each case of
        this up through 10, taking away all numbers divisible by 4, then 5, then
        6, and so on.
      </Body>
      <Image
        src={Gap_1_1_2}
        width={600}
        description='All numbers except those divisible by 4 (1, 2, 3, 5, 6...)'
      />
      <Image
        src={Gap_1_1_1_2}
        width={600}
        description='All numbers except those divisible by 5 (1, 2, 3, 4, 6, 7...)'
      />
      <Image
        src={Gap_1_1_1_1_2}
        width={600}
        description='All numbers except those divisible by 6 (1, 2, 3, 4, 5, 7, 8...)'
      />
      <Image
        src={Gap_1_1_1_1_1_2}
        width={600}
        description='All numbers except those divisible by 7 (1, 2, 3, 4, 5, 6, 8, 9...)'
      />
      <Image
        src={Gap_1_1_1_1_1_1_2}
        width={600}
        description='All numbers except those divisible by 8 (1, 2, 3, 4, 5, 6, 7, 9, 10...)'
      />
      <Image
        src={Gap_1_1_1_1_1_1_1_2}
        width={600}
        description='All numbers except those divisible by 9 (1, 2, 3, 4, 5, 6, 7, 8, 10, 11...)'
      />
      <Image
        src={Gap_1_1_1_1_1_1_1_1_2}
        width={600}
        description='All numbers except those divisible by 10 (1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12...)'
      />
      <Divider />
      <Body>
        Okay okay, this has been fun, but I have another idea I'm interested in
        now. What if instead of focusing on the numbers I'm taking away, I
        instead focus on the numbers I'm leaving? For example, I could only{' '}
        <i>leave</i> every third number.
      </Body>
      <Image
        src={EveryThreeSpiral}
        width={300}
        description='Starting at 1 and counting by 3 (1, 4, 7, 10, 13...)'
      />
      <Body>
        Of course, if we leave every third number, we couldn't start at 0 or
        else we would get 0, 3, 6, 9, etc, and none of them would be prime. But
        if we begin with 1, we'll get 1, 4, 7, 10, etc, and we know that will
        give us some primes.
      </Body>
      <Body>Let's give it a whirl on a larger scale (pun intended)!</Body>
      <Image
        src={Jump_1_3}
        width={600}
        description='Starting at 1 and counting by 3 (1, 4, 7, 10, 13...)'
      />
      <Body>
        It's looking similar to our basic spiral, but with a little difference
        in which areas are concentrated. Let's go ahead and try this strategy
        for all the possible gaps, from 4 up to 10.
      </Body>
      <Image
        src={Jump_1_4}
        width={600}
        description='Starting at 1 and counting by 4 (1, 5, 9, 13...)'
      />
      <Image
        src={Jump_1_5}
        width={600}
        description='Starting at 1 and counting by 5 (1, 6, 11, 16...)'
      />
      <Image
        src={Jump_1_6}
        width={600}
        description='Starting at 1 and counting by 6 (1, 7, 13, 19, 25...)'
      />
      <Image
        src={Jump_1_7}
        width={600}
        description='Starting at 1 and counting by 7 (1, 8, 15, 22, 29...)'
      />
      <Image
        src={Jump_1_8}
        width={600}
        description='Starting at 1 and counting by 8 (1, 9, 17, 25, 33...)'
      />
      <Image
        src={Jump_1_9}
        width={600}
        description='Starting at 1 and counting by 9 (1, 10, 19, 28, 37...)'
      />
      <Image
        src={Jump_1_10}
        width={600}
        description='Starting at 1 and counting by 10 (1, 11, 21, 31, 41...)'
      />
      <Body>
        I mean, it doesn't get much better than that! It's interesting that the
        odd number gaps tend to make diagonal lines. I think that makes sense,
        since adding an odd number repeatedly results in even, then odd, then
        even, etc. Since only odd numbers can be primes, the resulting patterns
        must be like a checkerboard again. On the other hand, even number gaps
        tend to make vertical and horizontal lines. I can't quite explain that
        one at the moment. Also interesting to note that, of all these gaps, 6
        is by far the most prime-concentrated.
      </Body>
      <Divider />
      <Body>
        While all this is interesting, I'm distracted by the realization of
        another arbitrary decision we made. We're starting at 1 every time, when
        we could start at any number. That seems like it's worth experimenting
        with!
      </Body>
      <Body>
        How about to start, we look at the sequence that starts at 1 and counts
        up by 5. That means it goes 1, 6, 11, 16, etc. Let's see what happens if
        instead of starting at 1, we start at 2, 3, or 4. We don't need to check
        the sequence that starts at 5 because there will never be a prime number
        in the sequence (write out the sequence if you don't believe me).
      </Body>
      <Image
        src={Jump_1_5}
        width={600}
        description='Starting at 1 and counting by 5 (1, 6, 11, 16...)'
      />
      <Image
        src={Jump_2_5}
        width={600}
        description='Starting at 2 and counting by 5 (2, 7, 12, 17...)'
      />
      <Image
        src={Jump_3_5}
        width={600}
        description='Starting at 3 and counting by 5 (3, 8, 13, 18...)'
      />
      <Image
        src={Jump_4_5}
        width={600}
        description='Starting at 4 and counting by 5 (4, 9, 14, 19...)'
      />
      <Body>
        Hm. The general pattern is similar, but the concentrated areas are
        definitely moving. I guess starting number doesn't make a lot of
        difference in this specific case, but maybe it would in other cases?
      </Body>
      <Body>
        Well... I'll spare you the work. In every case I've tried that has
        similar parameters as the one above, the results are similar too. I
        can't find a case where different starting numbers produce very
        different patterns.
      </Body>
      <Body>
        I'm not giving up on this idea yet though. I want to try it out in a
        little more complicated of a spiral...
      </Body>
      <Header>Ulam Permutations with More Complexity</Header>
      <Body>
        Okay, I have one thing left to try. What happens when I make the
        sequence a bit more complex? I'm imagining a system where I can specify
        an arbitrary list of numbers, like 1, 3, 2, 4, and it will construct the
        list of numbers by using my input as a list of <i>gaps</i> between
        numbers. So the example I just mentioned would look like this:
      </Body>
      <Indent>Gaps: 1, 3, 2, 4</Indent>
      <Indent>
        Result: 1, 2, 5, 7, 11, 12, 15, 17, 21, 22, 25, 27, 31, 32, 35, 37,
        41...
      </Indent>
      <Body>
        You can see the gaps between each number fits the pattern I provided,
        looping into infinity.
      </Body>
      <Indent>
        1 + <b>1</b> = 2
      </Indent>
      <Indent>
        {' '}
        2 + <b>3</b> = 5
      </Indent>
      <Indent>
        5 + <b>2</b> = 7
      </Indent>
      <Indent>
        7 + <b>4</b> = 11
      </Indent>
      <Indent>
        11 +<b>1</b> = 12
      </Indent>
      <Indent>
        12 + <b>3</b> = 15
      </Indent>
      <Indent>...</Indent>
      <Body>
        Let's give this number sequence a shot and see if it comes up with
        anything interesting.
      </Body>
      <Image
        src={Sequence_s1_1_3_2_4}
        width={600}
        description='Starting at 1 and using sequence 1, 3, 2, 4 (1, 2, 5, 7, 11, 12, 15, 17, 21, 22...)'
      />
      <Body>
        Interesting, that's a similar pattern to when we took away every number
        divisible by 3, even though this pattern definitely includes numbers
        divisible by 3. Seems like there may be general patterns that are shared
        among different number sequences.
      </Body>
      <Body>
        I might ponder that more later, but for now, I'm still really curious
        about the question of changing the starting number. That spiral started
        with 1. Let's try making spirals starting with all the numbers between 1
        and 10.
      </Body>
      <Image
        src={Sequence_s2_1_3_2_4}
        width={600}
        description='Starting at 2 and using sequence 1, 3, 2, 4 (2, 3, 6, 8, 12, 13, 16, 18, 22, 23...)'
      />
      <Image
        src={Sequence_s3_1_3_2_4}
        width={600}
        description='Starting at 3 and using sequence 1, 3, 2, 4 (3, 4, 7, 9, 13, 14, 17, 19, 23, 24...)'
      />
      <Image
        src={Sequence_s4_1_3_2_4}
        width={600}
        description='Starting at 4 and using sequence 1, 3, 2, 4 (4, 5, 8, 10, 14, 15, 18, 20, 24, 25...)'
      />
      <Image
        src={Sequence_s5_1_3_2_4}
        width={600}
        description='Starting at 5 and using sequence 1, 3, 2, 4 (5, 6, 9, 11, 15, 16, 19, 21, 25, 26...)'
      />
      <Image
        src={Sequence_s6_1_3_2_4}
        width={600}
        description='Starting at 6 and using sequence 1, 3, 2, 4 (6, 7, 10, 12, 16, 17, 20, 22, 26, 27...)'
      />
      <Image
        src={Sequence_s7_1_3_2_4}
        width={600}
        description='Starting at 7 and using sequence 1, 3, 2, 4 (7, 8, 11, 13, 17, 18, 21, 23, 27, 28...)'
      />
      <Image
        src={Sequence_s8_1_3_2_4}
        width={600}
        description='Starting at 8 and using sequence 1, 3, 2, 4 (8, 9, 12, 14, 18, 19, 22, 24, 28, 29...)'
      />
      <Image
        src={Sequence_s9_1_3_2_4}
        width={600}
        description='Starting at 9 and using sequence 1, 3, 2, 4 (9, 10, 13, 15, 19, 20, 23, 25, 29, 30...)'
      />
      <Image
        src={Sequence_s10_1_3_2_4}
        width={600}
        description='Starting at 10 and using sequence 1, 3, 2, 4 (10, 11, 14, 16, 20, 21, 24, 26, 30, 31...)'
      />
      <Body>
        Intriguing! There's a definite theme of diagonal lines from the top left
        to bottom right, but the concentration of primes varies quite a lot.
        Starting at 4 also produced no primes, which caught me off guard.
        There's that indescribable, satisfying blend of randomness and order
        that speaks to me.
      </Body>
      <Body>
        With such interesting results, I have to try other complex sequences. To
        get a gauge of the types of results they produce, I want to try an array
        of different kinds of sequences. I'll just pull a bunch of random ones
        from my brain and see if anything interesting crops up.
      </Body>
      <Image
        src={Sequence_2_5_2}
        width={600}
        description='Using sequence 2, 5, 2 (1, 3, 8, 10, 12, 17, 19...)'
      />
      <Image
        src={Sequence_1_1_1_1_35}
        width={600}
        description='Using sequence 1, 1, 1, 1, 35 (1, 2, 3, 4, 5, 40, 41...)'
      />
      <Image
        src={Sequence_1_2_3_4_3_2}
        width={600}
        description='Using sequence 1, 2, 3, 4, 3, 2 (1, 2, 4, 7, 11, 14, 16, 17...)'
      />
      <Image
        src={Sequence_47_32_21_3}
        width={600}
        description='Using sequence 47, 32, 21, 3 (1, 48, 70, 91, 94, 141...)'
      />
      <Image
        src={Sequence_1_6_2_7_3_8_4_9_5}
        width={600}
        description='Using sequence 1, 6, 2, 7, 3, 8, 4, 9, 5 (1, 2, 8, 10, 17, 20, 28, 32, 41, 46, 47...)'
      />
      <Image
        src={Sequence_444_3}
        width={600}
        description='Using sequence 444, 3 (1, 445, 448, 892, 895...)'
      />
      <Image
        src={Sequence_1_1_1_2_1_1_1_3_1_1_1_4_1_1_1_5}
        width={600}
        description='Using sequence 1, 1, 1, 2, 1, 1, 1, 3, 1, 1, 1, 4, 1, 1, 1, 5 (1, 2, 3, 5, 6, 7, 8, 11, 12...)'
      />
      <Body>
        I feel like the further I get into these complex patterns the less I'm
        concerned with truly understanding it and instead choose to bask in the
        beauty.
      </Body>
      <Body>
        But there are some patterns I'm noticing. Diagonal lines seem to be a
        common theme, and the more complex a sequence gets, the less I can find
        obvious shapes or patterns. Some spirals seem to have specific sections
        that follow a general pattern while other sections follow another. For
        example, with 47, 32, 21, 3, the diagonal lines only exist on the upper
        left, while the bottom right has no clear patterns.
      </Body>
      <Body>
        I'm left with the feeling that this is tapping into something important
        to the understanding of primes, but I don't know exactly what. I would
        love for anyone reading to take this concept and figure out if it's
        actually useful or if it's just some cool mathematical art.
      </Body>
      <Body>
        I could keep going with random patterns, but I would prefer to put that
        power in the hands of the reader. Feel free to step over to the{' '}
        <a href='/playground/primal-spirals---part-2'>playground</a> and start
        generating your own spirals. Until next time!
      </Body>
      <Footer title={primalSpiralsPt2Title} />
    </Wrapper>
  );
};

export default PrimalSpiralsPt2;
