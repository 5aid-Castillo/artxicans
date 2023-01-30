import { NavLink } from 'react-router-dom'
import {useState} from 'react';
import cart from '../../assets/carrito.svg';
import profile from '../../assets/user.svg'; 
import '../../styles/Header.css';
import arrow from '../../assets/flecha-abajo.png';
import arrowri from '../../assets/flecha-derecha.png';
const Navbar = () => {
    const [mostrarBarra, setMostrarBarra]=useState(false);
  return(
    <nav className='menu'>
          <button className="menu-btn" onClick={() => setMostrarBarra(!mostrarBarra)}>
          {mostrarBarra ?<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/></svg>
                            :<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"/></svg>
                            }
        </button>
        <div className={mostrarBarra ?"navigation-menu" : "navigation-menu expanded"}>
          
            <ul >
              <li>
                <NavLink to="/Categories"><a className="icon1" href="index.html">Categories<img className="arrow" src={mostrarBarra ? arrowri : arrow} alt="arrow"/></a></NavLink>
                            
              </li>
              <li>
                <NavLink to="/Purchases">My Purchases</NavLink>
              
              </li>
              <li>
                <NavLink to="/Sell">Sell</NavLink>
              
              </li>
              <li>
                <NavLink to="/Help">Help</NavLink>
              
              </li>
              <li>
                 <NavLink to=""><a className="icon1" href='index.html'><img src={cart} alt="cart" className='cart'/><span className="item_total">0</span></a></NavLink>
              </li>
              <li>
                <NavLink to=""><a className="icon1" href='index.html'><img src={profile} alt="profile" className='profile'/>Account</a></NavLink>
              </li> 
                            
           </ul> 
            
         </div>
         </nav>
  )
}
export default Navbar