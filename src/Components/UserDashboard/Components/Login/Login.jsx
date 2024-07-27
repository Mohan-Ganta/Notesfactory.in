import { Button, Form, Input } from 'antd'
import React from 'react'
import axios from 'axios'
import "./Login.css"
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleLogin = (vals)=>{
        console.log(vals)
        const url  = `http://localhost:5000/users/loginuser/${vals.email}/${vals.password}`
      axios.get(url)
      .then(res=>{
        localStorage.setItem("userdata",JSON.stringify(res.data))
        toast.success("Login Successful",{position:"top-center"})
        navigate("/home")
      })
      .catch(err=>{  
        toast.error("Invaid Credentials",{position:"top-center"})
      })
    }
  return (
    <div className="form-container">
      <ToastContainer />
      <Form onFinish={handleLogin}>
        <Form.Item className='label' label="Email"></Form.Item>
        <Form.Item name="email" >
          <Input block placeholder='Enter your email address' required></Input>
        </Form.Item>
        <Form.Item  className='label' label="Password"></Form.Item>
        <Form.Item name="password" >
          <Input.Password block placeholder='Password' required></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button block type='primary' htmlType='submit' >Login</Button>
        </Form.Item>
        <p>New User ? <a href='/register' >Register Here</a></p>
        </Form>
      </div>
  )
}

export default Login
