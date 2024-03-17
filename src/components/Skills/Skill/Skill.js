import React from 'react';
import classes from './Skill.module.css';

const skill = props => {
    return (
        <div className={classes.Skill}>
            <img src={props.skill.image} alt={props.skill.name} />
            <span>{props.skill.name}</span>
        </div>
    );
}

export default skill;