// import React from 'react';
import { Outlet } from 'react-router-dom';
// import Header from '../components/headers/Header';
// import Footer from '../components/Footer';

const CustomerLayout = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet /> 
      {/* <Footer /> */}
    </>
  )
}

export default CustomerLayout;