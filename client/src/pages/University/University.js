import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './University.css'

function University(props){
  const {universityId} = props.match.params
  const [university, setUniversity] = useState("");

  const universityFunc = () => {
      Axios.get('http://localhost:8080/'+universityId).then((response) =>{
          setUniversity(response.data[0]);
      });
  }
  useEffect(() => {
      universityFunc();
    }, []);



  return <div>
    <div class="sm-uni-container" >
        <div class="sm-university">
            <h1 class="sm-uni-name">{university.universityname}</h1>
            <h2 class="sm-uni-address">{university.address}</h2>
        </div>
        <div class="sm-university-detail">
            <h1 class="sm-uni-detail-heading">University Detail</h1>
            <p>{university.details}</p>
        </div>
        <div>  </div>
    </div>

  </div>
}

export default University;
