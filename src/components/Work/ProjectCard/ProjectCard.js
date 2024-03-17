import React from 'react';
import classes from './ProjectCard.module.css';

const projectCard = props => {
	return (
		<div className={classes.ProjectCard}>
			<img src={props.project.image} alt={props.project.name} />
			<a href={props.project.link} target='blank'>
				<div className={classes.forelayer}>
					{props.project.name}
				</div>
			</a>
		</div>
	);
}

export default projectCard;