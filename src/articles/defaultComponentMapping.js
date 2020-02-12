import {
  A,
  Code,
  H3,
  Image,
  Li,
  P,
  Pre,
  Standout,
  Wrapper,
} from './components';

const defaultComponentMapping = {
  a: A,
  blockquote: Standout,
  code: Code,
  h3: H3,
  img: Image,
  li: Li,
  p: P,
  pre: Pre,
  wrapper: Wrapper,
};

export default defaultComponentMapping;
