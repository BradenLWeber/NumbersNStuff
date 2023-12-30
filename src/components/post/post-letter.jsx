import { MathJax } from 'better-react-mathjax';

const Letter = (props) => {
  return (
    <span style={{ marginLeft: 1, marginRight: 1 }}>
      <MathJax inline>{'$' + props.children + '$'}</MathJax>
    </span>
  );
};

export default Letter;
