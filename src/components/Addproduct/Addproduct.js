import Modal from "../UI/Modal";
import { useState } from "react";

function handleadd(inputvalue,closeAddProduct,setInputValue){
    closeAddProduct(inputvalue);
    setInputValue('');
}

function Addproduct({showAddProduct,closeAddProduct,close}){
    const [inputvalue,setInputValue]=useState('');
    return (
        <Modal show={showAddProduct} onclose={close}>
            
            <div className="cart-heading">
                Add Product
            </div>
            <div className="product details">
                Enter the name of the product
                <input type="text" onChange={(event)=>{
                    setInputValue(event.target.value);
                }}/>
                <button onClick={()=>handleadd(inputvalue,closeAddProduct,setInputValue)}>Add product</button>
            </div>
        </Modal>
    );
}

export default Addproduct;