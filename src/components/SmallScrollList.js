import React, { useRef } from 'react';
//import img from '../images/img_mountains_wide.jpg';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import useDataBase from "../utils/useDataBase";
import { useGlobalContext } from '../context';

const SmallScrollList = () => {
    const {showProduct} = useGlobalContext();
    const listContainer = useRef(null);
    const data = useDataBase(12);

    const handleClick = (e)=>{
        const btnClass = e.currentTarget.classList;
        if(btnClass.contains("prev")){
            listContainer.current.scrollBy(-610,0);
        } else if (btnClass.contains("next")){
            listContainer.current.scrollBy(610,0);
        }
    };
    
  return (
    <div className="rdd bg-white p-0 d-flex align-items-center">        
    <button type="button" className="prev scroll-btn col-1 border-0 ms-2 rounded-circle text-white d-none d-lg-flex" onClick={(e)=>{handleClick(e)}}><FaAngleLeft/></button>
    <div ref={listContainer} className="sec-scroll col d-flex p-2">
        {data.map((item,i)=>{
            const {id, img} = item;
        return <div key={i} className="sm_container sc-i m-1" onClick={()=>showProduct(id)}>
            <img src={img} alt="" className="img rounded"/>
        </div>
        })}
    </div>
    <button type="button" className="next scroll-btn col-1 border-0 me-2 rounded-circle text-white d-none d-lg-flex" onClick={(e)=>{handleClick(e)}}><FaAngleRight/></button>
    </div>
  )
}

export default SmallScrollList;