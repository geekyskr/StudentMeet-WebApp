import react from 'react';
import './Contact.css';
const Contact =()=>{
    return (
        <div class="sm-contact-backgroud">
	<div class="sm-contact-center">
		<h2 class="sm-contact-heading">Contact Us</h2>
		<form>
		
		<div class="contact-form-div">
			<input type="text" id="name" placeholder="Full Name" class="contact-form-input">
		</input>
		</div>
		<div class="contact-form-div">
			<input type="text" id="email"  class="contact-form-input" placeholder="Email-id">
		</input>
		</div>
		<div class="contact-form-div">
			<input type="text" id="name"   class="contact-form-input" placeholder="Phone">
		</input>
		</div>
		<div class="contact-mes-div">
			<textarea rows="4" cols="50" class="contact-message" placeholder="Your Message"></textarea>
		</div>
		<br/>

		  <div className="contact-button-div">
					<button className="contact-button" type="submit" >SEND</button>
				</div>
		</form>
	</div>
	</div>
    )

};
export default Contact;