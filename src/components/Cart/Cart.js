import "./Cart.css"
import Modal from "../UI/Modal";

function CartItem({id,name,image,quantity,increasequant,decreasequant}){
    return <div className="cart-item">
        <div className="item-img">
            <img src={`/assests/${image}`} alt={name} />
        </div>
        <div className="item-info">
            <div class>{name}</div>
            <div className="item-qty">
            <div>Qty: {quantity}</div>
            <button className="yellow-button" onClick={()=>increasequant(id)}>+</button>
            <button className="yellow-button" onClick={()=>decreasequant(id)}>-</button>
            </div>
        </div>
        
    </div>
    
}

function Cart({showcart,closecart,cartItems,increasequant,decreasequant}){
    return (
        <Modal show={showcart} onclose={closecart}>
            <div className="cart-container">
                <div className="cart-heading">
                    Cart
                </div>
                {cartItems.length > 0 ? (
                cartItems.map(item => (
                    <CartItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    quantity={item.quantity}
                    increasequant={increasequant}
                    decreasequant={decreasequant}
                    />
                ))
                ) : (
                <div className="empty-cart">Cart is Empty</div>
                )}

                <div>
                    <button className="close-cart" onClick={closecart}>close</button> 
                    {cartItems.length>0 ? <button className="checkout" onClick={closecart}>checkout</button>: ""}
                </div>
            </div>

        </Modal>
    );
}

export default Cart;