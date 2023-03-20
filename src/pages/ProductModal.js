import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import useDataBase from '../utils/useDataBase';

const ProductModal = () => {
    const data = useDataBase(20);
    const {productId, showModal, setShowModal, addItem, inCart} = useGlobalContext();
    const [singleProduct, setSingleProduct] = useState([]);
    const navigate = useNavigate();
    

    useEffect(()=>{
      const arr = data.filter((item)=>{
        return item.id === productId;
      });
      setSingleProduct(arr);
    },[productId,showModal]);

    const [productObj] = singleProduct;
    const {id, img, title, price, category, description} = productObj || {};


    if(showModal){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }


    const handleClick = ()=>{
      if(inCart(id)){        
        setShowModal(false);
        navigate("/cart");
      } else {        
        addItem(id);
        setShowModal(false);
        navigate("/cart");
      }
    };
    
  return (
    <div className={`modal-overlay ${showModal?"show":null} position-fixed top-0 start-0 d-flex justify-content-center align-items-center`} onClick={()=>setShowModal(false)}>
        <div className="modal-container bg-light rounded d-flex flex-column justify-content-between align-items-center position-relative" onClick={(e)=>e.stopPropagation()}>
            <button onClick={()=>setShowModal(false)} className="btn p-2 border-0 btn-times"><i className="bi bi-x-lg fs-5"></i></button>
          <div className="px-2 py-4 d-flex justify-content-evenly align-items-center modal-body">
            <div className="p-2">
              <div className="photo text-center">
                <img src={img} alt="" className="w-75 mx-auto rounded"/>
              </div>              
              <div className="mt-4 social-container-top">
                <h5 className="hd">SHARE THIS PRODUCT</h5>
                <div className="icons">
                  <div className="modal-icon-social p-1 me-2 fs-5 border border-dark rounded-circle"><FaFacebook/></div>
                  <div className="modal-icon-social p-1 mt-1 fs-5 border border-dark rounded-circle"><FaTwitter/></div>
                </div>
              </div>
            </div>
            <div className="p-0 px-2 h-100">
              <div className="desc">                
                <h5 className="m-0 hd">{title}</h5>
                <p className="mb-2">Category: {category}</p>
                {price && <strong className="">&#x20A6;{price.toFixed(2)}</strong>}
                <div className="mt-2 mb-3">
                  <h6 className="m-0">Description:</h6>                  
                  <p className="txt">{description}</p>
                </div>
              </div>
              <div className="modal-buttons mt-sm-4">                
                <button type="button" onClick={handleClick} className="btn buy-btn text-light w-100 mb-2 fw-bold">
                  Go to cart <span className="modal-icon"><i className="bi bi-cart"></i></span></button>
                <button disabled={inCart(id)} type="button" onClick={()=>addItem(id)} className="btn buy-btn text-light w-100 fw-bold">Buy now</button>
              </div>
              <div className="mt-2 social-container-bottom">
                <h6 className="hd fs-6">SHARE THIS PRODUCT</h6>
                <div className="icons bottom">
                  <div className="modal-icon-social p-1 me-2 fs-5 border border-dark rounded-circle"><FaFacebook/></div>
                  <div className="modal-icon-social p-1 fs-5 border border-dark rounded-circle"><FaTwitter/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductModal;