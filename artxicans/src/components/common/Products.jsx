import React from 'react'
import '../../styles/Home.css'
import data from '../../data';



const Products = () => {


return (
  <section className='container-products'>
    <div className='mainContent grid'>        
        {data.map(({id,product, image, price}) => {
            return( 
        <div className="single-product" key={id}>
            <div className='imgDiv'>
                <img src={image}  alt={product}/>
            </div>
            <div className="card-info">
                <span className="product-title">{product}</span>
                <span className="price">${price}</span>
                <span className="shipping">Más envio de importación</span>
                {/* <div className="">
                            <span>Estrellas</span>
                            <span>120</span>
                        </div>
                        <span className="">Vendido por:</span><span className="">Said Castillo</span> */}
            </div>
        </div>

  ) 
}) }
    </div>
    </section>
)
}

export default Products