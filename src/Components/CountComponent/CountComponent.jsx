import React from 'react';
import PropTypes from 'prop-types';
import './CountComponent.scss';

const CountComponent = ({ count = 150, title = 'projects completed' }) => {
     return (
          <div className="count-container">
               <p className="count-text">{count} +</p>
               <p className="title-text">{title}</p>
          </div>
     );
};

CountComponent.propTypes = {
     count: PropTypes.number,
     title: PropTypes.string,
};

export default CountComponent;
