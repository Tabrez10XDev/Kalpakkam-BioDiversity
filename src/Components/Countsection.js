import React from "react";
import Woodie from '../Components/assets/woodie.png'
import trees from '../Components/assets/treecount.png'
import palm from '../Components/assets/palm.svg'
import climbers from '../Components/assets/climbers.svg'
import creepers from '../Components/assets/creepers.svg'
import flowers from '../Components/assets/flowering-shrubs.svg'
import foliage from '../Components/assets/foliageshrubs.svg'
import medicine from '../Components/assets/medicinal-plant.svg'
import indoorplants from '../Components/assets/indoor-pants.svg'
import grasses from '../Components/assets/grasses.svg'
import { db } from "../FirebaseConfig";
import Countcover from "./assets/counttree.jpg"

import { useEffect, useState } from "react";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";

import CountUp from 'react-countup';
import { register } from "react-scroll/modules/mixins/scroller";



const Countsection=()=>{
  const [countState, setCountState] = useState({})

  async function fetchTotalCount() {
    const docRef = doc(db, "stats", "totalCount");
    getDoc(docRef).then((doc) => {
      setCountState(doc.data())
    })
  }




useEffect(() => {
    fetchTotalCount()
}, [])


    CountUp({
        
        enableScrollSpy: true,
        scrollSpyDelay: 1000,
      });
    return(
        <section style={{marginTop:80}} id="Stats">
            

            <p style={{textAlign:'center',justifyContent:'center',fontSize:16,fontWeight:500,fontColor:'#252525'}}> Check out the total Floral Diversity of </p>
            <p style={{textAlign:'center',justifyContent:'center',fontSize:20,fontWeight:600,fontColor:'#0C4D4D'}}> SRM University </p>

            {/* <div className={'countcontainer'} style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>



            </div> */}

            

            <div className="countbg" style={{ width: "100%",height: window.innerWidth < 450 ? 800 : 400 ,
              backgroundImage:  `url(${Countcover})`,
              backgroundSize: 'cover', 
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              alignItems:'center',
              justifyContent:'space-evenly',
              display:'flex',flexWrap:'wrap',

              }} >

                <div className={'countcard'} style={{width:140,height:160,backgroundColor:'white',borderRadius:12,alignItems:'center',marginTop:20}}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}> 
                        <img src ={trees} style={{width:80,height:80}}/>
                      <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                       <CountUp end={countState.Trees} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500}}/>
                      </div>
                      <p style={{fontSize:16,fontWeight:400,textAlign:'center',position:'relative',top:-16}}>Trees</p>
                    </div>
                 </div>

                 <div className={'countcard'} style={{width:140,height:160,backgroundColor:'white',borderRadius:12,alignItems:'center',marginTop:20}}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}> 
                        <img src ={palm} style={{width:80,height:80}}/>
                      <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                       <CountUp end={countState.Palms} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500}}/>
                      </div>
                      <p style={{fontSize:16,fontWeight:400,textAlign:'center',position:'relative',top:-16}}>Palms</p>
                    </div>
                 </div>

                 <div className={'countcard'} style={{width:140,height:160,backgroundColor:'white',borderRadius:12,alignItems:'center',marginTop:20}}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}> 
                        <img src ={climbers} style={{width:80,height:80}}/>
                      <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                       <CountUp end={countState.Climbers} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500}}/>
                      </div>
                      <p style={{fontSize:16,fontWeight:400,textAlign:'center',position:'relative',top:-16}}>Climbers</p>
                    </div>
                 </div>

                 <div className={'countcard'} style={{width:140,height:160,backgroundColor:'white',borderRadius:12,alignItems:'center',marginTop:20}}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}> 
                        <img src ={creepers} style={{width:80,height:80}}/>
                      <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                       <CountUp end={countState.Creepers} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500}}/>
                      </div>
                      <p style={{fontSize:16,fontWeight:400,textAlign:'center',position:'relative',top:-16}}>Creepers</p>
                    </div>
                 </div>

                 <div className={'countcard'} style={{width:140,height:160,backgroundColor:'white',borderRadius:12,alignItems:'center',marginTop:20}}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}> 
                        <img src ={flowers} style={{width:80,height:80}}/>
                      <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                       <CountUp end={countState['Flowers']} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500}}/>
                      </div>
                      <p style={{fontSize:16,fontWeight:400,textAlign:'center',position:'relative',top:-16}}>Flowering Shrubs</p>
                    </div>
                 </div>

                 <div className={'countcard'} style={{width:140,height:160,backgroundColor:'white',borderRadius:12,alignItems:'center',marginTop:20}}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}> 
                        <img src ={foliage} style={{width:80,height:80}}/>
                      <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                       <CountUp end={countState['Foliage']} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500}}/>
                      </div>
                      <p style={{fontSize:16,fontWeight:400,textAlign:'center',position:'relative',top:-16}}>Foliage Shrubs</p>
                    </div>
                 </div>

                 <div className={'countcard'} style={{width:140,height:160,backgroundColor:'white',borderRadius:12,alignItems:'center',marginTop:20}}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}> 
                        <img src ={medicine} style={{width:80,height:80}}/>
                      <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                       <CountUp end={countState['Medicinal']} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500}}/>
                      </div>
                      <p style={{fontSize:16,fontWeight:400,textAlign:'center',position:'relative',top:-16}}>Medicinal Plants</p>
                    </div>
                 </div>

                 <div className={'countcard'} style={{width:140,height:160,backgroundColor:'white',borderRadius:12,alignItems:'center',marginTop:20}}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}> 
                        <img src ={indoorplants} style={{width:80,height:80}}/>
                      <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                       <CountUp end={countState['Indoor']} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500}}/>
                      </div>
                      <p style={{fontSize:16,fontWeight:400,textAlign:'center',position:'relative',top:-16}}>Indoor Plants</p>
                    </div>
                 </div>

                 {/* <div className={'countcard'} style={{width:140,height:160,backgroundColor:'white',borderRadius:12,alignItems:'center',marginTop:20}}>
                    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}> 
                        <img src ={grasses} style={{width:80,height:80}}/>
                      <div style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
                       <CountUp end={2300} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500}}/>
                      </div>
                      <p style={{fontSize:16,fontWeight:400,textAlign:'center',position:'relative',top:-16}}>Grasses</p>
                    </div>
                 </div> */}

                
                 


                 

            </div>


        </section>
    )
}



export default Countsection;