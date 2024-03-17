import React from 'react';
import classes from './TopBar.module.css';
import { connect } from 'react-redux';

const topBar = props => {
  const topBarClasses = [classes.TopBar];
  if (props.downClicked) topBarClasses.push(classes.goDown); 

  return (
    <header className={topBarClasses.join(' ')}>
      <div className={classes.introItems}>
        <h1 className={classes.introName}>Bahaa Mohamed</h1>
        <h3 className={classes.introJobTitle}>Front-End Web Developer</h3>
      </div>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    downClicked: state.downClicked,
  };
}

export default connect(mapStateToProps)(topBar);