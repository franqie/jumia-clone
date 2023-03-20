import React from 'react';
// import img1 from "../images/img_nature_wide.jpg";
// import img2 from "../images/img_mountains_wide.jpg";
// import img3 from "../images/img_woods_wide.jpg";

const Carousel = () => {
  return (
    <div className="carousel-container col-3 p-0">
        <div className="right p-0 d-flex flex-column align-items-center">      
            <div id="demo" className="carousel slide mb-3 w-100" data-bs-ride="carousel">            
            
                {/* <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div> */}
                
                
                <div className="carousel-inner">
                    <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmclMjBpdGVtc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="Los Angeles" className="d-block w-100 rounded"/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://images.pexels.com/photos/207080/pexels-photo-207080.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Chicago" className="d-block w-100 rounded"/>
                    </div>
                    <div className="carousel-item active">
                    <img src="https://img.freepik.com/premium-photo/modern-house-exterior-evening-view-with-interior-lighting_258219-565.jpg?size=626&ext=jpg&ga=GA1.2.1961497144.1677783823" alt="New York" className="d-block w-100 rounded"/>
                    </div>
                </div>
                

                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            <div className="down border rounded w-100">
                <img src="https://img.freepik.com/free-photo/white-t-shirts-with-copy-space-gray-background_53876-104920.jpg?size=626&ext=jpg&ga=GA1.2.1961497144.1677783823" alt="" className="w-100 rounded" />
            </div>
        </div>
    </div>
  )
}

export default Carousel;