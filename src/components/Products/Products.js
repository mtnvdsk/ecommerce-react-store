
import "./Products.css";

function Product({id,image,name,onaddCart}){
  return (
  <div key={id} className="product">
    <img src={`/assests/${image}`} alt="" />
    <div className="product-name">{name}</div>
    <button onClick={()=>{
      onaddCart({id,name,image})
    }}>Add to Cart</button>
  </div>);
}

function Products({onaddCart,products}) {
  return (
    <div className="product-container">
      {products.map((product) => (
        <Product key={product.id} id={product.id} image={product.image} name={product.name} onaddCart={onaddCart}/>
      ))}
    </div>
  );
}

export default Products;
