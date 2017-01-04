import React from 'react';

const ArticleLogic = ({type, value}) => {

    return (
        <div>
            {type === "p" && <p className="f5 f3-ns mt0 lh-copy measure georgia">{value}</p>}
            {type === "standout" && <p className="f5 pv4 b tc f3-ns mt0 lh-copy measure georgia">{value}</p>}
            {type === "quote" && <p className="f6 f5-ns lh-copy measure i pl4 bl bw1 b--gold mb4">{value}</p>}
        </div>
    )
}

export default ArticleLogic;