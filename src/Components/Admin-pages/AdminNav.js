import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../FirebaseConfig";
import { getAuth, signOut } from "firebase/auth";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { SidebarData } from "./SlidebarData";
import './Dashboard.css';

export default function AdminNav() {

    let navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#ffff" }}>
        {/* All the icons now are white */}
        <div className="navbar2">
          <Link to="#" className="menu-bars">
            <div className="menu" style={{}}>
            <FaIcons.FaBars onClick={showSidebar} />
            </div>
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose style={{color:'#fff'}}/>
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li className="nav-text">
            <button onClick={()=>{signOut(auth)}} style={{ width: 120, height: 45, fontSize: 18, fontWeight: 500, backgroundColor: '#829D94', color: '#fff', borderRadius: 12, marginTop: 16,borderWidth:0}}> Logout </button>
                </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
