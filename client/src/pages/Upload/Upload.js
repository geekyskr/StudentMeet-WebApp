import React, {useState} from 'react';
import Axios from 'axios';
import './Upload.css'

function Upload(){

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [post, setPost] = useState("");
  const [tag, setTag] = useState("");

  const upload = ()=>{
    Axios.post('http://localhost:8080/post', {title: title, description:description, post: post,
    tag: tag, username: localStorage.getItem('username')})
  }

  return (
    <>
     <div className="divcenter">
     <h2 className="ph">Create Your Post</h2>
     <div className="form">
         <label className="formlevele"> Post Title</label>
         <input type="text" class="form-control" name="title" onChange={(event)=>{
          setTitle(event.target.value);
        }} /><br/>
         <label className="formlevele"> Post Description</label>
         <input type="text" class="form-control" name="title" onChange={(event)=>{
          setDescription(event.target.value);
        }} /><br/>
         

         <label className="formlevele"> Post </label>
         <textarea style={{height:'100px'}} type="text" className="tarea" onChange={(event)=>{
          setPost(event.target.value);
        }} /><br/>
         <br/>

         <select name="Tag" id="cars" className="select" onChange={(event)=>{
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
