import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Footer from './components/footer';

function App() {
  return (
   <>
   <div className="w-full">
     <Navbar />
     <Homepage />
     <Footer />
   

   </div>
   </>
  );
}

export default App;
