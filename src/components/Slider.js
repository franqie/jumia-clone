import React from 'react';

const Slider = () => {
  return (
    <div className="main-slider col p-0 mx-2">
        <div id="main-slider" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#main-slider" data-bs-slide-to="0" className="active"></li>  
                <li data-bs-target="#main-slider" data-bs-slide-to="1"></li>  
                <li data-bs-target="#main-slider" data-bs-slide-to="2"></li>  
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 rounded" src="https://media.istockphoto.com/id/487745566/es/foto/mujer-sentada-en-el-sof%C3%A1-con-colorido-zapatos-y-bolsos-de-compras.jpg?s=612x612&w=0&k=20&c=cEhxhuCLZTpBcAkYGFjOx8sXq_TRHhDVe3iEbE2lxbo=" alt="" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 rounded" src="https://media.istockphoto.com/id/1298938764/es/foto/compras-en-l%C3%ADnea.jpg?s=612x612&w=0&k=20&c=mHk2d8QST8sRb2XvUMW8mr-blakqirD2decyVKcka88=" alt="" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 rounded" src="https://media.istockphoto.com/id/1075552928/es/foto/electrodom%C3%A9sticos-de-cocina-hogar-y-electr%C3%B3nica-hogar-en-cajas-de-cart%C3%B3n-y-abra-la-puerta-e.jpg?s=612x612&w=0&k=20&c=XFVAl0RM2FcJjKC2NS9B_ihQ_lDaSXW8Bk6W-B1WOo0=" alt="" />
                </div>
            </div>
            <a data-bs-target="#main-slider" className="carousel-control-prev" role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </a>
            <a data-bs-target="#main-slider" className="carousel-control-next" role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </a>
        </div>        
    </div>
  )
}

export default Slider;