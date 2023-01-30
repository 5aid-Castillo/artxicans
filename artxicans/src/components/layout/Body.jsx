import React from 'react'
import SearchBox from '../common/SearchBox'
import img1 from '../../assets/products/guayabera1.jpg'; 
import '../../styles/Body.css';
const Body = () => {
  return (
    <>
        <SearchBox/>

        {/* <h1 className="title"></h1> */}
        <div className="body-container">
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
        </div>
    </>
  )
}

export default Body