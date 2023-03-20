import React from 'react';

const LargeSlider = ({title,id}) => {
  return (
    <div className="rdd bg-white p-0">
        <div className="rdt title p-2 text-center">
            <h4 className="hd m-0">{title}</h4>
        </div>
        <div className="large-slider">
            <div id={id} className="carousel slide" data-bs-ride="carousel">
                {/* <ol className="carousel-indicators">
                    <li data-bs-target="#large-slider" data-bs-slide-to="0"></li>  
                    <li data-bs-target="#large-slider" data-bs-slide-to="1" className="active"></li>  
                    <li data-bs-target="#large-slider" data-bs-slide-to="2"></li>  
                </ol> */}
                <div className="carousel-inner w-100">
                    <div className="carousel-item w-100">
                        <img className="d-block w-100 rdd" src="https://t3.ftcdn.net/jpg/05/73/70/46/240_F_573704673_9im3qJ2c4QbzMgtXwbX26bhpzG2cys8Y.jpg" alt="" />
                    </div>
                    <div className="carousel-item w-100">
                        <img className="d-block w-100 rdd" src="https://t3.ftcdn.net/jpg/04/16/60/48/240_F_416604833_eXrkzSas4O2QmwNIPTFqlpEfL8krsa3N.jpg" alt="" />
                    </div>
                    <div className="carousel-item w-100 active">
                        <img className="d-block w-100 rdd" src="https://t4.ftcdn.net/jpg/02/16/27/49/240_F_216274929_dbzMhHTU6FR4IwA4s5fhskUbHL9oN8Xq.jpg" alt="" />
                    </div>
                </div>
                <a data-bs-target={`#${id}`} className="carousel-control-prev" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a data-bs-target={`#${id}`} className="carousel-control-next" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>        
        </div>
    </div>
  )
}

export default LargeSlider;