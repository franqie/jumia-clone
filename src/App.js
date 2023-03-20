import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import AlertModal from './components/AlertModal';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import Header from './components/Header';
import RemoveModal from './components/RemoveModal';
// import ScrollToTop from './components/ScrollToTop';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ProductModal from './pages/ProductModal';
import Register from './pages/Register';
import Search from './pages/Search';


const SharedLayout = ()=>{
  return (
    <>
      <Header/>
      <Outlet/> 
      <Footer/>
    </>
  )
};



function App() {
  return (
    <Router>
      {/* <ScrollToTop/> */}
      <div className="app w-100 d-flex flex-column">
        <AlertModal/>
        < SideMenu/>
        {/* <Header/> */}
        <Routes>
          <Route path="/" element={<SharedLayout/>}>
            <Route index element={<Home/>} />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound/>} />
          </Route>         
          <Route path="/customer/login" element={<Login/>} />         
          <Route path="/customer/register" element={<Register/>} />              
          <Route path="/search" element={<Search/>} />         
        </Routes>
        <ProductModal/>
        <RemoveModal/>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
