import React from "react";
import "./Cart.css"

const Item = (item)=>{
    return(
        <div className="card-item">
        <div className="item-left">
        <div className="img-box">
            <img src={item.item.img} alt="img-item" />
        </div>
        <div className="item-content">
            <p>{item.item.name} Category:{item.item.category}</p>
            
        </div>
        </div>

        <div className="price">
           <h3> Rs. {item.item.cost}</h3>
        </div>
        <div className="delete-btn">
            <button>-</button>
        </div>
      </div>
    )
}
const Cart = () => {

    const data = [
        {
            "name" : "Item1",
            "Description" : "Abcdefg",
            "cost" : 100,
            "img" : "https://www.andolasoft.com/images/new/famous-app/redbus-app.webp",
            "category" : "Books"
        },
        {
            "name" : "Item2",
            "Description" : "Abcdefg",
            "cost" : 100,
            "img" : "https://www.andolasoft.com/images/new/famous-app/redbus-app.webp",
            "category" : "Arts & Drawings"
        },
        {
            "name" : "Item3",
            "Description" : "Abcdefg",
            "cost" : 100,
            "img" : "https://www.andolasoft.com/images/new/famous-app/redbus-app.webp",
            "category" : "Source code"
        },
        {
            "name" : "Item4",
            "Description" : "Abcdefg",
            "cost" : 100,
            "img" : "https://www.andolasoft.com/images/new/famous-app/redbus-app.webp",
            "category" : "Books"
        }
    ]

    var total = 0
    for(var i=0;i<data.length;i++){
        total+=data[i].cost
    }
  return (
    <div className="cart-container">
      {data.map((item,index)=>{
        return(<Item item={item} />)
      })}
      <div className="total">
        <h4>Total : {total}</h4>
      </div>
    </div>
  );
};

export default Cart;
