import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#aboutTitle">About</a>
      <a href="#conditionsTreated">Conditions Treated</a>
      <img className="logoImage" src={logo}></img>
      <a href="#FAQs">FAQs</a>
      <a href="#contacts">Contact</a>
    </nav>
  );
};

export default Navbar;
