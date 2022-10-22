import React from 'react';
import './ProjectCard.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const ProjectCard = ({ title, role }) => {
     return (
          <div className="project-card-container">
               <p className="project-title">{title}</p>
               <p className="project-role">{role}</p>
               <Button title={'view project'} />
          </div>
     );
};

ProjectCard.propTypes = {
     title: PropTypes.string,
     role: PropTypes.string,
};

export default ProjectCard;
