import React from 'react';
import PropTypes from 'prop-types';
import './StatTiles.scss';

const StatTiles = ({ title, tileDataArray, children }) => {
     return (
          <div className="stat-tiles-container">
               <div className="stat-tiles-title">{title}</div>
               <div className="tiles-container">
                    {children}
                    {tileDataArray?.map(({ title, subTitle, timeline }, i) => (
                         <div
                              key={`${title}-${i}`}
                              className="single-stat-tile"
                         >
                              <div className="tile-title">{title}</div>
                              <div className="tile-subtitle">{subTitle}</div>
                              <div className="tile-timeline">{timeline}</div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

StatTiles.propTypes = {
     title: PropTypes.string,
     tileDataArray: PropTypes.array,
     children: PropTypes.any,
};

export default StatTiles;
