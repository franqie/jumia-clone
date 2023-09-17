import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../utils/context/context'
import HeaderLink from '../headers/HeaderLink'

function HelpDropDown() {
    const { help, setHelp } = useGlobalContext();
  return (
    <button className="dropdown border-0 bg-transparent">              
        <div className="" data-bs-toggle="dropdown">
            <HeaderLink
                icon={<span className="material-symbols-outlined p-1">help</span>}
                title="Help"
                angleIcon={<span className="material-symbols-outlined">expand_more</span>}
                open={help}
                setOpen={setHelp}
            />
        </div>

        <ul className="dropdown-menu">
            <li><Link to="#" className="dropdown-item">Help Center</Link></li>
            <li><Link to="#" className="dropdown-item">Place & track order</Link></li>
            <li><Link to="#" className="dropdown-item">Order cancellation</Link></li>
            <li><Link to="#" className="dropdown-item">Returns & Refunds</Link></li>
            <li><Link to="#" className="dropdown-item">Payment & Jumia account</Link></li>
            <li><hr className="divider"></hr></li>
            <li className="text-center px-2"><Link to="#" className="dd-btn btn btn-dark w-100">LIVE CHAT</Link></li>
        </ul>
    </button>
  )
}

export default HelpDropDown