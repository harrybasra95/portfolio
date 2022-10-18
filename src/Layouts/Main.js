import React from 'react';
import PropTypes from 'prop-types';

const MainLayout = ({ children }) => {
     return (
          <>
               <div>{children}</div>
          </>
     );
};

MainLayout.propTypes = {
     children: PropTypes.any,
     pageHeading: PropTypes.string,
};

export default MainLayout;
