import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import AlertModal from './components/modals/AlertModal';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import RemoveModal from './components/modals/RemoveModal';
// import ScrollToTop from './components/ScrollToTop';
import Cart from './pages/Cart';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProductModal from './components/modals/ProductModal';
import Register from './pages/Loginpage';
import Search from './pages/Search';
import CustomerLayout from './layouts/CustomerLayout';
import SharedLayout from './layouts/SharedLayout';
import Homepage from './pages/Homepage/Homepage';
import Loginpage from './pages/Loginpage';



function App() {
  return (
    <Router>
      {/* <div className="d-flex flex-column"> */}
      <div className="bg-lightpink">
        {/* < SideMenu/> */}
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Homepage />} />
            <Route path="cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound/>} />
          </Route>
          <Route path="/customer" element={<CustomerLayout/>}>    
            <Route path="login" element={<Loginpage/>} />         
            {/* <Route path="register" element={<Register/>} />               */}
          </Route>         
            <Route path="search" element={<Search/>} />
        </Routes>
        <AlertModal />
        <ProductModal />
        <RemoveModal />
        {/* <ScrollToTop/> */}
      </div>
    </Router>
  );
}

export default App;
