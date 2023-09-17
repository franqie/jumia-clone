import React from 'react';

const LargeSlider = ({title,id}) => {
  return (
    <div className="">
        <h4 className="m-0 p-2 text-center text-light bg-secondary">{title}</h4>
        <div className="large-slider">
            <div id={id} className="carousel slide" data-bs-ride="carousel">
                {/* <ol className="carousel-indicators">
                    <li data-bs-target="#large-slider" data-bs-slide-to="0"></li>  
                    <li data-bs-target="#large-slider" data-bs-slide-to="1" className="active"></li>  
                    <li data-bs-target="#large-slider" data-bs-slide-to="2"></li>  
                </ol> */}

                {/* <div className="carousel-inner w-100">
                    <div className="carousel-item w-100">
                        <img className="w-100 object-fit-cover" src="https://t3.ftcdn.net/jpg/05/73/70/46/240_F_573704673_9im3qJ2c4QbzMgtXwbX26bhpzG2cys8Y.jpg" alt="" />
                    </div>
                    <div className="carousel-item w-100">
                        <img className="w-100 object-fit-cover" src="https://t3.ftcdn.net/jpg/04/16/60/48/240_F_416604833_eXrkzSas4O2QmwNIPTFqlpEfL8krsa3N.jpg" alt="" />
                    </div>
                    <div className="carousel-item w-100 active">
                        <img className="w-100 object-fit-cover" src="https://t4.ftcdn.net/jpg/02/16/27/49/240_F_216274929_dbzMhHTU6FR4IwA4s5fhskUbHL9oN8Xq.jpg" alt="" />
                    </div>
                    <div className="carousel-item w-100">
                        <img className="w-100 object-fit-cover" src="https://media.istockphoto.com/id/1279183645/vector/black-friday-limited-time-sale-only-with-red-ribbon-and-3d-black-balloon-on-super-attractive.jpg?s=612x612&w=0&k=20&c=zafUir_A54Z-WTH6ln8g7XLTzcCB2iNo4xJKzecNl5o=" alt="" />
                    </div>
                </div> */}
                <div className="carousel-inner w-100">
                    <div className="carousel-item w-100 active">
                        <img className="w-100 object-fit-cover" src="https://i.ibb.co/Wyb8X6c/New-Project.jpg" alt="" />
                    </div>
                    <div className="carousel-item w-100">
                        <img className="w-100 object-fit-cover" src="https://i.ibb.co/PC28kfn/New-Project-1.jpg" alt="" />
                    </div>
                    <div className="carousel-item w-100">
                        <img className="w-100 object-fit-cover" src="https://i.ibb.co/nfFKR30/New-Project-3.jpg" alt="" />
                    </div>
                    <div className="carousel-item w-100">
                        <img className="w-100 object-fit-cover" src="https://i.ibb.co/3FVHdWg/New-Project-2.jpg" alt="" />
                    </div>
                    <div className="carousel-item w-100">
                        <img className="w-100 object-fit-cover" src="https://i.ibb.co/1L5TsVS/New-Project-5.jpg" alt="" />
                    </div>
                    <div className="carousel-item w-100">
                        <img className="w-100 object-fit-cover" src="https://i.ibb.co/JHK56J5/New-Project-6.jpg" alt="" />
                    </div>
                    <div className="carousel-item w-100">
                        <img className="w-100 object-fit-cover" src="https://i.ibb.co/WpwPMss/New-Project-7.jpg" alt="" />
                    </div>
                    <div className="carousel-item w-100">
                        <img className="w-100 object-fit-cover" src="https://i.ibb.co/8NFQScZ/New-Project-8.jpg" alt="" />
                    </div>
                </div>
                
                {/* <a data-bs-target={`#${id}`} className="carousel-control-prev" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a data-bs-target={`#${id}`} className="carousel-control-next" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a> */}
            </div>        
        </div>
    </div>
  )
}

export default LargeSlider;