import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faAddressCard,faCartShopping,faAddressBook} from '@fortawesome/free-solid-svg-icons';
import { LOGO_URL } from "./utils/constants";
const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="no preview"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li><FontAwesomeIcon icon={faHouse} /> Home</li>
            <li><FontAwesomeIcon icon={faAddressCard} /> About</li>
            <li><FontAwesomeIcon icon={faAddressBook} /> Contact</li>
            <li><FontAwesomeIcon icon={faCartShopping} /> Cart</li>
          </ul>
        </div>
      </div>
    );
  };
  
  
  export default Header;
  