import React from 'react'
import {Row, Col, Form, Input, Button} from 'antd'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import './register.css'
function Register() {
    function register(values) {
        console.log(values)
    }
    return (
        <div>
            <Row justify='center' className='register-1'>
                <Col lg={10} xs={24}>
                    <Form layout='vertical' className='bs1 p-3' onFinish={register}>
                        <h3>Register</h3>
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
                        <Form.Item label="Confirm Password" name="Confirm Password" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Button htmlType='Submit'>Register</Button>
                        <Link to ='/login'>Click here if already register</Link>
            </Form>
        </Col>
       </Row>
       </div>
    )
}
export default Register