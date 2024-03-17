import React from 'react';
import classes from './Skills.module.css';
import { connect } from 'react-redux';

import Skill from './Skill/Skill';
import ParagraphItem from '../UI/ParagraphItem/ParagraphItem';

const skills = props => {
  const skillsClasses = [classes.Skills];
  if (props.isActive) skillsClasses.push(classes.shown)

  return (
    <section className={skillsClasses.join(' ')}>
      <h1>Skills</h1>
      <div className={classes.skillsContainer}>
        {props.skills.main.map((skill, i) => <Skill key={i} skill={skill} />)}
      </div>
      <ParagraphItem>
        Additional skills:
      </ParagraphItem>
      <div className={classes.skillsContainer}>
        {props.skills.additional.map((skill, i) => <Skill key={i} skill={skill} />)}
      </div>
      <ParagraphItem>
        and still learning...
      </ParagraphItem>
    </section>
  )
}

const mapStateToProps = state => {
  return {
    skills: state.skills,
  }
} 

export default connect(mapStateToProps)(skills);