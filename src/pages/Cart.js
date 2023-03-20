import React from 'react';
import { Link } from 'react-router-dom';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useGlobalContext } from '../context';
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
    <main className="cart py-md-4">
        <div className="section row p-0 m-0 mx-auto mt-2">
            {cart.length > 0 ?
            <>
                <div className="col-lg-9">
                    <article className="cart-box p-0 bg-white rdd">
                        <header className="p-3 border-bottom">
                            <h2 className="h5">Cart ({total})</h2>
                        </header>                    
                        <div className="cart-list">
                            {cart.map((cartItem, i)=>{
                                const {id, img, title, price, quantity, description} = cartItem;
                                return (
                                    <article key={id} className="cart-item py-3 px-2 border-bottom">
                                        <div className="top row m-0 mb-1" onClick={()=>showProduct(id)}>
                                            <div className="cart-img col-5 col-sm-3 p-0">
                                                <img src={img} alt="" className="w-100"/>
                                            </div>
                                            <div className="col-7 cart-details">
                                                <div className="ti-desc">
                                                    <p className="fw-bold text-uppercase txt title">{title}</p>
                                                    <p className="txt desc">{description}</p>
                                                </div>                                    
                                                <div className="fs-4 cart-price">
                                                    <h4 className="h5 fw-bold price">&#x20A6;{price.toFixed(2)}</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom p-2 d-flex justify-content-between">
                                            <button onClick={()=>{setProductId(id);setShowRemoveModal(true)}} type="button" className="remove-btn border-0 outline-0 bg-transparent"><span><FaTrash/></span> REMOVE</button>
                                            <div className="quantity-btn d-flex align-items-center">
                                                <button onClick={(e)=>changeQty(e,id)} type="button" className="dec-btn d-flex justify-content-center align-items-center text-light"><FaMinus className="cart-icon"/></button>
                                                <span className="quantity d-flex justify-content-center align-items-center">{quantity}</span>
                                                <button onClick={(e)=>changeQty(e,id)} type="button" className="inc-btn d-flex justify-content-center align-items-center text-light"><FaPlus className="cart-icon"/></button>
                                            </div>                                    
                                        </div>
                                    </article>
                                )
                            })}
                            <div className="checkout h6 row p-2 mb-4 mt-1 align-items-center justify-content-evenly d-lg-none">
                                <a href="#" className="cart-phone d-inline-block col-2 col-sm-1 text-center p-2 rounded"><i className="bi bi-telephone-fill fs-4"></i></a>
                                <a href="#" className="checkout-link col-9 col-sm-10 d-inline-block text-center p-3 text-light rounded">CHECKOUT (&#x20A6;{totalAmount})</a>
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
                            <a href="#" className="checkout-link d-block w-100 p-3 rounded text-light">CHECKOUT (&#x20A6;{totalAmount})</a>
                        </div>
                    </article>
                </div>
            </>
            :
            <div className="row bg-white m-0">
                <div className="col py-3 py-md-5 text-center d-flex flex-column align-items-center">
                    <img src={image} alt="" />
                    <h2 className="h4 py-2">Your cart is empty!</h2>
                    <p className="fs-6 mb-5">Browse our categories and discover our best deals!</p>
                    <Link to="/" className="home-btn p-3 fw-bold d-block rounded text-light text-center">START SHOPPING</Link>
                </div>
            </div>
            }
        </div>
    </main>
  )
}

export default Cart;