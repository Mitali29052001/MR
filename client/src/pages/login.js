import React from 'react'
import {Row, Col, Form, Input, Button} from 'antd'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import './login.css'
function Login() {
    function login(values) {
        console.log(values)
    }
    return (
        <div>
            <Row justify='center' className='login-1'>
                <Col lg={10} xs={24}>
                    <Form layout='vertical' className='bs1 p-3' onFinish={login}>
                        <h3>Login</h3>
                        <hr />
                        <Form.Item label="Firstname" name="Firstname" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Lastname" name="Lastname" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Username" name="Username" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email id" name="Email id" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Password" name="Password" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                       
                        <Button htmlType='Submit'>Login</Button>
                        <Link to ='/register'>Click here if not yet register</Link>
            </Form>
        </Col>
       </Row>
       </div>
    )
}
export default Login