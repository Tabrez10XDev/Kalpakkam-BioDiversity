import React from "react";
import { MapInteractionCSS } from 'react-map-interaction';
import map from "./assets/map.png"
import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import Woodie from '../Components/assets/woodie-whitelined.png'
import Mapicon from '../Components/assets/mapicon.png'
import Downarrow from "../Components/assets/down-arrow.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



// Components
import ImageGrid from "../Components/image-grid"

// Styles
import { Container, Heading } from "../styles/globalStyles";


const AppStyles = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;


const Map = () => {
    let navigate = useNavigate();
    const [selectedImage, setSelectedImage] = useState(-1);

    const [scrollTop, setScrollTop] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window) {
                setScrollTop(true);
            } else {
                setScrollTop(false);
            }
        });
    }, []);

    const bottomToTop = () => {
        window.scrollTo({
            top: 760,
            behavior: "smooth",
        });
    };

    return (
        <div>
            <div style={{
                width: "100%", height: 850,
                backgroundImage: "url(/mapcover.jpg)",
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',



            }} >

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'column', paddingTop: 50 }}>

                    <img src={Woodie} style={{ width: 100, height: 100 }} />
                    <p style={{ fontSize: 20, fontWeight: 500, margin: 0, color: 'white' }}>Woodie</p>
                    <p style={{ fontSize: 14, fontWeight: 400, margin: 0, color: '#eeee' }}>Explore the Floras through map</p>

                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 200 }}>

                    <div className="mapcard" style={{ width: '80%', height: 200 }}>

                        <p style={{ fontSize: 18, fontWeight: 500, margin: 0, color: 'white', textAlign: 'center', marginTop: 32 }}>Have a Look at the<br />Greenery Map of SRM  </p>
                        <p style={{ fontSize: 14, fontWeight: 400, margin: 0, color: '#eeee', textAlign: 'center', marginTop: 16 }}>Click on the map icon to view the Green  Map of SRM University</p>
                        <div onClick={() => {
                            navigate("/Greenmap");
                        }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img src={Mapicon} style={{ width: 120, height: 120, position: 'relative', top: 0 }} />
                        </div>

                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 120 }}>
                    {scrollTop && (
                        <div onClick={bottomToTop} className="" style={{ height: 45, width: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                            <p style={{ color: "#ffff" }}>Click to Scroll</p>

                            {/* <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}> */}

                            <img src={Downarrow} style={{ alignItems: 'center', justifyContent: 'center', width: 32, height: 32 }} />

                            {/* </div> */}


                        </div>
                    )}

                </div>


            </div>
            <AppStyles>
                <Container>

                    <div style={{ display: 'flex', alignItems: 'left', justifyContent: 'center', flexDirection: 'column', marginBottom: 32 }}>
                        <p style={{ fontSize: 24, fontWeight: 600, margin: 0 }}>Explore</p>
                        <p style={{ fontSize: 16, fontWeight: 400, color: '#656565', margin: 0 }}>Here are the Hotspots of SRM</p>
                    </div>

                    <ImageGrid
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                    />
                </Container>
            </AppStyles>

        </div>
    )
}
export default Map