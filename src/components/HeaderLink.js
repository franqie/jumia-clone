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
    <div className="info d-flex align-items-baseline">
        {icon && <span className="icon me-2 position-relative">
            {icon}
        {/* {title === "Cart" && total > 0 ? <span className="counter position-absolute text-light">{total}</span> : null} */}
        </span>}

        <span className="title">{title}</span>        
        
        {<span className="angle ms-2">
            {angleIcon}
        </span>}
    </div>
  )
}

export default HeaderLink;