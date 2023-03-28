import React from 'react'
import {FaSearch} from 'react-icons/fa'
import '../../styles/Search.css';
const SearchBox = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
    }
  return (
    <form className='searchContainer' onSubmit={handleSubmit}>
        <div className='searchBox'>
            <input className='searchInput' type="text"
                placeholder='Buscar producto' aria-label="Search Product"
                /* Onghage */
            />
            <FaSearch color='black' size={20} className='searchButton' />
        </div>
    </form>
  )
}

export default SearchBox