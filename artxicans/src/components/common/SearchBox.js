import React from 'react'
import '../../styles/Search.css';
import busqueda from '../../assets/busqueda.svg';

const SearchBox = () => {
  return (
    <>
    <form action="" class="search-bar">
    <div className="search-box">
  <input id="search" type="text" placeholder="Search products and categories" />
  <button><img src={busqueda} alt="search"/></button>
  
  <ul className="drop"></ul>
</div>
</form>

    </>
  )
}

export default SearchBox