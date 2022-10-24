import React from 'react';
import cn from 'classnames';
import Proptypes from 'prop-types';
import './BackgroundPattern.scss';

const BackgroundPattern = ({ light }) => {
     return (
          <div
               className={cn('background-pattern-container', {
                    'background-pattern-blue': light,
               })}
          >
               <div className="pattern pattern-1"></div>
               <div className="pattern pattern-2"></div>
               <div className="pattern pattern-3"></div>
          </div>
     );
};

BackgroundPattern.propTypes = {
     light: Proptypes.string,
};

export default BackgroundPattern;
