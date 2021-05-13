import React from 'react';
import Post from '../../components/Post.js'
import './Group.css'

function Group(props){
  const {universityId} = props.match.params
  
  return (
    <Post title="title" description="description" post="I am post" tag="Entertainment" />
  )
}

export default Group;
