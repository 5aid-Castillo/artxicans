import React from 'react';
import '../../styles/Header.css';
import logo from '../../assets/imgimg.jpg';
import cart from '../../assets/carrito.svg';
import profile from '../../assets/user.svg';
import SearchBox from '../common/SearchBox';
import Navbar from './Navbar';
import { BrowserRouter, NavLink } from 'react-router-dom';



export const Header = () => {
 

  
  return (
    <header className="header">
       
        <section className='container-header-up'>
          <SearchBox/>
          <div>
            <BrowserRouter>
              <NavLink to="/home">
          <a href='index.html'><img src={cart} alt="cart" className='cart'/><span className="item_total">0</span></a>             
          </NavLink>
          <NavLink to="/home">
          <a href='index.html'><img src={profile} alt="profile" className='profile'/></a>
          </NavLink> 
            </BrowserRouter>
          </div>
        </section>
       
        <section className="container-header-down" >
          <div className="logo">
            <a href="index.html"><img src={logo} alt="logo" />Artxicans</a>
                 {/* <img src="../assets/logo1.svg" alt=""/> */}
          </div>
          <BrowserRouter>
          <Navbar />
          </BrowserRouter>

        </section>
    </header>
  )
}