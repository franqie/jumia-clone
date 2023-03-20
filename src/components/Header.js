import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useScrollDirection from '../utils/useScrollDirection';
import HeaderLink from './HeaderLink';
import logo from "../images/logo.svg";
import MiniHeader from './MiniHeader';
import Sidebar from './Sidebar';
import useWindowSize from '../utils/useWindowSize';
import { useGlobalContext } from '../context';


const Header = () => {
  const { total, account, setAccount, help, setHelp } = useGlobalContext();
  const width = useWindowSize();
  const scrollDirection = useScrollDirection();
  const {pathname} = useLocation();

  if(width < 993){
    return (
      <MiniHeader notNew={true} scrollDirection={scrollDirection}/>
    )
  };


  return (
    <header className={`hdr header ${scrollDirection === "down" ? "hide": null} container-fluid p-0`}>
        <div className="header-center row d-flex mx-auto">

          <div className="header-left col-2 d-flex align-items-center ps-0">
            {/* Toggle bar not displyed */}
            {!(pathname === "/") && <div className="bars me-3 position-relative">
              <i className="bi bi-list fs-4"></i>
              <div className="s-bar position-absolute rounded">
                <Sidebar/>
              </div>
            </div>}
            <div className="logo ms-0 me-auto position-relative">
              <Link to="/">
              <img src={logo} alt="" className="logo-img"/>
              <span className="clone position-absolute text-small">Clone</span>
              </Link>
            </div>
          </div>


          <form className="find col-5 flex-grow-1 d-flex align-items-center p-0" onSubmit={(e)=>{e.preventDefault()}}>
            <div className="find-box d-flex bg-white w-100 px-2">
              <i className="bi bi-search fs-6 me-2"></i>
              <input 
              type="text"
              placeholder="Search products, brands and categories"
              className="search-box border-0"
              />
            </div>
            <button className="search ms-2 border-0">SEARCH</button>
          </form>

          <div className="header-right col-4  d-flex align-items-center justify-content-end">

            <div className="dropdown me-2">              
              <div className="px-2" data-bs-toggle="dropdown">
                <HeaderLink 
                  icon={<i className="bi bi-person fs-3"></i>}
                  angleIcon={<i className="bi bi-chevron-down fs-6"></i>}
                  // angleIconUp={<i className="bi bi-chevron-up fs-6"></i>}
                  title="Account"
                  open={account}
                  setOpen={setAccount}
                />
              </div>
              <ul className="dropdown-menu">
                <li className="text-center px-2"><Link to="/customer/login" className="dd-btn btn btn-dark w-100">SIGN IN</Link></li>
                <li><hr className="divider"></hr></li>
                <li><Link to="/customer/login" className="dropdown-item">My Accounts</Link></li>
                <li><a href="#" className="dropdown-item">Orders</a></li>
                <li><a href="#" className="dropdown-item">Saved Items</a></li>
              </ul>
            </div>

            <div className="dropdown me-2">              
              <div className="px-2" data-bs-toggle="dropdown">
                <HeaderLink
                  icon={<i className="bi bi-question-circle fs-4"></i>}
                  title="Help"
                  angleIcon={<i className="bi bi-chevron-down fs-6"></i>}
                  // angleIconUp={<i className="bi bi-chevron-up fs-6"></i>}
                  open={help}
                  setOpen={setHelp}
                />
              </div>
              <ul className="dropdown-menu">
                <li><a href="#" className="dropdown-item">Help Center</a></li>
                <li><a href="#" className="dropdown-item">Place & track order</a></li>
                <li><a href="#" className="dropdown-item">Order cancellation</a></li>
                <li><a href="#" className="dropdown-item">Returns & Refunds</a></li>
                <li><a href="#" className="dropdown-item">Payment & Jumia account</a></li>
                <li><hr className="divider"></hr></li>
                <li className="text-center px-2"><a href="#" className="dd-btn btn btn-dark w-100">LIVE CHAT</a></li>
              </ul>
            </div>

            
            <Link to="/cart" className="pe-1">
              {/* <HeaderLink icon={<i className="bi bi-cart3 fs-4"></i>} title="Cart" /> */}
              <div className="info d-flex align-items-baseline">
                <span className="icon me-2 position-relative">
                  <i className="bi bi-cart3 fs-4"></i>
                {total > 0 ? <span className="counter position-absolute text-light">{total}</span> : null}
                </span>

                <span className="title">Cart</span>        
                
                {/* {<span className="angle ms-2">
                    {open ?  angleIconUp  :  angleIconDown }
                </span>} */}
              </div>
            </Link>            
          </div>
        </div>
    </header>
  )
}

export default Header;