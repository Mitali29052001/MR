import React from 'react'
import Default from '../components/Default'
<<<<<<< HEAD
import { Button, Col, Row, Modal } from 'antd'
=======
import {Button, Col, Row, Modal } from 'antd'
>>>>>>> 4234cce25955504b04384aff481d4ab4e2c2a903
import { useState } from "react";
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import './profile.css'
import Post from '../components/post'


function Profile() {
<<<<<<< HEAD
  const { userid } = useParams();




  const { users } = useSelector((state) => state.usersReducer);
  const { posts } = useSelector((state) => state.postsReducer);
  const presentuser = JSON.parse(localStorage.getItem('user'))._id
  // const user = users.find((obj) => obj._id == useParams.userid);
  const user = users.find((obj) => obj._id === userid);

  // const usersposts = posts.filter((obj) => obj.user.id === userid);
  const usersposts = posts.filter(obj => obj.user._id == userid);
  // eslint-disable-next-line no-undef
  const [followersModalDisplay, setfollowersModalDisplay] = useState(false);
  // eslint-disable-next-line no-undef
  const [followingModalDisplay, setfollowingModalDisplay] = useState(false);


  // const user = JSON.parse(localStorage.getItem('user'))

  return (
    <Default>
      <Row justify='center'>
        <Col lg={12} sm={24} xs={24}>
          <div className='bs1 m-2 p-2'>
            <div className='d-flex align-items-center'>
              {user && user.profilePicUrl == "" ? (
                <p className="profilepic2 ">
                  {user.username[0]}
                </p>
              ) : (
                <img src={user && user.profilePicUrl} height='35' width='35' style={{ borderRadius: '50%' }} />
              )}
              <div className='text-left'>
                <p>{user && user.username}</p>
                {presentuser == userid && (<Button><Link to='/editProfile'>Edit Profile</Link></Button>)}

              </div>
            </div>
            {user && (
              <p>{user.bio == "" ? "" : user.bio}</p>
            )}
            <Button

              className="mr-2" onClick={() => { setfollowersModalDisplay(true) }} >
              Followers : {user && user.followers.length}
            </Button>
            <Button onClick={() => { setfollowingModalDisplay(true) }} >Following : {user && user.following.length}</Button>


          </div>
        </Col></Row>
      {user && user.followers.find((obj) => obj == presentuser) ||

        userid == presentuser ? (
        <Row gutter={16} justify="center">
          {usersposts.map((post) => {
            return (
              <Col lg={5} sm={24} xs={24}>
                <Post post={post} postInProfilePage={true} />
              </Col>
            );
          })}
        </Row>
      ) : (
        null
      )}
      <Modal
        title="Followers"
        visible={followersModalDisplay}
        closable={false}
        onCancel={() => {
          setfollowersModalDisplay(false);
        }}
        onOk={() => {
          setfollowersModalDisplay(false);
        }}
      >
        {user && user.followers.map((obj) => {
          const followeruser = users.find((o) => o._id == obj);

          return (
            <div className="d-flex align-items-center bs1 p-1 mt-2">
              {followeruser.profilePicUrl == "" ? (
                <span className="profilepic1 d-flex align-items-center">
                  {followeruser.username[0]}
                </span>
              ) : (
                <img
                  src={followeruser.profilePicUrl}
                  height="35"
                  width="35"
                  style={{ borderRadius: "50%" }}
                />
              )}

              <div className='ml-2'>
                <div style={{ margin: 2 }}><Link>{followeruser.username}</Link></div>
              </div>
            </div>
          );
        })}
      </Modal>


      <Modal
        title="Following"
        visible={followingModalDisplay}
        closable={false}
        onCancel={() => {
          setfollowingModalDisplay(false);
        }}
        onOk={() => {
          setfollowingModalDisplay(false);
        }}
      >
        {user && user.following.map((obj) => {
          const followinguser = users.find((o) => o._id == obj);

          return (
            <div className="d-flex align-items-center bs1 p-1 m-2">
              {followinguser.profilePicUrl == "" ? (
                <span className="profilepic1 d-flex align-items-center">
                  {followinguser.username[0]}
                </span>
              ) : (
                <img
                  src={followinguser.profilePicUrl}
                  height="35"
                  width="35"
                  style={{ borderRadius: "50%" }}
                />
              )}

              <div className='ml-2'>
                <div style={{ margin: 2 }}><Link>{followinguser.username}</Link></div>

              </div>
            </div>
          );
        })}
      </Modal>



    </Default>
  )
=======
  const { userid} = useParams();
  

  
    
    const { users } = useSelector((state) => state.usersReducer);
    const {posts} = useSelector((state) => state.postsReducer);
    const presentuser = JSON.parse(localStorage.getItem('user'))._id
    // const user = users.find((obj) => obj._id == useParams.userid);
    const user = users.find((obj) => obj._id === userid);

    // const usersposts = posts.filter((obj) => obj.user.id === userid);
    const usersposts = posts.filter(obj=>obj.user._id == userid);
    // eslint-disable-next-line no-undef
    const [followersModalDisplay, setfollowersModalDisplay] = useState(false);
  // eslint-disable-next-line no-undef
  const [followingModalDisplay, setfollowingModalDisplay] = useState(false);

    
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
                  <img src={ user && user.profilePicUrl}height='35' width='35' style={{borderRadius:'50%'}}/>
                )}
                <div className='text-left'>
                  <p>{user && user.username}</p>
                  
                  {presentuser == userid && (<Button><Link to ='/editprofile'>Edit Profile</Link></Button>) }

                </div>
              </div>
              {user && (
                <p>{user.bio=="" ? "":user.bio}</p>
              )}
               <Button
                 
                 className="mr-2" onClick={()=>{setfollowersModalDisplay(true)}} >
                   Followers : {user && user.followers.length}
                 </Button>
                 <Button onClick={()=>{setfollowingModalDisplay(true)}} >Following : {user && user.following.length}</Button>
      
              
            </div>
            </Col></Row>
            {user && user.followers.find((obj) => obj == presentuser) ||
          
          userid == presentuser ? (
            <Row gutter={16} justify="center">
              {usersposts.map((post) => {
                return (
                  <Col lg={5} sm={24} xs={24}>
                    <Post post={post} postInProfilePage={true} />
                  </Col>
                );
              })}
            </Row>
          ) : (
            null
          )}
          <Modal
            title="Followers"
            visible={followersModalDisplay}
            closable={false}
            onCancel={() => {
              setfollowersModalDisplay(false);
            }}
            onOk={()=>{
              setfollowersModalDisplay(false);
            }}
          >
            {user && user.followers.map((obj) => {
              const followeruser = users.find((o) => o._id == obj);

              return (
                <div className="d-flex align-items-center bs1 p-1 mt-2">
                  {followeruser.profilePicUrl == "" ? (
                    <span className="profilepic1 d-flex align-items-center">
                      {followeruser.username[0]}
                    </span>
                  ) : (
                    <img
                      src={followeruser.profilePicUrl}
                      height="35"
                      width="35"
                      style={{ borderRadius: "50%" }}
                    />
                  )}

                  <div className='ml-2'>
                      <div style={{ margin : 2}}><Link>{followeruser.username}</Link></div>
                  </div>
                </div>
              );
            })}
          </Modal>
       
          
          <Modal
            title="Following"
            visible={followingModalDisplay}
            closable={false}
            onCancel={() => {
              setfollowingModalDisplay(false);
            }}
            onOk={()=>{
              setfollowingModalDisplay(false);
            }}
          >
            {user && user.following.map((obj) => {
              const followinguser = users.find((o) => o._id == obj);

              return (
                <div className="d-flex align-items-center bs1 p-1 m-2">
                  {followinguser.profilePicUrl == "" ? (
                    <span className="profilepic1 d-flex align-items-center">
                      {followinguser.username[0]}
                    </span>
                  ) : (
                    <img
                      src={followinguser.profilePicUrl}
                      height="35"
                      width="35"
                      style={{ borderRadius: "50%" }}
                    />
                  )}

                  <div className='ml-2'>
                      <div style={{ margin : 2}}><Link>{followinguser.username}</Link></div>
                    
                  </div>
                </div>
              );
            })}
          </Modal>
       
       
       
      </Default>
    )
>>>>>>> 4234cce25955504b04384aff481d4ab4e2c2a903
}
export default Profile