import React from 'react'
import {Row, Col, Form, Input, Button} from 'antd'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import './login.css'
import { useDispatch } from 'react-redux'
import { userLogin } from '../redux/actions/userActions'
function Login() {
    const dispatch = useDispatch()
    function login(values) {
        console.log(values)
        dispatch(userLogin(values))
    }
    return (
        <div>
            <div className="blur" style={{top: '-18%', right: '0'}}></div>
            <div className="blur" style={{top: '36%', left: '-10rem'}}></div>
            <Row justify='center' className='login-1'>
                <Col lg={8} xs={15}>
                    <Form layout='vertical' className='bs1 p-3' onFinish={login}>
                        <h1 className='h1'>Login</h1>
                        <hr />
                        <Form.Item label="Firstname" name="firstname" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Lastname" name="lastname" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Username" name="username" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email" name="emailid" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Password" name="password" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        
                        <div className='button'>
                        <Button htmlType='Submit'>Login</Button>
                        </div>
                        
                        <Link to ='/register'> Not Registered?</Link>
            </Form>
        </Col>
       </Row>
       </div>
    )
}
export default Login