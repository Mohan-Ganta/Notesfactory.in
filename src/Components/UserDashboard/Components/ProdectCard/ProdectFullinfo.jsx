import React, { useState } from 'react'
import './ProdectFullinfo.css'
import { useAppContext } from '../../../AppContext'
import { useNavigate } from 'react-router-dom'

export default function ProdectFullinfo() {
  const navigate = useNavigate()
  const {addToCart} = useAppContext()
  const handleAddToCart = ()=>{
    addToCart()
    alert("added")
    navigate("/cart")
  }
  const handleMakePayment = ()=>{
    console.log("okok")
  }
  return (
    <div className='main-prod-full'>
        <div className='prod-img'>
            <img src="https://www.andolasoft.com/images/new/famous-app/redbus-app.webp" alt="" />
        </div>

        <div className='prod-content'>

            <h1>Redbus Clone</h1>
            <b><h3>Description :</h3></b>
            <p>Red bus clone is an online bus ticket booking platform, built on PHP, MySQL with CodeIgniter framework this script is one of the best available across the country.
            Red bus clone is an online bus ticket booking platform, built on PHP, MySQL with CodeIgniter framework this script is one of the best available across the country.
            Red bus clone is an online bus ticket booking platform, built on PHP, MySQL with CodeIgniter framework this script is one of the best available across the country.
            </p>
            <p><b>Catagory : </b>Coding</p>
            <p><b>Price : ₹</b>499</p>
            <div>
                    <button onClick={handleAddToCart}>Add To Cart</button>
                <button onClick={handleMakePayment}>Buy Now</button>
            </div>

        </div>

    </div>
  )
}
