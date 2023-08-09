import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HeartFilled, CommentOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { likeorunlikepost, addComment, getAllPosts, editPost, deletePost } from '../redux/actions/postAction';
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Modal, Input } from "antd";
import './post.css'
const { TextArea } = Input;

function Post({ post, postInProfilePage }) {
  const dispatch = useDispatch();
  const currentuser = JSON.parse(localStorage.getItem("user"));
  const alreadyLiked = post.likes.find((obj) => obj.user.toString() === currentuser._id);
  const { loading } = useSelector((state) => state.alertsReducer);
  const [commentVisibility, setCommentVisibility] = useState(false);
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const [comment, setComment] = useState("");
  const [description, setdescription] = useState(post.description);
  const { users } = useSelector((state) => state.usersReducer);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [loading]);

  const handleLike = () => {
    dispatch(likeorunlikepost({ postid: post._id }));
  };

  const handleCommentModal = () => {
    setCommentVisibility(true);
  };

  const handleAddComment = () => {
    dispatch(addComment({ postid: post._id, comment: comment }));
    setCommentVisibility(false);
  };

  const handleDeletePost = () => {
    dispatch(deletePost({ _id: post._id }));
  };

  const handleEditPost = () => {
    dispatch(editPost({ _id: post._id, description: description }));
    setEditModalVisibility(false);
  };

  return (
    <div className="bs1 p-2 mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          {post.user.profilePicUrl === "" ? (
            <span className="profilepic1 d-flex align-items-center">
              {post.user.username[0]}
            </span>
          ) : (
            <img src={post.user.profilePicUrl} height="35" width="35" style={{ borderRadius: '50%' }} />
          )}
          <Link className="ml-2">{post.user.username}</Link>
        </div>
      </div>

      <img src={post.image} style={{ height: postInProfilePage && '200px' }} className="postimage w-100" />

      <p className="mt1 mb-1 text-left">{post.description}</p>

      <div className={postInProfilePage ? 'd-flex align-items-center justify-content-between' : 'd-flex align-items-center'}>
        <div className="d-flex align-items-center mr-3">
          <HeartFilled
            style={{ color: alreadyLiked ? "red" : "" }}
            onClick={handleLike}
          />
          <p>{post.likes.length}</p>
        </div>

        <div className="d-flex align-items-center">
          <CommentOutlined
            onClick={handleCommentModal}
          />
          <p>{post.comments.length}</p>
        </div>

        {(post.user._id === currentuser._id && postInProfilePage) && (
          <>
            <div>
              <DeleteOutlined onClick={handleDeletePost} />
            </div>

            <div>
              <EditOutlined onClick={() => setEditModalVisibility(true)} />
            </div>
          </>
        )}
      </div>

      <Modal
        open={commentVisibility}
        title="Comments"
        closable={false}
        width={900}
        okText="Add comment"
        onOk={handleAddComment}
        onCancel={() => setCommentVisibility(false)}
      >
        <Row>
          <Col lg={11} xs={0}>
            <img src={post.image} height='300' className="w-100" />
          </Col>
          <Col lg={12} xs={24}>
            <TextArea placeholder='Write your comment here' className='ml-2' value={comment} onChange={(e) => setComment(e.target.value)} />
            {post.comments.map(comment => {
              const user = users.find(obj => obj._id === comment.user)
              return (
                <div className="d-flex align-items-center">
                  {post.user.profilePicUrl === "" ? (
                    <span className="profilepic1 d-flex align-items-center">
                      {user && user.username[0]}
                    </span>
                  ) : (
                    <img src={post.user.profilePicUrl} height='35' width='35' style={{ borderRadius: '50%' }} />
                  )}
                  <Link className='mr-2' style={{ fontSize: 15 }}>{user && user.username}</Link>
                  <p style={{ fontSize: 12 }}>{comment.comment}</p>
                  <p style={{ fontSize: 10 }} className='text-right'>{comment.date}</p>
                </div>
              )
            })}
          </Col>
        </Row>
      </Modal>

      <Modal title="Edit description" closable={false}
        onOk={handleEditPost}
        okText='edit' open={editModalVisibility} onCancel={() => setEditModalVisibility(false)}>
        <Input value={description} onChange={(e) => setdescription(e.target.value)} />
      </Modal>
    </div>
  );
}

export default Post;
