import React from 'react';
import background from './/puzzle-g1b4841205_1920.jpg';
import  "./Projekt.css";

function Projekt() {
  return (
    <section id="projekt" class="projekt">
      <div className="d-flex ">
     <div className="background" style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: '62% 38%', height: '60vh',width:'100%'}}>
     <h2 className='d-flex'>Uppdrag och projekt</h2>
     </div>
     </div>

     <div class="container" data-aos="fade-up">
      <div className='av'>
         
        <h2 className='d-flex' >Kunskaperna ger oss fördelar och detta tar vi med oss till våra kunder </h2>
        <p>Våra interna projekt drivs affärsmässigt och ger våra konsulter möjlighet att testa och tillämpa den senaste tekniken likväl som att laborera med affärsmodeller. </p>
      </div>
      </div>

     </section>
  )
}

export default Projekt