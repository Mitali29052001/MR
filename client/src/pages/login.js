<<<<<<< HEAD
import React, { useState } from 'react'
import { Row, Col, Form, Input, Button } from 'antd'
=======
import React from 'react'
import {Row, Col, Form, Input, Button} from 'antd'
>>>>>>> 4234cce25955504b04384aff481d4ab4e2c2a903
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import './login.css'
import { useDispatch } from 'react-redux'
import { userLogin } from '../redux/actions/userActions'
function Login() {
    const dispatch = useDispatch()
<<<<<<< HEAD
    const [typePass, setTypePass] = useState(false)
    const initialState = { emailid: '', password: '' }
    const [userData, setUserData] = useState(initialState)
    const { emailid, password } = userData
    const handleChangeInput = e => {
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }
=======
>>>>>>> 4234cce25955504b04384aff481d4ab4e2c2a903
    function login(values) {
        console.log(values)
        dispatch(userLogin(values))
    }
    return (
        <div>
<<<<<<< HEAD
            <div className="blur" style={{ top: '-18%', right: '0' }}></div>
            <div className="blur" style={{ top: '36%', left: '-10rem' }}></div>
            <Row justify='center' className='login-1'>
                <Col lg={8} xs={15}>
                    <Form layout='vertical' className='bs1 p-3' onFinish={login}>
                        <h2 className='h2'>Login</h2>
                        <hr />
                        <Form.Item label="Username" name="username" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email" name="emailid" rules={[{ require: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="password" name="password" rules={[{ require: true }]}>
                            <Input type='password'/>
                        </Form.Item>

                        <div className='button'>
                            <Button htmlType='Submit'>Login</Button>
                        </div>
                        <div className='text'>
                            <Link to='/register' className='text2'> Not Registered?</Link>
                        </div>
                        
                    </Form>
                </Col>
            </Row>
        </div>
=======
            <Row justify='center' className='login-1'>
                <Col lg={10} xs={24}>
                    <Form layout='vertical' className='bs1 p-3' onFinish={login}>
                        <h3>Login</h3>
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
                        
                       
                        <Button htmlType='Submit'>Login</Button>
                        <Link to ='/register'>Click here if not yet register</Link>
            </Form>
        </Col>
       </Row>
       </div>
>>>>>>> 4234cce25955504b04384aff481d4ab4e2c2a903
    )
}
export default Login