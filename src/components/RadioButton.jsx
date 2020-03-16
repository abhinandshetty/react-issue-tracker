import React from 'react';

const RadioButton = (props) => (
        <>
           <div className="col-lg-2">
             <input type="radio" name="issueType" value={props.name} id={props.name} onClick={props.onChangeFields}/> <label htmlFor={props.name} className={props.className}>{props.label}</label>
           </div>
        </>
);

export default RadioButton;