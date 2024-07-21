import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useAppContext } from "../../../AppContext";

const Item = ({ index, item, removeFromCart }) => {
  const handleRemove = () => {
    removeFromCart(index);
  };

  const handlePayment = ()=>{
    
  }
  return (
    <div className="card-item">
      <div className="item-left">
        <div className="img-box">
          <img src={item.img} alt="img-item" />
        </div>
        <div className="item-content">
          <p>
            {item.name} Category:{item.category}
          </p>
        </div>
      </div>

      <div className="price">
        <h3> Rs. {item.cost}</h3>
      </div>
      <div className="delete-btn">
        <button onClick={handleRemove}>-</button>
      </div>
    </div>
  );
};
const Cart = () => {
  const {cartItems} = useAppContext()
  const data = [];
  const [products, setProducts] = useState(cartItems);
  const [total, setTotal] = useState(0);
  const caluculateTotal = () => {
    var sum = 0;
    for (var i = 0; i < products.length; i++) {
      sum += products[i].cost;
    }
    setTotal(sum);
  };
  useEffect(() => {
    caluculateTotal();
  }, [products]);

  const removeItem = (index) => {
    var list = [...products];
    list.splice(index, 1);
    setProducts(list);
  };
  return (
    <div className="cart-container">
      <div className="total">
        <h4>Total : {total}</h4>
      </div>
      {cartItems.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>No Produts in the Cart</h3>
      ) : (
        <>
          {products.map((item, index) => {
            return (
              <Item index={index} item={item} removeFromCart={removeItem} />
            );
          })}
          <button style={{margin:"0 auto"}}>Proceed to payment</button>
        </>
      )}
    </div>
  );
};

export default Cart;
