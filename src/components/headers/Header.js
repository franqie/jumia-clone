// import React from 'react';
import useWindowSize from '../../utils/hooks/useWindowSize';
import MobileHeader from './MobileHeader';
import MainHeader from './MainHeader';


const Header = () => {
  const screeenWidth = useWindowSize();

  return (
    screeenWidth < 993 ? <MobileHeader /> : <MainHeader />
  )
}

export default Header;