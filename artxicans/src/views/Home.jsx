import React from 'react'
import SearchBox from '../components/common/SearchBox';
import '../styles/Home.css';
import Products from '../components/common/Products';
/* import {FaUserAlt} from 'react-icons/fa'; */

const Body = () => {
  return (
    <>
         {/* <div className="head-mobile"> */}
            <SearchBox/>
          {/*   <FaUserAlt />
         </div> */}
          <Products />
        {/* <h1 className="title"></h1> */}
       {/*  <div className="body-container">
          <div className="list-products">
            <div className="product">
              <img src={img1}  alt="Guayabera"/>
              <div className="information">
                   <span className="price">$1500</span>
                   <span className="product-title">Guayabera Azul</span>
                   <span className="shipping">Envio Gratis</span>
                   <div className="">
                      <span>Estrellas</span>
                      <span>120</span>
                   </div>
                   <span className="">Vendido por:</span><span className="">Said Castillo</span>
              </div>
            </div>
            </div>
        </div> */}
    </>
  )
}

export default Body