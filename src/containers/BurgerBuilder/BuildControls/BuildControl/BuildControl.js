import React from 'react';
import classes from './BuildControl.module.css';

const buildControl = (props) => {
    return ( 
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.ingredientLabel}</div>
            <button className={classes.Less} onClick={props.onClickLess} disabled={props.disabled}>Less</button>
            <button className={classes.More} onClick={props.onClickMore}>More</button>
        </div>
     );
};
 
export default buildControl;