import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { LOGO_URL } from "./utils/constants";
import { useState } from "react";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // Login Logout Button function
  let loginButton = () => {
    btnNameReact === "Login"
      ? setBtnNameReact("Logout")
      : setBtnNameReact("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="no preview" />
      </div>

      <div className="nav-items">
        <ul>
          <li> Home</li>
          <li> About</li>
          <li> Contact</li>
          <li>
            <FontAwesomeIcon icon={faCartShopping} /> Cart
          </li>
          <button className="login-button" onClick={loginButton}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
