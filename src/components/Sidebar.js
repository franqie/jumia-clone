import React from 'react';
import links from "../data";
import Sublinks from './Sublinks';
import  "./sidebar.css";


const Sidebar = () => {

    // const repeatLink = (arr, n)=>{
    //     return [].concat(...Array(n).fill(arr));
    // };
    // const linkList = repeatLink(links, 11);

  return (
    <div className="sidebar bg-white p-0 px-4 position-relative rounded">
        <div className="submenu position-absolute top-0 d-flex flex-column rounded">            
            {links.map((link,index)=>{
                return <Sublinks key={index} {...link}/>
            })}
        </div>
    </div>
  )
}

export default Sidebar;