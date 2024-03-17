import React from 'react';
import classes from './MarkedWords.module.css';

const markedWords = props => {
    return (
        <span className={classes.MarkedWords}>
            {props.children}
        </span>
    );
}

export default markedWords;