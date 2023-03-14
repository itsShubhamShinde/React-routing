import './App.css';
import Header from './Component/MainComponent/Header';
import { Routes, Route } from 'react-router-dom'
import Home from './Component/Home';
import About from './Component/About'
import Blog from './Component/Blog';
import Project from './Component/Project'
import Services from './Component/Services'

function App() {
  return (
    <div className="AppDiv">
     <Header />
     <Routes>
      <Route path="/" element={ <Home/>} />
      <Route path="/About" element={ <About/>} />
      <Route path="/Project" element={ <Project/>} />
      <Route path="/Services" element={ <Services/>} />
      <Route path="/Blog" element={ <Blog/>} />
     </Routes>
     
   
    </div>
  );
}

export default App;
