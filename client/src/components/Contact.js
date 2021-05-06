import {useState} from 'react';
import Axios from 'axios';
import './Contact.css';
	function Contact(){

		const [name, setName] = useState("");
		const [email, setEmail] = useState("");
		const [subject, setSubject] = useState("");
		const [message, setMessage] = useState("");
	  
		const contact = ()=>{
		  Axios.post('http://localhost:8080/contact', {name: name, email:email, subject: subject,
		  message: message})
		}

    return (
        <div class="sm-contact-backgroud">
	<div class="sm-contact-center">
		<h2 class="sm-contact-heading">Contact Us</h2>
		<form>
		
		<div class="contact-form-div">
			<input type="text" id="name" placeholder="Full Name" class="contact-form-input" onChange={(event)=>{
          setName(event.target.value);
        }}>
		</input>
		</div>
		<div class="contact-form-div">
			<input type="email" id="email"  class="contact-form-input" placeholder="Email-id" onChange={(event)=>{
          setEmail(event.target.value);
        }}>
		</input>
		</div>
		<div class="contact-form-div">
			<input type="text" id="subject"   class="contact-form-input" placeholder="Subject" onChange={(event)=>{
          setSubject(event.target.value);
        }}>
		</input>
		</div>
		<div class="contact-mes-div">
			<textarea id="message" rows="4" cols="50" class="contact-message" placeholder="Your Message" onChange={(event)=>{
          setMessage(event.target.value);
        }}></textarea>
		</div>
		<br/>

		  <div className="contact-button-div">
					<button className="contact-button" type="submit" onClick = {contact}>SEND</button>
				</div>
		</form>
	</div>
	</div>
    )

};
export default Contact;
