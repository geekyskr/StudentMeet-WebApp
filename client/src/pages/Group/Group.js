import React from 'react';
import './Group.css'

function Group(props){
  const {universityId} = props.match.params
  return <div>{universityId} Group</div>
}

export default Group;
