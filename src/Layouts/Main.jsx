import React from 'react';
import PropTypes from 'prop-types';
import Header from 'Components/Header/Header';
import './Main.scss';

const MainLayout = ({ children, hideHeader }) => {
     return (
          <div className="main-layout">
               {!hideHeader && <Header />}
               {children}
          </div>
     );
};

MainLayout.propTypes = {
     children: PropTypes.any,
     hideHeader: PropTypes.bool,
};

export default MainLayout;
