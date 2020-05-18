import { metadata as refactoringThisSite } from './posts/refactoring-this-site/metadata';
import { metadata as smartCodePerformance } from './posts/smart-code-performance/metadata';

const articleMetaData = {
  ...smartCodePerformance,
  ...refactoringThisSite,
};

export const allArticlesMetaData = Object.keys(articleMetaData).map(
  (key) => articleMetaData[key]
);

export default articleMetaData;
