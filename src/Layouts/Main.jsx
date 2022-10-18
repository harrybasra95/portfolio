import React from 'react';
import PropTypes from 'prop-types';
import Header from 'Components/Header/Header';
import './Main.scss';

const MainLayout = ({ children }) => {
     return (
          <div className="main-layout">
               <Header />
               {children}
          </div>
     );
};

MainLayout.propTypes = {
     children: PropTypes.any,
};

export default MainLayout;
