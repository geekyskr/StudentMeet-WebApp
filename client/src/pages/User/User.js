import React from 'react';
import './User.css'
import userImg from '../../images/userPhoto.jpeg'

function User(props){
  return (
    <>
        <div class="sm-profile-container">
        <div class="sm-profile-section1">
            
            
            
            <div  class="sm-profile-center">
                <h1 id="sm-profile-heading" class="sm-profile"> Akhilesh swaroop gupta Profile</h1>
                <div class="sm-profile-img-div">
                    <img class="sm-profile-img" src={userImg} alt="Profile Image" />
                </div>
            <h2 class="sm-profile">UserName:kumarnippu000006@gmail.com</h2>
            <h3 class="sm-profile">Email:kumarnippu000006@gmail.com</h3>
            <h3 class="sm-profile">University Name</h3>
            </div>
        </div>
        {/* class="sm-profile-section2" contain edit and delete button */}
        <div class="sm-profile-section2">
            <div class="sm-profile-edit">
                <button type="button" class="sm-p-edit">Edit Profile</button>
                <button type="button" class="sm-p-delete">Delete Profile</button>
                
                </div>
        </div>

       
        
    </div>
        </>
    );
}

export default User;
