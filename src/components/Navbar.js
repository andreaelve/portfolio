import MyCv from '../assets/cv.pdf';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const openCV = () => {
    console.log('yo');
    window.open(MyCv, '_blank');
  }

  return (
    <nav className="nav nav_open">
        <HashLink className="nav_link" to="/#home" >Home</HashLink>
        <HashLink className="nav_link" to="/#about">About</HashLink>
        <HashLink className="nav_link" to="/#work">Projects</HashLink>
        <HashLink className="nav_link" to="/#contact">Contact</HashLink>
        <Link className="nav_link" to="/email" >Email</Link>
        <p className="nav_link" onClick={openCV}>CV</p>
    </nav>
  );
}

export default Navbar;