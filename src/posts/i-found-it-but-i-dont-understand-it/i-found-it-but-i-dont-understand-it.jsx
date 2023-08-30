import Body from 'components/post/post-body';
import Divider from 'components/post/post-divider';
import Footer from 'components/post/post-footer';
import Image from 'components/post/post-image';
import Indent from 'components/post/post-indent';
import OneOverN from 'posts/i-found-it-but-i-dont-understand-it/one-over-n.png';
import RandomSummation from 'posts/i-found-it-but-i-dont-understand-it/random-summations.png';
import SummationFull from 'posts/i-found-it-but-i-dont-understand-it/summation-full.png';
import SummationPart from 'posts/i-found-it-but-i-dont-understand-it/summation-part.png';
import Title from 'components/post/post-title';
import Wrapper from 'components/post/post-wrapper';
import n21000000 from 'posts/i-found-it-but-i-dont-understand-it/n2-100000.png';
import n210000000 from 'posts/i-found-it-but-i-dont-understand-it/n2-1000000.png';

export const iFoundItButIDontUnderstandItTitle =
  "I found it, but I don't understand it";
export const iFoundItButIDontUnderstandItDate = '6/13/2023';

export const IFoundItButIDontUnderstandIt = () => {
  return (
    <Wrapper>
      <Title date={iFoundItButIDontUnderstandItDate} author='Braden Weber'>
        I found it, but I don't understand it
      </Title>
      <Divider />
      <Body>
        This is a story of a boy getting a new fancy calculator and wondering
        what all the buttons do.
      </Body>
      <Body>
        Scientific calculators have so many buttons, and I just wanted to figure
        out what they did without looking it up. I figured out very few, but I
        tried to make some progress in learning on my own.
      </Body>
      <Body>
        For example, there was one button labeled "ln". There was no indication
        of what it meant except that it was near the "log" button, but I didn't
        quite understand that one yet either. I tried plugging numbers into "ln"
        to see what came out.
      </Body>
      <Indent>ln(0) = ERROR</Indent>
      <Indent>ln(1) = 0</Indent>
      <Indent>ln(10) = 2.30258509</Indent>
      <Body>
        Well, that didn't reveal much, but hey! I thought maybe ln(10) is an
        important number. Might as well memorize it. What did I have to lose?
      </Body>
      <Body>
        So I memorized ln(10) to the 8th decimal place and felt good about
        myself. I didn't know what math knowledge I had just ingested, but it
        had to come to use eventually.
      </Body>
      <Body>
        Later on came this weird looking button: Σ. No indication of what was
        going on with this one. I tried plugging in some random things to see
        what came out, but it either didn't make sense or didn't seem useful. I
        finally gave up, but I was too intrigued to move on. I brought it to my
        math teacher for an explanation, which is when I learned the summation
        function works best when you put a variable on the right side. I started
        trying out summations.
      </Body>
      <Image src={RandomSummation} height={370} />
      <Body>
        (For those of you that don't know how summations work, you can find an
        explanation{' '}
        <a
          href='https://www.khanacademy.org/math/ap-calculus-ab/ab-integration-new/ab-6-3/a/review-summation-notation'
          target='_blank'
        >
          here
        </a>
        )
      </Body>
      <Body>
        At this point, I thought, what happens if I sum to really high numbers?
        I kept with 1/n^2 and summed all the way up to 100000.
      </Body>
      <Image src={n21000000} height={92} />
      <Body>
        The calculator took a half second to finish. I had <i>never</i> seen my
        calculator give an answer that wasn't instant. With fear and trembling,
        I added another zero to the top.
      </Body>
      <Image src={n210000000} height={90} />
      <Body>
        This second number seemed suspiciously close to the first one. I thought
        1/n^2 must have a finite answer when the top number drifted off to
        infinity. And that finite number probably started with 1.6449, since
        that part of the decimal hadn't changed between 100,000 and 1,000,000.
        (I looked it up later and I was right. The infinite summation adds up to
        π^2/6)
      </Body>
      <Body>
        This infinite summing seemed like a cool concept. I thought hey, you
        can't get any simpler than summing 1/n. Let's see if I can approximate
        the infinite summation of 1/n.
      </Body>
      <Body>
        Last time, I noticed patterns when I added one zero at a time to the top
        number. I tried it again.
      </Body>
      <Image src={OneOverN} height={460} />
      <Body>
        With every higher summation, my calculator was slower and slower in
        producing an answer. For the highest number I managed to calculate, I
        let my calculator run an entire night. I can't remember what number it
        was exactly all these years later, but I can remember the elation upon
        waking up and seeing the calculator had completed its number crunching.
      </Body>
      <Body>
        With each new number, it looked more and more like I couldn't use the
        same strategy as the previous summation. The number didn't seem to be
        settling down. So I thought fine, I'll see if I can notice a pattern in
        between the difference of each new summation. Perhaps the differences
        get closer and closer to zero, in which case, I could calculate the
        number that will end the infinite summation using...something, I wasn't
        sure yet.
      </Body>
      <Body>
        So I backed up and started with 10 on top. Then 100, then 1000, then
        10000, and so forth. The differences between those summations look like
        this.
      </Body>
      <Body>
        (I'm going to make up a notation that definitely does not exist for sake
        of space. SUM(x) means I've summed n=1 to x for 1/n, just like above)
      </Body>
      <Indent> SUM(100) - SUM(10) = 2.25840926367</Indent>
      <Indent> SUM(1000) - SUM(100) = 2.29809334291</Indent>
      <Indent> SUM(10000) - SUM(1000) = 2.30213517549</Indent>
      <Indent> SUM(100000) - SUM(10000) = 2.30254009382</Indent>
      <Indent> SUM(1000000) - SUM(100000) = 2.302580593</Indent>
      <Indent> SUM(10000000) - SUM(1000000) - 2.30258464299</Indent>
      <Body>
        You may see a startling pattern emerge here. At least, it was startling
        to me. The longer I went on calculating the difference in between these
        summations, the more it started to look like... ln(10)! That
        unsuspecting number that I memorized to give myself closure for never
        figuring out what "ln" means. Here it was! Popping up in a place I would
        never expect it to!
      </Body>
      <Body>
        Isn't math so fun? How in the world could I find that same number in two
        completely different spots on a calculator in functions I barely (if at
        all) understood?
      </Body>
      <Body>
        At this point, I was burning with curiosity, so I looked up what the
        infinite summation of 1/n actually is. Spoiler alert - it's infinity.
        The summation never converges onto one number, it only ever gets bigger,
        and bigger, and bigger, and bigger. Which makes sense give the
        observations I had already made.
      </Body>
      <Body>
        But I too distracted by new, wonderful reality to be disappointed. I
        couldn't prove it, but it sure looked like this was true:
      </Body>
      <Image src={SummationPart} height={96} />
      <Body>Don't tell me that doesn't give you chills.</Body>
      <Body>
        To this day, I don't know any way of proving this. I never learned
        enough math to get there.
      </Body>
      <Body>
        I did, however, ask a college math professor about this function. He
        couldn't offer help in proving it, but he did offer the observation that
        there are a whole lot of 10s in this equation. It was likely the number
        10 could be extracted as a variable.
      </Body>
      <Body>
        Sure enough, when I tested this magic formula substituting 10 for other
        numbers, it seemed to hold up. I still can't prove it, I can only run
        the numbers and observe that it <i>seems</i> to work. It drives me
        crazy.
      </Body>
      <Body>
        So, the equation that I found, but still don't understand, is this:
      </Body>
      <Image src={SummationFull} height={95} />
      <Body>
        If you or a loved one can prove this equation to be correct OR false,
        please satisfy this hungry soul.
      </Body>
      <Footer />
    </Wrapper>
  );
};

export default IFoundItButIDontUnderstandIt;
