import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navMenu">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/projects">
          Projects
        </Link>
        <Link className="navLink" to="/About">
          About
        </Link>
        <Link className="navLink" to="/Contact">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
