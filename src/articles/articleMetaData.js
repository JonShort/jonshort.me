import { metadata as automatingLocalEnvVars } from './posts/automating-local-env-vars/metadata';
import { metadata as handlingLineEndings } from './posts/handling-line-endings/metadata';
import { metadata as refactoringThisSite } from './posts/refactoring-this-site/metadata';
import { metadata as smartCodePerformance } from './posts/smart-code-performance/metadata';

const articleMetaData = {
  ...automatingLocalEnvVars,
  ...handlingLineEndings,
  ...smartCodePerformance,
  ...refactoringThisSite,
};

export const allArticlesMetaData = Object.keys(articleMetaData).map(
  (key) => articleMetaData[key]
);

export default articleMetaData;
