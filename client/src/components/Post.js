import React from 'react';
import './Post.css'

function Post(props){

  return (
    <div class="sm-all-posts">
      <div id="sm-single-post" class="card col-md-6" >
        <div class="card-body">
          <div class="sm-post-user">
            <div><a href={'/in/'+props.authour} class="fa fa-user-circle" aria-hidden="true"> Go to authour's profile
            </a></div>
          </div>

          <h3 class="card-title" >{props.title}</h3>
          <h4 class="card-text" >{props.description}</h4>
          <p>{props.post}</p>
          <h6>{props.tag}</h6>
        <input id="sm-post-comment" class="sm-post-comment" type="text" placeholder="Comment..." />
        <div class="sm-post-icon">
          <div><i id="sm-post-like" class="fa fa-thumbs-up text-success bg-dark"></i></div>
          <div><i id="sm-post-share" class="fa fa-share" aria-hidden="true"></i></div>

          <div><i id="sm-post-comment" class="fa fa-comment" aria-hidden="true"></i></div>
          <div><i id="sm-post-send" class="fa fa-paper-plane" aria-hidden="true"></i></div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Post;
