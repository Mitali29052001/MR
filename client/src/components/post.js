import React, { useEffect, useState, } from "react";
import { Link } from 'react-router-dom'
import './post.css'
import { Modal, Row, Col, Input } from "antd";

import {
  HeartFilled,
  CommentOutlined
} from '@ant-design/icons';
import { addComment, getAllPosts, likeorunlikepost } from "../redux/actions/postAction";
import { useDispatch, useSelector } from "react-redux";
const { TextArea } = Input;
function Post({ post, postInProfilePage }) {
  const dispatch = useDispatch()
  const presentuser = JSON.parse(localStorage.getItem('user'))
  const alreadyliked = post.likes.find(obj => obj.user.toString() == presentuser._id)
  const { loading, addCommentLoading } = useSelector(state => state.alertsReducer)
  const [commentVisibility, setCommentVisibility] = useState(false)
  const [comment, setComment] = useState('')
  const { users } = useSelector(state => state.usersReducer);

  useEffect(() => {

    dispatch(getAllPosts())
  }, [loading, addCommentLoading])

  return (
    <div className="bs1 p-2 mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          {post.user.profilePicUrl == "" ? (
            <span className="profilepic1 d-flex align-items-center">
              {post.user.username[0]}
            </span>
          ) : (
            <img src={post.user.profilePicUrl} height='35' width='35' style={{ borderRadius: '50%' }} />
          )}
          <Link className="ml-2">{post.user.username}</Link>
        </div>

      </div>

      <img src={post.image} style={{ height: postInProfilePage == true && '200px' }} className="postimage w-100" />

      <p className="mt1 mb-1 text-left">{post.description}</p>
      <div className="d-flex align-items-cente">
        <div className="d-flex align-items-center mr-3">
          <HeartFilled
            style={{ color: alreadyliked ? 'red' : '' }}
            onClick={() => { dispatch(likeorunlikepost({ postid: post._id })) }} />
          <p>{post.likes.length}</p>
        </div>

        <div className="d-flex align-items-center">
          <CommentOutlined onClick={() => setCommentVisibility(true
          )} />
          <p>{post.comments.length}</p>
        </div>

      </div>

      <Modal
        visible={commentVisibility}
        title='Comments' width={600}
        closable={false}
        okText='Post Comment'
        onOk={() => {
          dispatch(addComment({ postid: post._id, comment: comment }))
          setCommentVisibility(false)

        }}
        onCancle={() => {
          setCommentVisibility(false)
        }}>
        <Row>
          <Col lg={11} xs={0}>
            <img src={post.image} height='300' className="w-100" />

          </Col>
          <Col lg={12} xs={24}>
            <TextArea palceholder='Write your comment here' className='ml-2' value={comment} onChange={(e) => { setComment(e.target.value); }} />
            {post.comments.map(comment => {
              const user = users.find(obj => obj._id == comment.user).user
              return (
                <div className="d-flex align-items-center">
                  {post.user.profilePicUrl == "" ? (
                    <span className="profilepic1 d-flex align-items-center">
                      {user.username[0]}
                    </span>
                  ) : (
                    <img src={post.user.profilePicUrl} />
                  )}
                  <Link className='mr-2' style={{fontsize:15}}>{user.username}</Link>
                  <p style={{fontsize:12}}>{comment.comment}</p>
                  <p style={{fontsize:10}} className='text-right'>{comment.date}</p>

                </div>
              )
            })}
          </Col>
        </Row>


      </Modal>


    </div>
  );
}

export default Post;