import './App.css';
import Landingpage from './Landingpage';
import Info from './Components/infopage/Info';
import Imageviewer from './Components/Imageviewer';
import Map from './Components/Map';
import Verification from './Components/Admin-pages/Verification';
import Dashboard from './Components/Admin-pages/Dashboard';
import Feedbacks from './Components/Admin-pages/Pages/Feedbacks';

import {
  HashRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

import { BrowserRouter } from 'react-router-dom'
// import Butterfly from './Components/Canvas/Butterfly';
import { Butterflybg } from "./Components/Canvas";
import InteractiveMap from './Components/InteractiveMap';


function App() {
  return (
    
    <Router>
       <Routes>
       <Route exact path='/' element={<Landingpage/>} ></Route>
        {/* <Route path="Home" element={<Home/>} /> */}
        <Route path="/Info" element={<Info/>} />
        <Route path="/imageview" element={<Imageviewer/>} />
        <Route path="/map" element={<Map/>} />
        <Route path="/Greenmap" element={<InteractiveMap/>} />
        <Route path="/admin" element={<Verification/>} />
        <Route path="/admin/Dashboard" element={<Dashboard/>} />
        <Route path="admin/Feedbacks" element={<Feedbacks/>} />
        

      

      
      {/* <Countsection id="counts"/> */}

      {/* <About/> */}
      
      
      </Routes>
      </Router>
    
  );
}

export default App;
