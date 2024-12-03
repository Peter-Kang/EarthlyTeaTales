import "./Navbar.css";
import Logo from "./components/Logo.tsx";

const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <a className="navbar-logo" href="/">
          <Logo></Logo>
        </a>
      </li>
      <li className="navbar-item">
        <a className="navbar-logo" href="/login">
          <u>Login</u>
        </a>
      </li>
      <li className="navbar-item">
        <a className="navbar-logo" href="/registration">
          <u>Registration</u>
        </a>
      </li>
      <li className="navbar-item">
        <a className="navbar-logo" href="/tea">
          <u>Teas</u>
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
