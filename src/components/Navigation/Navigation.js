import React from 'react';
import classes from './Navigation.module.css';
import { connect } from 'react-redux';

import NavItem from './NavItem/NavItem';
import aboutMeIcon from '../../assets/icons/about_me.png';
import skillsIcon from '../../assets/icons/skills.png';
import workIcon from '../../assets/icons/work.png';
import contactMeIcon from '../../assets/icons/contact_me.png';

const navigation = props => {
  const navClasses = [classes.Navigation];
  if (props.downClicked) navClasses.push(classes.goDown);

  return (
    <nav className={navClasses.join(' ')}>
      <NavItem data='aboutMe' icon={aboutMeIcon}/>
      <NavItem data='skills' icon={skillsIcon}/>
      <NavItem data='work' icon={workIcon}/>
      <NavItem data='contactMe' icon={contactMeIcon}/>
    </nav>
  )
}

const mapStateToProps = state => {
  return {
    downClicked: state.downClicked,
  };
}

export default connect(mapStateToProps)(navigation);