const img1 = "https://img.freepik.com/premium-photo/plastic-shopping-basket_770606-2624.jpg?size=626&ext=jpg&ga=GA1.1.1961497144.1677783823&semt=ais";
const img2 = "https://media.istockphoto.com/id/537847762/photo/photographer-equipment-on-a-white-background.jpg?s=612x612&w=0&k=20&c=3XA-2oOnGEbkgsPv2fDMsShTm_4u57J1AuXtqxd1ofY=";
const img3 = "https://media.istockphoto.com/id/694412828/photo/black-women-handbag-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=t7ILZKW7J9htWruriDl9QFPRCAFtduauYCMm-qSkB6g=";

const ProductGallery = ({title}) => {
  return (
    <div className="bg-dark text-light">
        {title && (
            <div className="p-1 text-center">
                <h4 className="h5 m-0">{title}</h4>
            </div>
        )}
        <div className="d-flex flex-column gap-2 bg-orange p-2 m-0">
            <div className="d-flex gap-2">
                <div className="p-0 position-relative">
                    <img src={img1} alt="" className="rounded-1 h-100 object-fit-cover" />
                    <span className="position-absolute bottom-0 start-0 z-1 bg-dark bg-opacity-75 text-light w-100 h-100 rounded-1 d-flex align-items-center justify-content-center">Deals</span>
                </div>
                <div className="p-0 position-relative">
                    <img src={img2} alt="" className="rounded-1 h-100 object-fit-cover" />
                    <span className="position-absolute bottom-0 start-0 z-1 bg-dark bg-opacity-75 text-light w-100 h-100 rounded-1 d-flex align-items-center justify-content-center">Deals</span>
                </div>
                <div className="p-0 position-relative">
                    <img src={img3} alt="" className="rounded-1 h-100 object-fit-cover" />
                    <span className="position-absolute bottom-0 start-0 z-1 bg-dark bg-opacity-75 text-light w-100 h-100 rounded-1 d-flex align-items-center justify-content-center">Deals</span>
                </div>
            </div>
            <div className="d-flex gap-2">
                <div className="p-0 position-relative">
                    <img src={img3} alt="" className="rounded-1 h-100 object-fit-cover" />
                    <span className="position-absolute bottom-0 start-0 z-1 bg-dark bg-opacity-75 text-light w-100 h-100 rounded-1 d-flex align-items-center justify-content-center">Deals</span>
                </div>
                <div className="p-0 position-relative">
                    <img src={img2} alt="" className="rounded-1 h-100 object-fit-cover" />
                    <span className="position-absolute bottom-0 start-0 z-1 bg-dark bg-opacity-75 text-light w-100 h-100 rounded-1 d-flex align-items-center justify-content-center">Deals</span>
                </div>
                <div className="p-0 position-relative">
                    <img src={img1} alt="" className="rounded-1 h-100 object-fit-cover" />
                    <span className="position-absolute bottom-0 start-0 z-1 bg-dark bg-opacity-75 text-light w-100 h-100 rounded-1 d-flex align-items-center justify-content-center">Deals</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductGallery;