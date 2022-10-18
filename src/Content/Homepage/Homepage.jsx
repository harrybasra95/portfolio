import React from 'react';
import './Homepage.scss';
import MainLayout from 'Layouts/Main';
import BackgroundPattern from 'Components/BackgroundPattern/BackgroundPattern';
import ProfileImg from 'Images/profile-img.png';

const Homepage = () => {
     return (
          <MainLayout>
               <div className="homepage-container">
                    <BackgroundPattern></BackgroundPattern>
                    <div className="main-content-container">
                         <div className="profile-container">
                              <img src={ProfileImg} alt="" />
                         </div>
                         <div className="heading-title">
                              <div className="main-heading">
                                   <h1>
                                        👋 Hey there,
                                        <br />
                                        It&apos;s Harry from India
                                   </h1>
                              </div>
                              <div className="sub-heading">
                                   <h2>Sr. Full Stack Developer.</h2>

                                   <div className="skills-container">
                                        <p>Node JS</p>
                                        <p>React JS</p>
                                        <p>Solidity</p>
                                        <p>DevOps</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </MainLayout>
     );
};

export default Homepage;
