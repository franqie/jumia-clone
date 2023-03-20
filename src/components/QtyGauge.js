import React from 'react';
import { useState } from 'react';

const QtyGauge = () => {
  const [qty, setQty] = useState((Math.floor(Math.random()*100))+1);
  
  
  return (
    <div className="px-2 pb-3">
      <p className="m-0 txt">{Math.floor(qty/10)+1} item(s) left</p>
      <div className="progress">
        <div className="progress-bar" style={{width:`${qty}%`}} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    </div>
  )
}

export default QtyGauge;