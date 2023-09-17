import React, { useState } from 'react';
// import { useGlobalContext } from "../context";


const HeaderLink = ({icon, title, angleIcon, open, setOpen}) => {
  // const [open, setOpen] = useState(false);
  // const { total } = useGlobalContext();

  React.useEffect(() => {
    const closeDropdown = () => {
      setOpen(false);
    };
    window.addEventListener('click', closeDropdown);

    return () => window.removeEventListener('click', closeDropdown);
  }, []);

  // const handleClick = (e) => {
  //   e.stopPropagation();
  //   setOpen(!open);
  // };

  return (
    <div className="info d-flex align-items-center">
        <>{icon && icon}</>        

        <span className="fw-medium">{title}</span>        
        
        <>{angleIcon}</>
    </div>
  )
}

export default HeaderLink;