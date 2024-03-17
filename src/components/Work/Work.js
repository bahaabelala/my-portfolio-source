import React, { useRef, useEffect } from 'react';
import classes from './Work.module.css';
import { connect } from 'react-redux';

import ProjectCard from './ProjectCard/ProjectCard';

const Work = props => {
  const slideClasses = [classes.slide];
  const workClasses = [classes.Work];
  const me = useRef(null);
  
  if (props.isActive) {
    workClasses.push(classes.shown);
    slideClasses.push(classes.show);
  }

  useEffect(() => {
    return () => {
      if (!props.isActive) {
        me.current.scrollTo(0, 0);
      }
    }
  }, [ props.isActive ])

  return (
    <section className={workClasses.join(' ')} ref={me}>
      <div className={slideClasses.join(' ')} onClick={props.showWork}>
        <h1>Work</h1>
      </div>

      {/* Render main projects */}
      {props.projects.main.map(project => {
        return <ProjectCard key={project.name} project={project} />;
      })}

    </section>
  );
}

const mapStateToProps = state => {
  return {
    projects: state.projects,
  } 
}

export default connect(mapStateToProps)(Work);