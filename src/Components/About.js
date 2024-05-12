import React from "react";
import Marquee from "react-fast-marquee";
import Aboutcard from "./Aboutcard";
import Peace from "./assets/Peace.png";
import Awareness from "./assets/Awareness.png";
import QR from "./assets/QRscan.png";
import Study from "./assets/Study.png";
import Tree from "./assets/3Dtree.png";
import Quotesimg from "./assets/quotes.png";
import Quotes from "./Quotes";





const About=()=>{
    return(
        <section style={{marginTop:140}} id="About" >

            


            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <p style={{fontWeight:800,fontSize:'2em',color:'#CDCDCD',textAlign:'left',marginLeft:16}}>Why Woodie?</p>
                <div style={{backgroundColor:'#ADC1B5',width:80,height:20}}></div>
            </div>
            <div style={{ width: "100%",height:400 ,
              backgroundImage: "url(/abtbg.png)",
              backgroundSize: 'cover', 
              position:'relative',
              top:0,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              

              }}>

            
             <Marquee  style={{width:'100%',display:'flex',justifyContent:'space-evenly'}}>
                <Aboutcard title='Awareness' description='Creativing Awareness on the enriched greeneries in our Campus' image={Tree}/>
                <Aboutcard title='Scan QR' description='Scan the QR on the tree and know more details about your beloved tree'image={QR}/>
                <Aboutcard title='Knowledge' description='Study the Trees and its uses while passing by 'image={Study}/>
                <Aboutcard title='Digitalising' description='Woodie provides you the total number of the floral species around you' image={Awareness}/>
                <Aboutcard title='Peace of mind' description='If you are a nature admirer then woodie is your peace of mind'image={Peace}/>
                <Aboutcard title='Awareness' description='Creativing Awareness on the enriched greeneries in our Campus' image={Tree}/>
                
            </Marquee>

            </div>

            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <p style={{fontWeight:800,fontSize:'2em',color:'#CDCDCD',textAlign:'left',marginLeft:16}}>Our Students says</p>
                <div style={{backgroundColor:'#ADC1B5',width:80,height:20}}></div>
            </div>
            <Quotes/>
        </section>
    )
}
export default About;