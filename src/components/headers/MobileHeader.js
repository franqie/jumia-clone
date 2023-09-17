import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./../../images/logo.svg";
import { useGlobalContext } from '../../utils/context/context';
import useScrollDirection from '../../utils/hooks/useScrollDirection';

const MobileHeader = () => {
    const scrollDirection = useScrollDirection();
    const { setShowSidemenu, total } = useGlobalContext();

  return (
    <header className={`mobile-header ${ scrollDirection==="down" && "hide" } custom-shadow `}>
        <div className="container-fluid d-flex justify-content-between py-2">
            <div className="left d-flex align-items-center">
                <button className="d-flex border-0 bg-transparent p-2" onClick={()=>setShowSidemenu(true)}>
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <Link to="/">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
            </div>
            <div className="right d-flex align-items-center">
                <Link to="/search" className="d-none text-decoration-none text-darktext p-2">
                    <span className="material-symbols-outlined">search</span>
                </Link>
                <Link to="/customer/login" className="d-flex text-decoration-none text-darktext p-2">
                    <span className="material-symbols-outlined">person</span>
                </Link>
                <Link to="/cart" className="d-flex text-decoration-none text-darktext p-2 position-relative">
                    <span className="material-symbols-outlined">shopping_cart</span>
                    {total > 0 && <span className="bg-orange d-flex justify-content-center align-items-center position-absolute text-white counter">{total}</span>}
                </Link>
            </div>
        </div>
        <div className="container-fluid pb-2">
            <button className="rounded-pill d-flex align-items-center w-100 p-1 bg-white border border-graylight">
                <span className="material-symbols-outlined">search</span>
                <input className="flex-grow-1 border-0 ms-2" type="text" placeholder="Search products, brands and categories"/>
            </button>
        </div>
    </header>
  )
}

export default MobileHeader;