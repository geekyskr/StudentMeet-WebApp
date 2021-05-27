import React, {useState} from 'react';
import './Editprofile.css'
import Axios from 'axios'
import {useHistory} from 'react-router-dom';

function Editprofile(props){

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const {username} = props.match.params
  const history = useHistory();

  const editprofile = ()=>{
    Axios.post('http://localhost:8080/in/:username/edit', {name: name, number: number, username : username})
    history.push('/');
  }


  return(
    <div className="Editprofile">
      <h1>Edit Profile</h1>
      <div className="EditprofileForm">
        <input id="name" type="text" class="inputbox" placeholder="name" onChange={(event)=>{
        setName(event.target.value);
      }}></input>
        <input id="number" type="text" class="inputbox" placeholder="number" onChange={(event)=>{
        setNumber(event.target.value);
      }}></input>
        <button  type="submit" onClick={editprofile} >Submit</button>
      </div>
    </div>
  )
}

export default Editprofile;
