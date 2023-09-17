import React from 'react';
import { useGlobalContext } from '../utils/context/context';
import logo from "../images/logo.svg";

const SideMenu = () => {
  const {showSidemenu, setShowSidemenu} = useGlobalContext();

  React.useEffect(() => {
    if (showSidemenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showSidemenu]);

  return (
    <aside className={showSidemenu?"sidemenu-overlay show-sidemenu":"sidemenu-overlay"}
    onClick={()=>setShowSidemenu(false)}>
      <div className="sidemenu bg-white" onClick={(e)=>e.stopPropagation()}>
        <div className="sidemenu-header py-2 px-3 d-flex align-items-center">
          <i className="bi bi-x-lg fs-4 me-3" onClick={()=>setShowSidemenu(false)}></i>
          <img src={logo} alt="" className=""/>
        </div>
        <div className="sidemenu-list pt-0 pb-4 hd">
          <button type="button" className="border-0 bg-white d-block ps-3 py-2 border-top w-100 text-start">Live Help</button>
          <a href="#" className="px-3 py-2 d-flex justify-content-between border-top">
            <span className="smh">MY JUMIA ACCOUNT</span>
            <span><i className="bi bi-chevron-right"></i></span>
          </a>
          <a href="#" className="hd ps-3 py-2 d-block">Orders</a>
          <a href="#" className="hd ps-3 py-2 d-block">Pending Reviews</a>
          <a href="#" className="hd ps-3 py-2 d-block">Jumia Coupon</a>
          <a href="#" className="hd ps-3 py-2 d-block">Saved items</a>
          <a href="#" className="px-3 py-2 d-flex justify-content-between border-top">
            <span className="smh">OUR CATEGORIES</span>
            <span className="">See All</span>
          </a>
          <a href="#" className="hd ps-3 py-2 d-block">Supermarket</a>
          <a href="#" className="hd ps-3 py-2 d-block">Health & Beauty</a>
          <a href="#" className="hd ps-3 py-2 d-block">Home & Office</a>
          <a href="#" className="hd ps-3 py-2 d-block">Phone & Tablets</a>
          <a href="#" className="hd ps-3 py-2 d-block">Computing</a>
          <a href="#" className="hd ps-3 py-2 d-block">Electronics</a>
          <a href="#" className="hd ps-3 py-2 d-block">Women's Fashion</a>
          <a href="#" className="hd ps-3 py-2 d-block">Men's Fashion</a>
          <a href="#" className="hd ps-3 py-2 d-block">Baby Products</a>
          <a href="#" className="hd ps-3 py-2 d-block">Gaming</a>
          <a href="#" className="hd ps-3 py-2 d-block">Sporting Goods</a>
          <a href="#" className="hd ps-3 py-2 d-block">Automobile</a>
          <a href="#" className="px-3 py-2 d-flex justify-content-between border-top">
            <span className="smh">OUR SERVICES</span>
            <span className="">See All</span>
          </a>
          <a href="#" className="hd ps-3 py-2 d-block">Jumia Prime</a>
          <a href="#" className="hd ps-3 py-2 d-block">Pay Airtime & Bills</a>
          <a href="#" className="hd ps-3 py-2 d-block">Pay Electricity Bills</a>
          <a href="#" className="hd ps-3 py-2 d-block">Pay Internet Bills</a>
          <a href="#" className="hd ps-3 py-2 d-block">Buy Data</a>
          <a href="#" className="hd ps-3 py-2 d-block">Jumia Food</a>
          <a href="#" className="hd ps-3 py-2 d-block border-top">Sell on Jumia</a>
          <a href="#" className="hd ps-3 py-2 d-block">Contact us</a>
          <a href="#" className="hd ps-3 py-2 d-block">Help Center</a>
        </div>
      </div>
    </aside>
  )
}

export default SideMenu;