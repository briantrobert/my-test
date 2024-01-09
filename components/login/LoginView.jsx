import React,{useContext} from 'react'
import { Form, Input, Button } from 'antd'
import { AppContext } from '../../context/AppContext'
import { useNavigate } from 'react-router-dom'

function LoginView() {
  
  const navigate = useNavigate()
  const login = useContext(AppContext)

  const onFinish = (e) => {
      if(login.logIN(e.username, e.password)){
         navigate('chatview', { replace: true })
      }
      else{
        window.confirm('Username or Password incorrect, check and try again')
      }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center', height: 600}}>
      <div style={{ backgroundColor: 'white', padding: 20, borderRadius: 5}}>
        <h2 style={{ textJustify: 'center', color: 'black'}}>Welcome to MyTest</h2>
        <Form onFinish={onFinish}>
          <Form.Item label='User Name' name="username">
             <Input placeholder='Username' required></Input>
          </Form.Item>
          <Form.Item label='Password' name="password">
             <Input.Password placeholder='Password' required></Input.Password>
          </Form.Item>
          <Form.Item>
             <Button block type='primary' htmlType='submit'>Log In</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default LoginView
