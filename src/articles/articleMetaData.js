import { metadata as refactoringThisSite } from './posts/refactoring-this-site/metadata';

const articleMetaData = {
    ...refactoringThisSite,
};

export const allArticlesMetaData = Object.keys(articleMetaData).map(key => articleMetaData[key]);

export default articleMetaData;
