import React, { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
// import img1 from "../images/img_mountains_wide.jpg";
// import img2 from "../images/img_nature_wide.jpg";
// import img3 from "../images/img_woods_wide.jpg";
import QtyGauge from './QtyGauge';
import { useGlobalContext } from '../context';
import useDataBase from "../utils/useDataBase";



const LargeScrollList = ({title,flash}) => {
    const {showProduct} = useGlobalContext();
    const data = useDataBase(6);
    const listContainer = useRef(null);


    //const imgArr = [].concat(...Array(6).fill([img2,img1,img3]));

    const handleClick = (e)=>{
        const btnClass = e.currentTarget.classList;
        if(btnClass.contains("prev")){
            listContainer.current.scrollBy(-610,0);
        } else if (btnClass.contains("next")){
            listContainer.current.scrollBy(610,0);
        }
    };

  return (
    <div className="rdd bg-white p-0">
        <div className="title rdt p-2 d-flex justify-content-between">
            <h4 className="hd m-0">{title}</h4>
            <span className="txt">See more</span>
        </div>

        <div className="lg-scroll-card p-1 position-relative">            
            <div ref={listContainer} className="lg-scroll d-flex justify-content-start">
                {data.map((item,i)=>{
                    const {id, img, title, price} = item;
                    return <article key={i} className="">
                        <div className="sc-i m-1" onClick={()=>showProduct(id)}>
                            <img src={img} alt="" className="img rounded"/>
                            <div className="p-1">
                                <p className="h6 txt ps-1 text-truncate">{title}</p>
                                <p className="h6 m-0 ps-1">&#x20A6;{price.toFixed(2)}</p>
                            </div>
                            {flash && <QtyGauge/>}
                        </div>
                    </article>
                })}
            </div>
            <button type="button" className="prev scroll-btn border-0 ms-3 rounded-circle text-white position-absolute top-50 translate-middle-y" onClick={(e)=>{handleClick(e)}}><FaAngleLeft/></button>

            <button type="button" className="next scroll-btn border-0  rounded-circle text-white position-absolute top-50 translate-middle-y" onClick={(e)=>{handleClick(e)}}><FaAngleRight/></button>
        </div>
    </div>
  )
}

export default LargeScrollList;