import React from 'react';
import './Post.css'

function Post(props){
  return (
            <div>
              <h2>{props.title}</h2>
              <h3>{props.description}</h3>
              <p>{props.post}</p>
              <strong>{props.tag}</strong>
            </div>
          );
}

export default Post;
