import React from 'react';
const img1 = "https://img.freepik.com/premium-photo/plastic-shopping-basket_770606-2624.jpg?size=626&ext=jpg&ga=GA1.1.1961497144.1677783823&semt=ais";
const img2 = "https://media.istockphoto.com/id/537847762/photo/photographer-equipment-on-a-white-background.jpg?s=612x612&w=0&k=20&c=3XA-2oOnGEbkgsPv2fDMsShTm_4u57J1AuXtqxd1ofY=";
const img3 = "https://media.istockphoto.com/id/694412828/photo/black-women-handbag-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=t7ILZKW7J9htWruriDl9QFPRCAFtduauYCMm-qSkB6g=";

const ProductGallery = ({title}) => {
  return (
    <div className="rdd bg-white p-0">
        {title && <div className="rdt title p-2 text-center">
            <h4 className="hd m-0">{title}</h4>
        </div>}
        <div className="gallery row p-1 m-0">
            <div className="col p-1">
                <img src={img1} alt="" className="sc-i w-100 rounded"/>
            </div>
            <div className="col p-1">
                <img src={img2} alt="" className="sc-i w-100 rounded"/>
            </div>
            <div className="col p-1">
                <img src={img3} alt="" className="sc-i w-100 rounded"/>
            </div>
        </div>
    </div>
  )
}

export default ProductGallery;