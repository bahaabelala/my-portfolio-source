import React from 'react';
import classes from './ContactMe.module.css';

const contactMe = props => {
  const contactMeClasses = [classes.ContactMe];
  let headingClass;
  if (props.isActive) {
    contactMeClasses.push(classes.shown);
    headingClass = classes.textContacted;
  }

  return (
    <section className={contactMeClasses.join(' ')}>
      <h1 className={headingClass}>Contact me</h1>
      <form className={classes.contactForm}>
        <div className={classes.contactName}>
          <input type='text' placeholder='Your name'/>
        </div>
        <div className={classes.contactEmail}>
          <input type='email' placeholder='Your email'/>
        </div>
        <div className={classes.contactMessage}>
          <textarea placeholder='Write your message'></textarea>
        </div>
        <div className={classes.contactSubmit}>
          <input type='submit' value='Send Message'/>
        </div>
      </form>
    </section>
  );
}

export default contactMe;