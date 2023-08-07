import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { HeartFilled, CommentOutlined , DeleteOutlined , EditOutlined} from "@ant-design/icons";
import {
  
  deletePost,
  editPost,
  getAllPosts,
  likeorunlikepost,
} from '../redux/actions/postAction';
import { useDispatch, useSelector } from "react-redux";
import { Modal,Input } from "antd";
const { TextArea } = Input;
function Post({ post , postInProfilePage}) {
  const dispatch = useDispatch();
  const currentuser = JSON.parse(localStorage.getItem("user"));
  const alreadyLiked = post.likes.find(
    (obj) => obj.user.toString() == currentuser._id
  );
  const { loading} = useSelector(
    (state) => state.alertsReducer
  );
  const [setCommentModalVisibility] = useState(false);
  const [editModalVisibility, setEditModalVisibility] = useState(false);
  const [comment, setComment] = useState("");
  const[description , setdescription] = useState(post.description)
  const { users } = useSelector((state) => state.usersReducer);
  useEffect(() => {
    dispatch(getAllPosts());
  }, [loading]);

  return (
    <div className="bs1 p-2 mt-3">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          {post.user.profilePicUrl == "" ? (
            <span className="profilepic1 d-flex align-items-center">
              {post.user.username[0]}
            </span>
          ) : (
            <img src={post.user.profilePicUrl} height='35' width='35' style={{borderRadius:'50%'}}/>
          )}
          <Link className="ml-2">{post.user.username}</Link>
        </div>

        
      </div>

      <img src={post.image} style={{height: postInProfilePage==true && '200px'}} className="postimage w-100"/>

      <p className="mt1 mb-1 text-left">{post.description}</p>

      <div className={postInProfilePage ? 'd-flex align-items-center justify-content-between' : 'd-flex align-items-center'}>
        <div className="d-flex align-items-center mr-3">
          <HeartFilled
            style={{ color: alreadyLiked ? "red" : "grey" }}
            onClick={() => {
              dispatch(likeorunlikepost({ postid: post._id }));
            }}
          />
          <p>{post.likes.length}</p>
        </div>

        <div className="d-flex align-items-center">
          <CommentOutlined
            onClick={() => {
              setCommentModalVisibility(true);
            }}
          />
          <p>{post.comments.length}</p>
        </div>

         {(post.user._id == currentuser._id && postInProfilePage==true) && (<> <div>
           <DeleteOutlined onClick={()=>{
             dispatch(deletePost({_id : post._id}))
           }}/>
        </div>

        <div>
           <EditOutlined  onClick={()=>{setEditModalVisibility(true)}}/>
        </div></>)}
        </div>

      
      <Modal title="Edit description" closable={false}
      onOk={()=>{
        dispatch(editPost({ _id: post._id , description : description}))
        setEditModalVisibility(false)
      }}
      okText='edit' visible={editModalVisibility} onCancel={()=>{setEditModalVisibility(false)}}>

          <Input value={description} onChange={(e)=>{setdescription(e.target.value)}} />

      </Modal>
      
    </div>
  );
}

export default Post;