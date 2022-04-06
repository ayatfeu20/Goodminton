import React, { useState , useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const linksContainer = useRef();
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const boxHandler = () => {
    setToggle(false);
  };
  return (
    


<nav className="navbar d-flex navbar-light order-last order-lg-0 align-items-center justify-content-between" >
  <div className="container-fluid">
  
    <div className="navbar-brand">
    <a href="/"><img src= "../images/goodminton-logo.png" className="img-fluid" alt="HomePage" /></a>

    <ul ref={linksContainer} className={toggle ? "active" : ""}>

          <li>
          <Link onClick={boxHandler} to="/">Hem</Link>
          </li>
          <li>
          <Link onClick={boxHandler} to="/Resurskonsult">Resurskonsult</Link>
          </li>
          <li>
          <Link onClick={boxHandler} to="/Kunskaper">Kunskaper</Link>
          </li>
          <li>
          <Link onClick={boxHandler} to="/Projekt">Uppdrag och projekt</Link>
          </li>
          <li>
          <Link onClick={boxHandler} to="/Kontakt">Kontakt</Link>
          </li>
                    
        </ul>

           
     </div>
     
         

    <div onClick={handleToggle} className="toggle-button">
          <i className={toggle ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
  </div>
</nav>


      
    );
};

export default Navbar