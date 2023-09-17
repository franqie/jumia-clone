import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from "../images/logo.svg";
import Googleplay from "../icons/Googleplay";
import Applestore from "../icons/Applestore";
import useWindowSize from '../utils/hooks/useWindowSize';

const Footer = () => {
  const width = useWindowSize();
  

  if(width < 993){
    return(
      <footer className="bg-footer">
        <div className="container-fluid">
          <div className="row my-4">
            <a href="#" className="col-sm-4 text-center text-decoration-none py-2 text-light">HELP CENTER</a>
            <a href="#" className="col-sm-4 text-center text-decoration-none py-2 text-light">CONTACT US</a>
            <a href="#" className="col-sm-4 text-center text-decoration-none py-2 text-light">TERMS & CONDITIONS</a>
            <a href="#" className="col-sm-4 text-center text-decoration-none py-2 text-light">BECOME A SELLER</a>
            <a href="#" className="col-sm-4 text-center text-decoration-none py-2 text-light">REPORT A PRODUCT</a>
            <a href="#" className="col-sm-4 text-center text-decoration-none py-2 text-light">BLACK FRIDAY</a>
            <a href="#" className=" text-center text-decoration-none py-2 text-light">SHIP YOUR PACKAGE ANYWHERE IN NIGERIA</a>
          </div>
          <div className="text-iconfill p-1 text-center border-top border-iconfill">All Rights Reserved</div>
        </div>
      </footer>
    )
  }

  return (
    <footer className="bg-footer">
      <div className="py-4 bg-normaltext text-light">
        <div className="container-fluid">
          <div className="row mx-auto">
            <div className="col-3">
              <img src={logo} alt="" className="w-50"/>
            </div>
            <div className="col">
              <div className="mb-2">
                <div className="h6">NEW TO JUMIA?</div>
                Subscribe to our newsletter to get updates on our latest offers!
              </div>
              <form className="w-75">
                <div className="d-flex align-items-center gap-2">                
                  <div className="bg-light d-flex align-items-center p-2 rounded">
                    <span className="material-symbols-outlined text-iconfill">mail</span>
                    <input className="border-0 rounded ps-1 ms-2" type="text" placeholder="Enter E-mail Address"/>
                  </div>
                  <div className="d-flex justify-content-evenly align-items-center gap-2">
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
              <div className="d-flex flex-column gap-1 mt-1">
                <Applestore className="w-25" />
                <Googleplay className="w-25" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="container-fluid">
          <div className="row mx-auto text-graylight">
            <div className="col">
              <span className="h6 d-block mb-3 text-light">LET US HELP YOU</span>
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
              <span className="h6 d-block mb-3 text-light">ABOUT JUMIA</span>
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
              <span className="h6 d-block mb-3 text-light">MAKE MONEY WITH JUMIA</span>
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
              <span className="h6 d-block mb-3 text-light">JUMIA INTERNATIONAL</span>
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
      </div>
      <div className="pt-2 pb-4">
        <div className="container-fluid">
          <div className="row mx-auto">
            <div className="col-3">
              <span className="h6 text-light">JOIN US ON</span>
              <ul className="list ps-0 d-flex text-graylight">
                <li className="me-3"><FaFacebook/></li>
                <li className="me-3"><FaTwitter/></li>
                <li className="me-3"><FaInstagram/></li>
                <li className="me-3"><FaYoutube/></li>
              </ul>
            </div>
            <div className="col">
              <span className="h6 text-light">PAYMENT METHODS & DELIVERY PARTNERS</span>
              <ul className="list ps-0 d-flex text-graylight">
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
      </div>
      <div className="text-graylight">
        <div className="container-fluid">
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
      </div>
    </footer>
  )
}

export default Footer;