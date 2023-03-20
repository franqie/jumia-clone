import React from 'react';
import links from "../data";
import Sublinks from "./Sublinks-Old";


const Sidebar = () => {
  
    const repeatLink = (arr, n)=>{
        return [].concat(...Array(n).fill(arr));
    };
    const linkList = repeatLink(links, 11);


  return (
    <aside className="sidebar bg-white p-0 position-relative rounded">
      <div className="sidebar-item bg-warning rounded d-flex flex-column">
        {linkList.map((link,index)=>{
            return <Sublinks key={index} {...link}/>
        })}
      </div>
    </aside>
  )
}


export default Sidebar;