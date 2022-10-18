import React from 'react';
import './Homepage.scss';
import Header from 'Components/Header/Header';
import MainLayout from 'Layouts/Main';
import BackgroundPattern from 'Components/BackgroundPattern/BackgroundPattern';

const Homepage = () => {
     return (
          <div className="homepage-container">
               <BackgroundPattern></BackgroundPattern>
               <MainLayout>
                    <Header />
               </MainLayout>
          </div>
     );
};

export default Homepage;
