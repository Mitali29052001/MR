import React from 'react';
import Default from '../components/Default';
import { useSelector } from 'react-redux';
import { Col, Row } from 'antd';
import Post from '../components/post';

function Home() {
  const {users} = useSelector(state => state.usersReducer)
  const {posts} = useSelector(state => state.postsReducer)
  return (
    <Default>
      <Row justify='center'>
        <Col lg={12} xs={24}>
        {posts.map(post=>{
          return <Post post={post}/>
        })}
        </Col>
      </Row>
    </Default>
  )
}

export default Home;
