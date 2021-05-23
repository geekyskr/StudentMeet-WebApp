import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './Usernav.css';
function Goto (){
  
    const [user, setUser] = useState("");

    const userFunc = () => {
        Axios.get('http://localhost:8080/in/'+localStorage.getItem('username')).then((response) =>{
            setUser(response.data[0]);
        });
    }
    useEffect(() => {
        userFunc();
      }, []);
    console.log(user)

  return (
    <>
    <div  class="sm-userav-container" >
        <div class="sm-usernav-row">
           <div><a href={"/"+user.universityid} ><button id="sm-usernav-university-btn"  type="button" class="btn btn-raised btn-primary">Go To University</button></a></div>
            <div><a href={"/"+user.universityid+"/group"} ><button id="sm-usernav-university-btn"  type="button" class="btn btn-raised btn-primary">Go To Group</button></a></div>
        </div>
    </div>
    </>
  )

}
export default Goto;
