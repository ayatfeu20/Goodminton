import React from 'react';
import background from './/telephone-g35aa8e0c1_1920.jpg';
import  "./Kontakt.css";
import { FaPhone,FaMapMarkerAlt,FaEnvelope,FaLocationArrow} from 'react-icons/fa';
import figure from 'react-bootstrap/figure'


function Kontakt() {
  return (
    <section id="kontakt" class="kontakt">
      <div className="d-flex ">
     <div className="background" style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: '62% 38%', height: '60vh',width:'100%'}}>
     <h2 className='d-flex'>Kontakta oss</h2>
     </div>
     </div>
      
    <div class="container" data-aos="fade-up">
      <div className='oss'>
         
        <h2 className='d-flex' >Goodminton blir din bästa arbetsgivare någonsin! </h2>
        
      </div>

  <div class="row">
  
  <div class=" col-lg-10  d-flex flex-column align-items-stretch
   justify-content-center py-5 px-lg-7">
          
          
      <div className='container'>
        <div className='bild row'>
        <div className='bild-contact d-flex'>
        
        <div class="row  ">
          <div class="col mx-14">
            <div class="info">
              <div class="address">
                <i><FaMapMarkerAlt/></i>
                <h6>Huvudkontor:</h6>
                <p>Grubbens gata 11, 112 32 Stockholm </p>
              </div>

              <div class="email">
                <i><FaEnvelope/></i>
                <h6>E-post:</h6>
                <p>info@goodminton.se</p>
              </div>

              <div class="phone">
                <i><FaPhone/></i>
                <h6>Växel:</h6>
                <p>08-1245 1240</p>
              </div>
              <div class="org">
                <h5>Org nr: 556845-8474</h5>
                <h5>Företaget har f-skattsedel </h5>
               </div>
              

            </div>
          </div>
          </div>
          <figure>
          <figure.Image src="./images/henrik-home.jpg"  alt=""  width={600}
    height={400} /> 
          <figcaption className='text-black font-weight-bold bg-light'>Henrik Hedberg</figcaption>
          </figure>
          </div>
          </div>
         </div>



         <div className='container pt-5'>
        <div className='map row '>
        <div className='map-contact d-flex'>
        
        <div class="row  ">
          <div class="col mx-14">
            <div class="hitta">
              
                <i><FaLocationArrow/></i>
                <h6>Hitta till oss</h6>
                <p>Besöksadress: Tranebergsstrand  </p>
                <p>T-bana Alvik</p>
              
            </div>
          </div>
          </div>
          
          <img src="./images/karta.png"  alt=""  width={600}
    height={400} /> 
          
          </div>
          </div>
         </div>
         
         




          
                    
        </div>
      </div>

    </div>
  </section>
    
    
  )
}

export default Kontakt