import React from 'react';
import { useState } from 'react';

const QtyGauge = () => {
  const [qty, setQty] = useState((Math.floor(Math.random()*100))+1);
  const quantityLeft = Math.floor( qty / 10 ) + 1;
  const itemsLeft = `${quantityLeft} ${quantityLeft === 1 ? 'item' : 'items'} left`;
  
  
  return (
    <div className="quantity_gauge">
      <span className="quantity">{itemsLeft}</span>
      <div className="progress">
        <div className="progress-bar bg-orange" style={{width:`${qty}%`}} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
  )
}

export default QtyGauge;