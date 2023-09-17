import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { useGlobalContext } from '../../utils/context/context';
import { newProducts } from '../../utils/data/newProductsData';

const ProductModal = () => {
    const data = newProducts;
    const {productId, showModal, setShowModal, addItem, inCart} = useGlobalContext();
    const [singleProduct, setSingleProduct] = useState([]);
    const navigate = useNavigate();
    

    useEffect(()=>{
      const arr = data.filter((item)=>{
        return item.productId === productId;
      });
      setSingleProduct(arr);
    },[ productId, data ]);

    const [productObj] = singleProduct;
    const { productId: id, imageUrlFull, name, price, category } = productObj || {};


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
    <div className={`custom_modal opacity-0 pe-none ${ showModal && "opacity-100 bg-opacity-50 pe-auto" } bg-normaltext position-fixed top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-center`} onClick={()=>setShowModal(false)}>
        <div className="custom_modal-container bg-normaltext bg-opacity-25 d-flex rounded-2 p-2" onClick={(e)=>e.stopPropagation()}>
          <div className="w-100 bg-white p-2">
            <img className="w-75 d-block mx-auto" src={ imageUrlFull } alt="product" />
            <div className="text-center">
              <span className="d-block fs-4">&#8358; { price }</span>
              <span className="d-block">{ name }</span>
              <span className="d-block">Category: { category }</span>
            </div>
            <div className="d-flex gap-2 justify-content-center mt-2 mb-3">
              <button className="btn btn-orange text-light px-4 py-1 fs-6 fw-normal rounded-1" onClick={ handleClick }>
                Go to cart 
                <span className="material-symbols-outlined fs-5 align-text-bottom">add_shopping_cart</span>
              </button>
              <button className="btn btn-orange text-light px-4 py-1 fs-6 fw-normal rounded-1" onClick={ () => addItem(id) } disabled={ inCart(id) }>Buy now</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductModal;