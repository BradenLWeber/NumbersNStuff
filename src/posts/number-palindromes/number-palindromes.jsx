import Body from 'components/post/post-body';
import { Box } from '@mui/material';
import { Color } from 'styles/Color';
import Divider from 'components/post/post-divider';
import Footer from 'components/post/post-footer';
import Header from 'components/post/post-header';
import Indent from 'components/post/post-indent';
import Title from 'components/post/post-title';
import Wrapper from 'components/post/post-wrapper';

export const numberPalindromesTitle = 'Number Palindromes';
export const numberPalindromesDate = '8/19/2023';

export const NumberPalindromes = () => {
  return (
    <Wrapper>
      <Title
        playgroundName={numberPalindromesTitle}
        date={numberPalindromesDate}
        author='Braden Weber'
      >
        {numberPalindromesTitle}
      </Title>
      <Divider />
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
      <Indent>
        <i>
          <b>The click</b>: An event where a new mathematical concept goes from
          created to the creator. The concept is found to have some subjective
          quality that excites the imagination and possibly causes some head
          scratching.
        </i>
      </Indent>
      <Body>There are two routes of exploration my gut led me to.</Body>
      <Body>
        <b>First route</b>: How often do palindromic whole numbers occur on the
        number line? Are the gaps between them predictable?
      </Body>
      <Body>
        <b>Second route</b>: What happens when we convert palindromic numbers to
        other bases? Are there numbers that stay palindromic even when converted
        to another base?
      </Body>
      <Header>First route: Frequency of palindromic numbers</Header>
      <Body>
        To pursue this line of thought, I knew I would need some kind of a
        script to do the heavy lifting for me. There are just too many numbers
        to check.
      </Body>
      <Body>
        But before rushing to the end, I always like to get a sense of the
        territory I'm in. What kind of results should I be expecting?
      </Body>
      <Body>
        The first place to start would be...small. How about the palindromic
        numbers between 10 and 100. These aren't too difficult to find.
      </Body>
      <Indent>11, 22, 33, 44, 55, 66, 77, 88, 99</Indent>
      <Body>
        If we look at the gaps between all of them, it's nice and predictable
      </Body>
      <Indent>11, 11, 11, 11, 11, 11, 11, 11</Indent>
      <Body>
        Okay, now let's go up to 1000. I don't think the numbers will be too
        hard to find just using my common sense.
      </Body>
      <Indent>
        11, 22, 33, 44, 55, 66, 77, 88, 99, 101, 111, 121, 131, 141, 151, 161,
        171, 181, 191, 202, 212, 222, 232, 242, 252, 262, 272, 282, 292, 303,
        313...
      </Indent>
      <Body>
        I'll stop writing them out because the pattern is fairly obvious. Once
        we hit the hundreds, you only add by 10 every time until you cross the
        gap into the next hundred, at which case you add 11. The gaps look like
        this. (Asterisks added to emphasize pivot numbers)
      </Body>
      <Indent>
        11, 11, 11, 11, 11, 11, 11, 11, *2*, 10, 10, 10, 10, 10, 10, 10, 10, 10,
        *11*, 10, 10, 10, 10, 10, 10, 10, 10, 10, *11*, 10...
      </Indent>
      <Body>
        At this point, the next question is natural, right? We had a pattern of
        11's from 10 to 100. Now we have a pattern of 10's from 100 to 1000.
        Does each power of 10 have its own pattern?
      </Body>
      <Body>
        Now I am going to build my script, because this is too much to keep
        doing by hand
      </Body>
      <Body color={Color.midGray}>
        Furiously typing... unashamedly snacking...
      </Body>
      <Body>
        Turns out, building a script is not too bad. Palindromes are nice and
        predictable.
      </Body>
      <Body>
        I'll just jump right in. I'll run the script up to a million and one.
        So, you know, it ends on a palindrome.
      </Body>
      <Box height={300} overflow='auto' mt={20} mb={20}>
        <Indent mt={0} mb={0}>
          11,11,11,11,11,11,11,11,11,*2*,
          <br />
          10,10,10,10,10,10,10,10,10,*11*,
          <br />
          10,10,10,10,10,10,10,10,10,*11*,
          <br />
          10,10,10,10,10,10,10,10,10,*11*,
          <br />
          10,10,10,10,10,10,10,10,10,*11*,
          <br />
          10,10,10,10,10,10,10,10,10,*11*,
          <br />
          10,10,10,10,10,10,10,10,10,*11*,
          <br />
          10,10,10,10,10,10,10,10,10,*11*,
          <br />
          10,10,10,10,10,10,10,10,10,*11*,
          <br />
          10,10,10,10,10,10,10,10,10,*2*,
          <br />
          110,110,110,110,110,110,110,110,110,*11*,
          <br />
          110,110,110,110,110,110,110,110,110,*11*,
          <br />
          110,110,110,110,110,110,110,110,110,*11*,
          <br />
          110,110,110,110,110,110,110,110,110,*11*,
          <br />
          110,110,110,110,110,110,110,110,110,*11*,
          <br />
          110,110,110,110,110,110,110,110,110,*11*,
          <br />
          110,110,110,110,110,110,110,110,110,*11*,
          <br />
          110,110,110,110,110,110,110,110,110,*11*,
          <br />
          110,110,110,110,110,110,110,110,110,*2*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*11*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*11*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*11*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*11*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*11*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*11*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*11*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*11*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*110*,
          <br />
          100,100,100,100,100,100,100,100,100,*2*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*11*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*11*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*11*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*11*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*11*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*11*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*11*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*11*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*110*,
          <br />
          1100,1100,1100,1100,1100,1100,1100,1100,1100,*2*
        </Indent>
      </Box>
      <Body>
        Looks like the gaps between palindromes are pretty regular. The pivot
        numbers seem to change a little with time, which is interesting, but I'm
        not sure it leads to much. I'll be honest, I was hoping for it to look
        more chaotic, but it looks so orderly. Neat. Like it's got well defined
        rules that I could find if I searched hard enough.
      </Body>
      <Body>
        I think I might move on from this one. It's interesting, but not what
        I'm looking for. I want to try idea number 2.
      </Body>
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
        The first thing to do, of course, is to get a sense of the playing
        field. What kinds of results should I be expecting?
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
      <Indent separate={true} widths={[85]}>
        1|1
      </Indent>
      <Indent separate={true} widths={[85]}>
        3|11
      </Indent>
      <Indent separate={true} widths={[85]}>
        5|101
      </Indent>
      <Indent separate={true} widths={[85]}>
        7|111
      </Indent>
      <Indent separate={true} widths={[85]}>
        9|1001
      </Indent>
      <Indent separate={true} widths={[85]}>
        33|100001
      </Indent>
      <Indent separate={true} widths={[85]}>
        99|1100011
      </Indent>
      <Indent separate={true} widths={[85]}>
        313|100111001
      </Indent>
      <Indent separate={true} widths={[85]}>
        585|1001001001
      </Indent>
      <Indent separate={true} widths={[85]}>
        717|1011001101
      </Indent>
      <Indent separate={true} widths={[85]}>
        7447|1110100010111
      </Indent>
      <Indent separate={true} widths={[85]}>
        9009|10001100110001
      </Indent>
      <Indent separate={true} widths={[85]}>
        15351|11101111110111
      </Indent>
      <Indent separate={true} widths={[85]}>
        32223|111110111011111
      </Indent>
      <Indent separate={true} widths={[85]}>
        39993|1001110000111001
      </Indent>
      <Indent separate={true} widths={[85]}>
        53235|1100111111110011
      </Indent>
      <Indent separate={true} widths={[85]}>
        53935|1101001010101111
      </Indent>
      <Indent separate={true} widths={[85]}>
        73737|10010000000001001
      </Indent>
      <Indent separate={true} widths={[85]}>
        585585|10001110111101110001
      </Indent>
      <Body>
        This is a start! It's particularly cool to find a larger number that's a
        palindrome in base 2 as well. It seems like they get less common the
        larger the number gets. I smell an exponential relationship!
      </Body>
      <Body>
        I sketched out some data on how many palindrome pairs there are, going
        up by a power of 10 each time.
      </Body>
      <Indent separate={true} widths={[200]}>
        1-10|5
      </Indent>
      <Indent separate={true} widths={[200]}>
        11-100|2
      </Indent>
      <Indent separate={true} widths={[200]}>
        101-1000|3
      </Indent>
      <Indent separate={true} widths={[200]}>
        1001-10,000|2
      </Indent>
      <Indent separate={true} widths={[200]}>
        10,001-100,000|6
      </Indent>
      <Indent separate={true} widths={[200]}>
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
        multiple bases is a bit of a fools errand. Maybe they're too rare?
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
        We got it! There are three numbers that have tied for first. In my
        innermost being I was hoping for something that was a palindrome in 6 or
        more bases, but we've maxed at out four.
      </Body>
      <Body>The three numbers are:</Body>
      <Indent separate={true}>121|(bases 3, 7, 8, 10)</Indent>
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
        an abnormal number of divisors. Let's check.
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
      <Body color={Color.midGray}>Checking...</Body>
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
        <b>Hypothesis #3</b>: Numbers tend to be palindromes in bases that are
        equal to one of their divisors minus one.
      </Indent>
      <Divider />
      <Body>
        Okay, I've found some good things, but it's time to do some pure number
        crunching. I just want a number that's a palindrome in a freaky number
        of bases. Let's try... 1 to 1,000,0000 for bases 2 to 1,000. A lofty
        goal with probably loftier computation time, but what am I doing if I'm
        not testing my limits?
      </Body>
      <Body color={Color.midGray}>Loops looping... CPU overheating...</Body>
      <Body>
        Is this how Dr. Frankenstein felt when he saw his monster coming alive?
        Because I've created something that's getting out of control. Thirty
        bases! That's 3 to the 0. Count em, I dare you.
      </Body>
      <Indent separate widths={[100]}>
        27720|82, 167, 179, 197, 209, 219, 230, 251, 263, 279, 307, 314, 329,
        359, 384, 395, 419, 439, 461, 494, 503, 615, 629, 659, 692, 769, 791,
        839, 923, 989
      </Indent>
      <Indent separate widths={[100]}>
        55440|82, 239, 251, 263, 279, 307, 314, 329, 335, 359, 384, 395, 419,
        439, 461, 494, 503, 527, 559, 615, 629, 659, 692, 719, 769, 791, 839,
        879, 923, 989
      </Indent>
      <Body>
        I just want to sit a moment and bask in such glorious numbers. Hey look.
        The second number is just the first number times two. That makes sense
        because it will share all the same divisors as the other one.
      </Body>
      <Body>
        Ha! Check that out! I thought this couldn't get any better. Both numbers
        have two bases that are themselves palindromes. The <i>same</i> two
        bases. 494 and 989. Math has a sense of humor after all.
      </Body>
      <Body>
        I love that there are probably many more numbers out there with many
        more bases. It all becomes a game of how much we can compute. It's a
        whole world to explore, one power of 10 at a time
      </Body>
      <Body>
        For now, I will rest with my power of 10. But I hope you, dear reader,
        go further.
      </Body>
      <Footer title={numberPalindromesTitle} />
    </Wrapper>
  );
};

export default NumberPalindromes;
