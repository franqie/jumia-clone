import React from 'react';
import { Link } from 'react-router-dom';
import MiniHeader from '../components/MiniHeader';

const Register = () => {
  return (
    <>
        <MiniHeader/>
        <main className="account bg-white w-100 h-100">        
            <div className="section mx-auto py-5">
                <div className="customer login mx-auto">
                    <div className="top d-flex justify-content-evenly">
                        <Link to="/customer/login"><h1 className="h6 text-dark">LOGIN</h1></Link>                
                        <h1 className="h6 active">CREATE AN ACCOUNT VIA E-MAIL</h1>
                    </div>
                    <div className="login-form">
                        <form action="" onSubmit={(e)=>{e.preventDefault()}}>
                            <div className="my-3">
                                <label htmlFor="firstname" className="form-label">First Name:</label>
                                <input type="text" className="form-control" id="firstname" placeholder="Enter First Name" name="firstname"/>
                            </div>

                            <div className="my-3">
                                <label htmlFor="lastname" className="form-label">Last Name:</label>
                                <input type="text" className="form-control" id="lastname" placeholder="Enter Last Name" name="lastname"/>
                            </div>

                            <div className="my-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="email"/>
                            </div>

                            <div className="row justify-content-evenly">
                                <div className="col-3 mb-3 text-center">
                                    <label htmlFor="prefix" className="form-label">Prefix:</label>
                                    <input type="text" className="form-control-plaintext p-0 text-center mt-1" readOnly id="prefix" placeholder="+234" name="prefix"/>
                                </div>                      
                                <div className="col-8 mb-3">
                                    <label htmlFor="phonenumber" className="form-label">Phone Number (optional):</label>
                                    <input type="number" className="form-control p-1" id="phonenumber" placeholder="Enter your phone number" name="phonenumber"/>
                                </div>                      
                            </div>

                            <div className="mb-3 form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" name="conditions"/> I accept the <a href="#">Terms and Conditions</a>
                                    </label>                        
                            </div>

                            <div className="mb-3 form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" name="newsletters" checked readOnly/> I want to receive Jumia Newsletters
                                    </label>                        
                            </div>

                            <button type="submit" className="f-btn btn btn-primary my-3 w-100 h6">CREATE AN ACCOUNT</button>
                            <button type="submit" className="btn btn-primary my-3 w-100 h6">REGISTER WITH FACEBOOK</button>

                            <div className="text-center">
                                <p>Already have an account?</p>
                                <Link to="/customer/register" className="h6">LOGIN</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Register;