import { NavLink } from 'react-router-dom'
import {useState} from 'react';
import { Twirl as Hamburger } from 'hamburger-react'

import '../../styles/Header/Header.css';
import '../../styles/Header/Header.scss'; 

const Navbar = () => {
    const [isOpen, setIsOpen]=useState(false);
    /* const [navActive, setNavActive] = useState('navbar'); */
    const close = () =>{
      setIsOpen(!isOpen)
    }
    
  return(
    <nav className='navigation'>
          <button className="burger-btn">
            <Hamburger color="#FFFF" size={20} toggled={isOpen} toggle={setIsOpen}/>
          </button>
        <div id="navbar" className={isOpen ?"navbar active" :"navbar"}>
          
           <ul className='navList'>
              <li className='navItem'>
                <NavLink to="/Categories" className="navLink" onClick={close}>Categorias</NavLink>
                            
              </li>
              <li className='navItem'>
                <NavLink to="/Purchases" className="navLink" onClick={close}>Mis Compras</NavLink>
              
              </li>
              <li className='navItem'>
                <NavLink to="/Sell" className="navLink" onClick={close}>Vender</NavLink>
              
              </li>
              
              <li className='navItem'>
                <NavLink to="/Lenguage" className="navLink" onClick={close}>Idioma</NavLink>
              
              </li>

              <li className='navItem'>
                <NavLink to="/Help" className="navLink" onClick={close}>Ayuda</NavLink>
              
              </li>
              
                            
           </ul>   
            
         </div>
         </nav>
  )
}
export default Navbar