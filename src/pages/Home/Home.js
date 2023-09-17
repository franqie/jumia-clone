import { useEffect, useState } from 'react';
import { useGlobalContext } from '../../utils/context/context';
import useWindowSize from '../../utils/hooks/useWindowSize';
import Carousel from '../../components/Carousel';
import ProductGallery from '../../components/ProductGallery';
import ProductGrid from '../../components/ProductGrid';
import Sidebar from '../../components/Sidebar';
import Slider from '../../components/Slider';
import LargeSlider from '../../components/slider/LargeSlider';
import Text from '../../components/Text';
import { FaAngleUp } from 'react-icons/fa';
import BackToTop from '../../components/BackToTop';
import LargeScrollList from '../../components/scrolllists/LargeScrollList';
import ScrollList from '../../components/scrolllists/ScrollList';




const Home = () => {
  const [visible, setVisible] = useState(false);
  const {scrollUp} = useGlobalContext();
  const width = useWindowSize();


  const handleScroll = () => {
    if(window.scrollY> 500){
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);

    return ()=> window.removeEventListener("scroll", handleScroll);
  },[]);

  
  return (
    <main className="home-main container-fluid p-0 pt-2">      
      <div className="home container-fluid p-1 mx-auto">

          <div className="first row p-2 m-0 d-none d-lg-flex">
            <div className="sidebar-container col-2 p-0 me-1">              
              <Sidebar/>
            </div>
              <Slider/>
              <Carousel/>
          </div>

          <div className="red-title row p-0 py-2 px-md-2 m-0 d-lg-none">
            <LargeSlider title="Free Delivery Anywhere" id="first"/>
          </div>

          <div className="second row container-fluid p-0 py-2 px-md-2  m-0 d-flex align-items-center">
            <ScrollList/>
          </div>

          <div className="row container-fluid p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <LargeScrollList title="Top selling items"/>
          </div>

          <div className="red-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <LargeScrollList title="Flash Sales" flash={true}/>
          </div>

          <div className="pink-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <ProductGallery title="Don't miss out on these!!!"/>
          </div>

          <div className="row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <ProductGallery/>
          </div>

          <div className="pink-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <LargeScrollList title="Top Deals | Free Delivery"/>
          </div>

          <div className="row p-2 m-0 my-4 ">
            <div className="row p-0 mx-auto">
                <div className="col p-1">
                  <div className="h6 p-2 m-0 bg-warning rounded text-center">Free Delivery</div>
                </div>
                <div className="col p-1">
                  <div className="h6 p-2 m-0 bg-warning rounded text-center">Jumia Prime</div>
                </div>
                <div className="col p-1">
                  <div className="h6 p-2 m-0 bg-warning rounded text-center">Borrow Money</div>
                </div>
                <div className="col p-1">
                  <div className="h6 p-2 m-0 bg-warning rounded text-center">Jumia Food</div>
                </div>
            </div>
          </div>

          <div className="pink-title row p-0 py-2 px-md-2 m-0">
            <ProductGrid title="Shop From Our Collections!" count={4}/>
          </div>

          <div className="pink-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <LargeScrollList title="Warranty Guaranteed | Free Delivery"/>
          </div>

          <div className="orange-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <LargeScrollList title="Top Deals | Fashion"/>
          </div>

          <div className="orange-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <ProductGallery title="Back To School"/>
          </div>

          <div className="orange-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <LargeScrollList title="Top Deals | Back to School"/>
          </div>

          <div className="blue-title row p-0 py-2 px-md-2 m-0">
            <LargeSlider title="Official Store" id="second"/>
          </div>

          <div className="blue-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <LargeScrollList title="Intel Official Store"/>
          </div>

          <div className="blue-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <LargeScrollList title="Pernod Ricard Official Store"/>
          </div>

          <div className="blue-title row p-0 py-2 px-md-2 m-0">
            <ProductGrid title="Official Store" count={8}/>
          </div>

          <div className="blue-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <ProductGallery title="Little Stars"/>
          </div>

          <div className="blue-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <LargeScrollList title="Top Deals | Little Stars"/>
          </div>

          <div className="purple-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <ProductGallery title="Back to School (University Deals)"/>
          </div>

          <div className="purple-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <LargeScrollList title="Top Deals | University Deals"/>
          </div>

          <div className="purple-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <ProductGallery title="Back to School (Secondary School Deals)"/>
          </div>

          <div className="purple-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <LargeScrollList title="Top Deals | Secondary School Deals"/>
          </div>

          <div className="purple-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <ProductGallery title="Back to School (Primary School Deals)"/>
          </div>

          <div className="purple-title row p-0 py-2 px-md-2 m-0 d-flex align-items-center">
            <LargeScrollList title="Top Deals | Primary School Deals"/>
          </div>

          <div className="twenty-six row p-0 py-2 px-md-2 m-0 mt-3">
            <Text />            
          </div>
      </div>

      {width >= 769 && <div className="p-0">
        {visible && <span onClick={scrollUp} className="b2top-btn p-0 fs-4 rounded-circle d-flex justify-content-center align-items-center position-fixed bottom-50"><FaAngleUp/></span>}
      </div>}
      
      <BackToTop/>
    </main>
  )
}

export default Home;