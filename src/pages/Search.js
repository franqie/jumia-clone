import React from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const navigate = useNavigate();

  return (
    <div className="search-pg w-100 h-100">
      <div className="mini-header container-fluid p-2 bg-white">        
        <div className="d-flex">
          <button onClick={()=>navigate(-1)} type="button" className="px-2 py-1 me-1 flex-shrink-0 border-0 bg-transparent">
            <i className="bi bi-arrow-left fs-5"></i>
          </button>
          <form className="p-0 flex-grow-1 d-flex" onSubmit={(e)=>{e.preventDefault()}}>
            <div className="border-2 border-end me-2 p-0 flex-grow-1">
              <input type="text" placeholder="Search products, brands and categories" className="w-100 px-2 h-100 border-0" />
            </div>
            <button type="submit" className="px-2 py-1 flex-shrink-0 border-0 bg-transparent">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Search;