import React from 'react';
import './University.css'

function University(props){
  const {universityId} = props.match.params
  return <div>{universityId}</div>
}

export default University;
