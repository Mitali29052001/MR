import React from 'react'
import Default from '../components/Default'
import {Col, Row } from 'antd'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


function Profile({match}) {
  
    
    const { users } = useSelector((state) => state.usersReducer);
    // const user = users.find((obj) => obj._id == match.params.userid);
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <Default>
        <Row justify='center'>
          <Col lg={12} xs={24}>
          <h1>{user._id}</h1>
          </Col>
        </Row>
      </Default>
    )
}
export default Profile