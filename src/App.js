import './App.css';
import Landingpage from './Landingpage';
import Info from './Components/infopage/Info';
import Imageviewer from './Components/Imageviewer';
import Map from './Components/Map';


import {
  HashRouter as Router,
  Routes,
  Route
 } from "react-router-dom";




function App() {
  return (
    
    <Router>
       <Routes>
       <Route exact path='/' element={<Landingpage/>} ></Route>
        <Route path="/Info" element={<Info/>} />
        <Route path="/imageview" element={<Imageviewer/>} />
        <Route path="/map" element={<Map/>} />      
      </Routes>
      </Router>
    
  );
}

export default App;
