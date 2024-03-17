import React from 'react';
import classes from './ParagraphItem.module.css';

const paragraphItem = props => {
    return (
        <p className={classes.ParagraphItem}>
            {props.children}
        </p>
    );
}

export default paragraphItem;