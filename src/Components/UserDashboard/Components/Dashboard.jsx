import React from 'react'
import Hero from '../../../Images/hero.png'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom'
export default function Dashboard() {
  const navigate = useNavigate()
  const handleGetStarted = ()=>{
    navigate("/register")
  }
  return (
    <div className='cont-hero'>
        <div className='hero-content'>
            <h1>Your marketplace for high-quality digital assets.</h1>
            <div className='hero-sub-cont'>
                <p>Welcome to Notes Factory. Every asset on our platform is verified by our team <br />
                     to ensure our highest quality standards. </p>
                <button onClick={handleGetStarted}>&rarr;</button>
            </div>
        </div>
        <div className='hero-img'>
            <img src={Hero} alt="" />            
        </div>
    </div>
  )
}
