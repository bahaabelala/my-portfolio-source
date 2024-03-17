import React from 'react';
import classes from './AboutMe.module.css';

import ParagraphItem from '../UI/ParagraphItem/ParagraphItem';
import MarkedWords from '../UI/MarkedWords/MarkedWords';

const aboutMe = props => {
  const aboutMeClasses = [classes.AboutMe];
  if (props.isActive) aboutMeClasses.push(classes.shown)

  return (
    <section className={aboutMeClasses.join(' ')}>
      <h1>About me</h1>
      <ParagraphItem>
        My name is&nbsp;
        <MarkedWords>Bahaa Mohamed Salama</MarkedWords>.
        <br />
        I am a&nbsp;
        <MarkedWords>Front-End Web Developer</MarkedWords>&nbsp;
        living in&nbsp;
        <MarkedWords>Egypt</MarkedWords>.
      </ParagraphItem>
    </section>
  );
}

export default aboutMe;
