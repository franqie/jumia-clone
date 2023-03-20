import React, { useState } from 'react';


const Sublinks = ({page, sublinks}) => {
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    
    const openSubmenu = ()=>{
      setIsSubmenuOpen(true);
    };

   const closeSubmenu = ()=>{
        setIsSubmenuOpen(false);
    };

    
    

  return (
    <>
        <a className="menu-item py-1 px-3 w-100"
        onMouseOver={openSubmenu}
        onMouseLeave={closeSubmenu}
        >{page}</a>
        {/* consider using a component with props */}
        <div
            className={`submenu bg-white h-100 p-2 border-start rounded-end position-absolute top-0 ${isSubmenuOpen?"d-block":"d-none"}`}
            onMouseOver={openSubmenu}
            onMouseLeave={closeSubmenu}>
            {sublinks.map((sublink,index)=>{
            const {label} = sublink;
            return <div className="sublink" key={index}>{label}</div>
            })}
        </div>
    </>
  )
}

export default Sublinks;