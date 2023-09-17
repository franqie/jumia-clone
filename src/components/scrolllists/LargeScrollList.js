import React, { useRef } from 'react';
import { useGlobalContext } from '../../utils/context/context';
import { newProducts } from "../../utils/data/newProductsData";
import "./scrolllist.css";



const LargeScrollList = ({ title, children }) => {
    const {showProduct} = useGlobalContext();
    const data = newProducts;
    const listContainer = useRef(null);


    const handleClick = (e)=>{
        const btnClass = e.currentTarget.classList;
        if(btnClass.contains("prev")){
            listContainer.current.scrollBy(-610,0);
        } else if (btnClass.contains("next")){
            listContainer.current.scrollBy(610,0);
        }
    };

  return (
    <div className="large_scrolllist bg-white">
        <div className="p-1 mb-1 bg-info d-flex align-items-center justify-content-between">
            <h4 className="h5 m-0">{title}</h4>
            <span className="small h6 m-0">See more</span>
        </div>

        <div className="position-relative p-1">            
            <button type="button" className="prev scroller" onClick={(e)=>{handleClick(e)}}>
                <span className="material-symbols-outlined">chevron_left</span>
            </button>
            
            <div ref={listContainer} className="scroll_container scrollsnap">
                {data.map((item,i)=>{
                    const {productId: id, imageUrl, category, price} = item;
                    return <article key={i} className="scroll_media"onClick={()=>showProduct(id)}>
                        <img src={imageUrl} alt="products" className=""/>
                        <div className="">
                            <span className="d-block text-center">{category}</span>
                            <span className="d-block text-center fw-semibold">&#x20A6;{price.toFixed(2)}</span>
                        </div>
                        { children }
                    </article>
                })}
            </div>

            <button type="button" className="next scroller" onClick={(e)=>{handleClick(e)}}>
                <span className="material-symbols-outlined">chevron_right</span>
            </button>
        </div>
    </div>
  )
}

export default LargeScrollList;