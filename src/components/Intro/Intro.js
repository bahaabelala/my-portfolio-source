import React from 'react';
import classes from './Intro.module.css';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actionCreators';

import IntroItems from './IntroItems/IntroItems';

const intro = props => {
  const introClasses = [classes.Intro];
  if (props.downClicked) introClasses.push(classes.goDown)

  return (
    <section className={introClasses.join(' ')}>
      <IntroItems
        downClicked={props.downClicked}
        scrollDown={props.onScrollDown} />
    </section>
  );
}

const mapStateToProps = state => {
  return {
    downClicked: state.downClicked,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onScrollDown: () => dispatch(actionCreators.scrollDown()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(intro);