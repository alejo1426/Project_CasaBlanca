import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
        <li><Link to="/Formulario">Formulario</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
