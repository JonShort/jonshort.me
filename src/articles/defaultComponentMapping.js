import {
  A,
  Code,
  H3,
  Image,
  InlineCode,
  Li,
  P,
  Standout,
  Wrapper,
} from './components';

const defaultComponentMapping = {
  a: A,
  blockquote: Standout,
  code: Code,
  h3: H3,
  img: Image,
  inlineCode: InlineCode,
  li: Li,
  p: P,
  wrapper: Wrapper,
};

export default defaultComponentMapping;
