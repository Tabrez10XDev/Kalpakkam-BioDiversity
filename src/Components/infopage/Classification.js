import React from "react";
import './Info.css';




const Classification=(props)=>{

   
    return(
        <div>
            <div className="card-container">

                <div className="classify-card" style={{width:220,height:200,backgroundColor:'#FFFF',marginRight:20,borderRadius:12,display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                    <p style={{fontSize:40,fontWeight:800,textAlign:'center',color:'#D1D1D1',marginTop:50}}>{props.title}</p>
                    <p style={{fontSize:20,fontWeight:500,textAlign:'center',color:'#656565',position:'relative',bottom:32}}>{props.class}</p>

                </div>


            </div>

            
            

        </div>
    )
}
export default Classification;