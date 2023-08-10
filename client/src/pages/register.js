import React from 'react'
import { Row, Col, Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// eslint-disable-next-line no-unused-vars
import './register.css'
import { userRegister } from '../redux/actions/userActions'
function Register() {
    const dispatch = useDispatch()
    function register(values) {
        console.log(values)
        delete values.cpassword
        dispatch(userRegister(values))
    }
    return (
        <div>
            <div className="blur" style={{ top: '-18%', right: '0' }}></div>
            <div className="blur" style={{ top: '36%', left: '-10rem' }}></div>
            <Row justify='center' className='register-1'>
                <Col lg={8} xs={15}>
                    <Form layout='vertical' className='bs1 p-3' onFinish={register}>
                        <h2 className='h2'>Register</h2>
                        <hr />
                        <Form.Item label="Firstname" name="firstname" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Lastname" name="lastname" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Create Username" name="username" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email" name="emailid" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Create Password" name="password" rules={[{ require: true }]}>
                            <Input type='password' />
                        </Form.Item>
                        <Form.Item label="Confirm Password" name="cpassword" rules={[{ require: true }]}>
                            <Input type='password' />
                        </Form.Item>
                        <div className='btn'>
                            <Button htmlType='Submit'>Register</Button>
                        </div>
                        <div className='text'>
                            <Link to='/login' className='text2'> Already registered?</Link>
                        </div>

                    </Form>
                </Col>
            </Row>
        </div>
    )
}
export default Register