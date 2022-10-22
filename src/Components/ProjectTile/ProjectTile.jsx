import React from 'react';
import './ProjectTile.scss';
import cn from 'classnames';
import PropsTypes from 'prop-types';
import Button from '../Button/Button';

const ProjectTile = ({
     small,
     reverse,
     tileData: { title, roles, imgUrl },
}) => {
     return (
          <div
               className={cn('project-tile-container', {
                    'project-tile-small': small,
                    'project-tile-reverse': reverse,
               })}
          >
               <div className="project-description">
                    <div className="project-texts-container">
                         <p className="project-tile">{title}</p>
                         <p className="project-role">{roles}</p>
                    </div>
                    <div className="case-study-container">
                         <Button title={'Case Study'} type={'black'} />
                    </div>
               </div>
               <div className="project-image">
                    <img src={imgUrl} alt="" />
               </div>
          </div>
     );
};

ProjectTile.propTypes = {
     type: PropsTypes.string,
     reverse: PropsTypes.string,
     small: PropsTypes.string,
     tileData: PropsTypes.object,
};

export default ProjectTile;
