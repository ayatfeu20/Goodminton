import react from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hem from "./pages/Hem/Hem";
import Resurskonsult from "./pages/Resurskonsult/Resurskonsult";
import Kunskaper from "./pages/Kunskaper/Kunskaper";
import Projekt from "./pages/Projekt/Projekt";
import Kontakt from "./pages/Kontakt/Kontakt";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Router>
     <Navbar />
     
            
              
     <Routes>
     
     <Route  exact path="/" element={<Hem/>} /> 
     <Route   path="/Resurskonsult"element={<Resurskonsult/>} />
     <Route  exact path="/Kunskaper" element={<Kunskaper/>} />
     <Route   path="/Projekt" element={<Projekt/>} />
     <Route   path="/Kontakt" element={<Kontakt/>} />
    
     
     </Routes>
     </Router>
     <Footer/>

    </div>
  );
}

export default App;
