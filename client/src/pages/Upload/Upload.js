import React from 'react';
import './Upload.css'

function Upload(){
  return (
    <>
     <div className="divcenter">
     <h2 className="ph">Create Your Post</h2>
     <form className="form">
         <label className="formlevele"> Post Title</label>
         <input type="text" class="form-control" name="title" /><br/>
         <label className="formlevele"> Post Description</label>
         <input type="text" class="form-control" name="title" /><br/>
         

         <label className="formlevele"> Post </label>
         <textarea style={{height:'100px'}} type="text" className="tarea"/><br/>
         <br/>

         <select name="Tag" id="cars" className="select" >
             <option value="">Select Tag..</option>
         <option value="Education">Education</option>
         <option value="Entertainment">Entertainment</option>
         <option value="Extra-Curriculum Activity">Extra-Curriculum Activity</option>
       
       </select><br/><br/>

       <button className="bcreate" style={{color:'blue'}}>
         Create Post
     </button>

     </form>

 </div>


    </>
 );
}

export default Upload;
