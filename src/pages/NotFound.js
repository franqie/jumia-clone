import React from 'react';
import { Link } from 'react-router-dom';
import image from "../images/not_found.svg";

const NotFound = () => {
  return (
    <main className="w-100 h-100 pb-5 py-sm-5 bg-light">
        <div className="row w-100 mx-auto d-flex justify-content-evenly">
            <div className="col-9 col-sm-4 pt-3">
                <div className="pt-3 text-center text-sm-start">
                    <h3 className="h3 fw-bolder">Not Found</h3>
                    <img src={image} alt="" className="col col-lg-5 w-50 d-sm-none"/>
                    <h2 className="h6fw-bold">We couldn’t find the page you are looking for</h2>
                    <p className="mb-5">But we have millions more shopping items for you to browse!</p>
                    <Link to="/" className="p-2 fw-bold d-inline-block rounded text-orange text-center text-decoration-none">GO TO HOMEPAGE</Link>
                </div>
            </div>
            <div className="col-6 row justify-content-center d-none d-sm-flex">
                <img src={image} alt="" className="col col-lg-5 w-75"/>
            </div>
        </div>
    </main>
  )
}

export default NotFound;