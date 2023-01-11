import React, { useState } from 'react';
import '../../styles/Header.css';
import logo from '../../assets/imgimg.jpg';
import cart from '../../assets/carrito.svg';
import profile from '../../assets/user.svg';
import SearchBox from '../common/SearchBox';



export const Header = () => {
  const [mostrarBarra, setMostrarBarra]=useState(false);

  
  return (
    <header className="header">
       
        <section className='container-header-up'>
          <SearchBox />
          <a href='index.html'><img src={cart} alt="cart" className='cart'/></a>             
          <a href='index.html'><img src={profile} alt="profile" className='profile'/></a>
        </section>
       
        <section className="container-header-down" >
          <div className="logo">
            <a href="index.html"><img src={logo} alt="logo" />Artxicans</a>
                 {/* <img src="../assets/logo1.svg" alt=""/> */}
          </div>
        <nav className='menu'>
          <button className="menu-btn" onClick={() => setMostrarBarra(!mostrarBarra)}>
          {mostrarBarra ?<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/></svg>
                            :<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"/></svg>
                            }
        </button>
        <div className={mostrarBarra ?"navigation-menu" : "navigation-menu expanded"}>
        
            <a href="/home">Home</a>
         
            <a href="/Sell">All</a>
        
            <a href="/home">Sell</a>
         
            <a href="/home">Services</a>
        
            <a className="icon1" href='index.html'><img src={cart} alt="cart" className='cart'/></a>             
         
            <a className="icon1" href='index.html'><img src={profile} alt="profile" className='profile'/></a>
         </div>
         </nav>

        </section>
    </header>
  )
}