import Navbar from "../components/Navbar";
import '../styles/email.css';

function EmailPage() {
    
    const handleSend = () => {
        console.log('send');
    }

  return (
    <div className="email">
        <Navbar />
      <h1 className="email_title">LOVE TO HEAR FROM YOU!</h1>
      <form className="email_form">
        <label className="email_label">Your name</label>
        <input 
            type="text"
            placeholder="Firstname Lastname" 
            className="email_input"
        />
        <label className="email_label">Your email</label>
        <input 
            type="text"
            placeholder="example@email.com" 
            className="email_input"
        />
        <label className="email_label">Your message</label>
        <input 
            type="text"
            placeholder="What can I help you with?" 
            className="email_input"
        />
        <button 
          onClick={handleSend()}
          className="email_btn">
          SEND
        </button>
      </form>
    </div>
  );
}

export default EmailPage;