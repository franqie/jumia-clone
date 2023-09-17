import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../images/logo.svg";
import { FaFacebook, FaApple  } from "react-icons/fa";
// import FaApple from "react-icons/fa";

const Loginpage = () => {
    const navigate = useNavigate();
  return (
    <>
        <main className="container-fluid bg-white">        
            <div className="loginpage mx-auto py-4 px-2">
                <button onClick={()=>navigate(-1)} type="button" className="border-0 bg-transparent">
                <span class="material-symbols-outlined">arrow_back</span>
                </button>

                <div className="text-center">
                    <img className="w-25 d-block mx-auto" src="https://play-lh.googleusercontent.com/hmYFFt3JfgbJAw92mHNccyS7puIHXDe_8SzPzHzw4pdr4qLYiR3rgEg9dEEs0dZ8vw" alt="seal" />
                    <h1 className="h2 mt-4 mb-2">Welcome to Jumia</h1>
                    <p className="text-iconfill">Type your e-mail or phone number to log in or create a Jumia account</p>
                </div>

                <form className="w-100">
                    <div>
                        <input className="w-100 rounded-1 py-3 px-3 border border-orange" type="text" placeholder="Email or Mobile Number" />
                    </div>
                    <button className="w-100 rounded-1 py-3 mt-3 bg-orange text-white border-0 h5">Continue</button>
                </form>

                <div className="mt-5 py-4 d-flex flex-column gap-3">
                    <Link to="#" className="btn btn-primary py-3 text-white d-flex align-items-center justify-content-center">
                        <FaFacebook className="fs-1" />
                        <span className="h5 m-0 mx-auto">Log in with facebook</span>
                    </Link>
                    <Link to="#" className="btn btn-dark py-3 text-white d-flex align-items-center">
                        <FaApple className="fs-1" />
                        <span className="h5 m-0 mx-auto">Log in with Apple</span>
                    </Link>

                    <p className="text-center text-iconfill mt-1">For further support, you may visit the Help Center or contact our customer service team</p>
                </div>

                <img className="w-25 d-block mx-auto mt-4" src={logo} alt="logo" />
            </div>
        </main>
    </>
  )
}

export default Loginpage;