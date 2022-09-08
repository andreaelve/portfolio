import linkedInFig from '../assets/linkedin.png';
import githubFig from '../assets/github.png';
import mailFig from '../assets/mail.png';

function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className='contact_title'>LET'S CONNECT</h2>
            <div className="contact_circle-gray"></div>
            <div className="contact_circle-red"></div>
            <div className="contact_list">
                <div className='contact_list-group'>
                    <p className='contact_link'>LINKEDIN</p>
                    <img className='contact_icon' src={linkedInFig}/>
                </div>
                <div className='contact_list-group'>
                    <p className='contact_link'>GITHUB</p>
                    <img className='contact_icon' src={githubFig} />
                </div>
                <div className='contact_list-group'>
                    <p className='contact_link'>EMAIL</p>
                    <img className='contact_icon' src={mailFig}/>
                </div>
            </div>
        </section>
    )
}

export default Contact;