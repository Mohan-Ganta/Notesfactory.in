import React, { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { Button, Form, Input } from 'antd'
import 'react-toastify/ReactToastify.css';

import "./Payments.module.css"
const Payments = () => {

  
  const notify = () => {
    toast.success('Uploaded successfully!', {
      position: 'top-center',
      autoClose: 1000,
    });
  };
    const handlePayment=()=>{
        alert("okok")
    }
    const [paymentImg,setPaymentImg] = useState()
    const [paymentUrl,setPaymentUrl] = useState()
    const [uploadText,setUploadText] = useState("Upload")


    const handleImageChange = (e)=>{
      setPaymentImg(e.target.files[0])
    }
    const handleFileUpload=async ()=>{
      if (!paymentImg) return;
      setUploadText("Uploading .")
      const formData = new FormData();
      formData.append("file", paymentImg);
      formData.append("upload_preset", "Notesfactory");
      try {
      setUploadText("Uploading ...")
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dll4lophp/image/upload",
          formData
        );
      setUploadText("Uploading .....")
      console.log(response.data.secure_url)
        setPaymentUrl(response.data.secure_url);
        notify()
        setUploadText("Uploaded")
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    const handlepaymentproceed = (e)=>{
      e.preventDefault()
      
    }
    
  return (
    <div style={{ margin : "20px auto " ,width:"60vw"}} className='payment-section'>
      <ToastContainer />
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
          <Input type="file" accept='image/*' onChange={handleImageChange}></Input>
          <button onClick={handleFileUpload}>{uploadText}</button>
        </Form.Item>
        <Form.Item>
          <Button block type='primary' onClick={handlepaymentproceed} htmlType='submit' >Proceed</Button>
        </Form.Item>
      <p> <a href='/login' >Cancel Payment</a></p>
      </Form>
      </div>
    </div>
  )
}

export default Payments
