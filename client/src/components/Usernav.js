import React, {useState} from 'react';
import Axios from 'axios';
import './Usernav.css';
function Goto (){
  
  return (
    <>
    <div  class="container" >
        <div class="row">
            <a href="/universityid" ><button  id="go-to-university" type="button" class="btn btn-raised btn-primary">Go To University</button></a>
            <a href="/universityid/group" ><button id="go-to-group" type="button" class="btn btn-raised btn-primary">Go To Group</button></a>
        </div>
    </div>
    </>
  )

}
export default Goto;
