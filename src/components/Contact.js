import linkedInFig from '../assets/linkedin.png';
import githubFig from '../assets/github.png';
import mailFig from '../assets/mail.png';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

function Contact() {
    const linkedinLink = useRef(null);
    const githubLink = useRef(null);
    const mailLink = useRef(null);

    const handleClick = e => {
        console.log('hei', e)
        if(e.target === linkedinLink.current){
            window.open('https://www.linkedin.com/in/andrea-elveg%C3%A5rd-4a9930192/');
        } 
        if(e.target === githubLink.current){
            window.open('https://github.com/andreaelve');
        } 
        if(e.target === mailLink.current) {
            console.log('hei')
            navigator.clipboard.writeText('andrea.elvegaard@yahoo.no');
        }
    }

    return (
        <section className="contact" id="contact">
            <div className='contact_title-container'>
                <h2 className='contact_title'>LET'S CONNECT</h2>
                <div className="contact_circle-gray"></div>
                <div className="contact_circle-red"></div>
            </div>
            <div className="contact_list">
                <div onClick={handleClick} className='contact_list-group'>
                    <p ref={linkedinLink} className='contact_link'>LINKEDIN</p>
                    <img alt="linkedin icon" className='contact_icon' src={linkedInFig}/>
                </div>
                <div onClick={handleClick} className='contact_list-group'>
                    <p ref={githubLink} className='contact_link'>GITHUB</p>
                    <img alt="github icon" className='contact_icon' src={githubFig} />
                </div>
                <div onClick={handleClick} className='contact_list-group'>
                    <Link to="/email" className="contact_link-email" ><p ref={mailLink} className='contact_link'>EMAIL</p></Link>
                    <img alt="e-mail icon" className='contact_icon' src={mailFig}/>
                </div>
            </div>
        </section>
    )
}

export default Contact;