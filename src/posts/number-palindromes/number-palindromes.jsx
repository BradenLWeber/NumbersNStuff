import Body from 'components/post/post-body';
import Header from 'components/post/post-header';
import Title from 'components/post/post-title';
import Wrapper from 'components/post/post-wrapper';
import Indent from 'components/post/post-indent';
import Image from 'components/post/post-image';
import Footer from 'components/post/post-footer';
import Divider from 'components/post/post-divider';
import { Color } from 'styles/Color';

export const numberPalindromesTitle = 'Number Palindromes';

export const NumberPalindromes = () => {
  return (
    <Wrapper>
      <Title playgroundName={numberPalindromesTitle}>Number Palindromes</Title>
      <Body>
        I have always found palindromes to be fascinating. For those of you who
        don't know, a palindrome is something that is the same forward and
        backward. Some of the more common examples are the word "racecar" and
        the phrase "taco cat."
      </Body>
      <Body>
        I found them so fascinating that I created a fair amount of them when I
        was bored in class. Turns out, it's not too difficult to create a
        palindrome at all! The difficulty comes in making it make sense. My
        favorite one from my palindrome-creating years is this: "I, Arumas, am a
        llama Samurai."
      </Body>
      <Body>
        But with time, there came a day when creating palindromes wasn't quite
        as exciting as it was at first. It's inevitable really. So I pondered
        how I could take the palindrome game to the next level.
      </Body>
      <Body>
        Then it hit me. What do you do to anything to make it more fun?
      </Body>
      <Body>Add numbers!</Body>
      <Header>Searching for the click</Header>
      <Body>
        Spoiler alert: it is remarkably easy to create number palindromes. Check
        it out.
      </Body>
      <Indent>363</Indent>
      <Indent>1111111</Indent>
      <Indent>180787081</Indent>
      <Indent>1234567890987654321</Indent>
      <Body>
        I could go all day! Letter palindromes are hard because you have to form
        real works. Number palindromes are simple because every possible
        combination makes a possible number.
      </Body>
      <Body>
        So, as a young person desperately trying to find something interesting
        to do in class, I had to find something else to make <i>the click</i>{' '}
        happen.
      </Body>
      <Indent multiline={true}>
        <i>
          <b>The click</b>: An event where a new mathematical concept goes from
          created to the creator. This happens when a mathmatician concept is
          found to have some subjective quality that excites the imagination and
          possibly causes some head scratching.
        </i>
      </Indent>
      <Body>There are two routes of exploration my gut let me to.</Body>
      <Body>
        First route: How often to palindromic whole numbers occur on the
        numberline? Are the gaps between them predictable?
      </Body>
      <Body>
        Second route: What happens when we convert palindromic numbers to other
        bases? Are there numbers that stay palindromic even when converted to
        another base?
      </Body>
      <Header>First route: Frequency of palindromic numbers</Header>
      <Header>Second route: Consistency of palindromic numbers</Header>
      <Body>
        This route excites me because of my general lack of experience in other
        bases. There is so much to discover!
      </Body>
      <Body>
        First, I had to ponder out my question more. I'm wondering if
        palindromic numbers are consistently palindromic in other bases. This
        naturally raises two questions:
      </Body>
      <Indent>1. How high am I going to check the number line?</Indent>
      <Indent>2. How high am I going to check the possible bases?</Indent>
      <Body>
        The answer to these could drastically change the results. If I only
        check numbers up to 100 and only bases 2 through 10, I'll probably get a
        very different number than I would setting up other parameters. This
        actually raised a good third question:
      </Body>
      <Indent>
        3. What kind of result will give me a sense of satisfaction?
      </Indent>
      <Body>
        I would love to find a number that is a palindrome in a surprising
        number of bases. A very subjective marker to be sure, but something to
        set my sights on.
      </Body>
      <Divider />
      <Body>
        The first thing do, of course, is to set my sights small and get a sense
        of the playing field. What kinds of results should I be expecting?
      </Body>
      <Body>
        Base 10 and base 2 are very commonly used bases, so they don't feel so
        foreign. I'll start by comparing numbers between those two.
      </Body>
      <Body>
        As for the number ceiling, let's check all numbers up to 1,000,000.
      </Body>
      <Body color={Color.midGray}>
        <i>Machine whirring... numbers crunching...</i>
      </Body>
      <Body>
        Here are all the numbers that are palindromes in both base 2 and base
        10, checking up to 1,000,000:
      </Body>
      <Indent separate={true} widthFirstLine={100}>
        1|1
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        3|11
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        5|101
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        7|111
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        9|1001
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        33|100001
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        99|1100011
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        313|100111001
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        585|1001001001
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        717|1011001101
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        7447|1110100010111
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        9009|10001100110001
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        15351|11101111110111
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        32223|111110111011111
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        39993|1001110000111001
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        53235|1100111111110011
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        53935|1101001010101111
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        73737|10010000000001001
      </Indent>
      <Indent separate={true} widthFirstLine={100}>
        585585|10001110111101110001
      </Indent>
      <Body>
        This is a start! It's particularly cool to find a larger number that's a
        palindrome in base 2 as well. It seems like they get less common the
        larger the number gets. I smell and exponential relationship!
      </Body>
      <Body>
        I sketched out some data on how many palindrome pairs there are, going
        up by a power of 10 each time.
      </Body>
      <Indent separate={true} widthFirstLine={200}>
        1-10|5
      </Indent>
      <Indent separate={true} widthFirstLine={200}>
        11-100|2
      </Indent>
      <Indent separate={true} widthFirstLine={200}>
        101-1000|3
      </Indent>
      <Indent separate={true} widthFirstLine={200}>
        1001-10,000|2
      </Indent>
      <Indent separate={true} widthFirstLine={200}>
        10,001-100,000|6
      </Indent>
      <Indent separate={true} widthFirstLine={200}>
        100,001-1,000,000|1
      </Indent>
      <Body>
        It's not a perfect relationship, but the trend seems to be there. So
        that's a start!
      </Body>
      <Indent>
        <b>Hypothesis #1</b>: Palindromes in other bases are exponentially less
        likely the higher the number is.
      </Indent>
      <Body>
        At this point, I also had to wrestle with how I was going to treat
        single digit numbers. Because if I allow single digit numbers, then the
        number 1 is a palindrome in <i>every</i> base. That feels like a lame
        conclusion, so I think going forward, palindromes will only count if
        they have more than one digit in all bases considered.
      </Body>
      <Divider />
      <Body>
        With the example data set, I learned that large number palindromes in
        multiple bases are pretty rare. So now I know my goal:{' '}
        <i>to find the largest number that is a palindrome in the most bases</i>
        . That will be the most unique, wild animal. We're going on a Safari!
      </Body>
      <Body>
        Let's increase by one more level before we go full blown. We've had our
        base case (pun intended); now let's see what happens when we add a few
        more bases in the mix. I mean, maybe checking for palindromes in
        multiple bases is a little but a fools errand. Maybe they're too rare?
      </Body>
      <Body>
        So let's start easy. I'll check the numbers from 1 to 1,000,000 for
        bases 2 through 10. I'll pull out the numbers that exist as a palindrome
        in the most bases.
      </Body>
      <Body color={Color.midGray}>
        <i>Gears screaching... eletricity whirring...</i>
      </Body>
      <Body>
        We got it! There are two numbers that have tied for first. In my
        innermost being I was hoping for something that was a palindrome in 6 or
        more bases, but we've maxed at out four.
      </Body>
      <Body>The two numbers are:</Body>
      <Indent separate={true}>373|(bases 4, 8, 9, 10)</Indent>
      <Indent separate={true}>786435|(bases 2, 4, 7, 8)</Indent>
      <Body>
        We've learned a valuable lesson here. It will probably be very difficult
        to find a number that is a palindrome in a lot of bases. We should be
        expecting to find a number that is a palindrome in as many bases as we{' '}
        <i>can</i>, and that will still be cool.
      </Body>
      <Divider />
      <Body>
        We have one more stop to make before truly testing our limits. I want to
        see what happens when we use a ton of bases, much more than 10. I want
        to try searching for palindromes from base 2 to base 299. Yeah, you
        heard me correctly.
      </Body>
      <Body>
        To cut down on process time, I'm only going to go to 10,000. Less
        exciting, but once again, I'm trying to get a feel for what to expect. I
        would rather understand my results when they come, y'know?
      </Body>
      <Body>So let's do some processing. Bases 2-299, numbers 1-10,000.</Body>
      <Body color={Color.midGray}>
        <i>Button mashing... wilhelm scream...</i>
      </Body>
      <Body>
        This one is interesting. I was tampering my expectations for how many
        bases one number could be a palindrome in, but I think I tampered it a
        little too much. Our top two numbers have 17 bases they are palindromes
        in. I guess that's a relatively small percentage of 299, but it's still
        a good number!
      </Body>
      <Body>Our two winners are:</Body>
      <Indent separate={true}>
        2520|(bases 11, 55, 59, 62, 69, 71, 83, 89, 104, 119, 125, 139, 167,
        179, 209, 251, 279)
      </Indent>
      <Indent separate={true}>
        3600|(bases 19, 29, 33, 59, 71, 74, 79, 89, 99, 119, 143, 149, 179, 199,
        224, 239, 299)
      </Indent>
      <Body>
        Hmm. 3600 is pretty familiar. We use 360 as the number of degrees in a
        circle because it has so many divisors. I wonder if our two numbers have
        an abnormal of divisors. Let's check.
      </Body>
      <Indent separate={true}>
        2520|1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 18, 20, 21, 24, 28, 30,
        35, 36, 40, 42, 45, 56, 60, 63, 70, 72, 84, 90, 105, 120, 126, 140, 168,
        180, 210, 252, 280, 315, 360, 420, 504, 630, 840, 1260, 2520
      </Indent>
      <Indent separate={true} mt={40}>
        3600|1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, 18, 20, 24, 25, 30, 36, 40,
        45, 48, 50, 60, 72, 75, 80, 90, 100, 120, 144, 150, 180, 200, 225, 240,
        300, 360, 400, 450, 600, 720, 900, 1200, 1800, 3600
      </Indent>
      <Body>
        Yowza! That's quite a list. Maybe that's common for large numbers? Let's
        check numbers near those ones just to be sure.
      </Body>
      <Indent separate={true}>2519|1, 11, 229, 2519</Indent>
      <Indent separate={true}>2521|1, 2521</Indent>
      <Indent separate={true}>3599|1, 59, 61, 3599</Indent>
      <Indent separate={true}>3601|1, 13, 277, 3601</Indent>
      <Body>
        Not only is it not common, a nearby number is a prime! The conclusion
        seems clear.
      </Body>
      <Indent>
        <b>Hypothesis #2</b>: Numbers with a high ammount of divisors are more
        likely to be palindromes in many bases.
      </Indent>
      <Body>
        That hypothesis got me thinking, is there any correlation between the
        divisors and the bases? Or is this just a nifty fact?
      </Body>
      <Body>Checking...</Body>
      <Body>
        Nah, the divisors and bases don't seem to overlap. They're really close
        to overlapping though. Strangly close.
      </Body>
      <Body>
        Hey! That's interseting. The bases where the number is a palindrome
        tends to be a divisor minus 1. It doesn't seem like it fits for every
        divisor or for every base, but there is a clear correlation there once
        you look for it.
      </Body>
      <Body>
        See, this is the kind of thing I'm looking for! What an unexpected
        pattern to find in a random concept.
      </Body>
      <Indent>
        <b>Hypothesis #2</b>: Numbers tend to be palindromes in bases that are
        equal to one of their divisors minus one.
      </Indent>
      <Footer title={numberPalindromesTitle} />
    </Wrapper>
  );
};

export default NumberPalindromes;
