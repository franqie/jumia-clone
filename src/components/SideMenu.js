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
    <aside className={`custom_modal opacity-0 pe-none ${ showSidemenu && "opacity-100 bg-opacity-50 pe-auto" } bg-normaltext position-fixed top-0 start-0 bottom-0 end-0`}
    onClick={()=>setShowSidemenu(false)}>
      <div className="w-75 h-100 bg-white overflow-y-auto" onClick={(e)=>e.stopPropagation()}>
        <div className="p-2 d-flex align-items-center">
          <button className="d-flex border-0 bg-transparent p-2" onClick={()=>setShowSidemenu(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
          <img src={logo} alt="" className="logo"/>
        </div>
        <div className="pt-0 pb-4">
          <button type="button" className="d-flex justify-content-between border-0 bg-white d-block px-3 py-2 border-top w-100 text-start text-uppercase">
            <span>Need Help?</span>
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
          <p className="px-3 py-2 d-flex justify-content-between border-top">
            <span className="">MY JUMIA ACCOUNT</span>
            <span class="material-symbols-outlined">chevron_right</span>
          </p>
          <p className="ps-3">Orders</p>
          <p className="ps-3">Pending Reviews</p>
          <p className="ps-3">Jumia Coupon</p>
          <p className="ps-3">Saved items</p>
          <p className="px-3 py-2 d-flex justify-content-between border-top">
            <span className="">OUR CATEGORIES</span>
            <span className="">See All</span>
          </p>
          <p className="ps-3">Supermarket</p>
          <p className="ps-3">Health & Beauty</p>
          <p className="ps-3">Home & Office</p>
          <p className="ps-3">Phone & Tablets</p>
          <p className="ps-3">Computing</p>
          <p className="ps-3">Electronics</p>
          <p className="ps-3">Women's Fashion</p>
          <p className="ps-3">Men's Fashion</p>
          <p className="ps-3">Baby Products</p>
          <p className="ps-3">Gaming</p>
          <p className="ps-3">Sporting Goods</p>
          <p className="ps-3">Automobile</p>
          <p className="px-3 py-2 d-flex justify-content-between border-top">
            <span className="">OUR SERVICES</span>
            <span className="">See All</span>
          </p>
          <p className="ps-3">Jumia Prime</p>
          <p className="ps-3">Pay Airtime & Bills</p>
          <p className="ps-3">Pay Electricity Bills</p>
          <p className="ps-3">Pay Internet Bills</p>
          <p className="ps-3">Buy Data</p>
          <p className="ps-3">Jumia Food</p>
          <p className="ps-3 py-2 border-top">Sell on Jumia</p>
          <p className="ps-3">Contact us</p>
          <p className="ps-3">Help Center</p>
        </div>
      </div>
    </aside>
  )
}

export default SideMenu;