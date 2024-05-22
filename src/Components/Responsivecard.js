import React from "react";
import tree from "./assets/treebg.jpg";
import Woodie from '../Components/assets/woodie.png'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
// import { Button } from "react-scroll";
import { Button } from "@mui/material";



const Responsivecard=(props)=>{

    
    let navigate = useNavigate();

    const getImage = (imagePath) => {
        try {
          return require(`./assets/${imagePath.trim()}/one.jpg`);
        } catch (err) {
          return require('./assets/banner1.png'); // Path to your placeholder image
        }
      };
      


    const imageSrc = getImage(props.data.name);

    return(
        
        <div className="cardui" onClick={()=>{
            navigate(`/Info?tree=${props.data.name}`);
          }} style={{width:174,height:240,justifyContent:'center',backgroundColor:'#FFFF',borderRadius:14,position:'relative',shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.35,
        shadowRadius: 3.84,
        
        elevation: 5,
        marginTop:32 }}>
            
         

                    <img src={Woodie} style={{width:55,height:55,position:'absolute',marginTop:85,paddingLeft:"40%"}} />

                    <div className="imgcontainer" style={{width:174, height:64}}>
                        
                    <img src={imageSrc} style={{ width: 174, borderTopLeftRadius: 20, borderTopRightRadius: 20, height:"200%", objectFit:'cover' }} />
                    </div>
                
                    <p style={{fontSize:16,color:"#252525",fontWeight:500,position:'absolute',top:"55%",marginLeft:16}}>{props.data.name}</p>
                    <p style={{fontSize:14,color:"#767676",fontWeight:400,marginLeft:16 ,position:'absolute',top:"68%", fontStyle:'italic'}}>{props.data.scientificName}</p>
                </div>
    )
}



export default Responsivecard;