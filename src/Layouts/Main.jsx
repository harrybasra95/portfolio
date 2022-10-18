import React from 'react';
import PropTypes from 'prop-types';
import './Main.scss';

const MainLayout = ({ children }) => {
     return <div className="main-layout">{children}</div>;
};

MainLayout.propTypes = {
     children: PropTypes.any,
};

export default MainLayout;
