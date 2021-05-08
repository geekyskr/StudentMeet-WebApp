import userPhoto from '../images/userPhoto.jpeg'


const About=()=>  {
        
           const names=[{name:"Akhilesh Swaroop Gupta",email:"akhileshkiit2016@gmail.com",img:userPhoto,contact:""},
            {name:"Sunil Kumar Sharma",email:"sunilrk.one@gmail.com",img:userPhoto,contact:""},
            {name:"Nippu Kumar",email:"kumarnippu000006@gmail.com",img:userPhoto,contact:"7009621792"},
            {name:"Vikash kumar Yadav",email:"vikashyadav9120465730@gmail.com",img:userPhoto,contact:""},
            {name:"Manoj Kumar Chaudhary",email:"manojchaudhary52623@gmail.com",img:userPhoto,contact:""}
        ]
        
        return (<>
            <h1 style={{textAlign:'center'}}>About Us</h1>
            <div className="row">
                     {names.map((oName,i) =>(
                         
                         <div className="card col-md-4"  key={i}>
                         <img src={oName.img} class="rounded-circle" alt="Cinque Terre" width="45%" height="45%" 
                          style={{marginLeft:'30%'}} /> 
                         <div className="card-body">
                           <h5 className="card-title" style={{textAlign:'center'}}>{oName.name}</h5>
                           <p className="card-text" style={{textAlign:'center'}}>{oName.email}</p>
                           <a href={'/in/' + oName.email} class="btn btn-primary" style={{textAlign:'center',marginLeft:'35%'}}>view profile</a>
                           <a href={'mailto:'+oName.email} class="btn btn-primary" style={{textAlign:'center',marginLeft:'35%'}}>Contact Me</a>
                         </div></div>
                      
                     ))}
                 </div></>
        );
    
};

export default About;