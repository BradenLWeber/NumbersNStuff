import PostBody from "../components/post/post-body";
import PostHeader from "../components/post/post-header";
import PostTitle from "../components/post/post-title";
import PostWrapper from "../components/post/post-wrapper";
import ChalkBrain from "./../assets/global/ChalkBrain.png";

export const testPost = {
  title: "Test post",
  description: "This is testing the post. Lick a post, or a salt block.",
  image: ChalkBrain,
  post: (
    <PostWrapper>
      <PostTitle>Unibrows 4Ever</PostTitle>
      <PostBody>
        What is a body? It is either text or skin. In this case, text, but on
        other cases, also text, but yet in other cases, sometimes text. Hey, I
        love sugar in my sugar, sugar sugar sugar, sugar, sugar - sugar what did
        you say? I don't even understand hello.
      </PostBody>
      <PostBody>
        What is a body? It is either text or skin. In this case, text, but on
        other cases, also text, but yet in other cases, sometimes text. Hey, I
        love sugar in my sugar, sugar sugar sugar, sugar, sugar - sugar what did
        you say? I don't even understand hello.
      </PostBody>
      <PostBody>
        What is a body? It is either text or skin. In this case, text, but on
        other cases, also text, but yet in other cases, sometimes text. Hey, I
        love sugar in my sugar, sugar sugar sugar, sugar, sugar - sugar what did
        you say? I don't even understand hello.
      </PostBody>
      <PostHeader>Section 2</PostHeader>
      <PostBody>
        What is a body? It is either text or skin. In this case, text, but in
        other cases, also text, but yet in other cases, sometimes text. Hey, I
        love sugar in my sugar, sugar sugar sugar, sugar, sugar - sugar what did
        you say? I don't even understand hello.
      </PostBody>
      <PostBody>
        What is a body? It is either text or skin. In this case, text, but on
        other cases, also text, but yet in other cases, sometimes text. Hey, I
        love sugar in my sugar, sugar sugar sugar, sugar, sugar - sugar what did
        you say? I don't even understand hello.
      </PostBody>
    </PostWrapper>
  ),
};
