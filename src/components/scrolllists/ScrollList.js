import React, { useRef } from 'react';
import { newProducts } from "../../utils/data/newProductsData";
import { useGlobalContext } from '../../utils/context/context';
import "./scrolllist.css";

const ScrollList = () => {
    const {showProduct} = useGlobalContext();
    const listContainer = useRef(null);
    const data = newProducts;

    const handleClick = (e)=>{
        const btnClass = e.currentTarget.classList;
        if(btnClass.contains("prev")){
            listContainer.current.scrollBy(-610,0);
        } else if (btnClass.contains("next")){
            listContainer.current.scrollBy(610,0);
        }
    };
    
  return ( 
        <div className="position-relative bg-white p-1">  
            <div ref={listContainer} className="scroll_container scrollsnap">
                <button type="button" className="prev scroller" onClick={(e)=>{handleClick(e)}}>
                    <span className="material-symbols-outlined">chevron_left</span>
                </button>

                {data.map((item,i)=>{
                        const {productId, imageUrl, category} = item;
                    return (
                        <button key={i} className="scroll_media" onClick={()=>showProduct(productId)}>
                            <img src={imageUrl} alt="" className=""/>
                            <span className="">{category}</span>
                        </button>
                    )
                })}

                <button type="button" className="next scroller" onClick={(e)=>{handleClick(e)}}>
                    <span className="material-symbols-outlined">chevron_right</span>
                </button>
            </div>
        </div> 
  )
}

export default ScrollList;