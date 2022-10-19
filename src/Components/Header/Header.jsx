import React from 'react';
import LogoImg from 'Images/logo.png';
import './Header.scss';
import Button from '../Button/Button';

const Header = () => {
     return (
          <header>
               <div className="header ">
                    <div className="header-left-container">
                         <div className="logo-container">
                              <img src={LogoImg} alt="" />
                         </div>
                         <div className="navlinks-container">
                              <div className="navlink">Home</div>
                              <div className="navlink">Projects</div>
                              <div className="navlink">#Repos</div>
                         </div>
                    </div>
                    <div className="header-right-container">
                         <Button type={'black'} title="Contact Me" />
                    </div>
               </div>
               <div className="header-space"></div>
          </header>
     );
};

export default Header;
