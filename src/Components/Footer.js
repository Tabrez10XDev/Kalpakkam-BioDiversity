import React from "react";
import Marquee from "react-fast-marquee";

const Footer=()=>{
    return(
        <div style={{backgroundColor:'#252525'}}>

            <div style={{height:800}}>
                <div style={{display:'flex ',alignItems:'center',flexDirection:'column'}}>
                <p style={{fontSize:18,color:'#656565',fontWeight:600,textAlign:'center'}}>Thank you </p>
                <p style={{fontSize:24,color:'#EEEE',fontWeight:600,textAlign:'center'}}>SAVE NATURE</p>
                </div>

                <p style={{fontSize:16,color:'#656565',fontWeight:400,textAlign:'center'}}>This project was developed under the guidance of  </p>
                <p style={{fontSize:16,color:'#EEEE',fontWeight:400,textAlign:'center'}}>Department of Computing Technology</p>
                
                <p style={{fontSize:14,color:'#EEEE',fontWeight:500,textAlign:'center'}}>-Dr. M. Pushpalatha</p>
                <p style={{fontSize:14,color:'#EEEE',fontWeight:500,textAlign:'center'}}>-Dr.R.I.Minu</p>
                <p style={{fontSize:14,color:'#EEEE',fontWeight:500,textAlign:'center'}}>-Dr. J. Selvin Paul Peter</p>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{backgroundColor:'#656565',height:1,width:'80%'}}></div>
                </div>

                <p style={{fontSize:16,color:'#EEEE',fontWeight:400,textAlign:'center'}}>Department of Data Science And Business Systems</p>
                
                <p style={{fontSize:14,color:'#EEEE',fontWeight:500,textAlign:'center'}}>-Dr. R. Rajkumar</p>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{backgroundColor:'#656565',height:1,width:'80%'}}></div>
                </div>

                <p style={{fontSize:16,color:'#EEEE',fontWeight:400,textAlign:'center'}}>Department of Agriculture</p>
                
                <p style={{fontSize:14,color:'#EEEE',fontWeight:500,textAlign:'center'}}>-Ms. Kanimozhi</p>
                <p style={{fontSize:14,color:'#EEEE',fontWeight:500,textAlign:'center'}}>-Mr. Muthamilselvan</p>
                <p style={{fontSize:14,color:'#EEEE',fontWeight:500,textAlign:'center'}}>-Ms. Ishwarya</p>

                <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{backgroundColor:'#656565',height:1,width:'80%'}}></div>
                </div>

                <Marquee direction ="left" pauseOnClick= "True" style={{marginTop:50}}>
                    <p style={{color:'#656565',fontSize:16,fontWeight:600}}> Developed by students of C-Tech- Allan Jerrold and Tabrez Mohammed. </p>
                </Marquee>

                
                
                




            
                
            </div>


        </div>
    )
}

export default Footer;