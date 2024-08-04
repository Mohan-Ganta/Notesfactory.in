import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { Button, Form, Input } from 'antd';
import 'react-toastify/dist/ReactToastify.css';
import "./Payments.module.css";
import { useLocation } from 'react-router-dom';

const Payments = () => {
  const userdata = JSON.parse(localStorage.getItem("userdata"))

  const [paymentImg, setPaymentImg] = useState();
  const [paymentUrl, setPaymentUrl] = useState();
  const [uploadText, setUploadText] = useState("Upload");
  const location = useLocation();
  const products = location.state;

  console.log('Products:', products);

  const totalAmount = products.reduce((total, item) => total + item.cost, 0);

  const notify = () => {
    toast.success('Uploaded successfully!', {
      position: 'top-center',
      autoClose: 1000,
    });
  };

  


  const handleImageChange = (e) => {
    setPaymentImg(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!paymentImg) return;
    setUploadText("Uploading .");
    const formData = new FormData();
    formData.append("file", paymentImg);
    formData.append("upload_preset", "Notesfactory");
    try {
      setUploadText("Uploading ...");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dll4lophp/image/upload",
        formData
      );
      setUploadText("Uploading .....");
      console.log(response.data.secure_url);
      setPaymentUrl(response.data.secure_url);
      notify();
      setUploadText("Uploaded");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handlePaymentProceed = (vals) => {
    if(paymentUrl) {
      toast.error("Upload the Payment Proof")
    }
    console.log("products ready for checkout : ",products)
    console.log("Values : ",vals)
    const url = `http://localhost:5000/purchases/addpurchase`
    const data = {
      Products:products,
      UserId:userdata._id,
      Amount:totalAmount,
      PaymentUTR:vals.utr,
      PaymentProof:paymentUrl,
      isApproved:false
    }
    console.log(data)
    axios.post(url,data)
    .then(res=>{
      toast.success("Order Placed Successfully")
    })
    .catch("Error placing Order! Please Try Again!!")
  };

  return (
    <div style={{ margin: "20px auto", width: "60vw" }} className='payment-section'>
      <ToastContainer />
      <h2>Amount: ₹{totalAmount.toFixed(2)}</h2>
      <div className="qr-code">
        <img src="" alt="Qr code here" />
      </div>
      <div className="payment-form">
        <Form onFinish={handlePaymentProceed}>
          
          <Form.Item className='label' label="UTR Number"></Form.Item>
          <Form.Item name="utr">
            <Input block placeholder='Enter the UTR ID' required></Input>
          </Form.Item>
          <Form.Item className="label" label="Payment Proof"></Form.Item>
          <Form.Item name="files">
            <Input type="file" accept='image/*' onChange={handleImageChange}></Input>
            <button type="button" onClick={handleFileUpload}>{uploadText}</button>
          </Form.Item>
          <Form.Item>
            <Button block type='primary' htmlType='submit'>Proceed</Button>
          </Form.Item>
          <p><a href='/login'>Cancel Payment</a></p>
        </Form>
      </div>
    </div>
  );
};

export default Payments;
