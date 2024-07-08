import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Typography } from "@mui/material";
import { Cloud, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";

import CanvasLoader from "../Loader";
import tree from '../assets/treebg.jpg'
import srmlogo from '../assets/Srmlogo.png';
import Homecover from '../assets/counttree.jpg'
import cloud from "../assets/cloud.jpg"


const Model = ({ isMobile }) => {
  
  
  const computer = useGLTF("./Butterflymodel/scene.gltf");
  let mixer

  useEffect(()=>{
    if (computer.animations.length) {
        mixer = new THREE.AnimationMixer(computer.scene);
        computer.animations.forEach(clip => {
            const action = mixer.clipAction(clip)
            action.play();
        });
    }
  
  
  })

  useFrame((state, delta) => {
    mixer?.update(delta)
})

  return (
    <mesh>
     <hemisphereLight intensity={5} groundColor='black' />
      <spotLight
        position={[0, 0, 0]}
        angle={12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.5
        }
        position={isMobile ? [0, -5, -0.2] : [0, -4, 0]}
        rotation={[0, 0, 0]}
    
        
      />
    </mesh>
  );
};


const Hero = () => {



  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div> 
      <div className={'modelbackgroud'} style={{ width: "100%",
              position:'relative',
              backgroundSize: 'cover', 
              backgroundImage:  `url(${cloud})`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',

              }}>
      <div className={'text-container'} style={{position:'absolute',top:'10vh', zIndex:1000, left:0, right:0}}>
      <div style={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
      }}>
 <div 
      className="blurred-div"
      style={{
        padding:'10px',
        alignSelf:'center',
        display:'inline-block',flexDirection:'column',alignItems:'center',justifyContent:'center',
              }}>

                <div style={{
                  display:'flex',
                  alignItems:'center',
                  flexDirection:'column',
                  justifyContent:'center'
                }}>
                <img src={srmlogo} style={{width:42,height:42}}/>
                <Typography style={{fontSize:32,fontFamily:'Helvetica',fontWeight:800,color:'#0f6efc',marginTop:10}}
            variant="h6"
            align="center"
            color="grey.700"
            sx={{
            }}>
          
          Biodiversity of IGCAR
    </Typography>  
      <p style={{fontSize:22,fontFamily:'Helvetica',fontWeight:600,color:'white',marginRight:20,marginLeft:20,textAlign:'center'}}>"Unlock the Secrets of Nature <br/>Explore IGCAR's Green Campus with a Simple Scan!" </p>

                </div>
        
      </div>
      </div>
     
      </div>  
      
    
    <Canvas style={{height:"100vh"}}
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [26, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
     
             
        />
        <Model isMobile={isMobile} />

      </Suspense>

      <Preload all />
    </Canvas>
    </div>
    
    </div>
  );
};

export default Hero;