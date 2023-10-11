import React from 'react';
// import Slider from '../../components/Slider';
import LargeSlider from '../../components/slider/LargeSlider';
import ScrollList from '../../components/scrolllists/ScrollList';
import LargeScrollList from '../../components/scrolllists/LargeScrollList';
import QtyGauge from '../../components/qty-guage/QtyGauge';
import Text from '../../components/Text';
import ProductGallery from '../../components/ProductGallery';
import ProductGrid from '../../components/ProductGrid';
// import BackToTop from '../../components/BackToTop';

const Homepage = () => {
  return (
    <main className="homepage my-2">
        <div className="container-fluid d-flex flex-column gap-2 gap-sm-3 gap-md-4">
          <LargeSlider title="Free Delivery Anywhere" id="first"/>
          <ProductGrid title="Official Store" count={8}/>
          <ProductGallery title="Back to School (Primary School Deals)" />
          <ScrollList />
          <LargeScrollList title="flash sales" >              
              <QtyGauge />              
          </LargeScrollList>
          <ScrollList />
          <LargeScrollList title="Devices and Accessories" />
          <ScrollList />

          <Text />
        </div>
    </main>
  )
}

export default Homepage;