import React, {useState} from 'react';
import Axios from 'axios';
import './Upload.css'
import {useHistory} from 'react-router-dom';

function Upload(){

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [post, setPost] = useState("");
  const [tag, setTag] = useState("");
  const history = useHistory();

  const upload = ()=>{
    Axios.post('http://localhost:8080/post', {title: title, description:description, post: post,
    tag: tag, username: localStorage.getItem('username')});
    history.push('/');
  }

  return (
    <>
     <div className="sm-upload-divcenter">
     <h2 className="ph">Create Your Post</h2>
     <div className="sm-form">
         <label className="sm-formlevele"> Post Title</label>
         <input type="text" class="sm-form-control" name="title" onChange={(event)=>{
          setTitle(event.target.value);
        }} /><br/>
         <label className="sm-formlevele"> Post Description</label>
         <input type="text" class="sm-form-control" name="title" onChange={(event)=>{
          setDescription(event.target.value);
        }} /><br/>


         <label className="sm-formlevele"> Post Detail</label>
         <textarea style={{height:'100px'}} type="text" className="sm-tarea" onChange={(event)=>{
          setPost(event.target.value);
        }} /><br/>
         <br/>

         <select name="Tag" id="cars" className="sm-select" onChange={(event)=>{
          setTag(event.target.value);
        }} >
             <option value="">Select Tag..</option>
         <option value="Education">Education</option>
         <option value="Entertainment">Entertainment</option>
         <option value="Extra-Curriculum Activity">Extra-Curriculum Activity</option>

       </select><br/><br/>

       <button className="bcreate"  onClick={upload}>
         Create Post
     </button>

     </div>

 </div>


    </>
 );
}

export default Upload;
