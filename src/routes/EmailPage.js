import { useRef } from "react";
import Navbar from "../components/Navbar";
import '../styles/email.css';
import emailjs from '@emailjs/browser';

function EmailPage() {
  // const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const formRef = useRef(null);

  const handleSend = (name, email, message) => {
    const templateParams = {
      name,
      email,
      message
    }

    emailjs.send('service_jvmuwrl', 'template_qqwplxp', templateParams, 'wBrSPWI5i86rQiJL4')
      // .then(res => console.log('SUCCESS!', res.status, res.text))
      .catch(err => console.log('FAILED...', err));

    formRef.current.reset();
  }
    
  const validateInput = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    let send = true;

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      emailRef.current.value = "";
      emailRef.current.placeholder = "Please enter a valid email address."
      send = false;
    }
    if(name == null || name == ""){
      nameRef.current.value = "";
      nameRef.current.placeholder = "Please enter a name."
      send = false;
    }
    if(message == null || message == ""){
      messageRef.current.value = "";
      messageRef.current.placeholder = "Please enter a message.";
      send = false;
    }

    if(send) handleSend(name, email, message);
    }

  return (
    <>
    <Navbar />
    <div className="email">
      <h1 className="email_title">LOVE TO HEAR FROM YOU</h1>
      <div className="email_form-container">
      <form 
        className="email_form"
        ref={formRef}>
        <div className="email_input-group">
        <label className="email_label">Your name</label>
        <input 
            type="text"
            placeholder="Firstname Lastname" 
            className="email_input"
            ref={nameRef}
        />
        </div>
        <div className="email_input-group">
        <label className="email_label">Your email</label>
        <input 
            type="email"
            name="email"
            placeholder="example@email.com" 
            className="email_input"
            ref={emailRef}
        />
        </div>
        <label className="email_label">Your message</label>
        <textarea 
            type="text"
            placeholder="What can I help you with?" 
            className="email_input-large"
            ref={messageRef}
        />
        <button 
          type="submit"
          onClick={validateInput}
          className="email_btn">
          SEND
        </button>
      </form>
      </div>
    </div>
    </>
  );
}

export default EmailPage;