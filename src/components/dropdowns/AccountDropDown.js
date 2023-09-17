import HeaderLink from '../headers/HeaderLink'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../utils/context/context'

const AccountDropDown = () => {
    const {  account, setAccount } = useGlobalContext();
  return (
    <button className="dropdown border-0 bg-transparent">              
        <div className="" data-bs-toggle="dropdown">
            <HeaderLink 
                icon={<span className="material-symbols-outlined p-1">person</span>}
                angleIcon={<span className="material-symbols-outlined">expand_more</span>}
                title="Account"
                open={account}
                setOpen={setAccount}
            />
        </div>

        <ul className="dropdown-menu">
            <li className="text-center px-2"><Link to="/customer/login" className="dd-btn btn btn-dark w-100">SIGN IN</Link></li>
            <li><hr className="divider"></hr></li>
            <li><Link to="/customer/login" className="dropdown-item">My Accounts</Link></li>
            <li><Link to="#" className="dropdown-item">Orders</Link></li>
            <li><Link to="#" className="dropdown-item">Saved Items</Link></li>
        </ul>
    </button>
  )
}

export default AccountDropDown