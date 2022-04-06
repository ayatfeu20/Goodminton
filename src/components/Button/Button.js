import React from "react";
import "./Button.css";
import {FaNewspaper} from 'react-icons/fa';

function Button() {

  const [visible, setVisible] = React.useState(false);
  return (
    <div className="nyhet " >
      <button className="btn  btn-lg btn-outline-danger" onClick={() => setVisible(!visible)}>{visible ? 'X' : 'Senaste nytt'} <FaNewspaper className="d-flex justify-content-center ml-2 " size="80"/> </button>
      <div   style={{display: visible ? 'block' : 'none'}}>
      <div className="ny mt-4 ">
      <h4 className="d-flex">2021-02-01 Ny hemsida</h4>
      <p className="d-flex">Lansering av vår nya hemsida. </p>
      <br></br>
      <h4 className="d-flex">2021-91-15 Nytt kontrakt SIE-utbildning</h4>
      <p className="d-flex">Utbildningskontrakt för att ta fram material för följande och hålla följande online urbildningar. </p>
      <p className="d-flex">¤ JavaScript MVC</p>
      <p className="d-flex">¤ Java </p>
      </div>



      </div>
    </div>
  );
};


export default Button;