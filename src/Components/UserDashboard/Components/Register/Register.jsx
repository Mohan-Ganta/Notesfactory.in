import { Button, Form, Input } from 'antd'
import React from 'react'
import "./Register.css"
const Register = () => {
    const handleLogin = (vals)=>{
        console.log(vals)
    }
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
