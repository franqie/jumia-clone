import { useGlobalContext } from "../../utils/context/context";
import { useEffect } from "react";
import { FaCheck, FaRegTimesCircle } from "react-icons/fa";


const AlertModal = () => {
  const {alert, setAlert} = useGlobalContext();
  const {show, msg} = alert;
  

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false)
    },3000);

    return ()=>clearTimeout(timeout);
  },[alert]);

  
  if(show){
    return (
      <div className="alert-modal p-1 bg-success position-fixed top-0 start-0 end-0">
        <div className="m-0 p-0 text-light d-flex justify-content-center align-items-center">
          <span className="mx-auto"><FaCheck className="pe-2 fs-4 fw-light"/>{ msg }</span>
          <FaRegTimesCircle className="fs-5 fw-light me-5" onClick={()=>setAlert({show:false, msg:""})}/>
        </div>
      </div>
    )
  }

  return null;
}

export default AlertModal;