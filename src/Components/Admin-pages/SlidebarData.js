import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/admin/Dashboard",
    icon: <AiIcons.AiFillHome style={{color:'#fff'}} />,
    cName: "nav-text"
  },
  {
      title: "Feedbacks",
      path: "/admin/Feedbacks",
      icon: <IoIcons.IoIosPaper  style={{color:'#fff'}}/>,
      cName: "nav-text"
    },
  // {
  //   title: "Reports",
  //   path: "/reports",
  //   icon: <IoIcons.IoIosPaper  style={{color:'#fff'}}/>,
  //   cName: "nav-text"
  // },
  // {
  //   title: "Products",
  //   path: "/products",
  //   icon: <FaIcons.FaCartPlus style={{color:'#fff'}}/>,
  //   cName: "nav-text"
  // },
  // {
  //   title: "Team",
  //   path: "/team",
  //   icon: <IoIcons.IoMdPeople style={{color:'#fff'}}/>,
  //   cName: "nav-text"
  // },
  // {
  //   title: "Messages",
  //   path: "/",
  //   icon: <FaIcons.FaEnvelopeOpenText style={{color:'#fff'}}/>,
  //   cName: "nav-text"
  // },
  // {
  //   title: "Support",
  //   path: "/support",
  //   icon: <IoIcons.IoMdHelpCircle style={{color:'#fff'}}/>,
  //   cName: "nav-text"
  // }
];
