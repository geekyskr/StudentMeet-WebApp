import React from 'react';
import './Post.css'

function Post(props){

  return (
    <div class="sm-all-posts">
      <div id="sm-single-post" class="card col-md-6" >
        <div class="card-body">
          <div class="sm-post-user">
            <div><i class="fa fa-user-circle" aria-hidden="true"></i></div>
            <div><h5>Sunil kumar Sharma</h5></div>
          </div>

          <h3 class="card-title" >{props.title}</h3>
          <h4 class="card-text" >{props.description}</h4>
          <p>{props.post}</p>
          <h5>{props.tag}</h5>
        <input id="sm-post-comment" class="sm-post-comment" type="text" placeholder="Comment..." />
        <div class="sm-post-icon">
          <div><i id="sm-post-like" class="fa fa-thumbs-up text-success bg-dark"></i></div>
          <div><i id="sm-post-share" class="fa fa-share" aria-hidden="true"></i></div>

          <div><i id="sm-post-comment" class="fa fa-comment" aria-hidden="true"></i></div>
          <div><i id="sm-post-send" class="fa fa-paper-plane" aria-hidden="true"></i></div>
        </div>
        <a href="#" class="btn btn-primary" >Read More</a>
      </div>
    </div>
  </div>

  )
}

export default Post;
