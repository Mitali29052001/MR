import React from 'react'
import Default from '../components/Default'
import {Button, Col, Row } from 'antd'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import './profile.css'
import Post from '../components/post'


function Profile() {
  const { userid } = useParams();

  
    
    const { users } = useSelector((state) => state.usersReducer);
    const {posts} = useSelector((state) => state.postsReducer);
    const presentuser = JSON.parse(localStorage.getItem('user'))._id
    // const user = users.find((obj) => obj._id == useParams.userid);
    const user = users.find((obj) => obj._id === userid);

    // const usersposts = posts.filter((obj) => obj.user.id === userid);
    const usersposts = posts.filter(obj=>obj.user.id == useParams.userid);
    
    // const user = JSON.parse(localStorage.getItem('user'))
    
    return (
        <Default>
        <Row justify='center'>
          <Col lg={12} sm={24}xs={24}>
            <div className='bs1 m-2 p-2'>
              <div className='d-flex align-items-center'>
                {user && user.profilePicUrl == "" ? (
                  <p className="profilepic2 ">
                    {user.username[0]}
                  </p>
                ) : (
                  <img src={ user && user.profilePicUrl} />
                )}
                <div className='text-left'>
                  <p>{user && user.username}</p>
                  
                  {presentuser == userid && (<Button><Link to ='/editprofile'>Edit Profile</Link></Button>) }

                </div>
              </div>
              {user && (
                <p>{user.bio=="" ? "":user.bio}</p>
              )}
              <Button className='mr-2'>Followers: {user && user.followers.length}</Button>
              <Button className='mr-2'>Following: {user && user.following.length}</Button>
              
            </div>
            </Col></Row>
            <Row gutter={16} justify="center">
              
            {usersposts.map((post) => (
      <Col lg={5} sm={24} xs={24} key={post.id}>
        <Post post={post} postInProfilePage={true} />
      </Col>
    ))}
            </Row>
      </Default>
    )
}
export default Profile