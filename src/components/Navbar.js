import MyCv from '../assets/cv.pdf';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Navbar() {
  const openCV = () => {
    console.log('yo');
    window.open(MyCv, '_blank');
  }

  return (
    <nav className="nav nav_open">
        {/* <a className="nav_link" href="#home">Home</a> */}
        <HashLink className="nav_link" to="/#home" >Home</HashLink>
        <HashLink className="nav_link" to="/#about">About</HashLink>
        <HashLink className="nav_link" to="/#work">Projects</HashLink>
        <HashLink className="nav_link" to="/#contact">Contact</HashLink>
        <Link className="nav_link" to="/email" >Email</Link>
        <a className="nav_link" onClick={openCV}>CV</a>
    </nav>
  );
}

export default Navbar;