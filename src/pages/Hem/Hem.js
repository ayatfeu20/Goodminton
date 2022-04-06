import React from 'react';
import background from './/businessman-gbff2fad6e_1920.jpg';
import "./Hem.css";
import Cards from "../../components/Cards/Cards";
import background1 from './/key.jpg';
import Button from '../../components/Button/Button';




function Hem() {
  return (
    
    <div id="home" className="home">
    
    <div className='d-flex'>
     <div className="background col" style={{ backgroundImage:`url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: 'center',
        height: '65vh',width:'100%' }}>
     <div className='tomt d-flex'></div>
     
     
    <div className=' kort '>    
     <h1>Två sätt!</h1>
     <h5>VAD GÖR DU I TUFFARE TIDER?</h5>
     <p>Antingen fortsätter du som tidigare och konstaterar att det är inte som förr - eller så tänker du nytt, utanför boxen, ifrågasätter och använder alla dina kvalitet att forma något för framtiden. 
     
Hos oss hittar du drivna och engagerade experter inom affärsutveckling, projektledning, systemutveckling och annat. 

Parallellt med våra kundprojekt skapar och driver Goodminton egna projekt där vi testar egna idéer och ny teknik, som vi sedan kan ta med oss till våra kunder. </p>
<h5>Hur kan vi hjälpa dig?</h5>
     </div>
     </div>
     </div>
        
     <Cards/>

 <div className="hitta d-flex ">
 <div className="background1" style={{ backgroundImage:`url(${background1})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition: 'center',height: '60vh',width:'100%' }}></div>
   </div>
   <div className='text'>
  <h4 class="d-flex justify-content-start ml-5"> Vi har många kompetenser och kan ofta matcha<br></br> de kravprofiler som efterfrågas. </h4>
    </div>

    <Button/>
    </div>
    
    
    
    
  )
}

export default Hem