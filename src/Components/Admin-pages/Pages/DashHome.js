import React, { useState } from "react";
import Woodie from '../assets/woodie.png'
import '../Dashboard.css'
import Tree from '../assets/tree-icon.svg'
import QR from '../assets/QR.svg'
import Palm from '../assets/3Dtree.png'
import Heart from '../assets/heart.svg'
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import CountUp from 'react-countup';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TreeTable from "./TreeTable";
import { Button } from "@mui/material";
import QRgenerator from "../QRgenerator";
import { auth, db } from "../../../FirebaseConfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import Mapcard from "../Mapcard";
import UploadPlace from "../UploadPlace";
import { useNavigate } from "react-router-dom";
import mockup from "../assets/mockup.mp4"

import trees from '../assets/treecount1.svg'
import palm from '../assets/palm1.svg'
import climbers from '../assets/climbers1.svg'
import creepers from '../assets/creepers1.svg'
import flowers from '../assets/flowering-shrubs1.svg'
import foliage from '../assets/foliageshrubs1.svg'
import medicine from '../assets/medicinal-plant1.svg'
import indoorplants from '../assets/indoor-pants1.svg'
import grasses from '../assets/grasses1.svg'
import Countbtn from '../Countbtn.tsx'




const DashHome = () => {

  let navigate = useNavigate();
  const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;
  const [treeList, setTreeList] = React.useState(null)
  const [placesList, setPlacesList] = React.useState([])

  const [commentList, setCommentList] = React.useState([])
  const [nameList, setNameList] = React.useState([])
  const [topTrees, setSortable] = useState([["",""],["",""],["",""],["",""]])
  const [count, setCount] = useState({})

  async function fetchTopTrees() {
    let sortable = [];
    const docRef = doc(db, "stats", "scanned");
    getDoc(docRef).then((doc) => {
      const data = doc.data()
      for (var ele in data) {
        sortable.push([ele, data[ele]]);
      }

      sortable.sort(function (a, b) {
        return b[1] - a[1];
      });

      setSortable(sortable)
    })
  }

  async function fetchTotalCount() {
    const docRef = doc(db, "stats", "totalCount");
    getDoc(docRef).then((doc) => {
      setCount(doc.data())
    })
  }

  async function fetchPlaces() {
    let temp = []
    const querySnapshot = await getDocs(collection(db, "places"));
    querySnapshot.forEach((doc) => {
      temp.push(doc.data())
    });
    setPlacesList(temp)
  }

  async function fetchTrees() {
    let temp = []
    let nameTemp = []
    const querySnapshot = await getDocs(collection(db, "trees"));
    querySnapshot.forEach((doc) => {
      temp.push(doc.data())
      nameTemp.push(doc.data().name)
    });
    setNameList(nameTemp)
    setTreeList(temp)
  }

  async function fetchComments() {
    console.log("Started Fetching trees")
    let temp = []
    const querySnapshot = await getDocs(collection(db, "feedbacks"));
    querySnapshot.forEach((doc) => {
      temp.push(doc.data())
    });
    setCommentList(temp)
  }

  React.useEffect(() => {
    fetchComments()
    fetchTrees()
    fetchTopTrees()
    fetchPlaces()
    fetchTotalCount()
  }, [])

  const handleClick = () => {
    console.info('You clicked the Chip.');
  };


  if (isMobile) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p style={{ fontSize: 20, fontWeight: 600, color: '#65656565', textAlign: 'center', margin: 32 }}>
          Sorry, this page is only available on desktop devices and be accessible only by the department.</p></div>)
  }

  return (

    <div style={{
      width: "100%", height: '780px',
      backgroundImage: "url(/forest.jpg)",
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
    }} >

      <div className="contentContainer" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingTop: 60 }}>

        <div className="titleBox" style={{ display: 'flex', justifyContent: 'center', alignItems: 'left', flexDirection: 'column' }}>
          <div style={{ marginBottom: 50 }}>



            <p style={{ fontSize: 18, fontWeight: 400, color: '#fff', textAlign: 'left', margin: 0 }}>Welcome admin</p>
            <p style={{ fontSize: 42, fontWeight: 800, color: '#fff', textAlign: 'left', margin: 0, lineHeight: 1, marginTop: 16 }}>Have a track of <br />the Floras</p>
            <p style={{ fontSize: 14, fontWeight: 400, color: '#fff', textAlign: 'left', margin: 0, marginTop: 16 }}>As a admin you can add or edit or <br />remove the content of woodie</p>
          </div>
        </div>

        <div className="DashCards" style={{ width: 600, height: 720 }}>

          <div className="box1" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column', height: 720 }}>

            <div className="UploadBox" style={{ width: 550, height: 280, borderRadius: 32 }}>
              <div style={{
                width: "100%", height: '100%',
                backgroundImage: "url(/IMG_8092.JPG)",
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat', borderRadius: 32
              }}>

                <img src={Woodie} style={{ width: 72, height: 72, position: 'relative', top: 20, left: 20 }} />
                <div style={{ position: 'relative' }}>
                  <img src={Tree} style={{ width: 100, height: 100, position: 'absolute', top: 0, left: 140 }} />

                </div>


                <div style={{ position: 'relative', top: -52, left: 330, width: 200 }}>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'right', flexDirection: 'column' }}>
                    <p style={{ margin: 0, fontSize: 16, color: '#fff', fontWeight: 400, textAlign: 'left' }}>Total datas uploaded</p>
                    <CountUp end={treeList ? treeList.length : 0} enableScrollSpy duration={3} style={{ fontSize: 46, fontWeight: 500, fontWeight: 800, color: '#fff', margin: 0 }} />
                    <button style={{ width: 120, height: 45, fontSize: 18, fontWeight: 500, backgroundColor: '#252525', color: '#fff', borderRadius: 12, marginTop: 16 }}> Upload </button>
                    
                  </div>

                </div>

                <div style={{}}>

                <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row',marginBottom:20}}>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', width: 400 }}>
                    <Chip label="Today" variant="outlined" onClick={handleClick} style={{ borderColor: '#ffff', color: '#fff', textAlign: 'center' }} />
                    <Chip label="This week" variant="outlined" onClick={handleClick} style={{ borderColor: '#ffff', color: '#fff', textAlign: 'center' }} />
                    <Chip label="This month" variant="outlined" onClick={handleClick} style={{ borderColor: '#ffff', color: '#fff', textAlign: 'center', padding: 0 }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ margin: 0, fontWeight: 500, color: '#829D94' }}>6000</p>
                  </div>
                </div>

                </div>


              </div>

            </div>
            <div className="small-container" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'row', width: 550, height: 480 }}>

              <div className="row-1" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column', width: 550, height: 380, marginBottom: 70 }}>

                <div style={{ width: 260, height: 160, backgroundColor: '#F6C161', borderRadius: 20 }}>

                  <div className="" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 160 }}>
                    <img src={QR} style={{ width: 80, height: 80 }} />
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 120 }}>
                      <p style={{ margin: 0, fontSize: 16, fontWeight: 400, textAlign: 'center', lineHeight: 1.2 }}>
                        Generate QR <br />for uploaded datas
                      </p>
                      <QRgenerator values={nameList} />
                      {/* <button style={{width:100,height:35,fontSize:16,fontWeight:500,backgroundColor:'#252525',color:'#fff',borderRadius:8,marginTop:16}}> Generate </button> */}


                    </div>

                  </div>
                </div>
                <div style={{ width: 260, height: 160, backgroundColor: '#ABA0A4', borderRadius: 20 }}>
                  <div className="" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', height: 160 }}>

                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: 120 }}>
                      <p style={{ margin: 0, fontSize: 16, fontWeight: 400, textAlign: 'center', lineHeight: 1.2, color: '#fff' }}>
                        You have  <br />{commentList.length}<br />feedback
                      </p>
                      <button onClick={() => {
            navigate("/admin/Feedbacks") }} style={{ width: 100, height: 35, fontSize: 16, fontWeight: 500, backgroundColor: '#252525', color: '#ffff', borderRadius: 8, marginTop: 16 }}> View </button>


                    </div>
                    <img src={Heart} style={{ width: 80, height: 80 }} />

                  </div>





                </div>

              </div>

              <div className="row-2" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexDirection: 'column', width: 550, height: 380, marginBottom: 70 }}>


                <div style={{
                  width: 260, height: 340, borderRadius: 20,
                  backgroundImage: "url(/IMG_8094.JPG)",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                  backgroundRepeat: 'no-repeat',
                }} >

                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>

                    <p style={{ textAlign: 'left', color: '#fff', fontWeight: 600, fontSize: 20 }}>Most scanned <br />Floras</p>
                    <img src={Palm} style={{ width: 60, height: 60, objectFit: 'contain' }} />

                  </div>

                  <Divider style={{ backgroundColor: '#fff', borderWidth: 1 }} />
                  <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem button>
                      <ListItemText primary={topTrees[0][0] + " - " + topTrees[0][1]} style={{ color: '#fff' }} />
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                      <ListItemText primary={topTrees[1][0] + " - " + topTrees[1][1]} style={{ color: '#fff' }} />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary={topTrees[2][0] + " - " + topTrees[2][1]} style={{ color: '#fff' }} />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                      <ListItemText primary={topTrees[3][0] + " - " + topTrees[3][1]} style={{ color: '#fff' }} />
                    </ListItem>
                  </List>

                </div>



                {/* <div style={{width:260,height:160,backgroundColor:'lavender',borderRadius:20}}>

                        </div> */}

              </div>

            </div>

          </div>

        </div>

      </div>
      <div className="countings" style={{ marginTop:32,marginBottom:50}}>

           <p style={{ fontSize: 24, fontWeight: 600, color: '#656565', margin:0,marginLeft:36}}>Total Counts</p>
           <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <div className="count-admin-container" style={{display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',alignItems:'center',width:'90%'}}>
              
              <div className="upload-count-card" style={{width:280,height:140,backgroundColor:'#89B8A3',borderRadius:16,marginTop:20,display:'flex',alignItems:'center',justifyContent:'space-between'}}> 

          
                <img src={trees} style={{width:72,height:72,marginLeft:52,opacity:0.5}}/>
                <div style={{marginRight:16}}>
                  {/* <p style={{margin:0,fontSize}}>67678</p> */}
                  <CountUp end={count.Trees} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500,color:'#fff',margin:0}}/>
                  <p style={{margin:0,fontSize:16,color:'#EEEE',fontWeight:600}}>Trees</p>
                  <div style={{position:'relative',top:10,left:8}}>
                  <Countbtn title="Trees" count={count.Trees} setCount={setCount} currentCount={count}/>
                  </div>
                </div>  
               
             
             
             
              </div>

              <div className="upload-count-card" style={{width:280,height:140,backgroundColor:'#89B8A3',borderRadius:16,display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:20}}>    
                <img src={palm} style={{width:72,height:72,marginLeft:52,opacity:0.5}}/>
                <div style={{marginRight:16}}>
                  {/* <p style={{margin:0,fontSize}}>67678</p> */}
                  <CountUp end={count.Palms} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500,color:'#fff',margin:0}}/>
                  <p style={{margin:0,fontSize:16,color:'#EEEE',fontWeight:600}}>Palms</p>
                  <div style={{position:'relative',top:10,left:8}}>
                  <Countbtn title="Palms" count={count.Palms} setCount={setCount} currentCount={count}/> 
                  </div>              
                   </div>  
              </div>

              <div className="upload-count-card" style={{width:280,height:140,backgroundColor:'#89B8A3',borderRadius:16,display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:20}}>    
                <img src={climbers} style={{width:72,height:72,marginLeft:52,opacity:0.5}}/>
                <div style={{marginRight:16}}>
                  {/* <p style={{margin:0,fontSize}}>67678</p> */}
                  <CountUp end={count.Climbers} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500,color:'#fff',margin:0}}/>
                  <p style={{margin:0,fontSize:16,color:'#EEEE',fontWeight:600}}>Climbers</p>
                  <div style={{position:'relative',top:10,left:8}}>
                  <Countbtn title="Climbers" count={count.Climbers} setCount={setCount} currentCount={count}/>  
                  </div>
                </div>  
              </div>

              <div className="upload-count-card" style={{width:280,height:140,backgroundColor:'#89B8A3',borderRadius:16,display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:20}}>    
                <img src={creepers} style={{width:72,height:72,marginLeft:52,opacity:0.5}}/>
                <div style={{marginRight:16}}>
                  {/* <p style={{margin:0,fontSize}}>67678</p> */}
                  <CountUp end={count.Creepers} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500,color:'#fff',margin:0}}/>
                  <p style={{margin:0,fontSize:16,color:'#EEEE',fontWeight:600}}>Creepers</p>
                  <div style={{position:'relative',top:10,left:8}}>
                  <Countbtn title="Creepers" count={count.Creepers} setCount={setCount} currentCount={count}/>  
                  </div>
                </div>  
              </div>

              <div className="upload-count-card" style={{width:280,height:140,backgroundColor:'#89B8A3',borderRadius:16,display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:20}}>    
                <img src={flowers} style={{width:72,height:72,marginLeft:52,opacity:0.5}}/>
                <div style={{marginRight:16}}>
                  {/* <p style={{margin:0,fontSize}}>67678</p> */}
                  <CountUp end={count.Flowers} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500,color:'#fff',margin:0}}/>
                  <p style={{margin:0,fontSize:16,color:'#EEEE',fontWeight:600}}>Flowering Shrubs</p>
                  <div style={{position:'relative',top:10,left:72}}>
                  <Countbtn title="Flowers" count={count.Flowers} setCount={setCount} currentCount={count}/>  
                  </div>
                </div>  
              </div>

              <div className="upload-count-card" style={{width:280,height:140,backgroundColor:'#89B8A3',borderRadius:16,display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:20}}>    
                <img src={foliage} style={{width:72,height:72,marginLeft:52,opacity:0.5}}/>
                <div style={{marginRight:16}}>
                  {/* <p style={{margin:0,fontSize}}>67678</p> */}
                  <CountUp end={count.Foliage} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500,color:'#fff',margin:0}}/>
                  <p style={{margin:0,fontSize:16,color:'#EEEE',fontWeight:600}}>Foliage Shrubs</p>
                  <div style={{position:'relative',top:10,left:52}}>
                  <Countbtn title="Foliage" count={count.Foliage} setCount={setCount} currentCount={count}/>  
                  </div>
                </div>  
              </div>

              <div className="upload-count-card" style={{width:280,height:140,backgroundColor:'#89B8A3',borderRadius:16,display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:20}}>    
                <img src={medicine} style={{width:72,height:72,marginLeft:52,opacity:0.5}} />
                <div style={{marginRight:16}}>
                  {/* <p style={{margin:0,fontSize}}>67678</p> */}
                  <CountUp end={count.Medicinal} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500,color:'#fff',margin:0}}/>
                  <p style={{margin:0,fontSize:16,color:'#EEEE',fontWeight:600}}>Medicinal Plants</p>
                  <div style={{position:'relative',top:10,left:68}}>
                  <Countbtn title="Medicinal" count={count.Medicinal} setCount={setCount} currentCount={count}/> 
                  </div> 
                </div>  
              </div>

              <div className="upload-count-card" style={{width:280,height:140,backgroundColor:'#89B8A3',borderRadius:16,display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:20}}>    
                <img src={indoorplants} style={{width:72,height:72,marginLeft:52,opacity:0.5}}/>
                <div style={{marginRight:16}}>
                  {/* <p style={{margin:0,fontSize}}>67678</p> */}
                  <CountUp end={count.Indoor} enableScrollSpy duration={5} style={{fontSize:26,textAlign:'center',fontWeight:500,color:'#fff',margin:0}}/>
                  <p style={{margin:0,fontSize:16,color:'#EEEE',fontWeight:600}}>Indoor Plants</p>
                  <div style={{position:'relative',top:10,left:40}}>
                  <Countbtn title="Indoor" count={count.Indoor} setCount={setCount} currentCount={count}/>  
                  </div>
                </div>  
              </div>

         
              
            </div>
            </div>
           </div>

      <div style={{ backgroundColor: '#EEEE', paddingBottom: 72 }}>
        {treeList !== null  &&
          <TreeTable treeList={treeList} />
        }
      </div>

      <div className="hotspot-container" style={{ paddingLeft: 20, paddingRight: 20,height:800 }}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 32 }}>
          <p style={{ fontSize: 24, fontWeight: 600, color: '#656565', margin: 0 }}>Hotspot Datas</p>
          <div style={{width:'80%',height:1,backgroundColor:'#656565'}}/>
         
        </div>
        <div style={{ display: 'flex',alignItems:'center',justifyContent:'space-evenly',flexDirection:'row',marginTop:32}}>
        <video className='videoTag' autoPlay loop muted style={{width:500,height:500,objectFit:'contain'}}>
            <source src={mockup} type='video/mp4' />
        </video>
        <div style={{ width:500,height:500}}>

          <p style={{fontSize:28,fontWeight:600,color:'#656565',textAlign:'center',margin:0,marginTop:32}}>INTRODUCING</p>
          <p style={{fontSize:18,fontWeight:500,color:'#829D94',textAlign:'center',margin:0}}>Green Map</p>
          <div className="mockup" style={{width:500,height:300,borderRadius:20,marginTop:20}}>
            <p style={{color:'#ffff',textAlign:'center',fontSize:18,fontWeight:400,paddingLeft:30,paddingRight:30,paddingTop:32}}> Discover the Vibrant Hotspots and Green Oasis of Our University Campus</p>
            <p style={{color:'#ffff',textAlign:'center',fontSize:14,fontWeight:400,paddingLeft:30,paddingRight:30,marginTop:32}}> Immerse yourself in the vibrant pulse of our university campus as you explore its hidden gems and hotspot destinations. From the bustling student hub to serene greenery havens, there's something for everyone to enjoy</p>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:20}}>

           <UploadPlace values={nameList} setPlacesList={setPlacesList} />
           </div>
          </div>


        </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 32 }}>
          <p style={{ fontSize: 24, fontWeight: 600, color: '#656565', margin: 0 }}>Uploaded Hotspot Datas</p>
          <div style={{width:'70%',height:1,backgroundColor:'#656565'}}/>
          </div>
        <div style={{ width: "100%", display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap',marginTop:32 }}>
         


          {placesList.map((ele,index)=>{
            return(
              <Mapcard item={ele} values={nameList} setPlacesList={setPlacesList}/>
            )
          })}

        </div>
        

      </div>





    </div>


  );
}
const style = {
  width: '100%',
  maxWidth: 360,

};
export default DashHome;
