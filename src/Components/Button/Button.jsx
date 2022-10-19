import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Button = ({ title, type }) => {
     return (
          <div
               className={cn('button-container', {
                    'button-black': type === 'black',
               })}
          >
               <button>{title}</button>
          </div>
     );
};

Button.propTypes = {
     title: PropTypes.string,
     type: PropTypes.string,
};

export default Button;
