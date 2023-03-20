import React from 'react';
import { FaTimes, FaTrash } from 'react-icons/fa';
import { useGlobalContext } from '../context';

const RemoveModal = () => {
    const {productId, removeItem, showRemoveModal, setShowRemoveModal} = useGlobalContext();

    const handleRemove = ()=>{
        removeItem(productId);
        setShowRemoveModal(false);
    };


    if(showRemoveModal){
      //document.body.classList.add("active");
      document.body.style.overflow = "hidden";
    } else {
        //document.body.classList.remove("active");
        document.body.style.overflow = "auto";
    }

  return (
    <div className={`remove-modal ${showRemoveModal?"show":null} position-fixed top-0 start-0 d-flex justify-content-center align-items-center`} onClick={()=>setShowRemoveModal(false)}>
        <div className="remove-m-container h-25 bg-white rounded position-relative" onClick={(e)=>e.stopPropagation()}>
            <button onClick={()=>setShowRemoveModal(false)} type="button" className="btn position-absolute end-0 top-0 fs-5 p-3 border-0"><FaTimes/></button>
            <h2 className="h5 m-0 px-4 pt-4">Remove from cart?</h2>
            <div className="m-0 py-2 px-4">
                <p className="m-0 h6 p-1">Do you really want to remove this item from cart?</p>
                <div className="m-0 py-3">
                    <button onClick={handleRemove} type="button" className="remove btn w-100 d-flex justify-content-center align-items-center text-light"><FaTrash className=""/><span className="mx-auto fw-bold">REMOVE ITEM</span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RemoveModal;