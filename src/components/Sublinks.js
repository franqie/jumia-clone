import React from 'react';
import  "./sidebar.css";

const Sublinks = ({icon, page, sublinks}) => {
  return (
    <>
      <div className="menu-item px-2 bg-transparent"><span>{icon}</span>{page}</div>
      <div className="flyout h-100 bg-white d-flex">
          {sublinks.map((sublink,index)=>{
              const {label, categories} = sublink;
              return (
                <div className="link-table me-3" key={index}>
                  <div className="sublink px-2 pb-1 mb-1 text-uppercase fw-bold border-bottom">{label}</div>
                  <div>{categories.map((item, i)=>{
                    return <div className="item px-2 text-capitalize" key={i}>{item}</div>
                  })}</div>
                </div>
              )
          })}
      </div>
    </>
  )
}

export default Sublinks;