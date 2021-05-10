import React, {useState, useEffect} from "react";
import "./User.css";
import userImg from "../../images/userPhoto.jpeg";
import Axios from "axios";

function User(props) {

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
      <div class="sm-profile-container">
        <div class="sm-profile-section1">
          <div class="sm-profile-center">
            <h1 id="sm-profile-heading" class="sm-profile">
              {user.studentname}'s Profile long name
            </h1>
            <div class="sm-profile-img-div">
              <img class="sm-profile-img" src={userImg} alt="Profile Image" />
            </div>
            <h2 class="sm-profile">UserName: {user.username}</h2>
            <h3 class="sm-profile">Email: long email {user.email}</h3>
            <h3 class="sm-profile">Phone no: {user.phonenumber}</h3>
          </div>
        </div>
        <div class="sm-profile-section2">
          <div class="sm-profile-edit">
            <button type="button" class="sm-p-edit">
              Edit Profile
            </button>
            <button type="button" class="sm-p-delete">
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
