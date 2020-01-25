import {
  A,
  Code,
  H3,
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
  li: Li,
  p: P,
  pre: Pre,
  wrapper: Wrapper,
};

export default defaultComponentMapping;
