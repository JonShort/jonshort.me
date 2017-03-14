import React, {PropTypes} from 'react';

const ArticleDataLogic = ({color, type, value}) => (
    <div>
        {type === "p" && <p className="f5 f3-ns mt0 lh-copy measure georgia">{value}</p>}
        {type === "standout" && <p className={"f5 pv4 b tc bb bt bw1 f3-ns mt0 lh-copy measure georgia b--" + color}>{value}</p>}
        {type === "quote" && <p className={"f6 f5-ns lh-copy measure i pl4 bl bw1 mb4 b--" + color}>{value}</p>}
    </div>
);

ArticleDataLogic.propTypes = {
    color: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string
};

ArticleDataLogic.defaultProps = {
    color: "gold"
};

export default ArticleDataLogic;