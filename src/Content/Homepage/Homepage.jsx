import React from 'react';
import './Homepage.scss';
import MainLayout from 'Layouts/Main';
import BackgroundPattern from 'Components/BackgroundPattern/BackgroundPattern';
import * as Images from 'Images';
import CountComponent from 'Components/CountComponent/CountComponent';
import GeneralStats from 'Data/Homepage/GeneralStats.json';
import Education from 'Data/Homepage/Education.json';
import WorkExp from 'Data/Homepage/WorkExp.json';
import ToolsUsed from 'Data/Homepage/ToolsUsed.json';
import Skills from 'Data/Homepage/Skills.json';
import ProjectTile from 'Components/ProjectTile/ProjectTile';
import ProjectCard from 'Components/ProjectCard/ProjectCard';
import StatTiles from 'Components/StatTiles/StatTiles';

const Homepage = () => {
     const renderCountComponents = () => {
          return GeneralStats.map(({ title, count }, i) => (
               <CountComponent
                    key={`stats-component-${i}`}
                    title={title}
                    count={count}
               />
          ));
     };

     const renderEducationComponent = () => {
          return (
               <StatTiles
                    title={Education.title}
                    tileDataArray={Education.items}
               />
          );
     };

     const renderSkillsComponent = () => {
          return (
               <StatTiles title={Skills.title}>
                    <div className="skills-container">
                         {Skills.items.map((skill, i) => (
                              <p
                                   className="tile-subtitle subtitle-only"
                                   key={`${skill}-${i}`}
                              >
                                   {skill}
                              </p>
                         ))}
                    </div>
               </StatTiles>
          );
     };

     const renderToolsUsedComponent = () => {
          return (
               <StatTiles title={ToolsUsed.title}>
                    <div className="tools-used-container">
                         {ToolsUsed.items.map((toolName) => (
                              <div key={toolName} className="tool-icon">
                                   <img src={Images[toolName]} alt="" />
                              </div>
                         ))}
                    </div>
               </StatTiles>
          );
     };

     const renderWorkExpComponent = () => {
          return (
               <StatTiles title={WorkExp.title} tileDataArray={WorkExp.items} />
          );
     };

     return (
          <div className="homepage-container">
               <div className="landing-page">
                    <MainLayout>
                         <div className="main-content-container">
                              <BackgroundPattern />
                              <div className="profile-container">
                                   <img src={Images.Profile} alt="" />
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
                    </MainLayout>
               </div>
               <MainLayout hideHeader>
                    <div className="accomplishments-container">
                         {renderCountComponents()}
                    </div>
                    <div className="project-tiles-container">
                         <div className="projects-tiles-title">
                              <p>Latest projects 🌈</p>
                         </div>
                         <div className="tiles-container">
                              <ProjectTile
                                   tileData={{
                                        title: 'Fashion Blog Website',
                                        roles: 'UI, UX Project',
                                        imgUrl: 'https://jackcreative.staticmania.com/images/project/project-1.png',
                                   }}
                              />
                              <div className="project-combination-tiles">
                                   <ProjectTile
                                        small
                                        revers
                                        tileData={{
                                             title: 'Datasoft Web & Application Design',
                                             roles: 'Product Design',
                                             imgUrl: 'https://jackcreative.staticmania.com/images/project/project-2.png',
                                        }}
                                   />
                                   <ProjectCard
                                        title="Movie Time IOS App Development"
                                        role="Mobile App"
                                   />
                              </div>
                         </div>
                    </div>
               </MainLayout>
               <div className="experiences-container">
                    <BackgroundPattern light />
                    <div className="experiences-title">
                         <p>Experiences 💪</p>
                    </div>
                    <div className="work-experience-container">
                         {renderWorkExpComponent()}
                         {renderEducationComponent()}
                         <div className="multiple-stat-tiles-container">
                              {renderSkillsComponent()}
                              {renderToolsUsedComponent()}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Homepage;
