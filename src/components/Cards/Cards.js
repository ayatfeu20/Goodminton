import React from 'react';
import "./Cards.css";
import { FaArrowRight } from 'react-icons/fa';




function Cards() {
  return (
    <div>
   <section id="services" class="services ">
      <div class="container">

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              
              <h4>Resurs</h4>
              <p>En viktig del av vår verksamhet är att bistå som resurs hos våra kunder och deras projekt.</p>
              
              <a href='' className='row'><h6 className='col-lg-3'>Läs mer</h6><FaArrowRight className='col-lg-2'/></a> 
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box">
              
              <h4>Specialist</h4>
              <p>Även om vi generellt sett kan det mesta så har vi djup expertkunskap inom flera områden.</p>
              <a href='' className='row'><h6 className='col-lg-3'>Läs mer</h6><FaArrowRight className='col-lg-2'/></a>  
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
              
              <h4>Rykrytiring</h4>
              <p>Låt oss rekrytera dig till Goodminton - en arbetsgivare i världsklass!</p>
              <a href='' className='row'><h6 className='col-lg-3'>Läs mer</h6><FaArrowRight className='col-lg-2'/></a> 
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              
              <h4>Pågåande</h4>
              <p>En viktig del av vår verksamhet är att bistå som resurs hos våra kunder och deras projekt. </p>
              <a href='' className='row'><h6 className='col-lg-3'>Läs mer</h6><FaArrowRight className='col-lg-2'/></a> 
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              
              <h4>Kontakta oss</h4>
              <p>Även om vi generellt sett kan det mesta så har vi djup expertkunskap inom flera områden.</p>
              <a href='' className='row'><h6 className='col-lg-3'>Läs mer</h6><FaArrowRight className='col-lg-2'/></a> 
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
            <div class="icon-box">
              
              <h4>Jobba hos oss</h4>
              <p>Låt oss rekrytera dig till Goodminton - en arbetsgivare i världsklass!</p>
              <a href='' className='row'><h6 className='col-lg-3'>Läs mer</h6><FaArrowRight className='col-lg-2'/></a> 
            </div>
          </div>

        </div>

      </div>
    </section>

    </div>
  )
}

export default Cards