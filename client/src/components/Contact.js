import react from 'react';
import './Contact.css';
const Contact =()=>{
    return (
        <div class="nkimg">
	<div class="nk1">
		<h2 class="h21">Contact Us</h2>
		<form>
		
		<div class="nk2">
			<input type="text" id="name" placeholder="Full Name" class="nk">
		</input>
		</div>
		<div class="nk2">
			<input type="text" id="email"  class="nk" placeholder="Email-id">
		</input>
		</div>
		<div class="nk2">
			<input type="text" id="name"   class="nk" placeholder="Phone">
		</input>
		</div>
		<div class="nk2">
			<textarea rows="4" cols="50" class="mes" placeholder="Your Message"></textarea>
		</div>
		<br/>

		  <div>
					<button type="submit" >SEND</button>
				</div>
		</form>
	</div>
	</div>
    )

};
export default Contact;