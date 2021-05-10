import React from 'react';
import './University.css'

function University(props){
  const {universityId} = props.match.params
  return <div>
    {/* {universityId} */}
    <div class="sm-uni-container" >
        <div class="sm-university"> 
            <h1 class="sm-uni-name">University Name  </h1>  
            <h2 class="sm-uni-address">University Address Anim qui ea qui eiusmod veniam eiusmod anim nostrud ex laboris id voluptate do enim. Incididunt velit commodo magna minim aute. Elit nulla consequat commodo mollit consequat duis sunt aliqua pariatur. Aliquip in labore enim consectetur adipisicing ad occaecat incididunt id esse. Irure elit mollit ad officia dolore exercitation ipsum. Labore amet dolore aute occaecat sunt. </h2>    
        </div>
        <div class="sm-university-detail"> 
            <h1 class="sm-uni-detail-heading">University Detail</h1>
            <p>About University detail Aute quis elit nulla suntEa nulla nostrud esse duis sit eu laborum Lorem. Excepteur ex velit mollit dolor magna minim cillum commodo. Fugiat consectetur ex ex et anim consequat sunt proident consectetur consequat tempor est minim. Nulla nulla elit incididunt quis consectetur. Dolor adipisicing occaecat eiusmod quis incididunt culpa labore veniam proident occaecat.Dolor cupidatat ullamco quis ullamco cillum laboris ad. Ut culpa et quis magna irure non ad aute enim est ut magna ipsum voluptate. Culpa adipisicing culpa tempor sunt exercitation non non fugiat commodo pariatur officia sint. Ad do adipisicing adipisicing aliquip id. Cillum consequat ad commodo irure mollit mollit. Sint enim velit adipisicing eiusmod ea proident et dolore aliqua. Incididunt quis ipsum reprehenderit esse deserunt qui ipsum deserunt consectetur. nisi sit minim Lorem irure duis nulla ad id culpa. Enim cupidatat laboris do nisi officia. Ea pariatur anim sunt culpa minim excepteur aliqua ut. Quis nostrud esse aliqua exercitation duis et eiusmod nostrud elit consectetur.</p>    
        </div>
        <div>  </div>
    </div>
  
  </div>
}

export default University;
