import React, { useEffect, useState } from "react";
import "./Cart.css";
import { useAppContext } from "../../../AppContext";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Form } from "antd";
const Item = ({ index, item, fetchCartItems }) => {
  const customerdata = JSON.parse(localStorage.getItem("userdata"))
  const handleRemove = (id) => {
    console.log(id)
    axios.delete(`http://localhost:5000/users/removefromcart/${customerdata._id}/${id}`)
    .then(res=>{
      fetchCartItems()
      console.log(res.data)
    })
    .catch()
  };


  
  return (
    <div className="card-item">
      <div className="item-left">
        <div className="img-box">
          <img src={item.image} alt="img-item" />
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
        <button onClick={()=>handleRemove(item._id)}>-</button>
      </div>
    </div>
  );
};
const Cart = () => {
  
  const [products, setProducts] = useState([]);
  const [isempty,setEmpty] = useState(true)
  const [userdata,setUserdata] = useState(JSON.parse(localStorage.getItem("userdata")))
  const navigate = useNavigate()

  const [total, setTotal] = useState(0);
  const caluculateTotal = (items) => {
    var sum = 0;
    for (var i = 0; i < items.length; i++) {
      sum += items[i].cost;
    }
    setTotal(sum);
  };
  const fetchCartItems = ()=>{
    axios.get(`http://localhost:5000/users/getcartitems/${userdata._id}`)
    .then(res=>{
      console.log(res.data)
      setProducts(res.data)
      caluculateTotal(res.data)})  
    .catch(err=>{
      setProducts([])
      console.log(err)
    })
  }
  useEffect(()=>{
    fetchCartItems()
  },[])
  
  const removeItem = (index) => {
    var list = [...products];
    list.splice(index, 1);
    setProducts(list);
  };
  const handlePayment = ()=>{
    navigate('/payments',{state:products})
  }
  return (
    <div className="cart-container">
      {isempty?(<>
      
        <h3 style={{textAlign:"center"}}>No Items in the Cart</h3>
        <Form style={{textAlign:"center"}}>
        <p> <a href='/products' >Go to Poducts page</a></p>
        </Form>
        </>):(
        <>
        <div className="total">
        <h4>Total : {total}</h4>
      </div>
      {products.length === 0 ? (
        <h3 style={{ textAlign: "center" }}>No Produts in the Cart</h3>
      ) : (
        <>
          {products.map((item, index) => {
            return (
              <Item index={index} item={item}  fetchCartItems={fetchCartItems}/>
            );
          })}
          <button onClick={handlePayment} style={{margin:"0 auto"}} >Proceed to payment</button>
        </>
      )}</>
      )}
    </div>
  );
};

export default Cart;
