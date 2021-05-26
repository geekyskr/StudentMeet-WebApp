import React, { useState } from 'react';

const Comment=()=>{


    //sigle comment
    const [comment,setComment]=useState("");
    const addComment=(val)=>{
        setComment(val.target.value)
    }


    // all comment
    const [comments,setComments]=useState([]);
    const addComments=()=>{
        setComments([...comments,comment]);
    }
    return(
        <>
        <div>

            <div style={{display: 'flex',flexDirection: 'column',justifyContent:'center'}}>

                 <input className="form-control" type="text" onChange={addComment} style={{display:'inline'}} />
                 <button onClick={addComments} style={{display:'inline',width:'30vh'}}>Comment</button>

                 {
                    comments.map((item,i)=><div key={i} style={{marginLeft:'20px', marginTop:'10px'}}>
                        <div style={{display:'inline' , marginRight:'10px'}}><i class="fa fa-user-circle" aria-hidden="true"></i></div>
                        <p style={{display:'inline' , marginRight:'10px'}}>{localStorage.getItem('username')}</p>
                        {item}
                        </div>)
                }
            </div>

        </div>
        </>
    )

}
export default Comment;
