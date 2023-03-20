import React from 'react';
const img1 = "https://t3.ftcdn.net/jpg/04/30/44/54/240_F_430445417_Bh62LQLC14F8GUlvNNYkGdOSJw9T9V0A.jpg";
const img2 = "https://media.istockphoto.com/id/638637448/photo/womens-personal-accessories.jpg?b=1&s=612x612&w=0&k=20&c=raiPcjDX0fWsmIAxDGkKTFHn40XMTm1V23ipXHdVg4o=";
const img3 = "https://media.istockphoto.com/id/1324993565/photo/vintage-looking-modern-mirrorless-camera-isolated-on-white-background-front-view.jpg?s=612x612&w=0&k=20&c=ZDiczyUymHG4iUZgwfs9J14bBVH1lw0d10yKFyqnL_c=";

const ProductGrid = ({title,count}) => {
    const arr = [].concat(...Array(count).fill([img1,img2,img3]));
    // const filledArr = Array.from({length:3},(_,i)=>({id: i + 1, img: img1}));

  return (
    <div className="rdd bg-white p-0">
        {title && <div className="rdt title p-2 text-center">
            <h4 className="hd m-0">{title}</h4>
        </div>}
        <div className="p-grid row p-1 m-0">
            {arr.map((src,i)=>{
                return <div key={i} className="sc-i col-3 p-1">
                    <img src={src} alt="" className="w-100 rounded"/>
                    <div className="text-center">
                        {count===4 ? <p className="txt m-0 p-1 text-truncate lh-1">Available Products</p> : null}
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default ProductGrid;