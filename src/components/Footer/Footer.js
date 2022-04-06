import React from 'react';
import "./Footer.css"
import { FaMobile, FaEnvelope, FaLongArrowAltUp } from 'react-icons/fa';




const Footer = () => {
  return(
      <div className='main-footer bg-gradient '>
          
         
          <div className=' container  '>
              <div className='row '>

                    {/* column1 */}
                    <div className='col d-flex justify-content-around' >
                    <img src= "../images/goodminton-logo-vit.png" class="img-fluid " alt=""  />
                  </div>
                  {/* column2 */}
                  <div className='col d-flex justify-content-around'>
                      
                      <ul className='list-unstyled'>
                          <h5>Kontakt</h5>
                          <li>Huvudkontor: Grubbens gata 11,</li>
                          <li>112 32 Stockholm</li>
                          <li class=" d-flex ">
                          <FaEnvelope className="my-1 mr-1"/><a href="mailto:info@goodminton.se">info@goodminton.se</a></li>
                          <li class=" d-flex "><FaMobile className="my-1 mr-1" />08-1245 1240</li>
                     
                      </ul>
                    </div>
                 
                  {/* column3 */}
                   <div className='col d-flex justify-content-around'>
                   <ul className='list-unstyled'>
                          <h5>Information</h5>
                          <li></li>
                          <li></li>
                          <li>Företaget har f-skattsedel</li>
                          <li>Org nr: 556845-8474 </li>
                          
                      </ul>
                  </div>
                   {/* column4 */}
                   <div className='col d-flex justify-content-around'>
                   <ul className='list-unstyled'>
                          <h5>Länker</h5>
                          <li></li>
                          <li></li>
                          <li><a href=''>Jobba hos oss</a></li>
                          <li><a href=''>Kontakta oss</a> </li>
                          
                      </ul>
                  </div>
              </div>
              <hr />
              </div>
              <div className='row aligin-items-center justify-content-center Footer-bottom '>
                  <p className='col-sm aligin-items-center justify-content-center'>
                    Copyright &copy;{new Date().getFullYear()} | Goodminton AB
                  </p>
              </div>
          

          <div id="preloader"></div>
       <a href="#" class="back-to-top "><FaLongArrowAltUp className='d-flex arrow'/></a>
      </div>

      
  )
}

export default Footer;