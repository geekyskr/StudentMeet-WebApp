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
    <div  class="container" >
        <div class="row">
            <a href={"/"+user.universityid} ><button  type="button" class="btn btn-raised btn-primary">Go To University</button></a>
            <a href={"/"+user.universityid+"/group"} ><button type="button" class="btn btn-raised btn-primary">Go To Group</button></a>
        </div>
    </div>
    </>
  )

}
export default Goto;
