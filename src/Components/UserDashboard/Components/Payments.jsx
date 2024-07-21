import React, { useState } from 'react'
import { Button, Form, Input } from 'antd'
import "./Payments.module.css"
const Payments = () => {
    const handlePayment=()=>{
        alert("okok")
    }
    const [paymentImg,setPaymentImg] = useState()
    const [paymentUrl,setPaymentUrl] = useState()


    const handleImageChange = (e)=>{
      setPaymentImg(e.target.files[0])
    }
    const handleFileUpload=()=>{

    }
    
  return (
    <div style={{ margin : "20px auto " ,width:"60vw"}} className='payment-section'>
      <div className="qr-code">
        <img src="" alt="Qr code here" />
      </div>
      <div className="payment-form">
      <Form  onFinish={handlePayment}>
      <Form.Item className='label' label="Address"></Form.Item>
        <Form.Item name="email" >
          <Input block placeholder='Enter your address' required></Input>
        </Form.Item>
        <Form.Item className='label' label="UTR Number"></Form.Item>
        <Form.Item name="username" >
          <Input block placeholder='Enter the UTR ID' required></Input>
        </Form.Item>
        <Form.Item className="label" label="Product Image"></Form.Item>
        <Form.Item name="files">
          <Input type="file" onChange={handleImageChange}></Input>
          <button onClick={handleFileUpload}>Upload</button>
        </Form.Item>
        <Form.Item>
          <Button block type='primary' htmlType='submit' >Proceed</Button>
        </Form.Item>
      <p> <a href='/login' >Cancel Payment</a></p>
      </Form>
      </div>
    </div>
  )
}

export default Payments
