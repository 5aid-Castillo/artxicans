import React from 'react';
import '../../styles/Header/Header.css';
import logo from '../../assets/imgimg.jpg';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';



export const Header = () => {
 

  
  return (
    <header className="header">      
        {/* <section className="container-header" > */}
           <div className="logo">
            <a href="index.html"><img src={logo} alt="logo" />Artxicans</a>
          </div> 
          <BrowserRouter>
          <Navbar />
          </BrowserRouter>

        {/* </section> */}
    </header>
  )
}