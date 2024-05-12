import React from "react";
import './Dashboard.css'

// import "./styles.css";

import AdminNav from "./AdminNav";
import {
  HashRouter as Router,
  Routes, Route
} from "react-router-dom";

// PAGES
import Uploaded from "./Pages/Uploaded";
import DashHome from "./Pages/DashHome";
import Feedbacks from "./Pages/Feedbacks";
import Create from "./Pages/Create";
import { auth, db } from "../../FirebaseConfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";


const Dashboard = () => {

  const navigate = useNavigate();


  React.useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => {
      if (user === null) {
        navigate(-1)
      }
    })
    return unsub;
  }, [])




  return (
    <div>


      <AdminNav />
      <Routes>
        <Route exact path="/" element={<DashHome />} state />
        <Route path="/Feedbacks" element={<Feedbacks />} />

        <Route path="/products" element={<Uploaded />} />
        <Route path="/reports" element={<Create />} />
      </Routes>
    </div>


  );
}



export default Dashboard;