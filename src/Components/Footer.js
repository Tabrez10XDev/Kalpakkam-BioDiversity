import React from "react";
import Marquee from "react-fast-marquee";

const Footer=()=>{
    return(
        <div style={{backgroundColor:'#252525'}}>

            <div style={{height:600}}>
                
                <div style={{display:'flex ',alignItems:'center',flexDirection:'column'}}>
                <p style={{fontSize:18,color:'#656565',fontWeight:600,textAlign:'center'}}>Thank you </p>
                <p style={{fontSize:24,color:'#EEEE',fontWeight:600,textAlign:'center'}}>SAVE NATURE</p>
                </div>

                <p style={{fontSize:16,color:'#656565',fontWeight:400,textAlign:'center'}}>This project was developed by the efforts of</p>
    
                
                <p style={{fontSize:14,color:'#EEEE',fontWeight:500,textAlign:'center'}}>-Dr. N.P.I Das, Project Investigator, Scientific Officer, IGCAR</p>
                <p style={{fontSize:14,color:'#EEEE',fontWeight:500,textAlign:'center'}}>-Dr. Kantha Deivi Arunachalam, Professor</p>
                <p style={{fontSize:14,color:'#EEEE',fontWeight:500,textAlign:'center'}}>-Ms. C. Kanimozhi, Assistant Professor</p>
                <p style={{fontSize:14,color:'#EEEE',fontWeight:500,textAlign:'center'}}>-Mr. P Mohan Kumar, Project Assistant</p>
                <p style={{fontSize:14,color:'#EEEE',fontWeight:500,textAlign:'center'}}>-Dr. R. Angelin Silviya, Assistant Professor, (SS&AC)</p>
                <p style={{fontSize:14,color:'#EEEE',fontWeight:500,textAlign:'center'}}>-Dr. R. I. Minu, Professor, (Computing Technology)</p>
                <p style={{fontSize:14,color:'#EEEE',fontWeight:500,textAlign:'center'}}>-Dr. J. Selvin Paul Peter, Assistant Professor (Computing Technology)</p>

              



                <Marquee direction ="left" pauseOnClick= "True" style={{marginTop:50}}>
                    <p style={{color:'#656565',fontSize:16,fontWeight:600}}> Developed by Students of SRMIST Allan Jerrold and Tabrez Mohammed. </p>
                </Marquee>

                
                
                




            
                
            </div>


        </div>
    )
}

export default Footer;