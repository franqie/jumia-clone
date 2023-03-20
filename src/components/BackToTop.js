import React from 'react';
import { FaAngleUp } from 'react-icons/fa';
import { useGlobalContext } from '../context';
import useWindowSize from '../utils/useWindowSize';

const BackToTop = () => {
    const {scrollUp} = useGlobalContext();
    const width = useWindowSize();

    // const scrollUp = ()=>{
    //     window.scrollTo({
    //         top: 0,
    //         behavior: "smooth"
    //     });
    // };
    
  if(width < 769){    
    return (
      <div onClick={scrollUp} className="b-2-top text-center py-1 text-light">
          <div className="p-0 border-0 fs-5 d-flex flex-column align-items-center justify-content-center"><FaAngleUp/> <span className="txt text-uppercase">back to top</span></div>
      </div>
    )
  }

  return null;
}

export default BackToTop;