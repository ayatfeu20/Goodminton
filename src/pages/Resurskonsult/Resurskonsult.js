import React from 'react'
import background from './/consulting-ga897188fc_1920.jpg';
import "./Resurskonsult.css";
import {FaRegHandshake} from 'react-icons/fa';

function Resurskonsult() {
  return (
    <section id="resurs" class="resurs">
      <div className="d-flex ">
     <div className="background" style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: 'center', height: '60vh',width:'100%'}}>
     <h2 className='d-flex'>Resurskonsult</h2>
     </div>
     </div>
      
    <div class="container" data-aos="fade-up">
      <div className='om'>
         
        <h2 className='d-flex' >Vår primära verksamhet är resurskonsulting</h2>
        <p className='d-flex aligin-content-start'>Genom år av aktivt letande samt olika samarbeten förfogar vi idag över mer än 1500 resurser. 

Kvalitetssäkring av resurserna innefattar omfattande intervjuer samt löpande dialog med uppdragsgivare och kollegor. Vi söker placera rätt personlighet i rätt sammanhang. 

Tekniskt sett ska resurserna ha eget driv för fortbildning. Vi kan även tillföra vissa kunskaper genom de interna projekt vi driver. </p>
      </div>

  <div class="row">
  
  <div class=" col-lg-12 icon-boxes d-flex flex-column align-items-stretch
   justify-content-center py-5 px-lg-5">
          
          <div class="icon-box">
            <div class="icon"><FaRegHandshake className='d-flex' size='50'/></div>
            <h2 class="title">Roller</h2>
            <p class="description">Våra roller kan innefatta arbete inom systemutveckling, databasutveckling, arkitektur, test, samt projektledning och verksamhetsutveckling. Se även våra specialistkompetenser under fliken Specialistkunskaper ovan. 

Den längre versionen kan vi ta över en kopp kaffe! </p>
          </div>

          
                    
        </div>
      </div>

    </div>
  </section>
    


  )
}

export default Resurskonsult