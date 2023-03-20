import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from "../images/logo.svg";
import useWindowSize from '../utils/useWindowSize';

const Footer = () => {
  const width = useWindowSize();
  

  if(width < 993){
    return(
      <footer className="container-fluid txt px-4 py-2 mt-auto text-light">
        <div className="row mb-2">
          <a href="#" className="col-sm-4 col-md-3 text-center p-1 text-light">HELP CENTER</a>
          <a href="#" className="col-sm-4 col-md-3 text-center p-1 text-light">CONTACT US</a>
          <a href="#" className="col-sm-4 col-md-3 text-center p-1 text-light">TERMS & CONDITIONS</a>
          <a href="#" className="col-sm-4 col-md-3 text-center p-1 text-light">BECOME A SELLER</a>
          <a href="#" className="col-sm-4 col-md-3 text-center p-1 text-light">REPORT A PRODUCT</a>
          <a href="#" className="col-sm-4 col-md-6 text-center p-1 text-light">SHIP YOUR PACKAGE ANYWHERE IN NIGERIA</a>
          <a href="#" className="col-sm-12 col-md-3 text-center p-1 text-light">BLACK FRIDAY</a>
        </div>
        <div className="reserved p-1 text-center">All Rights Reserved</div>
      </footer>
    )
  }

  return (
    <footer className="footer txt text-light w-100 mt-auto">
      <div className="footer-top py-4 bb">
        <div className="row mx-auto">
          <div className="col-3">
            <img src={logo} alt="" className="w-50"/>
          </div>
          <div className="col">
            <div className="mb-2">
              <div className="h6">NEW TO JUMIA?</div>
              Subscribe to our newsletter to get updates on our latest offers!
            </div>
            <form>
              <div className="form d-flex justify-content-between align-items-center">                
                <div className="search-container flex-shrink-1">
                  <input className="searcher w-100 border-0 rounded ps-2" type="text" placeholder="Enter E-mail Address"/>
                </div>
                <div className="d-flex flex-grow-1 justify-content-evenly align-items-center">
                  <button type="button" className="btn text-light border-light">Male</button>
                  <button type="button" className="btn text-light border-light">Female</button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-3">
            <div>
              <div className="h6">DOWNLOAD JUMIA FREE APP</div>
              Get access to exclusive offers!
            </div>
            {/* <div className="d-flex">
              <div className="d-flex">
                <FaApple/>
                <div>
                  <p className="mb-0">Download on the</p>
                  <span className="h6">App Store</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="footer-middle-1 py-4">
        <div className="row mx-auto">
          <div className="col">
            <span className="h6 d-block mb-3">LET US HELP YOU</span>
            <ul className="list ps-0">
              <li>Help Center</li>
              <li>How to shop on Jumia?</li>
              <li>Delivery options and timelines</li>
              <li>How to return a product on Jumia?</li>
              <li>Corporate and bulk purchases</li>
              <li>Report a Product</li>
              <li>Ship your package anywhere in Nigeria</li>
              <li>Dispute Resolution Policy</li>
            </ul>
          </div>
          <div className="col">
            <span className="h6 d-block mb-3">ABOUT JUMIA</span>
            <ul className="list ps-0">
              <li>About us</li>
              <li>Jumia careers</li>
              <li>Jumia Express</li>
              <li>Terms and Conditions</li>
              <li>Privacy and Cookie Notice</li>
              <li>Jumia Prime</li>
              <li>Jumia Global</li>
              Flash Sales
            </ul>
          </div>
          <div className="col">
            <span className="h6 d-block mb-3">MAKE MONEY WITH JUMIA</span>
            <ul className="list ps-0">
              <li>Sell on Jumia</li>
              <li>Become a Sales Consultant</li>
              <li>Become a Jumia Vendor Service Provider</li>
              <li>Become a Logistics Service Partner</li>
              <li>Join the Jumia DA Academy</li>
              <li>Join the Jumia KOL Program</li>
            </ul>
          </div>
          <div className="col">
            <span className="h6 d-block mb-3">JUMIA INTERNATIONAL</span>
            <div className="list-container d-flex">              
              <ul className="list ps-0">
                <li>Algeria</li>
                <li>Egypt</li>
                <li>Ghana</li>
                <li>Ivory Cost</li>
                <li>Kenya</li>
                <li>Morocco</li>
              </ul>
              <ul className="list ps-5">
                <li>Senegal</li>
                <li>Tunisia</li>
                <li>Uganda</li>
                <li>South Africa</li>
                <li>Zando</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-middle-2 pt-2 pb-4">
        <div className="row mx-auto">
          <div className="col-3">
            <span className="h6">JOIN US ON</span>
            <ul className="list ps-0 d-flex">
              <li className="me-3"><FaFacebook/></li>
              <li className="me-3"><FaTwitter/></li>
              <li className="me-3"><FaInstagram/></li>
              <li className="me-3"><FaYoutube/></li>
            </ul>
          </div>
          <div className="col">
            <span className="h6">PAYMENT METHODS & DELIVERY PARTNERS</span>
            <ul className="list ps-0 d-flex">
              <li className="me-3">Interswitch</li>
              <li className="me-3">Verve</li>
              <li className="me-3">Visa</li>
              <li className="me-3">Mcash</li>
              <li className="me-3">DHL</li>
              <li className="me-3">Master Card</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom reserved">
        <div className="row mx-auto d-flex">          
          <ul className="list d-flex justify-content-center">
            <li className="m-2">PAY</li>
            <li className="m-2">FOOD</li>
            <li className="m-2">PARTY</li>
            <li className="m-2">PRIME</li>
            <li className="m-2">LOGISTICS</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;