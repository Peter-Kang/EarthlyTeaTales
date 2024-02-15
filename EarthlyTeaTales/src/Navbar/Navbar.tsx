import "./Navbar.css";
import Logo from "./components/Logo.tsx";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <a className="navbar-logo">
          <Logo></Logo>
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
