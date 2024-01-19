import "./Navbar.css";
import Logo from "./components/Logo.tsx";

const Navbar = () => {
  return (
    <ul>
      <li>
        <a>
          <Logo></Logo>
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
