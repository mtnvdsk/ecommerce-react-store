import { useState } from "react";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import Addproduct from "./components/Addproduct/Addproduct";
import productsData from "./data/products.json"; 


function App() {
  const [products, setProducts] = useState(productsData);
  const [showcart,setShowCart]=useState(false);
  const [cartItems,setCartItems]=useState([]); 
  const handleaddtocart=({id,name,image})=>{
    // let updatecartitems=cartItems;
    // console.log(name);
    // updatecartitems=updatecartitems.concat({
    //   id:id,
    //   name:name,
    //   image:image,
    //   qunatity:1
    // });
    //setCartItems(updatecartitems);
    const exist=cartItems.findIndex(item=>item.id===id);
    if (exist===-1){
      const cartItem={
      id:id,
      name:name,
      image:image,
      quantity:1,
    };
    setCartItems((state)=> [...state,cartItem]);
    }
    else{
      const updatedcart=[...cartItems];
      updatedcart[exist].quantity+=1;
      setCartItems(updatedcart);
    }
    
  };
  const increasequant=(id)=>{
    const exist=cartItems.findIndex(item=>item.id===id);
    const updatedcart=[...cartItems];
    updatedcart[exist].quantity+=1;
    setCartItems(updatedcart);
  };
  const decreasequant = (id) => {
    const exist = cartItems.findIndex(item => item.id === id);
    const updatedcart = [...cartItems];

    if (updatedcart[exist].quantity > 1) {
      updatedcart[exist].quantity -= 1;
      setCartItems(updatedcart);
    } else {
      // Optionally remove item from cart
      setCartItems(cartItems.filter(item => item.id !== id));
    }
  };

  const opencart=()=>{
    setShowCart(true);
  };
  const closecart=()=>{
    setShowCart(false);
  };
  const [showAddProduct, setShowAddProduct] = useState(false);

  function openAddProduct() {
    setShowAddProduct(true);
  }
  function close(){
    setShowAddProduct(false);
  }
  function closeAddProduct(inputvalue) {
    if(inputvalue.length<=0){
      alert("Enter the correct value");
    }
    else{
      const newid=products.length+1;
      const new_product={
        id:newid,
        name:inputvalue,
        image:'dummy.png'
      };
      setProducts([...products,new_product]);
      setShowAddProduct(false);
    }
    
  }
  return (
    <>
      <Header opencart={opencart} openAddProduct={openAddProduct}/>
      <Products onaddCart={handleaddtocart} products={products}/>
      <Cart showcart={showcart} closecart={closecart} cartItems={cartItems} increasequant={increasequant} decreasequant={decreasequant}/>
      <Addproduct showAddProduct={showAddProduct} closeAddProduct={closeAddProduct} close={close}/>
    </>
  );
}

export default App;
