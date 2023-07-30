import Body from 'components/post/post-body';
import Header from 'components/post/post-header';
import Title from 'components/post/post-title';
import Wrapper from 'components/post/post-wrapper';
import Indent from 'components/post/post-indent';
import Image from 'components/post/post-image';
import NumberLine from '../assets/global/number-line.png';
import NumberLineWithArrows from '../assets/global/number-line-with-arrows.png';
import Footer from 'components/post/post-footer';

export const theDivideBy3GameTitle = 'The divide by 3 game';

export const TheDivideBy3Game = () => {
  return (
    <Wrapper>
      <Title playgroundName={theDivideBy3GameTitle}>The divide by 3 game</Title>
      <Body>
        There is an easy way to tell if a number is divisible by three. If all
        the digits add up to a number divisible by three, the original number is
        divisible by three as well. For example, the number 84 could be
        evaluated like so:
      </Body>
      <Indent>8 + 4 = 12</Indent>
      <Body>
        Since 12 is divisible by 3, 84 must be divisible by 3. Not sure if 12 is
        divisible by 3? Do the same trick.
      </Body>
      <Indent>1 + 2 = 3</Indent>
      <Body>3 is definitely divisible by 3.</Body>
      <Body>
        Let's try a little more of a complicated number. Take, for example,
        3847205837394857234048. It's an outrageously large number, but using our
        trick we can easily figure out if it's divisible by 3.
      </Body>
      <Indent>
        3 + 8 + 4 + 7 + 2 + 0 + 5 + 8 + 3 + 7 + 3 + 9 + 4 + 8 + 5 + 7 + 2 + 3 +
        4 + 0 + 4 + 8 = 104
      </Indent>
      <Indent>1 + 0 + 4 = 5</Indent>
      <Body>
        5 is not divisible by 3, so 3847205837394857234048 isn't divisible by 3
        either. Pretty nifty!
      </Body>
      <Header>An observation from the nifty fact</Header>
      <Body>
        When I figured this out, I utilized it during class when I didn't want
        to pay attention. I would type a string of random characters in my
        calculator and figure out if it was divisible by 3. Yes, I would rather
        pass the time figuring out of random large numbers are divisible by 3
        than pay attention to my teacher. Guilty as charged.
      </Body>
      <Body>
        But it was very unsatisfying to check gigantic numbers and then have
        them not divisible by 3. So I asked myself, what can I do to make a
        number divisible by 3 if it isn't already?
      </Body>
      <Body>
        The first thing to observe is that every number is only one away from
        being divisible by 3 at maximum. Think of it like this. If you were to
        write out every number and highlight the ones divisible by 3, it would
        look something like this.
      </Body>
      <Image src={NumberLine} width={600} height={70} />
      <Body>
        You can see that each white number is only one away from a blue number.{' '}
      </Body>
      <Image src={NumberLineWithArrows} width={600} height={70} />
      <Body>
        Therefore, to make a white number divisible by 3, you will either need
        to <i>add one</i> or <i>subtract one</i>.
      </Body>
      <Body>
        The question is, how do we know which one to do? Let's observe how these
        smaller numbers behave.
      </Body>
      <Body>
        The numbers above that need to subtract 1 are 1, 4, 7, 10, 13, 16, 19,
        22, and 25. When we add these digits, what do we come up with in the
        end? Let's see... 1, 4, 7, 1, 4, 7, 1, 4, 7. I'm no Sherlock, but I'm
        pretty sure if we end up with 1, 4, or 7, we need to subtract one in
        order to make it divisible by three.{' '}
      </Body>
      <Body>
        Using the same strategies, the numbers that need to add one come down to
        2, 5, 8, 2, 5, 8, 2, 5.{' '}
      </Body>
      <Body>
        So the general rule is this: When adding digits over and over until
        there is one left,
      </Body>
      <Indent>
        If the number is divisible by 3, the trail ends in 3, 6, or 9.
      </Indent>
      <Indent>
        If the number needs to add 1 to be divisible by 3, the trail ends in 2,
        5, or 8.
      </Indent>
      <Indent>
        If the number needs to subtract 1 to be divisible by 3, the trail ends
        in 1, 4, or 7.
      </Indent>
      <Body>
        Or, even more generally - when adding digits over and over until there
        is one left, the same thing that is added to the end result to make it
        divisible by 3 can be added to the original number to make it divisible
        by 3. Read that again, because memorizing concepts is easier than
        memorizing straight facts!
      </Body>
      <Header>An application of the observation from the nifty fact</Header>
      <Body>
        Using this information, we can finally play the divide by 3 game. The
        game works like this:
      </Body>
      <Indent>1) Start with an arbitrarily large number.</Indent>
      <Indent>2) Subtract 1, add 1, or divide by 3.</Indent>
      <Indent>3) Repeat step 2. </Indent>
      <Body>
        If you reach 0, you win. If you divide by 3 and the result is not a
        whole number, you lose.
      </Body>
      <Body>
        That's the game! A good litmus test for how much of a math nerd you are
        is how fun this game sounds to you. I find it strangely enjoyable, so
        now you know what kind of person I am.
      </Body>
      <Body>
        Here's a run of the game from start to finish, using 987654321.
      </Body>
      <Indent>/3 (329218107)</Indent>
      <Indent>/3 (109739369)</Indent>
      <Indent>+1 (109739370)</Indent>
      <Indent>/3 (36579790)</Indent>
      <Indent>-1 (36579789)</Indent>
      <Indent>/3 (12193263)</Indent>
      <Indent>/3 (4064421)</Indent>
      <Indent>/3 (1354807)</Indent>
      <Indent>-1 (1354806)</Indent>
      <Indent>/3 (451602)</Indent>
      <Indent>/3 (150534)</Indent>
      <Indent>/3 (50178)</Indent>
      <Indent>/3 (16726)</Indent>
      <Indent>-1 (16725)</Indent>
      <Indent>/3 (5575)</Indent>
      <Indent>-1 (5576)</Indent>
      <Indent>/3 (1858)</Indent>
      <Indent>-1 (1857)</Indent>
      <Indent>/3 (619)</Indent>
      <Indent>-1 (618)</Indent>
      <Indent>/3 (206)</Indent>
      <Indent>+1 (207)</Indent>
      <Indent>/3 (69)</Indent>
      <Indent>/3 (23)</Indent>
      <Indent>+1 (24) </Indent>
      <Indent>/3 (8)</Indent>
      <Indent>+1 (9)</Indent>
      <Indent>/3 (3)</Indent>
      <Indent>/3 (1)</Indent>
      <Indent>-1 (0)</Indent>
      <Body>Invigorating, right?</Body>
      <Footer title={theDivideBy3GameTitle}></Footer>
    </Wrapper>
  );
};

export default TheDivideBy3Game;
