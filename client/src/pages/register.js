import React from 'react'
<<<<<<< HEAD
import { Row, Col, Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
=======
import {Row, Col, Form, Input, Button} from 'antd'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
>>>>>>> 4234cce25955504b04384aff481d4ab4e2c2a903
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
<<<<<<< HEAD
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
=======
            <Row justify='center' className='register-1'>
                <Col lg={10} xs={24}>
                    <Form layout='vertical' className='bs1 p-3' onFinish={register}>
                        <h3>Register</h3>
                        <hr />
                        <Form.Item label="firstname" name="firstname" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="lastname" name="lastname" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="username" name="username" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="emailid" name="emailid" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="password" name="password" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="confirm password" name="cpassword" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Button htmlType='Submit'>Register</Button>
                        <Link to ='/login'>Click here if already register</Link>
            </Form>
        </Col>
       </Row>
       </div>
>>>>>>> 4234cce25955504b04384aff481d4ab4e2c2a903
    )
}
export default Register