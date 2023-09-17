import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import useScrollDirection from "../../utils/hooks/useScrollDirection";
import { useGlobalContext } from "../../utils/context/context";
import AccountDropDown from "../dropdowns/AccountDropDown";
import HelpDropDown from "../dropdowns/HelpDropDown";

const MainHeader = () => {
    const scrollDirection = useScrollDirection();
    const { total } = useGlobalContext();
  return (
    <header className={`${(scrollDirection === "down") && "hide"} custom-shadow`}>
        <div className="container-fluid d-flex justify-content-between py-3">
            <div className="left d-flex align-items-center flex-shrink-0 me-2">
                <button className="d-flex border-0 bg-transparent p-2">
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <Link to="/">
                    <img src={logo} alt="logo" className="logo" />
                </Link>
            </div>

            <form className="d-flex align-items-center gap-2">
                <div className="d-flex align-items-center border border-bordercolor p-2 bg-white w-100 custom-radius">
                    <span className="material-symbols-outlined text-iconfill">search</span>
                    <input className="flex-grow-1 border-0 ms-2 mx-100 find-input" type="text" placeholder="Search products, brands and categories"/>
                </div>
                <button className="btn btn-orange text-white text-uppercase px-3 py-2 fw-medium custom-radius custom-btn-shadow">Search</button>
            </form>

            <div className="d-flex align-items-center gap-2 right">
                <AccountDropDown />
                <HelpDropDown />
                <Link to="/cart" className="d-flex align-items-center text-decoration-none text-darktext">
                    <div className="d-flex align-items-center position-relative p-2 ms-n2">
                        <span className="material-symbols-outlined">shopping_cart</span>
                        {total > 0 && <span className="bg-orange d-flex justify-content-center align-items-center position-absolute text-white counter">{total}</span>}
                    </div>
                    <span className="align-self-end p-2 ps-0 fw-medium">Cart</span>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default MainHeader;