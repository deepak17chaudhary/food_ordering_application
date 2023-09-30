//import './headercomponent.css';
const header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://logolook.net/wp-content/uploads/2023/04/Swiggy-Emblem.png"
          alt="no preview"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};


export default header;
