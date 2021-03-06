import React, {useState, useEffect} from "react";
import "./User.css";
import userImg from "../../images/userPhoto.jpeg";
import Axios from "axios";
import {useHistory} from 'react-router-dom';

function User(props) {
    const history = useHistory();
    const {username} = props.match.params
    const [user, setUser] = useState("");
    console.log(username)
    const userFunc = () => {
        Axios.get('http://localhost:8080/in/'+username).then((response) =>{
            setUser(response.data[0]);
        });
    }
    useEffect(() => {
        userFunc();
      }, []);

    const deleteProfile = () => {
        Axios.delete('http://localhost:8080/in/'+username).then((response) =>{
        });
    }

  console.log(user)

  const logout = ()=>{
    localStorage.clear();
  }

  const delteAction = () => {
    if(window.confirm("Are you sure to delete your profile")){
      deleteProfile();
      logout();
      history.push('/');
    }
  }

  return (
    <>
      <div class="sm-profile-container">
        <div class="sm-profile-section1">
          <div class="sm-profile-center">
            <h1 id="sm-profile-heading" class="sm-profile">
              {user.studentname}'s Profile
            </h1>
            <div class="sm-profile-img-div">
              <img class="sm-profile-img" src={userImg} alt="Profile Image" />
            </div>
            <h2 class="sm-profile">UserName: {user.username}</h2>
            <h3 class="sm-profile">Email: {user.email}</h3>
            <h3 class="sm-profile">Phone no: {user.phonenumber}</h3>
            <h3 class="sm-profile"><a href={'mailto:'+user.username}>Contact Me</a></h3>
          </div>
        </div>
        {username === localStorage.getItem("username") &&

        <div class="sm-profile-section2">
          <div class="sm-profile-edit">
            <a href={'/in/'+username+'/edit'}><button type="button" class="sm-p-edit">Edit Profile</button></a>
            <button type="button" class="sm-p-delete" onClick = {delteAction}>
              Delete Profile
            </button>
          </div>
        </div>
      }
      </div>
    </>
  );
}

export default User;
