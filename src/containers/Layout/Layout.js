import React from 'react';
import classes from './Layout.module.css';
import { connect } from 'react-redux';

import Intro from '../../components/Intro/Intro';

const layout = props => {
  const layoutClasses = [classes.Layout];
  if (props.downClicked) layoutClasses.push(classes.goDown);

  return (
    <div className={layoutClasses.join(' ')}>
      <Intro />
      <main className={classes.mainContent}>
        {props.children}
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    downClicked: state.downClicked,
  }
}

export default connect(mapStateToProps)(layout);
