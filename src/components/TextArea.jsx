import React from 'react';

const TextArea = ({onChangeFields, value}) => (
        <>
            <div className="row mb-1 mt-5">
                <h6>What do you wish to record :</h6>
            </div>
            <div className="row mb-1">
                <textarea name="issueText" id="issueText" cols="250" rows="3" value={value} onChange={onChangeFields}></textarea>
            </div>
        </>
);

export default TextArea;