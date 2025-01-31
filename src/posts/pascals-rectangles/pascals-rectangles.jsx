import Body from 'components/post/post-body';
import Divider from 'components/post/post-divider';
import Footer from 'components/post/post-footer';
import Header from 'components/post/post-header';
import Image from 'components/post/post-image';
import Indent from 'components/post/post-indent';
import Title from 'components/post/post-title';
import Wrapper from 'components/post/post-wrapper';

export const pascalsRectanglesTitle = "Pascal's Rectangles";
export const pascalsRectanglesDate = '1/30/2025';

export const PascalsRectangles = () => {
  return (
    <Wrapper>
      <Title
        playgroundName={pascalsRectanglesTitle}
        date={pascalsRectanglesDate}
        author='Braden Weber'
      >
        {pascalsRectanglesTitle}
      </Title>
      <Footer title={pascalsRectanglesTitle} />
    </Wrapper>
  );
};

export default PascalsRectangles;
