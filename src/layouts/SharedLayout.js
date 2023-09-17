// import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/headers/Header';
import Footer from '../components/Footer';
import Homepage from '../pages/Homepage/Homepage';

const SharedLayout = () => {
  return (
    <>
      <Header />
      {/* <Homepage /> */}
      <Outlet /> 
      <Footer />
    </>
  )
}

export default SharedLayout;