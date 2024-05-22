import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Typography } from "@mui/material";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from 'three'

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from "@react-three/fiber";

import CanvasLoader from "../Loader";
import tree from '../assets/treebg.jpg'
import srmlogo from '../assets/Srmlogo.png';
import Homecover from '../assets/counttree.jpg'

const Computers = ({ isMobile }) => {
  
  
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
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-80, 100, 50]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={0.2} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 4 : 6
        }
        position={isMobile ? [0, -5, -0.2] : [0, -5, -0.3]}
        rotation={[0, 0, -0.2]}
        
      />
    </mesh>
  );
};


const Butterfly = () => {



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
      <div className={'modelbackgroud'} style={{ width: "100%",height:460 ,
              backgroundImage:  `url(${Homecover})`,
              position:'relative',
              backgroundSize: 'cover', 
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',

              }}>
      <div className={'text-container'} style={{position:'relative',top:80}}>
      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        
      <img src={srmlogo} style={{width:42,height:42}}/>
      <Typography style={{fontSize:24,fontFamily:'Helvetica',fontWeight:800,color:'#2525252',marginTop:10}}
            variant="h6"
            align="center"
            color="grey.700"
            sx={{
              backgroundcolor: "primary",
              backgroundImage: `linear-gradient(45deg, #1EBE5F, #02BAE8)`,
              backgroundSize: "100%",
              backgroundRepeat: "repeat",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
          
          Biodiversity of IGCAR
    </Typography>  
      <p style={{fontSize:16,fontFamily:'Helvetica',fontWeight:400,color:'#767676',marginRight:20,marginLeft:20,textAlign:'center'}}>"Unlock the Secrets of Nature <br/>Explore IGCAR's Green Campus with a Simple Scan!" </p>
      </div>
      </div>  
      
    
    <Canvas style={{height:300}}
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [26, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />

      </Suspense>

      <Preload all />
    </Canvas>
    </div>
    
    </div>
  );
};

export default Butterfly;