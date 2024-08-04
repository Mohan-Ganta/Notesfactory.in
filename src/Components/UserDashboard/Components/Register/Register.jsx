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
    const handleRegister = (vals)=>{
        console.log(vals)
        const url = "http://localhost:5000/users/register"
        const data = {
          Products : [],
          Name: vals.Name,
          Email: vals.Email,
          Password: vals.Password
        }
        axios.post(url,vals)
        .then(res=>toast.success("User Registration successful",{position:"top-center"}))
        .catch(err=>toast.error("Registration Failed",{position:"top-center"}))
    }
    


  return (
    <div className='Register-container'>
      <ToastContainer/>
        <Form onFinish={handleRegister}>
        <Form.Item className='label' label="Username"></Form.Item>
        <Form.Item name="Name" >
          <Input block placeholder='Enter your email address' required></Input>
        </Form.Item>
        <Form.Item className='label' label="Email"></Form.Item>
        <Form.Item name="Email" >
          <Input block placeholder='Enter your email address' required></Input>
        </Form.Item>
        <Form.Item  className='label' label="Password"></Form.Item>
        <Form.Item name="Password" >
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
