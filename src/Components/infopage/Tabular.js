// import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Tabcard from "./Tabcard";
import Carousel from "./Carousel";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import Banner1 from '../assets/banner1.png';
import Banner2 from '../assets/banner2.png';
import Banner3 from '../assets/banner3.png';
import Banner4 from '../assets/banner4.png';


const Tabular=()=> {
  let navigate = useNavigate();
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Tabcard imagen={Banner1}/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Tabcard imagen={Banner2} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Tabcard imagen={Banner3} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Tabcard imagen={Banner4} />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Tabcard imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      )
    }
  ];
  return (
    <div className="">
      {/* <Carousel
        cards={cards}
        height="360px"
        width="30%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      /> */}
      <div className='btnrow' style={{display:'flex',justifyContent:'center',marginTop:60,marginBottom:60}}>
                <div >
                 <Button variant="contained" onClick={()=>{
            navigate("/imageview");
          }} style={{backgroundColor:'#252525',borderRadius:60,position:'absolute',position:'fixed',bottom:20,zIndex:10,padding:32,right:10}}>
                360°</Button>
               
                </div>
                 <Button variant="contained"  style={{backgroundColor:'#89B8A3',borderRadius:16, paddingLeft:24,paddingRight:24,height:45}}>Browse more</Button>
                 </div>

                 


                 
                 
    </div>
  );
}

export default Tabular;
