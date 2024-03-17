import React from 'react';
import classes from './IntroItems.module.css';

import arrowDownIcon from '../../../assets/icons/arrow_down.svg';

const introItems = props => {
  const introClasses = [classes.IntroItems];
  const downIconClasses = [classes.downIcon];
  if (props.downClicked) introClasses.push(classes.introGoDown)
  if (props.downClicked) downIconClasses.push(classes.downIconGoDown)

  return (
    <div className={introClasses.join(' ')} >
      <h3>Hello, I am</h3>
      <h1>
        <span>B</span>a<span>h</span>aa <span>M</span>o<span>h</span>a<span>m</span>e<span>d</span>
      </h1>
      <p>Front-End Web Developer</p>
      <img
        src={arrowDownIcon}
        alt="down arrow"
        className={downIconClasses.join(' ')}
        onClick={props.scrollDown} />
    </div>
  )
}

export default introItems;