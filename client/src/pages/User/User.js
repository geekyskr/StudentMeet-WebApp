import React from 'react';
import './User.css'

function User(props){
  const {username} = props.match.params
  return <div>{username}</div>
}

export default User;
