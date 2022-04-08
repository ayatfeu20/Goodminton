import React from 'react';
import background from './/learning-g64aed81a6_1280.jpg';
import  "./Kunskaper.css";

function Kunskaper() {
  return (
    <section id="kunskaper" class="kunskaper">
      <div className="d-flex ">
     <div className="background" style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: 'center', height: '60vh',width:'100%'}}>
     <h2 className='d-flex'>Kunskaper</h2>
     </div>
     </div>

     <div class="container" data-aos="fade-up">
      <div className='kun'>
         
        <h2 className='d-flex' >Våra konsulter har hög generell kompetens </h2>
        <p>Här följer exempel på områden där vi håller absolut toppklass.  </p>
      </div>
      </div>

     </section>
  )
}

export default Kunskaper