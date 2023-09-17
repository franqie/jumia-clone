import React from 'react';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useGlobalContext } from '../utils/context/context';
import image from "../images/empty_cart.svg";

const Cart = () => {
    const {
            cart,
            setProductId,
            changeQty,
            total,
            setShowRemoveModal,
            showProduct
        } = useGlobalContext();

    let totalAmount = cart.reduce((totalAmount,cartItem)=>{
        const {price,quantity} = cartItem;
        const value = price*quantity;
        totalAmount += value;
        return totalAmount;
    },0);

    totalAmount = totalAmount.toFixed(2);

  return (
    <main className="py-md-4 bg-white">
        <div className="row p-0 m-0 mx-auto mt-2">
            {cart.length > 0 ?
            <>
                <div className="col-lg-9">
                    <article className="">
                        <div className="p-3 border-bottom border-borderColor">
                            <h2 className="h5 m-0">Cart ({total})</h2>
                        </div>                    
                        <div className="">
                            {cart.map((cartItem, i)=>{
                                const { 
                                    productId: id,
                                    imageUrlFull,
                                    name,
                                    price,
                                    quantity,
                                    // category
                                } = cartItem;
                                return (
                                    <article key={id} className="py-3 px-2 border-bottom border-borderColor">
                                        <div className="d-flex gap-1" onClick={()=>showProduct(id)}>
                                            <div className="w-100">
                                                <img src={imageUrlFull} alt="" className=""/>
                                            </div>
                                            <div className="w-100">
                                                <div className="">
                                                    <p className="fw-bold text-uppercase mb-1">{name}</p>
                                                    <p className="txt desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit corrupti excepturi voluptas voluptatum</p>
                                                </div>                                    
                                                <div className="fs-4 cart-price">
                                                    <h4 className="h5 fw-bold price">&#x20A6; {price.toFixed(2)}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-2 d-flex justify-content-between">
                                            <button onClick={()=>{setProductId(id);setShowRemoveModal(true)}} type="button" className="border-0 outline-0 bg-transparent text-orange">
                                                <span className="align-text-bottom"><FaTrash/></span>
                                                <span className="text-uppercase small h5 ms-1">Remove</span>
                                            </button>
                                            <div className="d-flex align-items-center">
                                                <button onClick={(e)=>changeQty(e, id)} type="button" className="dec-btn d-flex justify-content-center align-items-center text-light border-0 bg-orange p-1 shadow"><FaMinus className="pe-none"/></button>
                                                <span className="d-flex justify-content-center align-items-center px-2 fs-6">{ quantity }</span>
                                                <button onClick={(e)=>changeQty(e, id)} type="button" className="inc-btn d-flex justify-content-center align-items-center text-light border-0 bg-orange p-1 shadow"><FaPlus className="pe-none"/></button>
                                            </div>                                    
                                        </div>
                                    </article>
                                )
                            })}
                            <div className="h6 row p-2 mb-4 mt-1 align-items-center justify-content-evenly d-lg-none">
                                <Link to="#" className="d-inline-block col-2 col-sm-1 text-center p-2 rounded-1 text-orange border border-orange"><i className="bi bi-telephone-fill fs-2"></i></Link>
                                <Link to="#" className="col-9 col-sm-10 d-inline-block text-center p-3 text-light rounded-1 bg-orange text-decoration-none">CHECKOUT (&#x20A6; { totalAmount })</Link>
                            </div>
                        </div>
                    </article>
                </div>

                <div className="cart-summary col-3 px-2 d-none d-lg-block">
                    <article className="checkout-box bg-white rounded">
                        <h6 className="h6 p-2 m-0">CART SUMMARY</h6>
                        <div className="p-2 border-top border-bottom d-flex justify-content-between align-items-center">
                            <p className="fs-6 h6 m-0">Subtotal</p>
                            <p className="fs-4 fw-bold m-0">&#x20A6;{totalAmount}</p>
                        </div>
                        <div className="checkout h6 p-2 text-center m-0">
                            <Link to="#" className="checkout-link d-block w-100 p-3 rounded text-light">CHECKOUT (&#x20A6;{totalAmount})</Link>
                        </div>
                    </article>
                </div>
            </>
            :
            <div className="bg-white p-3">
                <div className="py-3 py-md-5 text-center d-flex flex-column align-items-center">
                    <img src={image} alt="empty cartt" />
                    <h2 className="h4 py-2">Your cart is empty!</h2>
                    <p className="fs-6 mb-5">Browse our categories and discover our best deals!</p>
                    <Link to="/" className="bg-orange py-2 px-4 fw-bold d-block rounded-1 text-light text-center text-decoration-none">START SHOPPING</Link>
                </div>
            </div>
            }
        </div>
    </main>
  )
}

export default Cart;