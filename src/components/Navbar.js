import MyCv from '../assets/cv.pdf'

function Navbar() {
  const openCV = () => {
    console.log('yo');
    window.open(MyCv, '_blank');
  }

  return (
    <nav className="nav nav_open">
        <a className="nav_link" href="#home">Home</a>
        <a className="nav_link" href="#about">About</a>
        <a className="nav_link" href="#work">Projects</a>
        <a className="nav_link" href="#contact">Contact</a>
        <a className="nav_link" onClick={openCV}>CV</a>
    </nav>
  );
}

export default Navbar;