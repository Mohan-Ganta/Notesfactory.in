import { Button, Form, Input } from 'antd'
import React from 'react'
import "./Login.css"

const Login = () => {

    const handleLogin = (vals)=>{
        console.log(vals)
    }
  return (
    <div className="form-container">
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
      </Form>
      </div>
  )
}

export default Login
