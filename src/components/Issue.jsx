import React from 'react';

const Issue = (props) => (
        <>
           <div className={ props.class}>
            <div className="col-lg-12">
                 <h5>a minute ago...</h5>
            </div>
            <div className="col-lg-12">
                <p>{props.issue.issueText}</p>
            </div>
            <div className="col-lg-12">
                <a onClick={()=>props.onClickDeleteIssue(props.issue)}>Delete</a>
            </div>
        </div>
        </>
);

export default Issue;