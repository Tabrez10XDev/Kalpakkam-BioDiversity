import React from "react";
import Peace from "./assets/Peace.png";
import Awareness from "./assets/Awareness.png";
import QR from "./assets/QRscan.png";
import Study from "./assets/Study.png";
import Tree from "./assets/3Dtree.png"
import '../App.css';


const Aboutcard=(props)=>{
    return(
        <div>
            <div className="abtcard" style={{height:250,width:260,backgroundColor:'#ffff',display:'flex',justifyContent:'center',marginRight:32,borderRadius:12,flexDirection:'column',alignItems:'center',marginTop:20}}>

                <img src={props.image} style={{width:68,height:68, marginTop:20, objectFit:'contain'}}/>
                
                <p style={{fontSize:16,fontWeight:500,color:'#252525',textAlign:'center'}}>
                    {props.title}
                </p>
                <p style={{fontSize:14,fontWeight:400,color:'#656565',textAlign:'center',position:'relative',bottom:20,marginLeft:5,marginRight:5}}>
                    {props.description}
                </p>
                 
              

            </div>
        </div>
    )
    
}
export default Aboutcard;