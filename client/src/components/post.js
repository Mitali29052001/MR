import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

import './post.css'
function Post({ post , postInProfilePage}) {
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
        </div>

      
   
      
    </div>
  );
}

export default Post;