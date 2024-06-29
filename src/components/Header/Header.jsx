import React from 'react';
import './Header.css';
import logo from "../../../public/logo.png"
const Header = () => {
     return (
          <section className='h-wrapper'>
               <div className="flexCenter paddings innerWidth h-container">
                    <img src={logo} alt="logo" width={100} />


                    <div className="h-menu">
                         <a href="">
                              Residencies
                         </a>
                         <a href="">
                              Our Value
                         </a>
                         <a href="">
                              Contact
                         </a>
                         <a href="">
                              Get Started
                         </a>
                         <button>
                              <a href="">
                                   Contact
                              </a>
                         </button>
                    </div>
               </div>
          </section>
     )
}

export default Header