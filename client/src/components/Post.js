import React, {useState} from 'react';
import './Post.css'
import {Link} from 'react-router-dom';
import Share from './Share';

function Post(props){

  const [like,setLike]=useState(false);
  const [likes,setLikes]=useState(0);

  const [share,setShare]=useState(false);

  const postlike =()=>{
    setLike(!like);
      if(like){
        setLikes(likes-1);
      }
      else{
        setLikes(likes+1);
      }
    }
    const postShare =()=>{
      setShare(!share);
    }

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
            <h5>{props.tag}</h5>
          <div class="sm-post-icon">

            {/* if like is true green otherwise black */}
           {
             like ?
             (<div>{likes}
              <i style={{marginLeft:'5px'}} id="sm-post-like" class="fa fa-thumbs-up text-success bg-white"
              onClick={postlike}
              >
              </i>
              </div>):(<div>{likes}
             <i style={{marginLeft:'5px'}} id="sm-post-like" class="fa fa-thumbs-up text-dark bg-white"
             onClick={postlike}
             ></i>
             </div>)
           }

            <div><i id="sm-post-share" class="fa fa-share" aria-hidden="true"
            onClick={postShare}
            ></i></div>

            <div>
              <Link to={'/1/group/'+props.postid+'/comment'}>

            <i id="sm-post-comment" class="fa fa-comment" aria-hidden="true"></i></Link></div>
           
          </div>

          <div className="smShareIcon" style={{display: share ? "flex" :'none'}}><Share/></div>
        </div>
      </div>
    </div>

    )
}

export default Post;
