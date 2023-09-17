import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
        <main className="account bg-white w-100 h-100">        
            <div className="section mx-auto py-5">
                <div className="customer login mx-auto">
                    <div className="top d-flex justify-content-evenly">
                        <h1 className="h6 active">LOGIN</h1>
                        <Link to="/customer/register"><h1 className="h6 text-dark">CREATE AN ACCOUNT VIA E-MAIL</h1></Link>                
                    </div>

                    <div className="login-form">
                        <form action="" onSubmit={(e)=>{e.preventDefault()}}>
                            <div className="my-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="pwd" className="form-label">Password:</label>
                                <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="email"/>
                            </div>

                            <div className="d-flex justify-content-between">                        
                                <div className="mb-3 form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" name="remember"/> Remember me
                                    </label>                        
                                </div>
                                <a href="#">Forgot your password?</a>
                            </div>

                            <button type="submit" className="f-btn btn btn-primary my-3 w-100 h6">LOGIN</button>
                            <button type="submit" className="btn btn-primary my-3 w-100 h6">LOGIN WITH FACEBOOK</button>

                            <div className="text-center">
                                <p>New to Jumia?</p>
                                <Link to="/customer/register" className="h6">CREATE AN ACCOUNT</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Login;