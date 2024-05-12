import React from "react";
import { MapInteractionCSS } from 'react-map-interaction';
import Map from "./assets/Green-SRM.jpg"

const InteractiveMap=()=>{
   
    return(
        <div>
            <MapInteractionCSS>
             <img src={Map} style={{ pointerEvents: 'none' }} alt="" />
            </MapInteractionCSS>
        </div>
    )
}

export default InteractiveMap;