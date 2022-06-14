import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Footer from './components/footer';
import Stack from './components/stack';
import Lounchpads from './components/lounchpad';
import Dex from './components/dex';
import State from './components/state';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
   <>
   <div className="w-full">
     <Router>
     <Navbar />
 
    
    
       
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/stack" element={<Stack />} />
      <Route path="/lounchpad" element={<Lounchpads />} />
      <Route path="/state" element={<State />} />
      <Route path="/dex" element={<Dex />} />
    
    </Routes>
    <Footer />
    </Router>
   

   </div>
   </>
  );
}

export default App;
