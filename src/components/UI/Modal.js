import { createPortal } from "react-dom"
import "./Modal.css"

function Modal({show,onclose,children}){
    if(show===false){
        return null;
    }
    return createPortal(
        <div className="backdrop" onClick={onclose}>
            <div className="modal"onClick={(event)=>event.stopPropagation()}> {children} </div>
        </div>,document.body
    );
}

export default Modal;