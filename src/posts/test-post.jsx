import Body from 'components/post/post-body';
import Header from 'components/post/post-header';
import Title from 'components/post/post-title';
import Wrapper from 'components/post/post-wrapper';
import ChalkBrain from 'assets/global/ChalkBrain.png';

export const testPost = {
  title: 'Test post',
  description: 'This is testing the post. Lick a post, or a salt block.',
  image: ChalkBrain,
  createdDate: '7/1/2023',
  tags: ['test', 'chip'],
  post: (
    <Wrapper>
      <Title>Unibrows 4Ever</Title>
      <Body>
        What is a body? It is either text or skin. In this case, text, but on
        other cases, also text, but yet in other cases, sometimes text. Hey, I
        love sugar in my sugar, sugar sugar sugar, sugar, sugar - sugar what did
        you say? I don't even understand hello.
      </Body>
      <Body>
        What is a body? It is either text or skin. In this case, text, but on
        other cases, also text, but yet in other cases, sometimes text. Hey, I
        love sugar in my sugar, sugar sugar sugar, sugar, sugar - sugar what did
        you say? I don't even understand hello.
      </Body>
      <Body>
        What is a body? It is either text or skin. In this case, text, but on
        other cases, also text, but yet in other cases, sometimes text. Hey, I
        love sugar in my sugar, sugar sugar sugar, sugar, sugar - sugar what did
        you say? I don't even understand hello.
      </Body>
      <Header>Section 2</Header>
      <Body>
        What is a body? It is either text or skin. In this case, text, but in
        other cases, also text, but yet in other cases, sometimes text. Hey, I
        love sugar in my sugar, sugar sugar sugar, sugar, sugar - sugar what did
        you say? I don't even understand hello.
      </Body>
      <Body>
        What is a body? It is either text or skin. In this case, text, but on
        other cases, also text, but yet in other cases, sometimes text. Hey, I
        love sugar in my sugar, sugar sugar sugar, sugar, sugar - sugar what did
        you say? I don't even understand hello.
      </Body>
    </Wrapper>
  ),
};
