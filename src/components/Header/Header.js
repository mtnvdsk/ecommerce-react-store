import  "./Header.css"
function Header({opencart,openAddProduct}){
    // const [showcart,setShowCart]=useState(false);

    // function opencart(){
    //     setShowCart(true);
    // }
    // function closecart(){
    //     setShowCart(false);
    // }
    return <div className="header">
        <h1>My React Store</h1>
        <button className="yellow-button" onClick={openAddProduct}>Addproduct</button>
        <button className="yellow-button" onClick={opencart}>Cart</button>

        {/* <Modal show={showcart} onclose={closecart}>Hello cart</Modal> */}
        {/* {showcart && <div className="backdrop" onClick={closecart}>
                <div className="modal"> Hello from cart </div>
            </div>} */}
        
    </div>
}

export default Header;