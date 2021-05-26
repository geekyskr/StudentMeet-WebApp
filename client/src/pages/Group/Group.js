import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Post from '../../components/Post.js'
import './Group.css'

function Group(props){
  const {universityId} = props.match.params

  const [group, setGroup] = useState("");

  const groupFunc = () => {
      Axios.get('http://localhost:8080/'+universityId+'/feed').then((response) =>{
          setGroup(response.data);
      });
  }
  useEffect(() => {
      groupFunc();
    }, []);
  console.log(group)

  return (
    <div>
    {
      Object.entries(group).map(([key, post])=>
        <Post universityId={universityId} postid={post.postid} authour={post.postcreator} title={post.postname} description={post.postdescription} post={post.post} tag={post.tag} />
    )
    }
    </div>

  )
}

export default Group;
