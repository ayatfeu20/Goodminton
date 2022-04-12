import React from 'react';
import './Labels.css'



function Labels() {
  return (
      <div className='uppdrag' id='uppdrag'>
  
    <input type="radio" name="Bappnet" id="happy-radio"  />
    <input type="radio" name="Elektrosurf" id="lovers-radio"/>
  
    <div className="selector">
      <label htmlFor="happy-radio" className="happy-card" hover-zoom>
        <h1>Bappnet</h1>
        <p>Med Bappnet kan du tjäna pengar till dig själv, ett lag eller en klass. Konceptet är unikt och helt mobilbaserat. De leverantörer som finns i Bappnet är alla mycket noga utvalda för sina produktegenskaper och höga kvalitet till rimligt pris. </p>
        <br></br>
        <p>Som duktig återförsäljare kan du leva på din försäljning i Bappnet. Är ni ett lag eller en klass som samlar pengar till en resa så kommer ni att kunna åka längre, bo bättre och kunna göra mer saker genom en fördelaktig intjäningsmodell. </p>
        <br></br>
        <p>Bappnet innehåller en mobil e-handel samt ett speciellt projektverktyg där man kan lägga upp sina försäljningsmål, tidplaner samt bygga gruppen som ska uppnå resultatet. </p>
        
      </label>
  
      <label htmlFor="lovers-radio" className="lovers-card" hover-zoom>
       <h1>Elektrosurf</h1>
       <p>En ny fluga – surfbrädor som drivs i farter på 30 knop på batteri. Dels driver Electrosurf uthyrning av en lite långsammare bräda i vattnen kring Kungsholmen men de har även den snabba brädan i vatten där det är tillåtet att köra 30 knop. Perfekt aktivitet för adrenalinstinna, svensexor, företagsevent och möhippor likväl som lugna turer och lite mysfaktor. </p>
       <br></br>
       <p>Goodminton har byggt webben samt systemen för uthyrning och för försäljning. </p>
      </label>
      
      
    </div>
  </div>
  
  
  
  )
}

export default Labels