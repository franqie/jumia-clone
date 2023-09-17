import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../utils/context/context";
import logo from "../../images/logo.svg";

const MiniHeader = ({notNew, scrollDirection}) => {
    const {setShowSidemenu, total} = useGlobalContext();
    const navigate = useNavigate();
    const {pathname} = useLocation();
    

  return (
    <>
        <header className={`header container bg-orange ${scrollDirection==="down"? "hide" : null}`}>
            <div className="container-fluid px-2 pb-2 d-flex flex-column">
                <div className="row p-1">
                    <div className="col row flex-shrink-1 p-0 align-items-center">

                        {notNew ?
                        <span onClick={()=>setShowSidemenu(true)} className="col-1 nav-back">
                            <i className="bi bi-list fs-2"></i>
                        </span>
                        :
                        <span onClick={()=>navigate(-1)} className="col-1 nav-back">
                            <i className="bi bi-arrow-left fs-3"></i>
                        </span>
                         }   

                        <Link to="/" className="col-11 logo mini-header-logo">
                            <img src={logo} alt="" className="w-100 logo-img"/>
                        </Link>
                    </div>

                    {notNew && <div className="col-4 d-flex justify-content-end align-items-center p-0">
                        {!(pathname === "/") && <button type="button" className="nav-back border-0 bg-white" onClick={()=>navigate("/search")}>
                            <i className="bi bi-search fs-5"></i>
                        </button>}

                        <Link to="/customer/login" className="p-0 ms-4 text-center">                            
                            <span className="">
                                <i className="bi bi-person fs-3"></i>
                            </span>
                        </Link>
                        
                        <Link to="/cart" className="p-0 ms-4 text-center">                            
                            <span  className="icon position-relative m-0">
                                <i className="bi bi-cart3 fs-4"></i>
                                <span class="material-symbols-outlined">shopping_cart</span>
                                {total > 0 && <span className="counter position-absolute text-light">{total}</span>}
                            </span>
                        </Link>
                    </div>}
                </div>

                {notNew && <div className="srch">
                    {(pathname === "/") && <button type="button" className="btn w-100 d-flex align-items-center border border-secondary rounded-pill py-2 px-2" onClick={()=>navigate("/search")}>
                        <i className="bi bi-search fs-6 ms-1"></i>
                        <span className="p-0 ps-3 txt">Search products, brands and categories</span>
                    </button>}
                </div>}
            </div>
        </header>
    </>
  )
}

export default MiniHeader;