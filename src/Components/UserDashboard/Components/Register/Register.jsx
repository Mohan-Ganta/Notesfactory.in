import { Button, Form, Input } from 'antd'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "./Register.css"
import axios from "axios"
const Register = () => {
  const [prodImg,setprodImg] = useState()
  const [prodImgUrl,setProdImgUrl] = useState()
  const [prodFile,setProdFile] = useState()
  const [prodFileUrl,setProdFileUrl] = useState()
  const [uploadImgText,setUploadImgText] = useState("Upload")
  const [uploadFileText,setUploadFileText] = useState("Upload")
    const handleLogin = (vals)=>{
        console.log(vals)
    }
    const notify = () => {
      toast.success('Uploaded successfully!', {
        position: 'top-center',
        autoClose: 1000,
      });
    };

    // const uploadPan = async (e) => {
    //   e.preventDefault();
    //   if (!prodImg) return;
    //   setUploadFileText("Uploading .")
    //   const formData = new FormData();
    //   formData.append("file", prodImg);
    //   formData.append("upload_preset", "zigmabank040");
    //   try {
    //   setUploadFileText("Uploading ...")
    //     const response = await axios.post(
    //       "https://api.cloudinary.com/v1_1/dvmkt80vc/image/upload",
    //       formData
    //     );
    //   setUploadFileText("Uploading .....")
    //     setProdImgUrl(response.data.secure_url);
    //     notify()
    //     setUploadFileText("Uploaded")
    //   } catch (error) {
    //     console.error("Error uploading image:", error);
    //   }
    // };
  return (
    <div className='Register-container'>
        <Form onFinish={handleLogin}>
        <Form.Item className='label' label="Username"></Form.Item>
        <Form.Item name="username" >
          <Input block placeholder='Enter your email address' required></Input>
        </Form.Item>
        <Form.Item className='label' label="Email"></Form.Item>
        <Form.Item name="email" >
          <Input block placeholder='Enter your email address' required></Input>
        </Form.Item>
        <Form.Item  className='label' label="Password"></Form.Item>
        <Form.Item name="password" >
          <Input.Password block placeholder='Password' required></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button block type='primary' htmlType='submit' >Register</Button>
        </Form.Item>
      <p> <a href='/login' >Back to Login</a></p>
      </Form>
    </div>
  )
}

export default Register
