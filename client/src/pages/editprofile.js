import React, { useState } from 'react'
import Default from '../components/Default'
import {Col, Row, Form, Input, Button } from 'antd'
import { editUser } from '../redux/actions/userActions'
import { useDispatch } from 'react-redux'




function Editprofile() {
  const user = JSON.parse(localStorage.getItem('user'))
  const [profilePicUrl, setProfilePicUrl]= useState(user.profilePicUrl)
  const dispatch = useDispatch()
  function handleFileInput(e){
    const file = e.target.files[0]
    const reader = new FileReader(file)
    reader.readAsDataURL(file)
    reader.onloadend=()=>{              
  
           setProfilePicUrl(reader.result)
    }
}
function edit(values){
  values.profilePicUrl=profilePicUrl
  values._id = user._id
dispatch(editUser(values))
}
    return (
      <Default>
        <Row justify='center'>
          <Col lg={12} xs={24}>
            <div>
              <Form layout='vertical' initialValues={user} className='p-2 bs1' onFinish={edit}>
                <Form.Item name='username' label='Username'>
                  <Input />
                </Form.Item>
                <Form.Item name='bio' label='Bio'>
                  <Input />
                </Form.Item>
                <Form.Item name='profilePicUrl' label='Profile Pic'>
                  <div classname="d-flex align-items-center">
                    {profilePicUrl == "" ? (
                      <p className="profilepic2">
                        {user.username[0]}
                      </p>
                    ) : (
                      <img src={profilePicUrl} height='50' width='50'/>
                    )}
                    <Input type='file' onChange={handleFileInput}/>

                  </div>

                </Form.Item>
                <Button htmlType='submit'>Edit</Button>

              </Form>
            </div>
          </Col>
        </Row>
      </Default>
    )
}
export default Editprofile
