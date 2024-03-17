import React from 'react';
import classes from './NavItem.module.css'
import { connect } from 'react-redux';
import * as actionCreators from '../../../store/actions/actionCreators';

const navItem = props => {
  const navItemClasses = [classes.NavItem];
  if (props.sections[props.data]) navItemClasses.push(classes.active)

  return (
    <a
      className={navItemClasses.join(' ')}
      onClick={() => props.onTurnSection(props.data)}
      title={props.data.split('M').join(' m')}
      >
      <img src={props.icon} alt={props.data.split('M').join(' m')}/>
    </a>
  )
}

const mapStateToProps = state => {
  return {
    sections: state.navSections,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onTurnSection: section => dispatch(actionCreators.turnSection(section)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(navItem);