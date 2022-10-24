import React from 'react';
import { Logo } from 'Images';
import './Header.scss';
import Button from '../Button/Button';
import useScrollPosition from 'Hooks/useScrollPosition';
import cn from 'classnames';

const Header = () => {
     const scrollPosition = useScrollPosition();
     const scrollCheck = scrollPosition > 20;
     return (
          <header>
               <div
                    className={cn('header ', {
                         'header-white': scrollCheck,
                    })}
               >
                    <div className="header-left-container">
                         <div className="logo-container">
                              <img src={Logo} alt="" />
                         </div>
                         <div className="navlinks-container">
                              <div className="navlink">Home</div>
                              <div className="navlink">Projects</div>
                              <div className="navlink">#Repos</div>
                         </div>
                    </div>
                    <div className="header-right-container">
                         <Button
                              type={scrollCheck ? 'black' : 'white'}
                              title="Contact Me"
                         />
                    </div>
               </div>
               <div className="header-space"></div>
          </header>
     );
};

export default Header;
